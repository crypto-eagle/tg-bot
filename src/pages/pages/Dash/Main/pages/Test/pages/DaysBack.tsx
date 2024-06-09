import React, { useCallback, useContext, useState } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Loader } from "@core/components/Loader";
import { TestDaysBackConfirmForm } from "./components/ConfirmForm";

export function DaysBack() {
  const toast = useToast();
  const navigate = useNavigate();
  const { api } = useContext(SmartContractContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const confirmFormCallback = useCallback(
    async (count: number) => {
      if (!api) {
        return;
      }

      try {
        setIsLoading(true);

        // eslint-disable-next-line no-undef
        await api.methods.setDaysBack(BigInt(count));
        toast({
          title: "[TEST] Set days back",
          description: "Wait for transaction confirmation",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("../");
      } catch (e) {
        toast({
          title: "[TEST] Set days back",
          description: "Something went wrong. Check network",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [api, navigate, toast],
  );

  const validationScheme = Yup.object().shape({
    count: Yup.number().required("The field is required"),
  });

  return isLoading ? (
    <Loader rows={4} />
  ) : (
    <TestDaysBackConfirmForm
      title="dash.deposit.title"
      validationSchema={validationScheme}
      callback={confirmFormCallback}
    />
  );
}
