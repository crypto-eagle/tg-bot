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
  deposit?: number;
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
    } else if (profile.depositIsAvailable) {
      status = "workedOut";
    } else {
      status = "active";
    }

    let percent: number;
    if (!profile) {
      percent = 0;
    } else {
      const earned =
        profile.currentClaimableRewards + profile.currentClaimedRewards;
      const percent100 = profile.currentDeposit * 3.1;

      percent = (100 * earned) / percent100;
      percent = Math.ceil(percent);

      if (percent > 100) {
        percent = 100;
      }
    }

    setState({
      status,
      claimableRewards: profile?.currentClaimableRewards || 0,
      deposit: profile?.currentDeposit,
      percent,
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
