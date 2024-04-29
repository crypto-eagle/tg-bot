import React from "react";

import { UserInfo } from "./components/UserInfo";
import { UserInfoSecondary } from "./components/UserInfoSecondary";
import { Statistics } from "./components/Statistics";
import { Consultation } from "./components/Consultation";
import { Table } from "./components/Table";

export function Profile() {
  return (
    <>
      <UserInfo />
      <UserInfoSecondary />
      <Statistics />
      <Consultation />
      <Table />
    </>
  );
}
