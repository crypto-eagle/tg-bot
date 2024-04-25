import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
import { BlackBox } from "../../../../../shared/ui/BlackBox";

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
  const colors = useColors();

  return (
    <BlackBox>
      <Grid
        fontSize="sm"
        textAlign="center"
        autoRows="50px"
        templateColumns="40px 84px 92px 83px"
      >
        <GridItem lineHeight="3.2" border={`1px solid ${colors.turquoise}`}>
          №
        </GridItem>
        <GridItem border={`1px solid ${colors.turquoise}`}>
          Turnover structure
        </GridItem>
        <GridItem border={`1px solid ${colors.turquoise}`}>
          Number of partners
        </GridItem>
        <GridItem fontSize="md" border={`1px solid ${colors.turquoise}`}>
          Interest rate
        </GridItem>
        {data.map((el) => (
          <>
            <GridItem lineHeight="3.2" border={`1px solid ${colors.turquoise}`}>
              {el.number}
            </GridItem>
            <GridItem lineHeight="3.2" border={`1px solid ${colors.turquoise}`}>
              {el.turnover_structure}
            </GridItem>
            <GridItem lineHeight="3.2" border={`1px solid ${colors.turquoise}`}>
              {el.number_of_partners}
            </GridItem>
            <GridItem lineHeight="3.2" border={`1px solid ${colors.turquoise}`}>
              {el.interest_rate}
            </GridItem>
          </>
        ))}
      </Grid>
    </BlackBox>
  );
}
