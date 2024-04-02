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

export type Transfer = {
    $$type: 'Transfer';
    date: bigint;
    amount: bigint;
    isDeposit: boolean;
}

export function storeTransfer(src: Transfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.date, 32);
        b_0.storeCoins(src.amount);
        b_0.storeBit(src.isDeposit);
    };
}

export function loadTransfer(slice: Slice) {
    let sc_0 = slice;
    let _date = sc_0.loadUintBig(32);
    let _amount = sc_0.loadCoins();
    let _isDeposit = sc_0.loadBit();
    return {$$type: 'Transfer' as const, date: _date, amount: _amount, isDeposit: _isDeposit};
}

function loadTupleTransfer(source: TupleReader) {
    let _date = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _isDeposit = source.readBoolean();
    return {$$type: 'Transfer' as const, date: _date, amount: _amount, isDeposit: _isDeposit};
}

function storeTupleTransfer(source: Transfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.date);
    builder.writeNumber(source.amount);
    builder.writeBoolean(source.isDeposit);
    return builder.build();
}

function dictValueParserTransfer(): DictionaryValue<Transfer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTransfer(src.loadRef().beginParse());
        }
    }
}

export type Investor = {
    $$type: 'Investor';
    upLine: Address;
    bonus: bigint;
    transfers: Dictionary<number, Transfer>;
    transfersCount: bigint;
}

export function storeInvestor(src: Investor) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.upLine);
        b_0.storeCoins(src.bonus);
        b_0.storeDict(src.transfers, Dictionary.Keys.Uint(32), dictValueParserTransfer());
        b_0.storeUint(src.transfersCount, 32);
    };
}

export function loadInvestor(slice: Slice) {
    let sc_0 = slice;
    let _upLine = sc_0.loadAddress();
    let _bonus = sc_0.loadCoins();
    let _transfers = Dictionary.load(Dictionary.Keys.Uint(32), dictValueParserTransfer(), sc_0);
    let _transfersCount = sc_0.loadUintBig(32);
    return {
        $$type: 'Investor' as const,
        upLine: _upLine,
        bonus: _bonus,
        transfers: _transfers,
        transfersCount: _transfersCount
    };
}

function loadTupleInvestor(source: TupleReader) {
    let _upLine = source.readAddress();
    let _bonus = source.readBigNumber();
    let _transfers = Dictionary.loadDirect(Dictionary.Keys.Uint(32), dictValueParserTransfer(), source.readCellOpt());
    let _transfersCount = source.readBigNumber();
    return {
        $$type: 'Investor' as const,
        upLine: _upLine,
        bonus: _bonus,
        transfers: _transfers,
        transfersCount: _transfersCount
    };
}

function storeTupleInvestor(source: Investor) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.upLine);
    builder.writeNumber(source.bonus);
    builder.writeCell(source.transfers.size > 0 ? beginCell().storeDictDirect(source.transfers, Dictionary.Keys.Uint(32), dictValueParserTransfer()).endCell() : null);
    builder.writeNumber(source.transfersCount);
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

export type BalanceInfo = {
    $$type: 'BalanceInfo';
    totalDeposits: bigint;
    totalWithdrawals: bigint;
    totalEarns: bigint;
    referralBonus: bigint;
    dailyIncome: bigint;
}

export function storeBalanceInfo(src: BalanceInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.totalDeposits);
        b_0.storeCoins(src.totalWithdrawals);
        b_0.storeCoins(src.totalEarns);
        b_0.storeCoins(src.referralBonus);
        b_0.storeCoins(src.dailyIncome);
    };
}

export function loadBalanceInfo(slice: Slice) {
    let sc_0 = slice;
    let _totalDeposits = sc_0.loadCoins();
    let _totalWithdrawals = sc_0.loadCoins();
    let _totalEarns = sc_0.loadCoins();
    let _referralBonus = sc_0.loadCoins();
    let _dailyIncome = sc_0.loadCoins();
    return {
        $$type: 'BalanceInfo' as const,
        totalDeposits: _totalDeposits,
        totalWithdrawals: _totalWithdrawals,
        totalEarns: _totalEarns,
        referralBonus: _referralBonus,
        dailyIncome: _dailyIncome
    };
}

function loadTupleBalanceInfo(source: TupleReader) {
    let _totalDeposits = source.readBigNumber();
    let _totalWithdrawals = source.readBigNumber();
    let _totalEarns = source.readBigNumber();
    let _referralBonus = source.readBigNumber();
    let _dailyIncome = source.readBigNumber();
    return {
        $$type: 'BalanceInfo' as const,
        totalDeposits: _totalDeposits,
        totalWithdrawals: _totalWithdrawals,
        totalEarns: _totalEarns,
        referralBonus: _referralBonus,
        dailyIncome: _dailyIncome
    };
}

function storeTupleBalanceInfo(source: BalanceInfo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.totalDeposits);
    builder.writeNumber(source.totalWithdrawals);
    builder.writeNumber(source.totalEarns);
    builder.writeNumber(source.referralBonus);
    builder.writeNumber(source.dailyIncome);
    return builder.build();
}

function dictValueParserBalanceInfo(): DictionaryValue<BalanceInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeBalanceInfo(src)).endCell());
        },
        parse: (src) => {
            return loadBalanceInfo(src.loadRef().beginParse());
        }
    }
}

type MainContract_init_args = {
    $$type: 'MainContract_init_args';
    id: bigint;
    minDeposit: bigint;
}

function initMainContract_init_args(src: MainContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
        b_0.storeInt(src.minDeposit, 257);
    };
}

async function MainContract_init(id: bigint, minDeposit: bigint) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initMainContract_init_args({$$type: 'MainContract_init_args', id, minDeposit})(builder);
    const __data = builder.endCell();
    return {code: __code, data: __data};
}

const MainContract_errors: { [key: number]: { message: string } } = {
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
    42630: {message: `Minimum deposit is not enough`},
}

const MainContract_types: ABIType[] = [
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
    {
        "name": "Transfer",
        "header": null,
        "fields": [{
            "name": "date",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}
        }, {
            "name": "amount",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {"name": "isDeposit", "type": {"kind": "simple", "type": "bool", "optional": false}}]
    },
    {
        "name": "Investor",
        "header": null,
        "fields": [{
            "name": "upLine",
            "type": {"kind": "simple", "type": "address", "optional": false}
        }, {
            "name": "bonus",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "transfers",
            "type": {"kind": "dict", "key": "uint", "keyFormat": 32, "value": "Transfer", "valueFormat": "ref"}
        }, {"name": "transfersCount", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}}]
    },
    {
        "name": "BalanceInfo",
        "header": null,
        "fields": [{
            "name": "totalDeposits",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "totalWithdrawals",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "totalEarns",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {
            "name": "referralBonus",
            "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
        }, {"name": "dailyIncome", "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}}]
    },
]

const MainContract_getters: ABIGetter[] = [
    {
        "name": "investorInfo",
        "arguments": [{"name": "address", "type": {"kind": "simple", "type": "address", "optional": false}}],
        "returnType": {"kind": "simple", "type": "Investor", "optional": true}
    },
    {
        "name": "balanceInfo",
        "arguments": [{"name": "address", "type": {"kind": "simple", "type": "address", "optional": false}}],
        "returnType": {"kind": "simple", "type": "BalanceInfo", "optional": true}
    },
    {
        "name": "minDepositValue",
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

const MainContract_receivers: ABIReceiver[] = [
    {"receiver": "internal", "message": {"kind": "typed", "type": "Deposit"}},
    {"receiver": "internal", "message": {"kind": "typed", "type": "Deploy"}},
]

export class MainContract implements Contract {

    static async init(id: bigint, minDeposit: bigint) {
        return await MainContract_init(id, minDeposit);
    }

    static async fromInit(id: bigint, minDeposit: bigint) {
        const init = await MainContract_init(id, minDeposit);
        const address = contractAddress(0, init);
        return new MainContract(address, init);
    }

    static fromAddress(address: Address) {
        return new MainContract(address);
    }

    readonly address: Address;
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types: MainContract_types,
        getters: MainContract_getters,
        receivers: MainContract_receivers,
        errors: MainContract_errors,
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

    async getInvestorInfo(provider: ContractProvider, address: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(address);
        let source = (await provider.get('investorInfo', builder.build())).stack;
        const result_p = source.readTupleOpt();
        const result = result_p ? loadTupleInvestor(result_p) : null;
        return result;
    }

    async getBalanceInfo(provider: ContractProvider, address: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(address);
        let source = (await provider.get('balanceInfo', builder.build())).stack;
        const result_p = source.readTupleOpt();
        const result = result_p ? loadTupleBalanceInfo(result_p) : null;
        return result;
    }

    async getMinDepositValue(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('minDepositValue', builder.build())).stack;
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
