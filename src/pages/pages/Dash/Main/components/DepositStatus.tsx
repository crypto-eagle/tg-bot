import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { LightBox } from "../../../../../shared/ui/LightBox";
import { TonValue } from "../../controls/TonValue";
import { DepositStatusBadge } from "../../controls/DepositStatusBadge";

interface DepositStatusState {
  claimableRewards: number;
  deposit: number;
  percent: number;
  canDeposit?: boolean | null;
}

export function DepositStatus() {
  const { t } = useTranslation();
  const { profile } = useContext(SmartContractContext);

  const [state, setState] = useState<DepositStatusState>();
  useEffect(() => {
    setState({
      claimableRewards: profile?.current?.earnedAmount || 0,
      deposit: profile?.current?.deposit || 0,
      percent: (profile?.current?.earnedPercent || 0) * 3.1,
      canDeposit: profile?.canDeposit
    });
  }, [profile]);

  if (!state || profile === undefined) {
    return (
      <LightBox>
        <Loader rows={5} />
      </LightBox>
    );
  }

  return (
    <LightBox>
      <Flex justifyContent="space-between" alignItems="center" gap="10px">
        <Text className="block-title">{t("dash.depositStatus.title")}:</Text>
        <DepositStatusBadge canDeposit={state.canDeposit} />
      </Flex>

      <Flex my="20px" justifyContent="space-between" gap="20px">
        <TonValue
          title="dash.depositStatus.earned"
          value={state.claimableRewards || null}
        />
        <TonValue
          title="dash.depositStatus.invested"
          value={state?.deposit || null}
        />
      </Flex>

      <Box>
        <Text className="block-title">
          {state.percent} {t("dash.depositStatus.percent")} 310 %
        </Text>
        <Progress value={state.percent} borderRadius="xl" size="sm" mt="10px" />
      </Box>
    </LightBox>
  );
}
