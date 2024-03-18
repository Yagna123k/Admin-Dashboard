const express = require("express")

const router = express.Router()

const {getUser, getAllUsers, createUser, login, getProfile, verifyToken} = require("../Controllers/UserController")


router.get("/:id", getUser) //Verified
router.get("/", getAllUsers) //Verified
router.post("/", createUser) //Verified
router.post("/login", login) //Verified
router.get("/profile", verifyToken, getProfile)

module.exports = router