import React, {ReactElement, useMemo} from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";
import { PlanktonIcon } from "../../../../../../../shared/icons/PlanktonIcon";
import { ShrimpIcon } from "../../../../../../../shared/icons/ShrimpIcon";
import { CrucianIcon } from "../../../../../../../shared/icons/CrucianIcon";
import { PikeIcon } from "../../../../../../../shared/icons/PikeIcon";
import { CatfishIcon } from "../../../../../../../shared/icons/CatfishIcon";
import { WhaleIcon } from "../../../../../../../shared/icons/WhaleIcon";

export type UserStatusType = "plankton" | "shrimp" | "crucian" | "pike" | "catfish" | "whale";

export class StatusElementSetting {
  userStatus: UserStatusType;

  icon: ReactElement;

  color: string;

  constructor(userStatus: UserStatusType, icon: React.ReactElement, color: string) {
    this.userStatus = userStatus;
    this.icon = icon;
    this.color = color;
  }
}

export interface UserStatusBadgeProps {
  userStatus: UserStatusType;
}

export function UserStatusBadge(props: UserStatusBadgeProps) {
  const { t } = useTranslation();
  const { userStatus } = props;
  const colors = useColors();
  const statusElementsSettings = useMemo(() => new Map([
        ["plankton", new StatusElementSetting("plankton", <PlanktonIcon />, colors.lightred)],
        ["shrimp", new StatusElementSetting("shrimp", <ShrimpIcon />, colors.notActivated)],
        ["crucian", new StatusElementSetting("crucian", <CrucianIcon />, colors.lightorange)],
        ["pike", new StatusElementSetting("pike", <PikeIcon />, colors.orange)],
        ["catfish", new StatusElementSetting("catfish", <CatfishIcon />, colors.green)],
        ["whale", new StatusElementSetting("whale", <WhaleIcon />, colors.darkgreen)]
      ]), [colors]);
  const elementsSetting = statusElementsSettings.get(userStatus);

  return (
      <Box
          bg={elementsSetting?.color}
          color="white"
          fontWeight="normal"
          py="3px"
          px="8px"
          borderRadius="3xl"
      >
        <Flex alignItems="center" gap="5px" w="fit-content">
          {elementsSetting?.icon}
          <Text className="status-badge">
            {t(`profile.status.${elementsSetting?.userStatus}`)}
          </Text>
        </Flex>
      </Box>
  );
}
