import React, { useContext } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { useColors } from "@hooks/useColors";
import { StatView } from "../../../controls/StatView";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";
import { Consultation } from "../../../Profile/pages/components/Consultation";
import { UserIcon } from "./icons/UserIcon";

export function ProfileStatus() {
  const { t } = useTranslation();
  const colors = useColors();

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
    <>
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

      <BlackBox>
        <Flex gap={4} flexDir="column">
          <StatView title="profile.your-upline">
            <Flex justifyContent="space-between" alignItems="center" gap="10px">
              <Flex alignItems="center" gap="10px" w="fit-content">
                <UserIcon width="24px" height="24px" />
                <Text fontSize="lg" color="white">
                  {profile.upLine.toString()}
                </Text>
              </Flex>

              <Button
                color="white"
                bg={colors.darkgreen}
                py="2px"
                px="10px"
                borderRadius="3xl"
              >
                Consultation
              </Button>
            </Flex>
          </StatView>
        </Flex>
      </BlackBox>
      <Consultation />
    </>
    // <>
    //   <UserInfo />
    //   <UserInfoSecondary />
    // </>
  );
}
