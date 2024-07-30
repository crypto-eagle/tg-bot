import React, {useContext, useEffect, useState} from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { BlackBox } from "../../../../../../../shared/ui/BlackBox";
import { UserStatusBadge, UserStatusType } from "../controls/UserStatusBadge";
import { TonValue } from "../../../../controls/TonValue";
import { getStatusByDeposit } from "../functions/depositRules";

export interface ProfileStatusState {
    earned: number;
    invested: number;
    userStatus: UserStatusType;
}

export function ProfileStatus() {
    const {t} = useTranslation();
    const colors = useColors();
    const {profile} = useContext(SmartContractContext);
    const [state, setState] = useState<ProfileStatusState>();
    useEffect(() => {
        const userStatus = getStatusByDeposit(profile?.current?.deposit || 0);

        setState({
            userStatus,
            earned: profile?.current?.earnedAmount || 0,
            invested: profile?.current?.deposit || 0
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
            <Flex gap="2" flexDirection="column">
                <Text className="block-title" color={colors.white} mb={3}>{t("profile.user-statistics")}</Text>
                <TonValue
                    rowView
                    title="dash.depositStatus.invested"
                    value={state.invested}
                />
                <TonValue
                    rowView
                    title="dash.depositStatus.earned"
                    value={state.earned}
                />

                <Flex alignItems="center" gap="2">
                    <Text className="block-title" color={colors.green}>{t("profile.status-title")}:</Text>
                    <UserStatusBadge userStatus={state.userStatus}/>
                </Flex>
            </Flex>
        </BlackBox>
    );
}
