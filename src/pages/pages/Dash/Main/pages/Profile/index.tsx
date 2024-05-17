import React, { useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { StatView } from "../../../controls/StatView";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";

export function ProfileStatus() {
  const { t } = useTranslation();

  const { profile } = useContext(SmartContractContext);

  if (!profile) {
    return (
      <BlackBox>
        <Loader rows={4} />
      </BlackBox>
    );
  }

  const { days, hours, mins } = profile.current.timePast;

  return (
    <BlackBox>
      <Text mb={4}>{t("profile.title")}</Text>

      <Flex gap={4} flexDir="column">
        <StatView title="profile.youInProject" rowView>
          <Text fontSize="lg">
            {`${days} ${t("profile.time.day")} ${hours} ${t("profile.time.hours")} ${mins} ${t("profile.time.minutes")}`}
          </Text>
        </StatView>

        <StatView title="profile.status-title" rowView>
          <Text fontSize="lg">{t("profile.status.whale")}??????</Text>
        </StatView>

        <StatView title="profile.your-upline" rowView>
          <Text fontSize="lg">{profile.upLine.toString()}</Text>
        </StatView>

        <StatView title="profile.your-ref-link" rowView>
          <Text fontSize="lg"> ???? </Text>
        </StatView>
      </Flex>
    </BlackBox>
    // <>
    //   <UserInfo />
    //   <UserInfoSecondary />
    // </>
  );
}
