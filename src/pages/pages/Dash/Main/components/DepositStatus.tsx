import React, { useContext, useEffect, useState } from "react";

import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { LightBox } from "../../../../../shared/ui/LightBox";
import { TonValue } from "../../controls/TonValue";

type depositStatus = "active" | "inactive" | "workedOut";

interface DepositStatusState {
  status: depositStatus;
  claimableRewards: number;
  deposit: number;
  percent: number;
}

export function DepositStatus() {
  const { t } = useTranslation();
  const colors = useColors();
  const { profile } = useContext(SmartContractContext);

  const [state, setState] = useState<DepositStatusState>();
  useEffect(() => {
    let status: depositStatus;

    if (!profile) {
      status = "inactive";
    } else if (profile.canDeposit) {
      status = "workedOut";
    } else {
      status = "active";
    }

    setState({
      status,
      claimableRewards: profile?.current?.earnedAmount || 0,
      deposit: profile?.current?.deposit || 0,
      percent: profile?.current?.earnedPercent || 0,
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
        <Text>{t("dash.depositStatus.title")}:</Text>
        <Box
          bg={
            state.status === "active"
              ? colors.darkgreen
              : state.status === "inactive"
                ? colors.cyan
                : colors.gray
          }
          py="3px"
          px="20px"
          borderRadius="3xl"
        >
          {t(`dash.depositStatus.status.${state.status}`)}
        </Box>
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
        <Text>
          {state.percent} {t("dash.depositStatus.percent")} 310 %
        </Text>
        <Progress value={state.percent} borderRadius="xl" size="sm" mt="10px" />
      </Box>
    </LightBox>
  );
}
