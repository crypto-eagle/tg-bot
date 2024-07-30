import React, {useMemo, useState} from "react";
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
import { BlackBox } from "../../../../../../../shared/ui/BlackBox";

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
    interest_rate: "10%",
  },
  {
    number: 6,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "8%",
  },
  {
    number: 7,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "8%",
  },
  {
    number: 8,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "8%",
  },
  {
    number: 9,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "8%",
  },
  {
    number: 10,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "8%",
  },
  {
    number: 11,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "5%",
  },
  {
    number: 12,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "5%",
  },
  {
    number: 13,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "5%",
  },
  {
    number: 14,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "5%",
  },
  {
    number: 15,
    turnover_structure: 38,
    number_of_partners: 123,
    interest_rate: "5%",
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
  const [showAll, setShowAll] = useState(false);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };
  const visibleRows = showAll ? data.length : 6;

  return (
    <BlackBox>
      <TableContainer>
        <Table size={isTableResponsive ? "sm" : "md"} variant="unstyled">
          <Thead>
            <Tr>
              <TableCell>#</TableCell>
              { /* <TableCell>{t("profile.table.turnoverStructure")}</TableCell> */ }
              { /* <TableCell>{t("profile.table.numberOfPartners")}</TableCell> */ }
              <TableCell>{t("profile.table.interestRate")}</TableCell>
            </Tr>
          </Thead>
          <Tbody>
            {data.slice(0, visibleRows).map((el) => (
              <Tr key={el.number}>
                <TableCell>{el.number} {t("profile.table.generation")}</TableCell>
                { /* <TableCell>{el.turnover_structure}</TableCell> */ }
                { /* <TableCell>{el.number_of_partners}</TableCell> */ }
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
           onClick={handleToggleShow}
        >
           {showAll ? t("profile.table.less") : t("profile.table.more")}
        </Button>
      </Flex>
    </BlackBox>
  );
}
