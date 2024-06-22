import React, { useState } from 'react';
import { Box, Flex, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link, Spacer } from '@chakra-ui/react';
import { FaHome, FaShoppingCart, FaSearch, FaBars, FaHistory, FaUser, FaSignOutAlt } from 'react-icons/fa';
import HomeFragment from './HomeFragment';
import CartFragment from './CartFragment';
import SearchFragment from './SearchFragment';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Flex direction="column" height="100vh">
      <Flex as="header" p={4} bg="gray.100" align="center" justify="space-between">
        <IconButton icon={<FaBars />} aria-label="Menu" onClick={toggleDrawer} />
        <Box flex="1" textAlign="center" fontWeight="bold">App Title</Box>
        <Flex>
          <IconButton icon={<FaHome />} aria-label="Home" onClick={() => setSelectedTab('home')} isActive={selectedTab === 'home'} />
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" onClick={() => setSelectedTab('cart')} isActive={selectedTab === 'cart'} />
          <IconButton icon={<FaSearch />} aria-label="Search" onClick={() => setSelectedTab('search')} isActive={selectedTab === 'search'} />
        </Flex>
      </Flex>
      <Box flex="1" p={4}>
        {renderContent()}
      </Box>
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={toggleDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start">
                <Link href="/order-history" display="flex" alignItems="center">
                  <FaHistory style={{ marginRight: '8px' }} /> Order History
                </Link>
                <Link href="/my-account" display="flex" alignItems="center">
                  <FaUser style={{ marginRight: '8px' }} /> My Account
                </Link>
                <Spacer />
                <Link href="/logout" display="flex" alignItems="center" position="absolute" bottom="20px">
                  <FaSignOutAlt style={{ marginRight: '8px' }} /> Logout
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Home;