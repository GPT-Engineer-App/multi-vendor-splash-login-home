import React, { useState } from 'react';
import { Box, Flex, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link, Spacer, Avatar, Badge, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaHome, FaShoppingCart, FaSearch, FaBars, FaHistory, FaUser, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import HomeFragment from './HomeFragment';
import CartFragment from './CartFragment';
import SearchFragment from './SearchFragment';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

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
        <Flex align="center">
          <IconButton icon={<FaHome />} aria-label="Home" onClick={() => setSelectedTab('home')} isActive={selectedTab === 'home'} />
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" onClick={() => setSelectedTab('cart')} isActive={selectedTab === 'cart'} />
          <IconButton icon={<FaSearch />} aria-label="Search" onClick={() => setSelectedTab('search')} isActive={selectedTab === 'search'} />
          <Box ml={4}>
            <Badge colorScheme="red" borderRadius="full" px={2} py={1} fontSize="0.8em" position="relative" top="-10px" right="-10px">3</Badge>
            <IconButton icon={<FaBell />} aria-label="Notifications" />
          </Box>
          <Menu>
            <MenuButton as={Avatar} ml={4} cursor="pointer" />
            <MenuList>
              <MenuItem onClick={() => navigate('/my-account')}>Profile</MenuItem>
              <MenuItem onClick={() => navigate('/logout')}>Logout</MenuItem>
            </MenuList>
          </Menu>
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