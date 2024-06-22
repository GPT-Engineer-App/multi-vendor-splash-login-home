import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import HomeFragment from './HomeFragment';
import CartFragment from './CartFragment';
import SearchFragment from './SearchFragment';

const Home = () => {
  return (
    <Box p={4}>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Cart</Tab>
          <Tab>Search</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HomeFragment />
          </TabPanel>
          <TabPanel>
            <CartFragment />
          </TabPanel>
          <TabPanel>
            <SearchFragment />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;