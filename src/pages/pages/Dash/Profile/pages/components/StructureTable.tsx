import React, {useMemo} from "react";
import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr, useBreakpointValue
} from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";

const tableData = [
  {
    number: 1,
    turnover_structure: 5,
    number_of_partners: 123,
    interest_rate: "30%",
  },
  {
    number: 2,
    turnover_structure: 11,
    number_of_partners: 123,
    interest_rate: "10%",
  },
  {
    number: 3,
    turnover_structure: 24,
    number_of_partners: 123,
    interest_rate: "10%",
  },
  {
    number: 4,
    turnover_structure: 28,
    number_of_partners: 123,
    interest_rate: "10%",
  },
  {
    number: 5,
    turnover_structure: 33,
    number_of_partners: 123,
    interest_rate: "8%",
  },
  {
    number: 6,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "8%",
  }
];

export function TableCell(props: { children: React.ReactNode }) {
  const colors = useColors();
  const cellPadding = useBreakpointValue({ base: 2, md: 4 });
  const {children} = props;

  return (
    <Td p={cellPadding} fontSize="md" textAlign="center" border={`1px solid ${colors.turquoise}`}>
      <Box whiteSpace="break-spaces">{children}</Box>
    </Td>
  );
}

export function StructureTable() {
  const { t } = useTranslation();
  const colors = useColors();
  const data = useMemo(() => tableData, []);
  const isTableResponsive = useBreakpointValue({ base: true, md: false });

    return (
    <BlackBox>
      <TableContainer>
        <Table size={isTableResponsive ? "sm" : "md"} variant="unstyled">
          <Thead>
            <Tr>
              <TableCell>#</TableCell>
              <TableCell>{t("profile.table.turnoverStructure")}</TableCell>
              <TableCell>{t("profile.table.numberOfPartners")}</TableCell>
              <TableCell>{t("profile.table.interestRate")}</TableCell>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el) => (
              <Tr key={el.number}>
                <TableCell>{el.number}</TableCell>
                <TableCell>{el.turnover_structure}</TableCell>
                <TableCell>{el.number_of_partners}</TableCell>
                <TableCell>{el.interest_rate}</TableCell>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="center" mt="30px">
         <Button
           color="white"
           w="40%"
           bg={colors.blue}
           borderRadius="3xl"
        >
          {t("profile.table.more")}
        </Button>
      </Flex>
    </BlackBox>
  );
}
