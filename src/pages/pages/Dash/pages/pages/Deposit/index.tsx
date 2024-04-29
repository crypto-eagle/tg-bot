import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { toNano } from "@ton/core";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@core/components/Loader";
import { ConfirmForm } from "./components/ConfirmForm";

interface MinMaxState {
  min: number;
  max: number;
}

export function Deposit() {
  const { t } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();

  const { api } = useContext(SmartContractContext);
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
      if (!api) {
        return;
      }

      try {
        setIsLoading(true);

        // TODO: FIX UPLINE
        await api.methods.deposit(toNano(amount), null);
        toast({
          title: t("dash.deposit.toastSucceed.title"),
          description: t("dash.deposit.toastSucceed.description"),
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("../");
      } catch (e) {
        toast({
          title: t("dash.deposit.toastFailed.title"),
          description: t("dash.deposit.toastFailed.description"),
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [api, navigate, t, toast],
  );

  if (!constraints) {
    return <Loader rows={4} />;
  }

  const { min, max } = constraints;

  const validationScheme = Yup.object().shape({
    amount: Yup.number()
      .min(min, t("validation.min", { min }))
      .max(max, t("validation.max", { max }))
      .required(t("validation.required")),
  });

  return isLoading ? (
    <Loader rows={4} />
  ) : (
    <ConfirmForm
      title="dash.deposit.title"
      validationSchema={validationScheme}
      callback={confirmFormCallback}
    />
  );
}
