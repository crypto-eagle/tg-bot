import {UserStatusType} from "../controls/UserStatusBadge";

const depositStatusRules: { amount: number, status: UserStatusType }[] = [
    { amount: 3000, status: "whale" },
    { amount: 2000, status: "catfish" },
    { amount: 1000, status: "pike" },
    { amount: 500, status: "crucian" },
    { amount: 100, status: "shrimp" },
    { amount: 0, status: "plankton" },
];

export function getStatusByDeposit(depositAmount: number): UserStatusType {
    for (let i = 0; i < depositStatusRules.length; i += 1) {
        if (depositAmount >= depositStatusRules[i].amount) {
            return depositStatusRules[i].status;
        }
    }
    return "plankton";
}
