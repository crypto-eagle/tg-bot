import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { LightBox } from "../../../../../shared/ui/LightBox";
import { TimeIcon } from "./icons/TimeIcon";

export function ProfileStatus() {
  const { t } = useTranslation();
  const colors = useColors();

  const { profile } = useContext(SmartContractContext);

  if (!profile) {
    return (
      <LightBox>
        <Loader rows={4} />
      </LightBox>
    );
  }

  const { days, hours, mins } = profile.current.timePast;

  return (
    <LightBox>
      <Flex gap="15px" flexDirection="column">
        <Flex alignItems="center" gap="10px">
          <TimeIcon width="32px" height="32px" />
          <Box>
            <Text fontSize="sm" color={colors.green}>
              {t("profile.userInfo.youInProject")}:
            </Text>
            <Text fontSize="lg">
              {`${days} ${t("profile.userInfo.time.day")} ${hours} ${t("profile.userInfo.time.hours")} ${mins} ${t("profile.userInfo.time.minutes")}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </LightBox>
    // <>
    //   <UserInfo />
    //   <UserInfoSecondary />
    // </>
  );
}
