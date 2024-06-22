import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaHome, FaShoppingCart, FaSearch } from 'react-icons/fa';
import HomeFragment from './HomeFragment';
import CartFragment from './CartFragment';
import SearchFragment from './SearchFragment';
import { useState } from 'react';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const renderContent = () => {
    switch (selectedTab) {
      case 'home':
        return <HomeFragment />;
      case 'cart':
        return <CartFragment />;
      case 'search':
        return <SearchFragment />;
      default:
        return <HomeFragment />;
    }
  };

  return (
    <Flex direction="column" height="100vh">
      <Box flex="1" p={4}>
        {renderContent()}
      </Box>
      <Flex justify="space-around" p={4} bg="gray.100">
        <IconButton
          icon={<FaHome />}
          aria-label="Home"
          onClick={() => setSelectedTab('home')}
          isActive={selectedTab === 'home'}
        />
        <IconButton
          icon={<FaShoppingCart />}
          aria-label="Cart"
          onClick={() => setSelectedTab('cart')}
          isActive={selectedTab === 'cart'}
        />
        <IconButton
          icon={<FaSearch />}
          aria-label="Search"
          onClick={() => setSelectedTab('search')}
          isActive={selectedTab === 'search')}
        />
      </Flex>
    </Flex>
  );
};

export default Home;