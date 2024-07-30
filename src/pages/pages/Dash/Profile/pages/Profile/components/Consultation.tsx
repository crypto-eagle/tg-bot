import React, {useContext, useEffect, useState} from "react";
import { useColors } from "@hooks/useColors";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { BlackBox } from "../../../../../../../shared/ui/BlackBox";
import { UserIcon } from "../../../../../../../shared/icons/UserIcon";
import { CopyToClipboardField } from "../controls/CopyToClipboardField";

export interface ConsultationState {
  uplineAddress: string;

  referralLink: string;
}

export function Consultation() {
  const { t } = useTranslation();
  const colors = useColors();
  const {profile} = useContext(SmartContractContext);
  const [state, setState] = useState<ConsultationState>();
  
  useEffect(() => {
    const botLink = import.meta.env.VITE_BOT_LINK;
    const referralLink = profile ? `${botLink}?start=${profile.refAddress.toString()}` : "";
    const uplineAddress = profile ? `${profile.upLine.toString().slice(0, 4)}…${profile.upLine.toString().slice(-4)}` : "";

    setState({
      referralLink,
      uplineAddress
    });
  }, [profile]);

  if (!state || profile === undefined) {
    return (
        <BlackBox>
          <Loader rows={4}/>
        </BlackBox>
    );
  }
  return (
    <BlackBox>
      <Flex flexDirection="column" gap="2">
        <Text className="block-title"  color={colors.green}>{t("profile.your-upline")}:</Text>
        <Flex justifyContent="space-between" alignItems="center" gap="10px">
          <Flex alignItems="center" gap="10px" w="fit-content">
            <UserIcon width="30px" height="30px" />
            <Text className="text-value" color="white">
              {state.uplineAddress}
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

        <Text className="block-title" color={colors.green}>{t("profile.ref-link")}:</Text>
        <CopyToClipboardField value={state.referralLink} />
      </Flex>
    </BlackBox>
  );
}
