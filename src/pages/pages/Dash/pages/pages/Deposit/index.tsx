import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { toNano } from "ton-core";
import { Skeleton, Stack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ConfirmForm } from "../components/ConfirmForm";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";

interface MinMaxState {
  min: number;
  max: number;
}

function Loader() {
  return (
    <BlackBox>
      <Stack>
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={8} />
      </Stack>
    </BlackBox>
  );
}

export function Deposit() {
  const { t } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();

  const api = useContext(SmartContractContext);
  const [constraints, setConstraints] = useState<MinMaxState | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    (async () => {
      setConstraints({
        min: await api.getters.minDeposit(),
        max: await api.getters.maxDeposit(),
      });

      setIsLoading(false);
    })();
  }, [api]);

  const confirmFormCallback = useCallback(
    async (amount: number) => {
      try {
        setIsLoading(true);

        await api.methods.deposit(toNano(amount), null);
        toast({
          title: t("dash.deposit.toastSucceed.title"),
          description: t("dash.deposit.toastSucceed.description"),
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("../");
      } catch (e) {
        toast({
          title: t("dash.deposit.toastFailed.title"),
          description: t("dash.deposit.toastFailed.description"),
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [api.methods, navigate, t, toast],
  );

  if (!constraints) {
    return <Loader />;
  }

  const { min, max } = constraints;

  const validationScheme = Yup.object().shape({
    amount: Yup.number()
      .min(min, t("validation.min", { min }))
      .max(max, t("validation.max", { max }))
      .required(t("validation.required")),
  });

  return isLoading ? (
    <Loader />
  ) : (
    <ConfirmForm
      title="dash.amount.replenishmentAmount"
      validationSchema={validationScheme}
      callback={confirmFormCallback}
    />
  );
}
