import React from "react";
import { useColors } from "@hooks/useColors";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BlackBox } from "../../../../../../../shared/ui/BlackBox";
import { UserIcon } from "../icons/UserIcon";
import { CopyToClipboardField } from "./CopyToClipboardField";

export interface ConsultationProps {
  userName: string;

  referralLink: string;
}

export function Consultation(props: ConsultationProps) {
  const { t } = useTranslation();
  const { userName, referralLink } = props;
  const colors = useColors();

  return (
    <BlackBox>
      <Flex flexDirection="column" gap="20px">

        <Text color={colors.green}>{t("profile.your-upline")}:</Text>
        <Flex justifyContent="space-between" alignItems="center" gap="10px">
          <Flex alignItems="center" gap="10px" w="fit-content">
            <UserIcon width="24px" height="24px" />
            <Text fontSize="lg" color="white">
              {userName}
            </Text>
          </Flex>
          <Button
            color="white"
            bg={colors.darkgreen}
            py="2px"
            px="10px"
            borderRadius="3xl"
          >
            {t("dash.buttons.consultation")}
          </Button>
        </Flex>

        <Text color={colors.green}>{t("profile.ref-link")}:</Text>
        <CopyToClipboardField value={referralLink} />
      </Flex>
    </BlackBox>
  );
}
