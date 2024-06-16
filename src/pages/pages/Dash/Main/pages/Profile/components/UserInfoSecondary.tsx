import React, {ReactElement} from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";
import { TimePast } from "@core/models";
import { BlackBox } from "../../../../../../../shared/ui/BlackBox";
import { StatusIcon } from "../icons/StatusIcon";
import { UserGroup } from "../icons/UserGroup";
import { TimeIcon } from "../icons/TimeIcon";
import { UserStatusBadge, UserStatusType } from "./UserStatusBadge";

export interface UserInfoItemProps {
  title: string;
  icon: ReactElement;
  children: React.ReactNode;
}

function UserInfoItem(props:UserInfoItemProps) {
  const { title, icon, children } = props;
  const colors = useColors();

  return (
      <Flex justifyContent="space-between" alignItems="center" gap="10px">
        <Flex alignItems="center" gap="10px" w="fit-content">
          {icon}
          <Text color={colors.green}>
            {title}:
          </Text>
        </Flex>
        {children}
      </Flex>
  );
}

export interface UserInfoProps {
  timePast?: TimePast;

  peopleInProject: number;

  userStatus: UserStatusType;
}

export function UserInfoSecondary(props: UserInfoProps) {
  const { t } = useTranslation();
  const { timePast, peopleInProject, userStatus } = props;

  return (
    <BlackBox>
      <Flex gap="15px" flexDirection="column">
        <UserInfoItem title={t("profile.youInProject")} icon={<TimeIcon width="24px" height="24px" />}>
          <Text fontSize="lg">
            {`${timePast?.days ?? 0} ${t("profile.time.day")} ${timePast?.hours ?? 0} ${t("profile.time.hours")} ${timePast?.mins ?? 0} ${t("profile.time.minutes")}`}
          </Text>
        </UserInfoItem>

        <UserInfoItem title={t("profile.peopleInProject")} icon={<UserGroup width="24px" height="24px" />}>
          <Text fontSize="lg">
            {peopleInProject}
          </Text>
        </UserInfoItem>

        <UserInfoItem title={t("profile.status-title")} icon={<StatusIcon width="24px" height="24px" />}>
          <UserStatusBadge userStatus={userStatus} />
        </UserInfoItem>
      </Flex>
    </BlackBox>
  );
}
