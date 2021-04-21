import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsBar () {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py={["6", "8"]}
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} size={20} />
      <Icon as={RiUserAddLine} size={20} />
    </HStack>
  );
}