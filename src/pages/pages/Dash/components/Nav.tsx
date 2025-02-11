import { Flex, IconButton, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  CheckCircleIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import React, { ReactElement, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { BlackBox } from "../../../../shared/ui/BlackBox";

function NavItem(props: {
  label: string;
  text: string;
  icon: ReactElement;
  link: string;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { label, text, icon, link } = props;
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const redirect = useCallback(() => {
    navigate(link);
  }, [navigate, link]);

  return (
    <Stack
        spacing={2}
        cursor="pointer"
        onClick={redirect}
        direction={isSmallScreen ? 'column' : 'row'}
        alignSelf="start"
        alignItems="center"
        textAlign="center"
    >
      <IconButton aria-label={label} icon={icon}/>
      <Text fontSize="sm" _hover={{ borderBottom: "1px solid" }}>
        {t(text)}
      </Text>
    </Stack>
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
  profile: (
    <NavItem
      label="Profile"
      text="dash.nav.profile"
      key="3"
      link="/profile"
      icon={<SettingsIcon />}
    />
  ),
  referral: (
    <NavItem
      label="Referral"
      text="dash.nav.referral"
      key="4"
      link="/profile/referral"
      icon={<CheckCircleIcon />}
    />
  ),
};

const pathNavs = new Map([
  ["/", [navItems.dash, navItems.profile, navItems.referral]],
  ["/deposit", [navItems.dash, navItems.profile, navItems.referral]],
  ["/withdraw", [navItems.dash, navItems.profile, navItems.referral]],
  ["/profile", [navItems.dash, navItems.profile, navItems.referral]],
  ["/profile/referral", [navItems.dash, navItems.profile, navItems.referral]],
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
