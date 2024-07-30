import React from "react";
import { Flex } from "@chakra-ui/react";
import { Consultation } from "./components/Consultation";
import { ProfileStatistics } from "./components/ProfileStatistics";
import { ProfileStatus } from "./components/ProfileStatus";

export function Profile() {
    return (
        <Flex w="100%" gap="3" mt={3} mb={3} flexDirection="column">
            <ProfileStatistics />
            <ProfileStatus />
            <Consultation />
        </Flex>
    );
}
