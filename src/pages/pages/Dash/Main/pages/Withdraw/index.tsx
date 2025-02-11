import { useTranslation } from "react-i18next";
import React, { useCallback, useContext, useState } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@core/components/Loader";
import { useColors } from "@hooks/useColors";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";
import { TonValue } from "../../../controls/TonValue";

export function Withdraw() {
  const { t } = useTranslation();
  const colors = useColors();
  const toast = useToast();
  const navigate = useNavigate();
  const { profile } = useContext(SmartContractContext);

  const { api } = useContext(SmartContractContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const confirmFormCallback = useCallback(async () => {
    if (!api) {
      return;
    }

    try {
      setIsLoading(true);

      await api.methods.withdraw();
      toast({
        title: t("dash.withdraw.toastSucceed.title"),
        description: t("dash.withdraw.toastSucceed.description"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("../");
    } catch (e) {
      toast({
        title: t("dash.withdraw.toastFailed.title"),
        description: t("dash.withdraw.toastFailed.description"),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, [api, navigate, t, toast]);

  if (!profile) {
    return <Loader rows={3} />;
  }

  return isLoading ? (
    <Loader rows={3} />
  ) : (
    <BlackBox>
      <Text className="block-title" mb={6} color={colors.green}>
        {t("dash.withdraw.title")}
      </Text>

      <TonValue
        title="dash.withdraw.claimableAmount"
        rowView
        isSpaceBetween
        value={
            (profile.current?.earnedAmount ?? 0) - (profile.current?.claimedAmount ?? 0)
        }
      />
      <Text className="status-badge" color={colors.white}>{t("dash.withdraw.subTitle")}</Text>

      <Flex justifyContent="space-evenly" mt={4}>
        <Button
          color="white"
          w="40%"
          bg={colors.blue}
          borderRadius="3xl"
          onClick={() => navigate("../")}
        >
          {t("dash.buttons.cancel")}
        </Button>

        <Button
          color="white"
          w="40%"
          bg={colors.darkgreen}
          borderRadius="3xl"
          onClick={() => confirmFormCallback()}
        >
          {t("dash.buttons.withdraw")}
        </Button>
      </Flex>
    </BlackBox>
  );
}
