import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import {
  CheckCircleIcon,
  InfoIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import React, { ReactElement, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { BlackBox } from "../../../../../shared/ui/BlackBox";

function NavItem(props: {
  label: string;
  text: string;
  icon: ReactElement;
  link: string;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { label, text, icon, link } = props;

  const redirect = useCallback(() => {
    navigate(link);
  }, [navigate, link]);

  return (
    <HStack spacing={2} cursor="pointer" onClick={redirect}>
      <IconButton aria-label={label} icon={icon} />
      <Text fontSize="sm" _hover={{ borderBottom: "1px solid" }}>
        {t(text)}
      </Text>
    </HStack>
  );
}

const navItems = {
  dash: (
    <NavItem
      label="Dash"
      text="dash.nav.dash"
      key="1"
      link="/"
      icon={<StarIcon />}
    />
  ),
  info: (
    <NavItem
      label="Info"
      text="dash.nav.info"
      key="1"
      link="/profile"
      icon={<InfoIcon />}
    />
  ),
  profile: (
    <NavItem
      label="Profile"
      text="dash.nav.profile"
      key="2"
      link="/profile"
      icon={<SettingsIcon />}
    />
  ),
  referral: (
    <NavItem
      label="Referral"
      text="dash.nav.referral"
      key="3"
      link="/referral"
      icon={<CheckCircleIcon />}
    />
  ),
};

const pathNavs = new Map([
  ["/", [navItems.info, navItems.profile, navItems.referral]],
  ["/profile", [navItems.dash, navItems.profile, navItems.referral]],
  ["/referral", [navItems.dash, navItems.info, navItems.profile]],
]);

export function Nav() {
  const location = useLocation();
  const navs = pathNavs.get(location.pathname);

  if (!navs?.length) {
    return <div />;
  }

  return (
    <BlackBox>
      <Flex justifyContent="space-between" alignItems="center" gap="10px">
        {navs.map((nav) => nav)}
      </Flex>
    </BlackBox>
  );
}
