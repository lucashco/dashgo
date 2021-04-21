import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { Logo } from './Logo';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { NotificationsBar } from './NotificationsNav';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });


  return(
    <Flex 
      as="header"
      w="100%"
      h="20"
      maxW="1480px"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />} 
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      { isWideVersion && <SearchBox />}
    
      <Flex align="center" ml="auto" >
        <NotificationsBar />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
    
  );
}