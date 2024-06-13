import React from "react";
import { useColors } from "@hooks/useColors";
import { Box, Flex, IconButton, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { CopyIcon } from "../icons/CopyIcon";

export interface CopyToClipboardFieldProps {
    value: string;
}

export function CopyToClipboardField(props: CopyToClipboardFieldProps) {
    const { t } = useTranslation();
    const toast = useToast();
    const { value } = props;
    const colors = useColors();

    const copyToClipboard = async () => {
        try {
            // @ts-ignore
            const permissions = await navigator.permissions.query({ name: "clipboard-write" })
            if (permissions.state === "granted" || permissions.state === "prompt") {
                await navigator.clipboard.writeText(value);
                toast({
                    title: t("profile.ref-link"),
                    description: t("profile.toast.copySucceed"),
                    status: "success",
                    duration: 5000,
                    isClosable: true
                });
            } else {
                throw new Error(t("profile.toast.copyError"))
            }
        } catch (error) {
            toast({
                title: t("profile.ref-link"),
                description: (error as Error).message,
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }
    };

    return (
        <Box
            px="20px"
            py="10px"
            border={`3px solid ${colors.turquoise}`}
            borderRadius="3xl"
            bg="whiteAlpha.200"
        >
            <Flex justify="space-between" align="center">
                <Box whiteSpace="nowrap"
                     overflow="hidden"
                     textOverflow="ellipsis"
                >
                    {value}
                </Box>
                <IconButton
                    aria-label="Copy"
                    h={0}
                    w={0}
                    variant="outline"
                    borderStyle="none"
                    borderColor="transparent"
                    icon={<CopyIcon width="24px" height="24px"/>}
                    onClick={copyToClipboard}
                />
            </Flex>
        </Box>
    );
}
