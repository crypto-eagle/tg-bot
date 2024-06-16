import React, { useContext } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";
import { Consultation } from "./components/Consultation";
import { UserInfoSecondary } from "./components/UserInfoSecondary";
import {getStatusByDeposit} from "./functions/depositRules";

export function ProfileStatus() {
  const { profile } = useContext(SmartContractContext);

  if (!profile) {
    return (
      <BlackBox>
        <Loader rows={4} />
      </BlackBox>
    );
  }

  const uplineAddress = `${profile.upLine.toString().slice(0, 4)  }…${  profile.upLine.toString().slice(-4)}`;
  const userStatus = getStatusByDeposit(profile.current?.deposit ?? 0);
  const botLink = import.meta.env.VITE_BOT_LINK;
  return (
    <>
      <UserInfoSecondary timePast={profile.current?.timePast} userStatus={userStatus} peopleInProject={546}/>
      <Consultation userName={uplineAddress} referralLink={`${botLink}${profile.refAddress.toString()}`}/>
    </>
  );
}
