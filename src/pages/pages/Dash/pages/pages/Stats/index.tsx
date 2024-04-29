import { useTranslation } from "react-i18next";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useColors } from "@hooks/useColors";
import { useNavigate } from "react-router-dom";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";
import { TonValue } from "../../../controls/TonValue";

export function Stats() {
  const { t } = useTranslation();
  const colors = useColors();
  const navigate = useNavigate();

  const { profile } = useContext(SmartContractContext);

  if (profile === undefined) {
    return (
      <BlackBox>
        <Loader rows={3} />
      </BlackBox>
    );
  }

  return (
    <>
      <BlackBox>
        <Text mb={4}>{t("dash.status.title")}</Text>

        <TonValue
          rowView
          title="dash.status.totalDeposit"
          value={profile?.totalDeposit || null}
        />

        <TonValue
          rowView
          title="dash.status.totalWithdraw"
          value={profile?.totalClaimedRewards || null}
        />

        <TonValue
          rowView
          title="dash.status.totalReferralBonus"
          value={profile?.totalReferralBonus || null}
        />
      </BlackBox>
      <Flex justifyContent="space-evenly" w="100%" p={3}>
        {profile && (
          <Button
            color="white"
            w="40%"
            bg={colors.blue}
            borderRadius="3xl"
            onClick={() => navigate("withdraw")}
          >
            {t("dash.buttons.withdraw")}
          </Button>
        )}

        {(!profile || profile?.depositIsAvailable) && (
          <Button
            color="white"
            w="40%"
            bg={colors.darkgreen}
            borderRadius="3xl"
            onClick={() => navigate("deposit")}
          >
            {t("dash.buttons.reinvest")}
          </Button>
        )}
      </Flex>
    </>
  );
}
