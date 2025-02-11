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
  DictionaryValue
} from '@ton/core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
}

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
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
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
    }
  }
}

export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
}

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
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
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
    }
  }
}

export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
    if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
    if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
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
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
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
    }
  }
}

export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'Deploy' as const, queryId: _queryId };
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
    }
  }
}

export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'DeployOk' as const, queryId: _queryId };
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
    }
  }
}

export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
}

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
  if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
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
    }
  }
}

export type ChangeOwner = {
  $$type: 'ChangeOwner';
  queryId: bigint;
  newOwner: Address;
}

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
  if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
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
    }
  }
}

export type ChangeOwnerOk = {
  $$type: 'ChangeOwnerOk';
  queryId: bigint;
  newOwner: Address;
}

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
  if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
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
    }
  }
}

export type Deposit = {
  $$type: 'Deposit';
  upLine: Address | null;
}

export function storeDeposit(src: Deposit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(532115219, 32);
    b_0.storeAddress(src.upLine);
  };
}

export function loadDeposit(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 532115219) { throw Error('Invalid prefix'); }
  let _upLine = sc_0.loadMaybeAddress();
  return { $$type: 'Deposit' as const, upLine: _upLine };
}

function loadTupleDeposit(source: TupleReader) {
  let _upLine = source.readAddressOpt();
  return { $$type: 'Deposit' as const, upLine: _upLine };
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
    }
  }
}

export type ClaimRewards = {
  $$type: 'ClaimRewards';
}

export function storeClaimRewards(src: ClaimRewards) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(155852668, 32);
  };
}

export function loadClaimRewards(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 155852668) { throw Error('Invalid prefix'); }
  return { $$type: 'ClaimRewards' as const };
}

function loadTupleClaimRewards(source: TupleReader) {
  return { $$type: 'ClaimRewards' as const };
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
    }
  }
}

export type ContractMeta = {
  $$type: 'ContractMeta';
  founder: Address;
  minDeposit: bigint;
  maxDepositMultiplier: bigint;
  rewardsPercent: bigint;
  depositDirectUpLineBonusPercent: bigint;
  depositFounderBonusPercent: bigint;
}

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
  return { $$type: 'ContractMeta' as const, founder: _founder, minDeposit: _minDeposit, maxDepositMultiplier: _maxDepositMultiplier, rewardsPercent: _rewardsPercent, depositDirectUpLineBonusPercent: _depositDirectUpLineBonusPercent, depositFounderBonusPercent: _depositFounderBonusPercent };
}

function loadTupleContractMeta(source: TupleReader) {
  let _founder = source.readAddress();
  let _minDeposit = source.readBigNumber();
  let _maxDepositMultiplier = source.readBigNumber();
  let _rewardsPercent = source.readBigNumber();
  let _depositDirectUpLineBonusPercent = source.readBigNumber();
  let _depositFounderBonusPercent = source.readBigNumber();
  return { $$type: 'ContractMeta' as const, founder: _founder, minDeposit: _minDeposit, maxDepositMultiplier: _maxDepositMultiplier, rewardsPercent: _rewardsPercent, depositDirectUpLineBonusPercent: _depositDirectUpLineBonusPercent, depositFounderBonusPercent: _depositFounderBonusPercent };
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
    }
  }
}

export type Round = {
  $$type: 'Round';
  serial: bigint;
  amount: bigint;
  createdAt: bigint;
  isClaimed: boolean;
  claimedDailyIncome: bigint;
}

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
  return { $$type: 'Round' as const, serial: _serial, amount: _amount, createdAt: _createdAt, isClaimed: _isClaimed, claimedDailyIncome: _claimedDailyIncome };
}

function loadTupleRound(source: TupleReader) {
  let _serial = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _createdAt = source.readBigNumber();
  let _isClaimed = source.readBoolean();
  let _claimedDailyIncome = source.readBigNumber();
  return { $$type: 'Round' as const, serial: _serial, amount: _amount, createdAt: _createdAt, isClaimed: _isClaimed, claimedDailyIncome: _claimedDailyIncome };
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
    }
  }
}

export type Investor = {
  $$type: 'Investor';
  address: Address;
  upLine: Address;
  round: Round;
  referralBonus: bigint;
  referralCount: bigint;
  referrals: Dictionary<bigint, Address>;
  totalDeposit: bigint;
  totalClaimedRewards: bigint;
  totalReferralBonus: bigint;
}

export function storeInvestor(src: Investor) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.address);
    b_0.storeAddress(src.upLine);
    b_0.store(storeRound(src.round));
    b_0.storeCoins(src.referralBonus);
    b_0.storeUint(src.referralCount, 8);
    b_0.storeDict(src.referrals, Dictionary.Keys.BigInt(257), Dictionary.Values.Address());
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
  let _referralCount = sc_0.loadUintBig(8);
  let _referrals = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), sc_0);
  let sc_1 = sc_0.loadRef().beginParse();
  let _totalDeposit = sc_1.loadCoins();
  let _totalClaimedRewards = sc_1.loadCoins();
  let _totalReferralBonus = sc_1.loadCoins();
  return { $$type: 'Investor' as const, address: _address, upLine: _upLine, round: _round, referralBonus: _referralBonus, referralCount: _referralCount, referrals: _referrals, totalDeposit: _totalDeposit, totalClaimedRewards: _totalClaimedRewards, totalReferralBonus: _totalReferralBonus };
}

function loadTupleInvestor(source: TupleReader) {
  let _address = source.readAddress();
  let _upLine = source.readAddress();
  const _round = loadTupleRound(source.readTuple());
  let _referralBonus = source.readBigNumber();
  let _referralCount = source.readBigNumber();
  let _referrals = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
  let _totalDeposit = source.readBigNumber();
  let _totalClaimedRewards = source.readBigNumber();
  let _totalReferralBonus = source.readBigNumber();
  return { $$type: 'Investor' as const, address: _address, upLine: _upLine, round: _round, referralBonus: _referralBonus, referralCount: _referralCount, referrals: _referrals, totalDeposit: _totalDeposit, totalClaimedRewards: _totalClaimedRewards, totalReferralBonus: _totalReferralBonus };
}

function storeTupleInvestor(source: Investor) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  builder.writeAddress(source.upLine);
  builder.writeTuple(storeTupleRound(source.round));
  builder.writeNumber(source.referralBonus);
  builder.writeNumber(source.referralCount);
  builder.writeCell(source.referrals.size > 0 ? beginCell().storeDictDirect(source.referrals, Dictionary.Keys.BigInt(257), Dictionary.Values.Address()).endCell() : null);
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
    }
  }
}

export type DepositConstraintsResponse = {
  $$type: 'DepositConstraintsResponse';
  min: bigint;
  max: bigint;
}

export function storeDepositConstraintsResponse(src: DepositConstraintsResponse) {
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
  return { $$type: 'DepositConstraintsResponse' as const, min: _min, max: _max };
}

function loadTupleDepositConstraintsResponse(source: TupleReader) {
  let _min = source.readBigNumber();
  let _max = source.readBigNumber();
  return { $$type: 'DepositConstraintsResponse' as const, min: _min, max: _max };
}

function storeTupleDepositConstraintsResponse(source: DepositConstraintsResponse) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.min);
  builder.writeNumber(source.max);
  return builder.build();
}

function dictValueParserDepositConstraintsResponse(): DictionaryValue<DepositConstraintsResponse> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDepositConstraintsResponse(src)).endCell());
    },
    parse: (src) => {
      return loadDepositConstraintsResponse(src.loadRef().beginParse());
    }
  }
}

export type ProfileTotals = {
  $$type: 'ProfileTotals';
  deposit: bigint;
  claimed: bigint;
  referalBonus: bigint;
}

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
  return { $$type: 'ProfileTotals' as const, deposit: _deposit, claimed: _claimed, referalBonus: _referalBonus };
}

function loadTupleProfileTotals(source: TupleReader) {
  let _deposit = source.readBigNumber();
  let _claimed = source.readBigNumber();
  let _referalBonus = source.readBigNumber();
  return { $$type: 'ProfileTotals' as const, deposit: _deposit, claimed: _claimed, referalBonus: _referalBonus };
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
    }
  }
}

export type ProfileCurrentRound = {
  $$type: 'ProfileCurrentRound';
  deposit: bigint;
  claimedAmount: bigint;
  secondsPast: bigint;
  earnedAmount: bigint;
  earnedPercent: bigint;
}

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
  return { $$type: 'ProfileCurrentRound' as const, deposit: _deposit, claimedAmount: _claimedAmount, secondsPast: _secondsPast, earnedAmount: _earnedAmount, earnedPercent: _earnedPercent };
}

function loadTupleProfileCurrentRound(source: TupleReader) {
  let _deposit = source.readBigNumber();
  let _claimedAmount = source.readBigNumber();
  let _secondsPast = source.readBigNumber();
  let _earnedAmount = source.readBigNumber();
  let _earnedPercent = source.readBigNumber();
  return { $$type: 'ProfileCurrentRound' as const, deposit: _deposit, claimedAmount: _claimedAmount, secondsPast: _secondsPast, earnedAmount: _earnedAmount, earnedPercent: _earnedPercent };
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
      buidler.storeRef(beginCell().store(storeProfileCurrentRound(src)).endCell());
    },
    parse: (src) => {
      return loadProfileCurrentRound(src.loadRef().beginParse());
    }
  }
}

export type ProfileDataResponse = {
  $$type: 'ProfileDataResponse';
  canDeposit: boolean;
  refAddress: Address;
  refCount: bigint;
  upLine: Address;
  total: ProfileTotals;
  current: ProfileCurrentRound | null;
}

export function storeProfileDataResponse(src: ProfileDataResponse) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.canDeposit);
    b_0.storeAddress(src.refAddress);
    b_0.storeUint(src.refCount, 8);
    b_0.storeAddress(src.upLine);
    b_0.store(storeProfileTotals(src.total));
    let b_1 = new Builder();
    if (src.current !== null && src.current !== undefined) { b_1.storeBit(true); b_1.store(storeProfileCurrentRound(src.current)); } else { b_1.storeBit(false); }
    b_0.storeRef(b_1.endCell());
  };
}

export function loadProfileDataResponse(slice: Slice) {
  let sc_0 = slice;
  let _canDeposit = sc_0.loadBit();
  let _refAddress = sc_0.loadAddress();
  let _refCount = sc_0.loadUintBig(8);
  let _upLine = sc_0.loadAddress();
  let _total = loadProfileTotals(sc_0);
  let sc_1 = sc_0.loadRef().beginParse();
  let _current = sc_1.loadBit() ? loadProfileCurrentRound(sc_1) : null;
  return { $$type: 'ProfileDataResponse' as const, canDeposit: _canDeposit, refAddress: _refAddress, refCount: _refCount, upLine: _upLine, total: _total, current: _current };
}

function loadTupleProfileDataResponse(source: TupleReader) {
  let _canDeposit = source.readBoolean();
  let _refAddress = source.readAddress();
  let _refCount = source.readBigNumber();
  let _upLine = source.readAddress();
  const _total = loadTupleProfileTotals(source.readTuple());
  const _current_p = source.readTupleOpt();
  const _current = _current_p ? loadTupleProfileCurrentRound(_current_p) : null;
  return { $$type: 'ProfileDataResponse' as const, canDeposit: _canDeposit, refAddress: _refAddress, refCount: _refCount, upLine: _upLine, total: _total, current: _current };
}

function storeTupleProfileDataResponse(source: ProfileDataResponse) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.canDeposit);
  builder.writeAddress(source.refAddress);
  builder.writeNumber(source.refCount);
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
      buidler.storeRef(beginCell().store(storeProfileDataResponse(src)).endCell());
    },
    parse: (src) => {
      return loadProfileDataResponse(src.loadRef().beginParse());
    }
  }
}

type EarnContract_init_args = {
  $$type: 'EarnContract_init_args';
  id: bigint;
  founder: Address;
  minDeposit: bigint;
  maxDepositMultiplier: bigint;
  rewardsPercent: bigint;
  depositDirectUpLineBonusPercent: bigint;
  depositFounderBonusPercent: bigint;
}

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

async function EarnContract_init(id: bigint, founder: Address, minDeposit: bigint, maxDepositMultiplier: bigint, rewardsPercent: bigint, depositDirectUpLineBonusPercent: bigint, depositFounderBonusPercent: bigint) {
  const __code = Cell.fromBase64('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KEgbpIwbY4eIG7y0IBvKFUgbwMBIG6SMG2ZIG7y0IBvJW8F4m8G4iBukjBt3oD0uAhGxsDbPNs8bKGA9OAP22zwgbpIwbeAgbvLQgG8tCREWCQgRFQhWFAhWFAhWFAhWFAhWFAhWFAgHERQHBhETBlYSBlYSBlYSBlYfBlYfUWRRZFFkUWRRZFFkBlYfBlYfBgURJwUEESYEAxElAwIRJAIBESMBESLbPFYVoVYUoFR4dlR4dlYTB1YTRy8wAfYtlV8PXwRw4FYcVhxWHFYcVhxWHFYcVhxWHFYcCxEcCwoRGwoJERoJVhkJCBEZCAcRGAcGERcGBREWBQQRFQQDERQDAhETAgEREgEREREWEScRFhEVESYRFREUESURFBETESQRExESESMREhERESIREREQESEREA8RIA8xBP4HVhMHViAHViAHVhsHViEHViEHViEHViEHViEHViAHViAHVRTbPFYRVhihKRC8EKxRkFGQUZBRkFGQCQgHERFVQNs8VhABoSgQqxCbUYBRgFGAUYBRgAgHBlYeBgUREQUEAxERAwIBEREB2zwvUU8EED9WGwNWGwNWFgMCERwCMzU1NAKgDhEfDg0RHg3bPFLgqIBkqQQKERAKEJ8QjhB9EGwQWxBKEDlIcBAmBREVBQQRFAQDERMDAhESAgEREQERFNs8bKEUtggQKhBZEDgXEEZBUBQyNQAcEItfC/gjMqGCAVGAqQQB5DdsmTlWElYSVhJWElYSVhJWElYSVhJWEhEQERwREA8RGw8OERoODREZDQwRGAwLERcLChEWCgkRFQkIERQIBxETBwYREQYFERoFBBEZBAMRGAMCERcCAREWARES2zxsoVAMoVAKtggQOkmAEDcWEDVEQDUC/AERGwFWGgERGlYZVhhWGBETERYRExESERUREhERERQREREQERMREA8REg8OEREODREQDQ8RHw8OER0O2zwCERACUO34IwERFqFWE6dkAREVqQQEERYEAxERAwIRFAIBERMBbwUQeRBoEF4QSQMREAMQLwEREQELkm073lUGCjY3ABIQJV8FqIBkqQQACBB8XwwAGm8IEDoQaRgXFhUTREAACPgnbxACASA7PAJNtegkGukwICF3XlwRBBrhYUQQIJ/3XloRMGE3XlwRG2eKoTtnjZRQPT4AEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtYm5ucnl4dlp2c2NhcXhBeWk0UjJNcFFMRXNxdEJKdnZSOUFNM0VzUlU5blKCADnu1E0NQB+GPSAAGOr9Mf+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHbPAb0BPQECglIiGwa4Pgo1wsKgwm68uCJ2zwH0VUF2zw/QEED8lR6mFR6mFR6mCpWFFYUVhRWFFYUVhRWFFYUVhRWFAkRHgkIER0IBxEcBwYRGwYFERoFBBEZBAMRGAMCERcCAREWAREVVhTbPDlbNxEQERsREA8RGg8OERkODREYDQwRFwwLERYLChEVCgkRFAkIERMIBxESB1UF2zxHRUYAWPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+gDTB9Mf0wfTB1VQAJaBAQHXAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wDUAdCBAQHXAIEBAdcAgQEB1wDUMNCBAQHXADAQRxBGEEUB2vhCVVBtbYEBAXGAHiIhbpVbWfRaMJjIAc8AQTP0QuKBAQFyeiIhbpVbWfRaMJjIAc8AQTP0QuKBAQFzeiIhbpVbWfRaMJjIAc8AQTP0QuKBAQF0eiIhbpVbWfRaMJjIAc8AQTP0QuKBAQF1eiJCAfAhbpVbWfRaMJjIAc8AQTP0QuKBAQF2eCIhbpVbWfRaMJjIAc8AQTP0QuKBAQF3eCIhbpVbWfRaMJjIAc8AQTP0QuKBAQF4UwEhbpVbWfRaMJjIAc8AQTP0QuKBAQF5eCIhbpVbWfRaMJjIAc8AQTP0QuKBAQF6eCJDAfohbpVbWfRaMJjIAc8AQTP0QuKBAQGAC3UiIW6VW1n0WjCYyAHPAEEz9ELigQEBgAx1IiFulVtZ9FowmMgBzwBBM/RC4oEBAYANdSIhbpVbWfRaMJjIAc8AQTP0QuKBAQGADnUiIW6VW1n0WjCYyAHPAEEz9ELigQEBgA91IkQAJCFulVtZ9FowmMgBzwBBM/RC4gAuEEVfBSFukTHgASBu8tCAby0QnF8MtgkCmFR6mFR6mFR6mCoKERQKCRETCQgREggHEREHBhEQBhBfEE4QPRAsERUb2zw5WzcPERAPEO8Q3hDNELwQqxCaEIkQeAcREQdVBds8bKFHSAE6gQELIwJZ9AtvoZIwbd8gbpIwbY6H0Ns8bB1vDeJJAF5fA2wSqCFukTHgASBu8tCAby0QrF8McSHAAZIwc94hwAKSMHneAcICkzCAFN4BqADS+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMH+gDTH9IA+gBVQAX6ANMH9ATUAdD6APoA+gAwED0QPBA7EDYQNRA0');
  const __system = Cell.fromBase64('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');
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initEarnContract_init_args({ $$type: 'EarnContract_init_args', id, founder, minDeposit, maxDepositMultiplier, rewardsPercent, depositDirectUpLineBonusPercent, depositFounderBonusPercent })(builder);
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
}

const EarnContract_types: ABIType[] = [
  {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
  {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
  {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
  {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"Deposit","header":532115219,"fields":[{"name":"upLine","type":{"kind":"simple","type":"address","optional":true}}]},
  {"name":"ClaimRewards","header":155852668,"fields":[]},
  {"name":"ContractMeta","header":null,"fields":[{"name":"founder","type":{"kind":"simple","type":"address","optional":false}},{"name":"minDeposit","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"maxDepositMultiplier","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"rewardsPercent","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"depositDirectUpLineBonusPercent","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"depositFounderBonusPercent","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
  {"name":"Round","header":null,"fields":[{"name":"serial","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"createdAt","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"isClaimed","type":{"kind":"simple","type":"bool","optional":false}},{"name":"claimedDailyIncome","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
  {"name":"Investor","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"upLine","type":{"kind":"simple","type":"address","optional":false}},{"name":"round","type":{"kind":"simple","type":"Round","optional":false}},{"name":"referralBonus","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"referralCount","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"referrals","type":{"kind":"dict","key":"int","value":"address"}},{"name":"totalDeposit","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"totalClaimedRewards","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"totalReferralBonus","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
  {"name":"DepositConstraintsResponse","header":null,"fields":[{"name":"min","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"max","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
  {"name":"ProfileTotals","header":null,"fields":[{"name":"deposit","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"claimed","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"referalBonus","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
  {"name":"ProfileCurrentRound","header":null,"fields":[{"name":"deposit","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"claimedAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"secondsPast","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"earnedAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"earnedPercent","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
  {"name":"ProfileDataResponse","header":null,"fields":[{"name":"canDeposit","type":{"kind":"simple","type":"bool","optional":false}},{"name":"refAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"refCount","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"upLine","type":{"kind":"simple","type":"address","optional":false}},{"name":"total","type":{"kind":"simple","type":"ProfileTotals","optional":false}},{"name":"current","type":{"kind":"simple","type":"ProfileCurrentRound","optional":true}}]},
]

const EarnContract_getters: ABIGetter[] = [
  {"name":"depositConstraints","arguments":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"DepositConstraintsResponse","optional":false}},
  {"name":"investorProfile","arguments":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"ProfileDataResponse","optional":true}},
  {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
  {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const EarnContract_receivers: ABIReceiver[] = [
  {"receiver":"internal","message":{"kind":"typed","type":"Deposit"}},
  {"receiver":"internal","message":{"kind":"typed","type":"ClaimRewards"}},
  {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class EarnContract implements Contract {

  static async init(id: bigint, founder: Address, minDeposit: bigint, maxDepositMultiplier: bigint, rewardsPercent: bigint, depositDirectUpLineBonusPercent: bigint, depositFounderBonusPercent: bigint) {
    return await EarnContract_init(id, founder, minDeposit, maxDepositMultiplier, rewardsPercent, depositDirectUpLineBonusPercent, depositFounderBonusPercent);
  }

  static async fromInit(id: bigint, founder: Address, minDeposit: bigint, maxDepositMultiplier: bigint, rewardsPercent: bigint, depositDirectUpLineBonusPercent: bigint, depositFounderBonusPercent: bigint) {
    const init = await EarnContract_init(id, founder, minDeposit, maxDepositMultiplier, rewardsPercent, depositDirectUpLineBonusPercent, depositFounderBonusPercent);
    const address = contractAddress(0, init);
    return new EarnContract(address, init);
  }

  static fromAddress(address: Address) {
    return new EarnContract(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
    types:  EarnContract_types,
    getters: EarnContract_getters,
    receivers: EarnContract_receivers,
    errors: EarnContract_errors,
  };

  private constructor(address: Address, init?: { code: Cell, data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Deposit | ClaimRewards | Deploy) {

    let body: Cell | null = null;
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deposit') {
      body = beginCell().store(storeDeposit(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimRewards') {
      body = beginCell().store(storeClaimRewards(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) { throw new Error('Invalid message type'); }

    await provider.internal(via, { ...args, body: body });

  }

  async getDepositConstraints(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get('depositConstraints', builder.build())).stack;
    const result = loadTupleDepositConstraintsResponse(source);
    return result;
  }

  async getInvestorProfile(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get('investorProfile', builder.build())).stack;
    const result_p = source.readTupleOpt();
    const result = result_p ? loadTupleProfileDataResponse(result_p) : null;
    return result;
  }

  async getBalance(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('balance', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('owner', builder.build())).stack;
    let result = source.readAddress();
    return result;
  }

}
