import { Field, Form, Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { useNavigate } from "react-router-dom";
import { BlackBox } from "../../../../../../../shared/ui/BlackBox";

interface ConfirmFormProps {
  title: string;
  validationSchema: unknown;
  // eslint-disable-next-line no-unused-vars
  callback: (amount: number) => void;
}

export function ConfirmForm(props: ConfirmFormProps) {
  const { validationSchema, title, callback } = props;
  const { t } = useTranslation();
  const colors = useColors();
  const navigate = useNavigate();

  return (
    <BlackBox>
      <Formik
        initialValues={{ amount: "" }}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          callback(+val.amount);
        }}
      >
        {() => (
          <Form>
            <Text color={colors.green}>{t(title)}:</Text>

            <Box mt={7} mb={7}>
              <Field name="amount">
                {/* @ts-ignore */}
                {({ field, meta }) => (
                  <FormControl isInvalid={meta.error && meta.touched}>
                    <Input
                      {...field}
                      h={12}
                      border={2}
                      borderRadius="3xl"
                      borderStyle="solid"
                      borderColor={colors.turquoise}
                      focusBorderColor={colors.turquoise}
                      placeholder={t("dash.deposit.amount")}
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>

            <Flex justifyContent="space-evenly">
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
                type="submit"
                color="white"
                w="40%"
                bg={colors.darkgreen}
                borderRadius="3xl"
              >
                {t("dash.buttons.contribute")}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </BlackBox>
  );
}
