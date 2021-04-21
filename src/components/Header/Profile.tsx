import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Lucas Henrique</Text>
            <Text color="gray.300" fontSize="small">
              lucas.hco@hotmail.com
            </Text>
          </Box>
        )}

      <Avatar size="md" name="Lucas Castilho" />
    </Flex>
  );
}