const getCountryISO3 = require("country-iso-2-to-3").default;
const _ = require("lodash");

// Models import
const Product = require("../DataBase/Models/Product.js");
const ProductStat = require("../DataBase/Models/ProductStat.js");
const User = require("../DataBase/Models/UserModel.js");
const Transaction = require("../DataBase/Models/Transaction.js");

// Get Products
const getProducts = async (_, res) => {
  try {
    const products = await Product.find();
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });

        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Transactions
const getTransactions = async (req, res) => {
  try {
    // sort - { "field": "userId", sort: "desc" }
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // sanitize search
    var safeSearch = _.escapeRegExp(search);

    // Formatted sort - { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort == "asc" ? 1 : -1,
      };

      return sortFormatted;
    };

    // sort formatted
    const sortFormattedValue = Boolean(sort) ? generateSort() : {};

    // get transactions
    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(safeSearch, "i") } },
        { userId: { $regex: new RegExp(safeSearch, "i") } },
      ],
    })
      .sort(sortFormattedValue)
      .skip(page * pageSize)
      .limit(pageSize);

    // total transactions
    const total = await Transaction.countDocuments({
      name: { $regex: safeSearch, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Geography
const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    // Convert country ISO 2 -> ISO 3
    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryISO3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }

      acc[countryISO3]++;

      return acc;
    }, {});

    // format countries to match geography
    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
};
