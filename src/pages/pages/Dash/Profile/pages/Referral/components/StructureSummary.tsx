import React, {useContext, useEffect, useState} from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {SmartContractContext} from "@core/providers/smart-contract.provider";
import {Loader} from "@core/components/Loader";
import {LightBox} from "../../../../../../../shared/ui/LightBox";
import {StatWithIconView} from "../../../../controls/StatWithIconView";
import {DepositStatusBadge} from "../../../../controls/DepositStatusBadge";
import {StatusIcon} from "../../../../../../../shared/icons/StatusIcon";
import {UserGroup} from "../../../../../../../shared/icons/UserGroup";

interface StructureSummaryState {
    partnerNumbers?: number | null;
    canDeposit?: boolean | null;
}

export function StructureSummary() {
    const {t} = useTranslation();
    const {profile} = useContext(SmartContractContext);

    const [state, setState] = useState<StructureSummaryState>();
    useEffect(() => {
        setState({
            partnerNumbers: profile?.refCount,
            canDeposit: profile?.canDeposit
        });
    }, [profile]);

    if (!state || profile === undefined) {
        return (
            <LightBox>
                <Loader rows={5}/>
            </LightBox>
        );
    }
    return (
        <LightBox>
            <Flex gap="2" flexDirection="column">
                <StatWithIconView title={t("dash.depositStatus.title")} icon={<StatusIcon width="30px" height="30px"/>}>
                    <DepositStatusBadge canDeposit={state.canDeposit}/>
                </StatWithIconView>
                <StatWithIconView title={t("profile.userInfo.partnerNumbers")} icon={<UserGroup width="30px" height="30px"/>}>
                    <Box textTransform="uppercase">
                        <Text fontSize="20px" fontWeight="700" >
                            {state.partnerNumbers ?? 0}
                        </Text>
                    </Box>
                </StatWithIconView>
            </Flex>
        </LightBox>
    );
}
