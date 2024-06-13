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
import { useColors } from "@hooks/useColors";
import { useNavigate } from "react-router-dom";
import { BlackBox } from "../../../../../../../../shared/ui/BlackBox";

interface ConfirmFormProps {
  title: string;
  validationSchema: unknown;
  // eslint-disable-next-line no-unused-vars
  callback: (count: number) => void;
}

export function TestDaysBackConfirmForm(props: ConfirmFormProps) {
  const { validationSchema, title, callback } = props;
  const colors = useColors();
  const navigate = useNavigate();

  return (
    <BlackBox>
      <Formik
        initialValues={{ count: "" }}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          callback(+val.count);
        }}
      >
        {() => (
          <Form>
            <Text color={colors.green}>{title}:</Text>

            <Box mt={7} mb={7}>
              <Field name="count">
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
                      placeholder="Input number days back"
                      autoFocus
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
                Cancel
              </Button>

              <Button
                type="submit"
                color="white"
                w="40%"
                bg={colors.darkgreen}
                borderRadius="3xl"
              >
                Ok
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </BlackBox>
  );
}
