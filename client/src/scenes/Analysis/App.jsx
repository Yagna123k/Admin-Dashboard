import React from 'react';
import './App.css';
import './Layout.css'
import styled, { createGlobalStyle } from 'styled-components';
import TopDeals from './TopDeals.jsx';
import TotalVisit from './TotalVisit.jsx';
import GridSection from './GridSection.jsx';
import LeadsBySource from './LeadsBySource.jsx';
import RevenueAnalysis from './RevenueAnalysis.jsx';
import ProfitEarned from './ProfitEarned.jsx';
import { Box } from '@mui/material';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
`;

const Analysis = () => {
  return (
    <Box m="1.5rem 2.5rem" >
      <GlobalStyle />
      <Container>
        <Content className='totalPage'>
          <div className='firstcolumn'>
            <TopDeals />
            <TotalVisit />
          </div>
          <div className='secondcolumn'>
            <GridSection />
            <RevenueAnalysis />
          </div>
          <div className='thirdcolumn'>
            <LeadsBySource />
            <ProfitEarned />
          </div>
        </Content>
      </Container>
    </Box>
  );
};

export default Analysis;

