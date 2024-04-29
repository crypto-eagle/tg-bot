import React from "react";
import { Button, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";

const data = [
  {
    number: 1,
    turnover_structure: 5,
    number_of_partners: 123,
    interest_rate: "30%",
  },
  {
    number: 2,
    turnover_structure: 5,
    number_of_partners: 123,
    interest_rate: "30%",
  },
  {
    number: 3,
    turnover_structure: 5,
    number_of_partners: 123,
    interest_rate: "30%",
  },
];

export function Table() {
  const { t } = useTranslation();
  const colors = useColors();

  return (
    <BlackBox>
      <Grid
        fontSize="sm"
        textAlign="center"
        autoRows="50px"
        templateColumns="40px minmax(84px, 1fr) minmax(92px, 1fr) minmax(83px, 1fr)"
      >
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          border={`1px solid ${colors.turquoise}`}
        >
          <Center>№</Center>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          border={`1px solid ${colors.turquoise}`}
          justifyContent="center"
        >
          <Center>{t("profile.table.turnoverStructure")}</Center>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          border={`1px solid ${colors.turquoise}`}
          justifyContent="center"
        >
          <Center>{t("profile.table.numberOfPartners")}</Center>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          fontSize="md"
          justifyContent="center"
          border={`1px solid ${colors.turquoise}`}
        >
          <Center>{t("profile.table.interestRate")}</Center>
        </GridItem>
        {data.map((el) => (
          <>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              border={`1px solid ${colors.turquoise}`}
            >
              <Center>{el.number}</Center>
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              border={`1px solid ${colors.turquoise}`}
            >
              <Center>{el.turnover_structure}</Center>
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              border={`1px solid ${colors.turquoise}`}
            >
              <Center>{el.number_of_partners}</Center>
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              border={`1px solid ${colors.turquoise}`}
            >
              <Center>{el.interest_rate}</Center>
            </GridItem>
          </>
        ))}
      </Grid>
      <Flex justifyContent="center" mt="30px">
        <Button
          color="white"
          colorScheme="blue"
          py="20px"
          px="30px"
          borderRadius="3xl"
        >
          {t("profile.table.more")}
        </Button>
      </Flex>
    </BlackBox>
  );
}
