import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { useColors } from "@hooks/useColors";
import { useNavigate } from "react-router-dom";

export function DepositButton() {
  const colors = useColors();
  const navigate = useNavigate();

  return (
    <IconButton
      aria-label="Deposit"
      h={14}
      w={14}
      border={3}
      borderStyle="solid"
      borderColor={colors.turquoise}
      size="lg"
      isRound
      icon={<AddIcon />}
      onClick={() => navigate("deposit")}
    />
  );
}
