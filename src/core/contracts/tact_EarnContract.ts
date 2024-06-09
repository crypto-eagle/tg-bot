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

export type TemporarySetRoundDateBack = {
  $$type: "TemporarySetRoundDateBack";
  daysBack: bigint;
};

export function storeTemporarySetRoundDateBack(src: TemporarySetRoundDateBack) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1356490945, 32);
    b_0.storeInt(src.daysBack, 257);
  };
}

export function loadTemporarySetRoundDateBack(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1356490945) {
    throw Error("Invalid prefix");
  }
  let _daysBack = sc_0.loadIntBig(257);
  return { $$type: "TemporarySetRoundDateBack" as const, daysBack: _daysBack };
}

function loadTupleTemporarySetRoundDateBack(source: TupleReader) {
  let _daysBack = source.readBigNumber();
  return { $$type: "TemporarySetRoundDateBack" as const, daysBack: _daysBack };
}

function storeTupleTemporarySetRoundDateBack(
  source: TemporarySetRoundDateBack,
) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.daysBack);
  return builder.build();
}

function dictValueParserTemporarySetRoundDateBack(): DictionaryValue<TemporarySetRoundDateBack> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(
        beginCell().store(storeTemporarySetRoundDateBack(src)).endCell(),
      );
    },
    parse: (src) => {
      return loadTemporarySetRoundDateBack(src.loadRef().beginParse());
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

export type DepositConstraintsResponse = {
  $$type: "DepositConstraintsResponse";
  min: bigint;
  max: bigint;
};

export function storeDepositConstraintsResponse(
  src: DepositConstraintsResponse,
) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.min);
    b_0.storeCoins(src.max);
  };
}

export function loadDepositConstraintsResponse(slice: Slice) {
  let sc_0 = slice;
  let _min = sc_0.loadCoins();
  let _max = sc_0.loadCoins();
  return {
    $$type: "DepositConstraintsResponse" as const,
    min: _min,
    max: _max,
  };
}

function loadTupleDepositConstraintsResponse(source: TupleReader) {
  let _min = source.readBigNumber();
  let _max = source.readBigNumber();
  return {
    $$type: "DepositConstraintsResponse" as const,
    min: _min,
    max: _max,
  };
}

function storeTupleDepositConstraintsResponse(
  source: DepositConstraintsResponse,
) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.min);
  builder.writeNumber(source.max);
  return builder.build();
}

function dictValueParserDepositConstraintsResponse(): DictionaryValue<DepositConstraintsResponse> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(
        beginCell().store(storeDepositConstraintsResponse(src)).endCell(),
      );
    },
    parse: (src) => {
      return loadDepositConstraintsResponse(src.loadRef().beginParse());
    },
  };
}

export type ProfileTotals = {
  $$type: "ProfileTotals";
  deposit: bigint;
  claimed: bigint;
  referalBonus: bigint;
};

export function storeProfileTotals(src: ProfileTotals) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.deposit);
    b_0.storeCoins(src.claimed);
    b_0.storeCoins(src.referalBonus);
  };
}

export function loadProfileTotals(slice: Slice) {
  let sc_0 = slice;
  let _deposit = sc_0.loadCoins();
  let _claimed = sc_0.loadCoins();
  let _referalBonus = sc_0.loadCoins();
  return {
    $$type: "ProfileTotals" as const,
    deposit: _deposit,
    claimed: _claimed,
    referalBonus: _referalBonus,
  };
}

function loadTupleProfileTotals(source: TupleReader) {
  let _deposit = source.readBigNumber();
  let _claimed = source.readBigNumber();
  let _referalBonus = source.readBigNumber();
  return {
    $$type: "ProfileTotals" as const,
    deposit: _deposit,
    claimed: _claimed,
    referalBonus: _referalBonus,
  };
}

function storeTupleProfileTotals(source: ProfileTotals) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.deposit);
  builder.writeNumber(source.claimed);
  builder.writeNumber(source.referalBonus);
  return builder.build();
}

function dictValueParserProfileTotals(): DictionaryValue<ProfileTotals> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeProfileTotals(src)).endCell());
    },
    parse: (src) => {
      return loadProfileTotals(src.loadRef().beginParse());
    },
  };
}

export type ProfileCurrentRound = {
  $$type: "ProfileCurrentRound";
  deposit: bigint;
  claimedAmount: bigint;
  secondsPast: bigint;
  earnedAmount: bigint;
  earnedPercent: bigint;
};

export function storeProfileCurrentRound(src: ProfileCurrentRound) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.deposit);
    b_0.storeCoins(src.claimedAmount);
    b_0.storeUint(src.secondsPast, 32);
    b_0.storeCoins(src.earnedAmount);
    b_0.storeUint(src.earnedPercent, 8);
  };
}

export function loadProfileCurrentRound(slice: Slice) {
  let sc_0 = slice;
  let _deposit = sc_0.loadCoins();
  let _claimedAmount = sc_0.loadCoins();
  let _secondsPast = sc_0.loadUintBig(32);
  let _earnedAmount = sc_0.loadCoins();
  let _earnedPercent = sc_0.loadUintBig(8);
  return {
    $$type: "ProfileCurrentRound" as const,
    deposit: _deposit,
    claimedAmount: _claimedAmount,
    secondsPast: _secondsPast,
    earnedAmount: _earnedAmount,
    earnedPercent: _earnedPercent,
  };
}

function loadTupleProfileCurrentRound(source: TupleReader) {
  let _deposit = source.readBigNumber();
  let _claimedAmount = source.readBigNumber();
  let _secondsPast = source.readBigNumber();
  let _earnedAmount = source.readBigNumber();
  let _earnedPercent = source.readBigNumber();
  return {
    $$type: "ProfileCurrentRound" as const,
    deposit: _deposit,
    claimedAmount: _claimedAmount,
    secondsPast: _secondsPast,
    earnedAmount: _earnedAmount,
    earnedPercent: _earnedPercent,
  };
}

function storeTupleProfileCurrentRound(source: ProfileCurrentRound) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.deposit);
  builder.writeNumber(source.claimedAmount);
  builder.writeNumber(source.secondsPast);
  builder.writeNumber(source.earnedAmount);
  builder.writeNumber(source.earnedPercent);
  return builder.build();
}

function dictValueParserProfileCurrentRound(): DictionaryValue<ProfileCurrentRound> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(
        beginCell().store(storeProfileCurrentRound(src)).endCell(),
      );
    },
    parse: (src) => {
      return loadProfileCurrentRound(src.loadRef().beginParse());
    },
  };
}

export type ProfileDataResponse = {
  $$type: "ProfileDataResponse";
  canDeposit: boolean;
  refAddress: Address;
  upLine: Address;
  total: ProfileTotals;
  current: ProfileCurrentRound | null;
};

export function storeProfileDataResponse(src: ProfileDataResponse) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.canDeposit);
    b_0.storeAddress(src.refAddress);
    b_0.storeAddress(src.upLine);
    b_0.store(storeProfileTotals(src.total));
    let b_1 = new Builder();
    if (src.current !== null && src.current !== undefined) {
      b_1.storeBit(true);
      b_1.store(storeProfileCurrentRound(src.current));
    } else {
      b_1.storeBit(false);
    }
    b_0.storeRef(b_1.endCell());
  };
}

export function loadProfileDataResponse(slice: Slice) {
  let sc_0 = slice;
  let _canDeposit = sc_0.loadBit();
  let _refAddress = sc_0.loadAddress();
  let _upLine = sc_0.loadAddress();
  let _total = loadProfileTotals(sc_0);
  let sc_1 = sc_0.loadRef().beginParse();
  let _current = sc_1.loadBit() ? loadProfileCurrentRound(sc_1) : null;
  return {
    $$type: "ProfileDataResponse" as const,
    canDeposit: _canDeposit,
    refAddress: _refAddress,
    upLine: _upLine,
    total: _total,
    current: _current,
  };
}

function loadTupleProfileDataResponse(source: TupleReader) {
  let _canDeposit = source.readBoolean();
  let _refAddress = source.readAddress();
  let _upLine = source.readAddress();
  const _total = loadTupleProfileTotals(source.readTuple());
  const _current_p = source.readTupleOpt();
  const _current = _current_p ? loadTupleProfileCurrentRound(_current_p) : null;
  return {
    $$type: "ProfileDataResponse" as const,
    canDeposit: _canDeposit,
    refAddress: _refAddress,
    upLine: _upLine,
    total: _total,
    current: _current,
  };
}

function storeTupleProfileDataResponse(source: ProfileDataResponse) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.canDeposit);
  builder.writeAddress(source.refAddress);
  builder.writeAddress(source.upLine);
  builder.writeTuple(storeTupleProfileTotals(source.total));
  if (source.current !== null && source.current !== undefined) {
    builder.writeTuple(storeTupleProfileCurrentRound(source.current));
  } else {
    builder.writeTuple(null);
  }
  return builder.build();
}

function dictValueParserProfileDataResponse(): DictionaryValue<ProfileDataResponse> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(
        beginCell().store(storeProfileDataResponse(src)).endCell(),
      );
    },
    parse: (src) => {
      return loadProfileDataResponse(src.loadRef().beginParse());
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
    "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",
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
  61334: { message: `Investor not found` },
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
    name: "TemporarySetRoundDateBack",
    header: 1356490945,
    fields: [
      {
        name: "daysBack",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
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
    name: "DepositConstraintsResponse",
    header: null,
    fields: [
      {
        name: "min",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "max",
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
    name: "ProfileTotals",
    header: null,
    fields: [
      {
        name: "deposit",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "claimed",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "referalBonus",
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
    name: "ProfileCurrentRound",
    header: null,
    fields: [
      {
        name: "deposit",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "claimedAmount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "secondsPast",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "earnedAmount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "earnedPercent",
        type: { kind: "simple", type: "uint", optional: false, format: 8 },
      },
    ],
  },
  {
    name: "ProfileDataResponse",
    header: null,
    fields: [
      {
        name: "canDeposit",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "refAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "upLine",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "total",
        type: { kind: "simple", type: "ProfileTotals", optional: false },
      },
      {
        name: "current",
        type: { kind: "simple", type: "ProfileCurrentRound", optional: true },
      },
    ],
  },
];

const EarnContract_getters: ABIGetter[] = [
  {
    name: "depositConstraints",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: {
      kind: "simple",
      type: "DepositConstraintsResponse",
      optional: false,
    },
  },
  {
    name: "investorProfile",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "ProfileDataResponse", optional: true },
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
  {
    receiver: "internal",
    message: { kind: "typed", type: "TemporaryWithdrawFeature" },
  },
  {
    receiver: "internal",
    message: { kind: "typed", type: "TemporarySetRoundDateBack" },
  },
  { receiver: "internal", message: { kind: "typed", type: "Deposit" } },
  { receiver: "internal", message: { kind: "typed", type: "ClaimRewards" } },
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
    message:
      | TemporaryWithdrawFeature
      | TemporarySetRoundDateBack
      | Deposit
      | ClaimRewards
      | Deploy,
  ) {
    let body: Cell | null = null;
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
      message.$$type === "TemporarySetRoundDateBack"
    ) {
      body = beginCell()
        .store(storeTemporarySetRoundDateBack(message))
        .endCell();
    }
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
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getDepositConstraints(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("depositConstraints", builder.build()))
      .stack;
    const result = loadTupleDepositConstraintsResponse(source);
    return result;
  }

  async getInvestorProfile(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("investorProfile", builder.build())).stack;
    const result_p = source.readTupleOpt();
    const result = result_p ? loadTupleProfileDataResponse(result_p) : null;
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
