/* eslint-disable no-unused-vars */
// noinspection ES6UnusedImports

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
} from 'ton-core';

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
    return {$$type: 'StateInit' as const, code: _code, data: _data};
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return {$$type: 'StateInit' as const, code: _code, data: _data};
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
    return {$$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw};
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return {$$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw};
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
        $$type: 'SendParameters' as const,
        bounce: _bounce,
        to: _to,
        value: _value,
        mode: _mode,
        body: _body,
        code: _code,
        data: _data
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
        $$type: 'SendParameters' as const,
        bounce: _bounce,
        to: _to,
        value: _value,
        mode: _mode,
        body: _body,
        code: _code,
        data: _data
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
    if (sc_0.loadUint(32) !== 2490013878) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    return {$$type: 'Deploy' as const, queryId: _queryId};
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return {$$type: 'Deploy' as const, queryId: _queryId};
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
    if (sc_0.loadUint(32) !== 2952335191) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    return {$$type: 'DeployOk' as const, queryId: _queryId};
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return {$$type: 'DeployOk' as const, queryId: _queryId};
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
    if (sc_0.loadUint(32) !== 1829761339) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return {$$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback};
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return {$$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback};
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
    if (sc_0.loadUint(32) !== 2174598809) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return {$$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner};
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return {$$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner};
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
    if (sc_0.loadUint(32) !== 846932810) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return {$$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner};
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return {$$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner};
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
    if (sc_0.loadUint(32) !== 532115219) {
        throw Error('Invalid prefix');
    }
    let _upLine = sc_0.loadMaybeAddress();
    return {$$type: 'Deposit' as const, upLine: _upLine};
}

function loadTupleDeposit(source: TupleReader) {
    let _upLine = source.readAddressOpt();
    return {$$type: 'Deposit' as const, upLine: _upLine};
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

export type ClaimInvestorRewards = {
    $$type: 'ClaimInvestorRewards';
}

export function storeClaimInvestorRewards(src: ClaimInvestorRewards) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2782732493, 32);
    };
}

export function loadClaimInvestorRewards(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2782732493) {
        throw Error('Invalid prefix');
    }
    return {$$type: 'ClaimInvestorRewards' as const};
}

function loadTupleClaimInvestorRewards(source: TupleReader) {
    return {$$type: 'ClaimInvestorRewards' as const};
}

function storeTupleClaimInvestorRewards(source: ClaimInvestorRewards) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserClaimInvestorRewards(): DictionaryValue<ClaimInvestorRewards> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimInvestorRewards(src)).endCell());
        },
        parse: (src) => {
            return loadClaimInvestorRewards(src.loadRef().beginParse());
        }
    }
}

export type TopUpWithFounderFee = {
    $$type: 'TopUpWithFounderFee';
    amount: bigint;
}

export function storeTopUpWithFounderFee(src: TopUpWithFounderFee) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(183258831, 32);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadTopUpWithFounderFee(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 183258831) {
        throw Error('Invalid prefix');
    }
    let _amount = sc_0.loadIntBig(257);
    return {$$type: 'TopUpWithFounderFee' as const, amount: _amount};
}

function loadTupleTopUpWithFounderFee(source: TupleReader) {
    let _amount = source.readBigNumber();
    return {$$type: 'TopUpWithFounderFee' as const, amount: _amount};
}

function storeTupleTopUpWithFounderFee(source: TopUpWithFounderFee) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserTopUpWithFounderFee(): DictionaryValue<TopUpWithFounderFee> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTopUpWithFounderFee(src)).endCell());
        },
        parse: (src) => {
            return loadTopUpWithFounderFee(src.loadRef().beginParse());
        }
    }
}

export type ClaimStakeHoldersRewards = {
    $$type: 'ClaimStakeHoldersRewards';
}

export function storeClaimStakeHoldersRewards(src: ClaimStakeHoldersRewards) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174291428, 32);
    };
}

export function loadClaimStakeHoldersRewards(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174291428) {
        throw Error('Invalid prefix');
    }
    return {$$type: 'ClaimStakeHoldersRewards' as const};
}

function loadTupleClaimStakeHoldersRewards(source: TupleReader) {
    return {$$type: 'ClaimStakeHoldersRewards' as const};
}

function storeTupleClaimStakeHoldersRewards(source: ClaimStakeHoldersRewards) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserClaimStakeHoldersRewards(): DictionaryValue<ClaimStakeHoldersRewards> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimStakeHoldersRewards(src)).endCell());
        },
        parse: (src) => {
            return loadClaimStakeHoldersRewards(src.loadRef().beginParse());
        }
    }
}

export type Round = {
    $$type: 'Round';
    openDate: bigint;
    deposit: bigint;
}

export function storeRound(src: Round) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.openDate, 32);
        b_0.storeCoins(src.deposit);
    };
}

export function loadRound(slice: Slice) {
    let sc_0 = slice;
    let _openDate = sc_0.loadUintBig(32);
    let _deposit = sc_0.loadCoins();
    return {$$type: 'Round' as const, openDate: _openDate, deposit: _deposit};
}

function loadTupleRound(source: TupleReader) {
    let _openDate = source.readBigNumber();
    let _deposit = source.readBigNumber();
    return {$$type: 'Round' as const, openDate: _openDate, deposit: _deposit};
}

function storeTupleRound(source: Round) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.openDate);
    builder.writeNumber(source.deposit);
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

export type ContractMeta = {
    $$type: 'ContractMeta';
    id: bigint;
    founder: Address;
    minDeposit: bigint;
    roundMultiplier: bigint;
    maxDepositMultiplier: bigint;
    investors: Dictionary<Address, Investor>;
    bonusSystem: Dictionary<bigint, bigint>;
}

export function storeContractMeta(src: ContractMeta) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 32);
        b_0.storeAddress(src.founder);
        b_0.storeCoins(src.minDeposit);
        b_0.storeUint(src.roundMultiplier, 8);
        b_0.storeUint(src.maxDepositMultiplier, 8);
        b_0.storeDict(src.investors, Dictionary.Keys.Address(), dictValueParserInvestor());
        b_0.storeDict(src.bonusSystem, Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257));
    };
}

export function loadContractMeta(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(32);
    let _founder = sc_0.loadAddress();
    let _minDeposit = sc_0.loadCoins();
    let _roundMultiplier = sc_0.loadUintBig(8);
    let _maxDepositMultiplier = sc_0.loadUintBig(8);
    let _investors = Dictionary.load(Dictionary.Keys.Address(), dictValueParserInvestor(), sc_0);
    let _bonusSystem = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257), sc_0);
    return {
        $$type: 'ContractMeta' as const,
        id: _id,
        founder: _founder,
        minDeposit: _minDeposit,
        roundMultiplier: _roundMultiplier,
        maxDepositMultiplier: _maxDepositMultiplier,
        investors: _investors,
        bonusSystem: _bonusSystem
    };
}

function loadTupleContractMeta(source: TupleReader) {
    let _id = source.readBigNumber();
    let _founder = source.readAddress();
    let _minDeposit = source.readBigNumber();
    let _roundMultiplier = source.readBigNumber();
    let _maxDepositMultiplier = source.readBigNumber();
    let _investors = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserInvestor(), source.readCellOpt());
    let _bonusSystem = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257), source.readCellOpt());
    return {
        $$type: 'ContractMeta' as const,
        id: _id,
        founder: _founder,
        minDeposit: _minDeposit,
        roundMultiplier: _roundMultiplier,
        maxDepositMultiplier: _maxDepositMultiplier,
        investors: _investors,
        bonusSystem: _bonusSystem
    };
}

function storeTupleContractMeta(source: ContractMeta) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeAddress(source.founder);
    builder.writeNumber(source.minDeposit);
    builder.writeNumber(source.roundMultiplier);
    builder.writeNumber(source.maxDepositMultiplier);
    builder.writeCell(source.investors.size > 0 ? beginCell().storeDictDirect(source.investors, Dictionary.Keys.Address(), dictValueParserInvestor()).endCell() : null);
    builder.writeCell(source.bonusSystem.size > 0 ? beginCell().storeDictDirect(source.bonusSystem, Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257)).endCell() : null);
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

export type Investor = {
    $$type: 'Investor';
    upLine: Address;
    address: Address;
    totalDeposits: bigint;
    dailyIncome: bigint;
    dailyIncomeHistorical: bigint;
    bonus: bigint;
    bonusHistorical: bigint;
    round: bigint;
    currentRound: Round | null;
}

export function storeInvestor(src: Investor) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.upLine);
        b_0.storeAddress(src.address);
        b_0.storeCoins(src.totalDeposits);
        b_0.storeCoins(src.dailyIncome);
        b_0.storeCoins(src.dailyIncomeHistorical);
        let b_1 = new Builder();
        b_1.storeCoins(src.bonus);
        b_1.storeCoins(src.bonusHistorical);
        b_1.storeUint(src.round, 8);
        if (src.currentRound !== null && src.currentRound !== undefined) {
            b_1.storeBit(true);
            b_1.store(storeRound(src.currentRound));
        } else {
            b_1.storeBit(false);
        }
        b_0.storeRef(b_1.endCell());
    };
}

export function loadInvestor(slice: Slice) {
    let sc_0 = slice;
    let _upLine = sc_0.loadAddress();
    let _address = sc_0.loadAddress();
    let _totalDeposits = sc_0.loadCoins();
    let _dailyIncome = sc_0.loadCoins();
    let _dailyIncomeHistorical = sc_0.loadCoins();
    let sc_1 = sc_0.loadRef().beginParse();
    let _bonus = sc_1.loadCoins();
    let _bonusHistorical = sc_1.loadCoins();
    let _round = sc_1.loadUintBig(8);
    let _currentRound = sc_1.loadBit() ? loadRound(sc_1) : null;
    return {
        $$type: 'Investor' as const,
        upLine: _upLine,
        address: _address,
        totalDeposits: _totalDeposits,
        dailyIncome: _dailyIncome,
        dailyIncomeHistorical: _dailyIncomeHistorical,
        bonus: _bonus,
        bonusHistorical: _bonusHistorical,
        round: _round,
        currentRound: _currentRound
    };
}

function loadTupleInvestor(source: TupleReader) {
    let _upLine = source.readAddress();
    let _address = source.readAddress();
    let _totalDeposits = source.readBigNumber();
    let _dailyIncome = source.readBigNumber();
    let _dailyIncomeHistorical = source.readBigNumber();
    let _bonus = source.readBigNumber();
    let _bonusHistorical = source.readBigNumber();
    let _round = source.readBigNumber();
    const _currentRound_p = source.readTupleOpt();
    const _currentRound = _currentRound_p ? loadTupleRound(_currentRound_p) : null;
    return {
        $$type: 'Investor' as const,
        upLine: _upLine,
        address: _address,
        totalDeposits: _totalDeposits,
        dailyIncome: _dailyIncome,
        dailyIncomeHistorical: _dailyIncomeHistorical,
        bonus: _bonus,
        bonusHistorical: _bonusHistorical,
        round: _round,
        currentRound: _currentRound
    };
}

function storeTupleInvestor(source: Investor) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.upLine);
    builder.writeAddress(source.address);
    builder.writeNumber(source.totalDeposits);
    builder.writeNumber(source.dailyIncome);
    builder.writeNumber(source.dailyIncomeHistorical);
    builder.writeNumber(source.bonus);
    builder.writeNumber(source.bonusHistorical);
    builder.writeNumber(source.round);
    if (source.currentRound !== null && source.currentRound !== undefined) {
        builder.writeTuple(storeTupleRound(source.currentRound));
    } else {
        builder.writeTuple(null);
    }
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

type EarnContract_init_args = {
    $$type: 'EarnContract_init_args';
    id: bigint;
    minDeposit: bigint;
    founder: Address;
}

function initEarnContract_init_args(src: EarnContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
        b_0.storeInt(src.minDeposit, 257);
        b_0.storeAddress(src.founder);
    };
}

async function EarnContract_init(id: bigint, minDeposit: bigint, founder: Address) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initEarnContract_init_args({$$type: 'EarnContract_init_args', id, minDeposit, founder})(builder);
    const __data = builder.endCell();
    return {code: __code, data: __data};
}

const EarnContract_errors: { [key: number]: { message: string } } = {
    2: {message: `Stack undeflow`},
    3: {message: `Stack overflow`},
    4: {message: `Integer overflow`},
    5: {message: `Integer out of expected range`},
    6: {message: `Invalid opcode`},
    7: {message: `Type check error`},
    8: {message: `Cell overflow`},
    9: {message: `Cell underflow`},
    10: {message: `Dictionary error`},
    13: {message: `Out of gas error`},
    32: {message: `Method ID not found`},
    34: {message: `Action is invalid or not supported`},
    37: {message: `Not enough TON`},
    38: {message: `Not enough extra-currencies`},
    128: {message: `Null reference exception`},
    129: {message: `Invalid serialization prefix`},
    130: {message: `Invalid incoming message`},
    131: {message: `Constraints error`},
    132: {message: `Access denied`},
    133: {message: `Contract stopped`},
    134: {message: `Invalid argument`},
    135: {message: `Code of a contract was not found`},
    136: {message: `Invalid address`},
    137: {message: `Masterchain support is not enabled for this contract`},
    21413: {message: `Investor already exists`},
    34491: {message: `UpLine not exists`},
    37960: {message: `Current round is not finished`},
    42630: {message: `Minimum deposit is not enough`},
    54751: {message: `Maximum deposit exceeded`},
}

const EarnContract_types: ABIType[] = [
    {
        "name": "StateInit",
        "header": null,
        "fields": [{"name": "code", "type": {"kind": "simple", "type": "cell", "optional": false}}, {
            "name": "data",
            "type": {"kind": "simple", "type": "cell", "optional": false}
        }]
    },
    {
        "name": "Context",
        "header": null,
        "fields": [{
            "name": "bounced",
            "type": {"kind": "simple", "type": "bool", "optional": false}
        }, {"name": "sender", "type": {"kind": "simple", "type": "address", "optional": false}}, {
            "name": "value",
            "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
        }, {"name": "raw", "type": {"kind": "simple", "type": "slice", "optional": false}}]
    },
    {
        "name": "SendParameters",
        "header": null,
        "fields": [{"name": "bounce", "type": {"kind": "simple", "type": "bool", "optional": false}}, {
            "name": "to",
            "type": {"kind": "simple", "type": "address", "optional": false}
        }, {
            "name": "value",
            "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
        }, {
            "name": "mode",
            "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
        }, {"name": "body", "type": {"kind": "simple", "type": "cell", "optional": true}}, {
            "name": "code",
            "type": {"kind": "simple", "type": "cell", "optional": true}
        }, {"name": "data", "type": {"kind": "simple", "type": "cell", "optional": true}}]
    },
    {
        "name": "Deploy",
        "header": 2490013878,
        "fields": [{"name": "queryId", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}}]
    },
    {
        "name": "DeployOk",
        "header": 2952335191,
        "fields": [{"name": "queryId", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}}]
    },
    {
        "name": "FactoryDeploy",
        "header": 1829761339,
        "fields": [{
            "name": "queryId",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
        }, {"name": "cashback", "type": {"kind": "simple", "type": "address", "optional": false}}]
    },
    {
        "name": "ChangeOwner",
        "header": 2174598809,
        "fields": [{
            "name": "queryId",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
        }, {"name": "newOwner", "type": {"kind": "simple", "type": "address", "optional": false}}]
    },
    {
        "name": "ChangeOwnerOk",
        "header": 846932810,
        "fields": [{
            "name": "queryId",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
        }, {"name": "newOwner", "type": {"kind": "simple", "type": "address", "optional": false}}]
    },
    {
        "name": "Deposit",
        "header": 532115219,
        "fields": [{"name": "upLine", "type": {"kind": "simple", "type": "address", "optional": true}}]
    },
    {"name": "ClaimInvestorRewards", "header": 2782732493, "fields": []},
    {
        "name": "TopUpWithFounderFee",
        "header": 183258831,
        "fields": [{"name": "amount", "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}}]
    },
    {"name": "ClaimStakeHoldersRewards", "header": 2174291428, "fields": []},
    {
        "name": "Round",
        "header": null,
        "fields": [{
            "name": "openDate",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}
        }, {"name": "deposit", "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}}]
    },
    {
        "name": "ContractMeta",
        "header": null,
        "fields": [{
            "name": "id",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}
        }, {"name": "founder", "type": {"kind": "simple", "type": "address", "optional": false}}, {
            "name": "minDeposit",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "roundMultiplier",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 8}
        }, {
            "name": "maxDepositMultiplier",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 8}
        }, {
            "name": "investors",
            "type": {"kind": "dict", "key": "address", "value": "Investor", "valueFormat": "ref"}
        }, {"name": "bonusSystem", "type": {"kind": "dict", "key": "int", "value": "int"}}]
    },
    {
        "name": "Investor",
        "header": null,
        "fields": [{
            "name": "upLine",
            "type": {"kind": "simple", "type": "address", "optional": false}
        }, {
            "name": "address",
            "type": {"kind": "simple", "type": "address", "optional": false}
        }, {
            "name": "totalDeposits",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "dailyIncome",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "dailyIncomeHistorical",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "bonus",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "bonusHistorical",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "round",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 8}
        }, {"name": "currentRound", "type": {"kind": "simple", "type": "Round", "optional": true}}]
    },
]

const EarnContract_getters: ABIGetter[] = [
    {
        "name": "totalDeposit",
        "arguments": [],
        "returnType": {"kind": "simple", "type": "ContractMeta", "optional": false}
    },
    {
        "name": "minDeposit",
        "arguments": [],
        "returnType": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    },
    {
        "name": "maxDeposit",
        "arguments": [],
        "returnType": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    },
    {"name": "owner", "arguments": [], "returnType": {"kind": "simple", "type": "address", "optional": false}},
    {
        "name": "totalBalance",
        "arguments": [],
        "returnType": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    },
]

const EarnContract_receivers: ABIReceiver[] = [
    {"receiver": "internal", "message": {"kind": "typed", "type": "Deposit"}},
    {"receiver": "internal", "message": {"kind": "typed", "type": "Deploy"}},
]

export class EarnContract implements Contract {

    static async init(id: bigint, minDeposit: bigint, founder: Address) {
        return await EarnContract_init(id, minDeposit, founder);
    }

    static async fromInit(id: bigint, minDeposit: bigint, founder: Address) {
        const init = await EarnContract_init(id, minDeposit, founder);
        const address = contractAddress(0, init);
        return new EarnContract(address, init);
    }

    static fromAddress(address: Address) {
        return new EarnContract(address);
    }

    readonly address: Address;
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types: EarnContract_types,
        getters: EarnContract_getters,
        receivers: EarnContract_receivers,
        errors: EarnContract_errors,
    };

    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }

    async send(provider: ContractProvider, via: Sender, args: {
        value: bigint,
        bounce?: boolean | null | undefined
    }, message: Deposit | Deploy) {

        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deposit') {
            body = beginCell().store(storeDeposit(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) {
            throw new Error('Invalid message type');
        }

        await provider.internal(via, {...args, body: body});

    }

    async getTotalDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('totalDeposit', builder.build())).stack;
        const result = loadTupleContractMeta(source);
        return result;
    }

    async getMinDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('minDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }

    async getMaxDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('maxDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }

    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }

    async getTotalBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('totalBalance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }

}
