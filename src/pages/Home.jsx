import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import HomeFragment from './HomeFragment';
import CartFragment from './CartFragment';
import SearchFragment from './SearchFragment';

const Home = () => {
  return (
    <div className="p-4">
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
    </div>
  );
};

export default Home;