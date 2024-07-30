import React from "react";
import { Flex } from "@chakra-ui/react";
import { StructureTable } from "./components/StructureTable";
import { StructureSummary } from "./components/StructureSummary";

export function Referral() {
    return (
        <Flex w="100%" gap="3" mt={3} mb={3} flexDirection="column">
            <StructureSummary/>
            <StructureTable/>
        </Flex>
    );
}
