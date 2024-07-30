import React, {useEffect, useState} from "react";
import {Box} from "@chakra-ui/react";
import {useColors} from "@hooks/useColors";
import {useTranslation} from "react-i18next";

export type depositStatus = "active" | "inactive" | "workedOut";

export interface DepositStatusBadgeProps {
    canDeposit?: boolean | null;
}

export function DepositStatusBadge(props: DepositStatusBadgeProps) {
    const {t} = useTranslation();
    const colors = useColors();
    const {canDeposit} = props;
    const [status, setStatus] = useState<depositStatus>("inactive");

    useEffect(() => {
        if (canDeposit === undefined) {
            setStatus("inactive");
        } else if (canDeposit) {
            setStatus("workedOut");
        } else {
            setStatus("active");
        }

    }, [canDeposit]);

    return (
        <Box
            bg={
                status === "active"
                    ? colors.darkgreen
                    : status === "inactive"
                        ? colors.cyan
                        : colors.gray
            }
            py="3px"
            px="20px"
            borderRadius="3xl"
            className="status-badge"
        >
            {t(`dash.depositStatus.status.${status}`)}
        </Box>
    );
}
