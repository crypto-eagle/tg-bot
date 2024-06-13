import React, { useContext } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";
import { Consultation } from "./components/Consultation";
import { UserInfoSecondary } from "./components/UserInfoSecondary";

export function ProfileStatus() {
  const { profile } = useContext(SmartContractContext);

  if (!profile) {
    return (
      <BlackBox>
        <Loader rows={4} />
      </BlackBox>
    );
  }

  const uplineAddress = `${profile.upLine.toString().slice(0, 4)  }…${  profile.upLine.toString().slice(-4)}` 
  return (
    <>
      <UserInfoSecondary timePast={profile.current.timePast} userStatus="whale" peopleInProject={546}/>
      <Consultation userName={uplineAddress} referralLink={`https://example.com/${profile.refAddress.toString()}`}/>
    </>
  );
}
