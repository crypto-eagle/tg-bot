import React, { useContext } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex } from "@chakra-ui/react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { TonValue } from "../controls/TonValue";
import { DepositButton } from "../controls/DepositButton";

export function Header() {
  const { t } = useTranslation();
  const colors = useColors();
  const { profile, error } = useContext(SmartContractContext);

  if (profile === undefined) {
    return <Loader rows={1} />;
  }

  return (
      <>
        {error && (
            <Alert status="error"
                   variant="subtle"
                   flexDirection="column"
                   alignItems="center"
                   justifyContent="center"
                   textAlign="center"
                   bgColor={colors.pink}>
              <AlertIcon />
              <AlertTitle>{t("errors.incorrectTonNet")}</AlertTitle>
              <AlertDescription>{t("errors.incorrectTonNetMsg")}</AlertDescription>
            </Alert>
        )}
        <Flex
            fontWeight="bold"
            w="100%"
            py={3}
            px={6}
            justifyContent="space-between"
            alignItems="center"
        >
          <TonValue
              title="dash.header.title"
              value={profile?.current?.deposit || null}
              headerStyle={{fontSize: "20px"}}
              valueStyle={{fontSize: ["30px", "36px"]}}
          />

          <div>{(!profile || profile?.canDeposit) && <DepositButton />}</div>
        </Flex>
      </>
  );
}
