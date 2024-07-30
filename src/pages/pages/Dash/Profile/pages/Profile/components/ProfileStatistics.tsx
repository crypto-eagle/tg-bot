import React, {useContext, useEffect, useState} from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TimePast } from "@core/models";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { UserGroup } from "../../../../../../../shared/icons/UserGroup";
import { TimeIcon } from "../../../../../../../shared/icons/TimeIcon";
import { LightBox } from "../../../../../../../shared/ui/LightBox";
import { ColumnStatWithIconView } from "../../../../controls/ColumnStatWithIconView";
import { StatusIcon } from "../../../../../../../shared/icons/StatusIcon";
import { DepositStatusBadge } from "../../../../controls/DepositStatusBadge";
import { StatWithIconView } from "../../../../controls/StatWithIconView";

export interface UserInfoState {
    timePast?: TimePast | null;

    peopleInProject: number;

    canDeposit?: boolean | null;
}

export function ProfileStatistics() {
    const { t } = useTranslation();
    const {profile} = useContext(SmartContractContext);
    const [state, setState] = useState<UserInfoState>();
    useEffect(() => {
        setState({
            timePast: profile?.current?.timePast || null,
            peopleInProject: profile?.refCount || 0,
            canDeposit: profile?.canDeposit
        });
    }, [profile]);

    if (!state || profile === undefined) {
        return (
            <LightBox>
                <Loader rows={4}/>
            </LightBox>
        );
    }
    
    return (
        <LightBox>
            <Flex gap="2" flexDirection="column">
                <ColumnStatWithIconView title={t("profile.youInProject")} icon={<TimeIcon width="30px" height="30px" />}>
                    <Text className="text-value">
                        {`${state.timePast?.days ?? 0} ${t("profile.time.day")} ${state.timePast?.hours ?? 0} ${t("profile.time.hours")} ${state.timePast?.mins ?? 0} ${t("profile.time.minutes")}`}
                    </Text>
                </ColumnStatWithIconView>

                <ColumnStatWithIconView title={t("profile.peopleInProject")} icon={<UserGroup width="30px" height="30px" />}>
                    <Text className="text-value">
                        {state.peopleInProject}
                    </Text>
                </ColumnStatWithIconView>

                <StatWithIconView title={t("dash.depositStatus.title")} icon={<StatusIcon width="30px" height="30px"/>}>
                    <DepositStatusBadge canDeposit={state.canDeposit}/>
                </StatWithIconView>
            </Flex>
        </LightBox>
    );
}
