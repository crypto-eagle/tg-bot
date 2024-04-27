/* eslint-disable */

import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from "@ton/core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwner = {
  $$type: "ChangeOwner";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwnerOk = {
  $$type: "ChangeOwnerOk";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    },
  };
}

export type Deposit = {
  $$type: "Deposit";
  upLine: Address | null;
};

export function storeDeposit(src: Deposit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(532115219, 32);
    b_0.storeAddress(src.upLine);
  };
}

export function loadDeposit(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 532115219) {
    throw Error("Invalid prefix");
  }
  let _upLine = sc_0.loadMaybeAddress();
  return { $$type: "Deposit" as const, upLine: _upLine };
}

function loadTupleDeposit(source: TupleReader) {
  let _upLine = source.readAddressOpt();
  return { $$type: "Deposit" as const, upLine: _upLine };
}

function storeTupleDeposit(source: Deposit) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.upLine);
  return builder.build();
}

function dictValueParserDeposit(): DictionaryValue<Deposit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeposit(src)).endCell());
    },
    parse: (src) => {
      return loadDeposit(src.loadRef().beginParse());
    },
  };
}

export type ClaimRewards = {
  $$type: "ClaimRewards";
};

export function storeClaimRewards(src: ClaimRewards) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(155852668, 32);
  };
}

export function loadClaimRewards(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 155852668) {
    throw Error("Invalid prefix");
  }
  return { $$type: "ClaimRewards" as const };
}

function loadTupleClaimRewards(source: TupleReader) {
  return { $$type: "ClaimRewards" as const };
}

function storeTupleClaimRewards(source: ClaimRewards) {
  let builder = new TupleBuilder();
  return builder.build();
}

function dictValueParserClaimRewards(): DictionaryValue<ClaimRewards> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeClaimRewards(src)).endCell());
    },
    parse: (src) => {
      return loadClaimRewards(src.loadRef().beginParse());
    },
  };
}

export type TemporaryWithdrawFeature = {
  $$type: "TemporaryWithdrawFeature";
};

export function storeTemporaryWithdrawFeature(src: TemporaryWithdrawFeature) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3570687654, 32);
  };
}

export function loadTemporaryWithdrawFeature(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3570687654) {
    throw Error("Invalid prefix");
  }
  return { $$type: "TemporaryWithdrawFeature" as const };
}

function loadTupleTemporaryWithdrawFeature(source: TupleReader) {
  return { $$type: "TemporaryWithdrawFeature" as const };
}

function storeTupleTemporaryWithdrawFeature(source: TemporaryWithdrawFeature) {
  let builder = new TupleBuilder();
  return builder.build();
}

function dictValueParserTemporaryWithdrawFeature(): DictionaryValue<TemporaryWithdrawFeature> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(
        beginCell().store(storeTemporaryWithdrawFeature(src)).endCell(),
      );
    },
    parse: (src) => {
      return loadTemporaryWithdrawFeature(src.loadRef().beginParse());
    },
  };
}

export type ContractMeta = {
  $$type: "ContractMeta";
  founder: Address;
  minDeposit: bigint;
  maxDepositMultiplier: bigint;
  rewardsPercent: bigint;
  depositDirectUpLineBonusPercent: bigint;
  depositFounderBonusPercent: bigint;
};

export function storeContractMeta(src: ContractMeta) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.founder);
    b_0.storeCoins(src.minDeposit);
    b_0.storeUint(src.maxDepositMultiplier, 8);
    b_0.storeUint(src.rewardsPercent, 32);
    b_0.storeUint(src.depositDirectUpLineBonusPercent, 8);
    b_0.storeUint(src.depositFounderBonusPercent, 8);
  };
}

export function loadContractMeta(slice: Slice) {
  let sc_0 = slice;
  let _founder = sc_0.loadAddress();
  let _minDeposit = sc_0.loadCoins();
  let _maxDepositMultiplier = sc_0.loadUintBig(8);
  let _rewardsPercent = sc_0.loadUintBig(32);
  let _depositDirectUpLineBonusPercent = sc_0.loadUintBig(8);
  let _depositFounderBonusPercent = sc_0.loadUintBig(8);
  return {
    $$type: "ContractMeta" as const,
    founder: _founder,
    minDeposit: _minDeposit,
    maxDepositMultiplier: _maxDepositMultiplier,
    rewardsPercent: _rewardsPercent,
    depositDirectUpLineBonusPercent: _depositDirectUpLineBonusPercent,
    depositFounderBonusPercent: _depositFounderBonusPercent,
  };
}

function loadTupleContractMeta(source: TupleReader) {
  let _founder = source.readAddress();
  let _minDeposit = source.readBigNumber();
  let _maxDepositMultiplier = source.readBigNumber();
  let _rewardsPercent = source.readBigNumber();
  let _depositDirectUpLineBonusPercent = source.readBigNumber();
  let _depositFounderBonusPercent = source.readBigNumber();
  return {
    $$type: "ContractMeta" as const,
    founder: _founder,
    minDeposit: _minDeposit,
    maxDepositMultiplier: _maxDepositMultiplier,
    rewardsPercent: _rewardsPercent,
    depositDirectUpLineBonusPercent: _depositDirectUpLineBonusPercent,
    depositFounderBonusPercent: _depositFounderBonusPercent,
  };
}

function storeTupleContractMeta(source: ContractMeta) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.founder);
  builder.writeNumber(source.minDeposit);
  builder.writeNumber(source.maxDepositMultiplier);
  builder.writeNumber(source.rewardsPercent);
  builder.writeNumber(source.depositDirectUpLineBonusPercent);
  builder.writeNumber(source.depositFounderBonusPercent);
  return builder.build();
}

function dictValueParserContractMeta(): DictionaryValue<ContractMeta> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContractMeta(src)).endCell());
    },
    parse: (src) => {
      return loadContractMeta(src.loadRef().beginParse());
    },
  };
}

export type Round = {
  $$type: "Round";
  serial: bigint;
  amount: bigint;
  createdAt: bigint;
  isClaimed: boolean;
  claimedDailyIncome: bigint;
};

export function storeRound(src: Round) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.serial, 8);
    b_0.storeCoins(src.amount);
    b_0.storeUint(src.createdAt, 32);
    b_0.storeBit(src.isClaimed);
    b_0.storeCoins(src.claimedDailyIncome);
  };
}

export function loadRound(slice: Slice) {
  let sc_0 = slice;
  let _serial = sc_0.loadUintBig(8);
  let _amount = sc_0.loadCoins();
  let _createdAt = sc_0.loadUintBig(32);
  let _isClaimed = sc_0.loadBit();
  let _claimedDailyIncome = sc_0.loadCoins();
  return {
    $$type: "Round" as const,
    serial: _serial,
    amount: _amount,
    createdAt: _createdAt,
    isClaimed: _isClaimed,
    claimedDailyIncome: _claimedDailyIncome,
  };
}

function loadTupleRound(source: TupleReader) {
  let _serial = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _createdAt = source.readBigNumber();
  let _isClaimed = source.readBoolean();
  let _claimedDailyIncome = source.readBigNumber();
  return {
    $$type: "Round" as const,
    serial: _serial,
    amount: _amount,
    createdAt: _createdAt,
    isClaimed: _isClaimed,
    claimedDailyIncome: _claimedDailyIncome,
  };
}

function storeTupleRound(source: Round) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.serial);
  builder.writeNumber(source.amount);
  builder.writeNumber(source.createdAt);
  builder.writeBoolean(source.isClaimed);
  builder.writeNumber(source.claimedDailyIncome);
  return builder.build();
}

function dictValueParserRound(): DictionaryValue<Round> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeRound(src)).endCell());
    },
    parse: (src) => {
      return loadRound(src.loadRef().beginParse());
    },
  };
}

export type Investor = {
  $$type: "Investor";
  address: Address;
  upLine: Address;
  round: Round;
  referralBonus: bigint;
  totalDeposit: bigint;
  totalClaimedRewards: bigint;
  totalReferralBonus: bigint;
};

export function storeInvestor(src: Investor) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.address);
    b_0.storeAddress(src.upLine);
    b_0.store(storeRound(src.round));
    b_0.storeCoins(src.referralBonus);
    let b_1 = new Builder();
    b_1.storeCoins(src.totalDeposit);
    b_1.storeCoins(src.totalClaimedRewards);
    b_1.storeCoins(src.totalReferralBonus);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadInvestor(slice: Slice) {
  let sc_0 = slice;
  let _address = sc_0.loadAddress();
  let _upLine = sc_0.loadAddress();
  let _round = loadRound(sc_0);
  let _referralBonus = sc_0.loadCoins();
  let sc_1 = sc_0.loadRef().beginParse();
  let _totalDeposit = sc_1.loadCoins();
  let _totalClaimedRewards = sc_1.loadCoins();
  let _totalReferralBonus = sc_1.loadCoins();
  return {
    $$type: "Investor" as const,
    address: _address,
    upLine: _upLine,
    round: _round,
    referralBonus: _referralBonus,
    totalDeposit: _totalDeposit,
    totalClaimedRewards: _totalClaimedRewards,
    totalReferralBonus: _totalReferralBonus,
  };
}

function loadTupleInvestor(source: TupleReader) {
  let _address = source.readAddress();
  let _upLine = source.readAddress();
  const _round = loadTupleRound(source.readTuple());
  let _referralBonus = source.readBigNumber();
  let _totalDeposit = source.readBigNumber();
  let _totalClaimedRewards = source.readBigNumber();
  let _totalReferralBonus = source.readBigNumber();
  return {
    $$type: "Investor" as const,
    address: _address,
    upLine: _upLine,
    round: _round,
    referralBonus: _referralBonus,
    totalDeposit: _totalDeposit,
    totalClaimedRewards: _totalClaimedRewards,
    totalReferralBonus: _totalReferralBonus,
  };
}

function storeTupleInvestor(source: Investor) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  builder.writeAddress(source.upLine);
  builder.writeTuple(storeTupleRound(source.round));
  builder.writeNumber(source.referralBonus);
  builder.writeNumber(source.totalDeposit);
  builder.writeNumber(source.totalClaimedRewards);
  builder.writeNumber(source.totalReferralBonus);
  return builder.build();
}

function dictValueParserInvestor(): DictionaryValue<Investor> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeInvestor(src)).endCell());
    },
    parse: (src) => {
      return loadInvestor(src.loadRef().beginParse());
    },
  };
}

export type Profile = {
  $$type: "Profile";
  totalDeposit: bigint;
  totalClaimedRewards: bigint;
  totalReferralBonus: bigint;
  depositIsAvailable: boolean;
  currentRound: bigint;
  currentRoundDurationInDays: bigint;
  currentDeposit: bigint;
  currentClaimedRewards: bigint;
  currentClaimableRewards: bigint;
  currentMaxRewards: bigint;
};

export function storeProfile(src: Profile) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.totalDeposit);
    b_0.storeCoins(src.totalClaimedRewards);
    b_0.storeCoins(src.totalReferralBonus);
    b_0.storeBit(src.depositIsAvailable);
    b_0.storeUint(src.currentRound, 8);
    b_0.storeUint(src.currentRoundDurationInDays, 8);
    b_0.storeCoins(src.currentDeposit);
    b_0.storeCoins(src.currentClaimedRewards);
    b_0.storeCoins(src.currentClaimableRewards);
    b_0.storeCoins(src.currentMaxRewards);
  };
}

export function loadProfile(slice: Slice) {
  let sc_0 = slice;
  let _totalDeposit = sc_0.loadCoins();
  let _totalClaimedRewards = sc_0.loadCoins();
  let _totalReferralBonus = sc_0.loadCoins();
  let _depositIsAvailable = sc_0.loadBit();
  let _currentRound = sc_0.loadUintBig(8);
  let _currentRoundDurationInDays = sc_0.loadUintBig(8);
  let _currentDeposit = sc_0.loadCoins();
  let _currentClaimedRewards = sc_0.loadCoins();
  let _currentClaimableRewards = sc_0.loadCoins();
  let _currentMaxRewards = sc_0.loadCoins();
  return {
    $$type: "Profile" as const,
    totalDeposit: _totalDeposit,
    totalClaimedRewards: _totalClaimedRewards,
    totalReferralBonus: _totalReferralBonus,
    depositIsAvailable: _depositIsAvailable,
    currentRound: _currentRound,
    currentRoundDurationInDays: _currentRoundDurationInDays,
    currentDeposit: _currentDeposit,
    currentClaimedRewards: _currentClaimedRewards,
    currentClaimableRewards: _currentClaimableRewards,
    currentMaxRewards: _currentMaxRewards,
  };
}

function loadTupleProfile(source: TupleReader) {
  let _totalDeposit = source.readBigNumber();
  let _totalClaimedRewards = source.readBigNumber();
  let _totalReferralBonus = source.readBigNumber();
  let _depositIsAvailable = source.readBoolean();
  let _currentRound = source.readBigNumber();
  let _currentRoundDurationInDays = source.readBigNumber();
  let _currentDeposit = source.readBigNumber();
  let _currentClaimedRewards = source.readBigNumber();
  let _currentClaimableRewards = source.readBigNumber();
  let _currentMaxRewards = source.readBigNumber();
  return {
    $$type: "Profile" as const,
    totalDeposit: _totalDeposit,
    totalClaimedRewards: _totalClaimedRewards,
    totalReferralBonus: _totalReferralBonus,
    depositIsAvailable: _depositIsAvailable,
    currentRound: _currentRound,
    currentRoundDurationInDays: _currentRoundDurationInDays,
    currentDeposit: _currentDeposit,
    currentClaimedRewards: _currentClaimedRewards,
    currentClaimableRewards: _currentClaimableRewards,
    currentMaxRewards: _currentMaxRewards,
  };
}

function storeTupleProfile(source: Profile) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.totalDeposit);
  builder.writeNumber(source.totalClaimedRewards);
  builder.writeNumber(source.totalReferralBonus);
  builder.writeBoolean(source.depositIsAvailable);
  builder.writeNumber(source.currentRound);
  builder.writeNumber(source.currentRoundDurationInDays);
  builder.writeNumber(source.currentDeposit);
  builder.writeNumber(source.currentClaimedRewards);
  builder.writeNumber(source.currentClaimableRewards);
  builder.writeNumber(source.currentMaxRewards);
  return builder.build();
}

function dictValueParserProfile(): DictionaryValue<Profile> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeProfile(src)).endCell());
    },
    parse: (src) => {
      return loadProfile(src.loadRef().beginParse());
    },
  };
}

type EarnContract_init_args = {
  $$type: "EarnContract_init_args";
  id: bigint;
  founder: Address;
  minDeposit: bigint;
  maxDepositMultiplier: bigint;
  rewardsPercent: bigint;
  depositDirectUpLineBonusPercent: bigint;
  depositFounderBonusPercent: bigint;
};

function initEarnContract_init_args(src: EarnContract_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.id, 257);
    b_0.storeAddress(src.founder);
    b_0.storeInt(src.minDeposit, 257);
    let b_1 = new Builder();
    b_1.storeInt(src.maxDepositMultiplier, 257);
    b_1.storeInt(src.rewardsPercent, 257);
    b_1.storeInt(src.depositDirectUpLineBonusPercent, 257);
    let b_2 = new Builder();
    b_2.storeInt(src.depositFounderBonusPercent, 257);
    b_1.storeRef(b_2.endCell());
    b_0.storeRef(b_1.endCell());
  };
}

async function EarnContract_init(
  id: bigint,
  founder: Address,
  minDeposit: bigint,
  maxDepositMultiplier: bigint,
  rewardsPercent: bigint,
  depositDirectUpLineBonusPercent: bigint,
  depositFounderBonusPercent: bigint,
) {
  const __code = Cell.fromBase64(
    "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ZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQTggZzq084r86ShYDrC3EyPZQAnmxGIg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI2zxVCds8bKEgbpIwbZkgbvLQgG8qbwriIG6SMG3egPzICASA8PQP02zwgbpIwbeAgbvLQgG8rCREUCQgREwhWEghWEghWEghWEghWEghWEggHERIHBhERBlYQBlYbBlYbUWJRYlFiUWJRYlFiBlYbBlYbBgURIwUEESIEAxEhAwIRIAIBER8BER7bPC+hLqBUeHZUeHZWEQdWHAdWHAdWGwdHMzQC9iuUXw9bcOBWGlYaVhpWGlYaVhpWGlYaVhpWGgkRGgkIERkIBxEYB1YXBwYRFwYFERYFBBEVBAMRFAMCERMCARESARERERQRJREUERMRJBETERIRIxESERERIhERERARIREQDxEgDw4RHw4NER4NDBEdDAsRHAvbPFLgqDk1A/5WGwdWGwdWGwdWGwdWIQdWHAdWHEYXUERFFQPbPFYTVhOhKRC8EKxRkFGQUZBRkFGQCQgHERFVQNs8UuChVHqYVHqYVHqYKlYWViFWIVYgViBWIFYgViBWJlYhViERFBEfERQRExEeERMREhEdERIREREcEREREBEbERAPERoPNjs3AYKAZKkEChEQChCfEI4QfRBsEFsQShA5SHAQJgURFwUEERYEAxEVAwIRFAIBERMBERLbPGyhErYIGhBZEEheMkQwEjsB7Dc5OTk5OTk5OVYSVhJWElYSVhJWElYSVhJWElYSERARHBEQDxEbDw4RGg4NERkNDBEYDAsRFwsKERYKCREVCQgRFAgHERMHBhEWBgURHAUEERsEAxEaAwIRGQIBERgBERfbPGyhWKEBtggQOkmAEEcQNkVAQzA7A/4OERkODREYDQwRFwwLERYL2zwFERcFBBEhBFYgBFYfBAMRHwMCER4CAREdAREcViFWHFYcDxEUDw4REw4NERINDBERDAsREAsPERwPDhEmDg0RIA0MER8MCxEiC9s8JbYIKBCrEJtRgFGAUYBRgFGACAcGVh8GBRERBQQDEREDODk6AAgQWl8KABwQaV8J+CMyoYIBUYCpBAFaAgEREQHbPGyhCRERCRCLEHoQbgUREgUUAxEQA0+wbwoaEFkQWBAnECYQJUQwOwASECVfBaiAZKkEAhGvYG2ebZ42UMA/PgJNrpOQa6TAgIXdeXBEEGuFhRBAgn/deWhEwYTdeXBEbZ4qhO2eNlDAP0AACPgnbxADnu1E0NQB+GPSAAGOr9Mf+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHbPAb0BPQECglIiGwa4Pgo1wsKgwm68uCJ2zwH0VUF2zxBQkMD9lR6mFR6mFR6mCpWFFYUVhRWFFYUVhRWFFYUVhRWFAoRHgoJER0JCBEcCAcRGwcGERoGBREZBQQRGAQDERcDAhEWAgERFQERFNs8OVs3ERARGREQDxEYDw4RFw4NERYNDBEVDAsRFAsKERMKCRESCQgREQgHERkHVQXbPEdISQBY+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6ANMH0x/TB9MHVVAAloEBAdcA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXANQB0IEBAdcAgQEB1wCBAQHXANQw0IEBAdcAMBBHEEYQRQHa+EJVUG1tgQEBcYAeIiFulVtZ9FowmMgBzwBBM/RC4oEBAXJ6IiFulVtZ9FowmMgBzwBBM/RC4oEBAXN6IiFulVtZ9FowmMgBzwBBM/RC4oEBAXR6IiFulVtZ9FowmMgBzwBBM/RC4oEBAXV6IkQB8CFulVtZ9FowmMgBzwBBM/RC4oEBAXZ4IiFulVtZ9FowmMgBzwBBM/RC4oEBAXd4IiFulVtZ9FowmMgBzwBBM/RC4oEBAXhTASFulVtZ9FowmMgBzwBBM/RC4oEBAXl4IiFulVtZ9FowmMgBzwBBM/RC4oEBAXp4IkUB+iFulVtZ9FowmMgBzwBBM/RC4oEBAYALdSIhbpVbWfRaMJjIAc8AQTP0QuKBAQGADHUiIW6VW1n0WjCYyAHPAEEz9ELigQEBgA11IiFulVtZ9FowmMgBzwBBM/RC4oEBAYAOdSIhbpVbWfRaMJjIAc8AQTP0QuKBAQGAD3UiRgAkIW6VW1n0WjCYyAHPAEEz9ELiATqBAQsjAln0C2+hkjBt3yBukjBtjofQ2zxsG28L4koAXl8DbBKoIW6RMeABIG7y0IBvKxCKXwpxIcABkjBz3iHAApIwed4BwgKTMIAU3gGoACJsoRCKEHkQaBBXEEYQNUQwEgDC+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMH+gDTH9IA+gBVQAX6ANQB0PoA+gD6ADAQOxA6EDkQNAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1Ra3VhY21MRDdZbkExa1UzWVpVVzJ3NFBMQVVNMkV1VDNyUFNqdzJDS1dCZoIA==",
  );
  const __system = Cell.fromBase64(
    "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",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initEarnContract_init_args({
    $$type: "EarnContract_init_args",
    id,
    founder,
    minDeposit,
    maxDepositMultiplier,
    rewardsPercent,
    depositDirectUpLineBonusPercent,
    depositFounderBonusPercent,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const EarnContract_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  10714: { message: `Maximum deposit limit exceeded` },
  20855: { message: `Claim rewards before deposit` },
  34646: { message: `Deposit amount is not enough` },
  44011: { message: `Your rewards amount is not enough to claim` },
  56090: { message: `You already claimed rewards` },
  57581: { message: `Investor is not registered` },
};

const EarnContract_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "cashback",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ChangeOwner",
    header: 2174598809,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ChangeOwnerOk",
    header: 846932810,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "Deposit",
    header: 532115219,
    fields: [
      {
        name: "upLine",
        type: { kind: "simple", type: "address", optional: true },
      },
    ],
  },
  { name: "ClaimRewards", header: 155852668, fields: [] },
  { name: "TemporaryWithdrawFeature", header: 3570687654, fields: [] },
  {
    name: "ContractMeta",
    header: null,
    fields: [
      {
        name: "founder",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "minDeposit",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "maxDepositMultiplier",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
      {
        name: "rewardsPercent",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "depositDirectUpLineBonusPercent",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
      {
        name: "depositFounderBonusPercent",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
    ],
  },
  {
    name: "Round",
    header: null,
    fields: [
      {
        name: "serial",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "createdAt",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "isClaimed",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "claimedDailyIncome",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
  {
    name: "Investor",
    header: null,
    fields: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "upLine",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "round",
        type: { kind: "simple", type: "Round", optional: false },
      },
      {
        name: "referralBonus",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "totalDeposit",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "totalClaimedRewards",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "totalReferralBonus",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
  {
    name: "Profile",
    header: null,
    fields: [
      {
        name: "totalDeposit",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "totalClaimedRewards",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "totalReferralBonus",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "depositIsAvailable",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "currentRound",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
      {
        name: "currentRoundDurationInDays",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
      {
        name: "currentDeposit",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "currentClaimedRewards",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "currentClaimableRewards",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "currentMaxRewards",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
];

const EarnContract_getters: ABIGetter[] = [
  {
    name: "minDepositAmount",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "maxDepositAmount",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "investorProfile",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "Profile", optional: true },
  },
  {
    name: "balance",
    arguments: [],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "owner",
    arguments: [],
    returnType: { kind: "simple", type: "address", optional: false },
  },
];

const EarnContract_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "Deposit" } },
  { receiver: "internal", message: { kind: "typed", type: "ClaimRewards" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "TemporaryWithdrawFeature" },
  },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class EarnContract implements Contract {
  static async init(
    id: bigint,
    founder: Address,
    minDeposit: bigint,
    maxDepositMultiplier: bigint,
    rewardsPercent: bigint,
    depositDirectUpLineBonusPercent: bigint,
    depositFounderBonusPercent: bigint,
  ) {
    return await EarnContract_init(
      id,
      founder,
      minDeposit,
      maxDepositMultiplier,
      rewardsPercent,
      depositDirectUpLineBonusPercent,
      depositFounderBonusPercent,
    );
  }

  static async fromInit(
    id: bigint,
    founder: Address,
    minDeposit: bigint,
    maxDepositMultiplier: bigint,
    rewardsPercent: bigint,
    depositDirectUpLineBonusPercent: bigint,
    depositFounderBonusPercent: bigint,
  ) {
    const init = await EarnContract_init(
      id,
      founder,
      minDeposit,
      maxDepositMultiplier,
      rewardsPercent,
      depositDirectUpLineBonusPercent,
      depositFounderBonusPercent,
    );
    const address = contractAddress(0, init);
    return new EarnContract(address, init);
  }

  static fromAddress(address: Address) {
    return new EarnContract(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: EarnContract_types,
    getters: EarnContract_getters,
    receivers: EarnContract_receivers,
    errors: EarnContract_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: Deposit | ClaimRewards | TemporaryWithdrawFeature | Deploy,
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deposit"
    ) {
      body = beginCell().store(storeDeposit(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ClaimRewards"
    ) {
      body = beginCell().store(storeClaimRewards(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "TemporaryWithdrawFeature"
    ) {
      body = beginCell()
        .store(storeTemporaryWithdrawFeature(message))
        .endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getMinDepositAmount(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("minDepositAmount", builder.build()))
      .stack;
    let result = source.readBigNumber();
    return result;
  }

  async getMaxDepositAmount(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("maxDepositAmount", builder.build()))
      .stack;
    let result = source.readBigNumber();
    return result;
  }

  async getInvestorProfile(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("investorProfile", builder.build())).stack;
    const result_p = source.readTupleOpt();
    const result = result_p ? loadTupleProfile(result_p) : null;
    return result;
  }

  async getBalance(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("balance", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
