# Voting-dapp

## Mac set-up

``` 
system: user $ brew update 
system: user $ brew install nodejs
system: user $ node --version
system: user $ v7.10.0
system: user $ npm --version
system: user $ 4.2.0
system: user $ mkdir voting_dapp
system: user $ cd voting_dapp
system: user $ npm install ethereumjs-testrpc web3@0.20.1 solc
```
## Start test-rpc

```
system: user $ node_modules/.bin/testrpc
EthereumJS TestRPC v6.0.3 (ganache-core: 2.0.2)

Available Accounts
==================
(0) 0x06cec08000d610dabd59f80f375ccc27c40c5d73
(1) 0x557e844c380ad562dbe6d4e0ebdb6e9865cde58f
(2) 0xb952403a36a837bfdfa307fdfb29ec99b65b730d
(3) 0xe3c5e25a4cdb8fec285c6c9cc1c11625da3372cc
(4) 0x291374b02271567b07acb778fc3f2bf1081b8775
(5) 0x08af6e16f8a0e369a7c5dce6cfb8bacc232a31af
(6) 0xd39cef71f8233dfc8b3f80bf65560160e9bee7da
(7) 0x69c3ce65b92f383b3b7b6bc4b8272d2e467a79da
(8) 0x7143cf894496d4554a74696e8620e9e47019efc1
(9) 0x6a284414567d9a2f10cf575e45db0f9b575eb05a

Private Keys
==================
(0) 123462f604e2656dd985488c0f6abfad2fbe9cb493dca7d39c6919e9ce680fdd
(1) 6dd9f1fce55d790e0d2700648ae390fb667f977324118559ce9db834171d7d0a
(2) f8f2ec37b42bfad3128ea3cb341774a4194d0347c0a103e3e2aee4e5214be00d
(3) f361e21a7d6da3d7b096bdf76701f3cfd2e821ef26d38e5356b5eaf33d0e9c46
(4) 1563c35417ec4f8895f3d718e948f109a7ad4189141eccf7dacb25430f548929
(5) 0b60486248892d1d32b4d6d59e989c6bafb99d239cc7aca23cd8d1e1028fc06d
(6) cdbf2e56ef0e89cb27d417209f6a8ded24b427e25a3140e53fcfe3dd39c4de8d
(7) bbadb620490db02b72f93ee227b136cffaf534d0285883ef153247322d06876f
(8) 8de7e9306d40f9debef4fe29e6b737c908f23a3c9310ad26f6d1c02287ccc87d
(9) 25d19502f45256365ad50cb6906bd1b17e0eadd787c6dc8bf2380efd558b8274

HD Wallet
==================
Mnemonic:      corn permit mixture program lemon mutual green mosquito mix file pulse brass
Base HD Path:  m/44'/60'/0'/0/{account_index}

Listening on localhost:8545


```

## Use Smart contract code 
- Voting.sol

## Compile Run contract on node (using solidity compiler, Web3.js)
```
system: user $ node
> Web3 = require('web3')
{ [Function: Web3]
  providers: 
   { HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] } }
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
Web3 {
  _requestManager: 
   RequestManager {
     provider: 
      HttpProvider {
        host: 'http://localhost:8545',
        timeout: 0,
        user: undefined,
        password: undefined },
     polls: {},
     timeout: null },
  currentProvider: 
   HttpProvider {
     host: 'http://localhost:8545',
     timeout: 0,
     user: undefined,
     password: undefined },
  eth: 
   Eth {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount: 
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount: 
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction: 
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock: 
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt: 
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction: { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile: { solidity: [Object], lll: [Object], serpent: [Object] },
     submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban: 
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  db: 
   DB {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     putString: { [Function: send] request: [Function: bound ], call: 'db_putString' },
     getString: { [Function: send] request: [Function: bound ], call: 'db_getString' },
     putHex: { [Function: send] request: [Function: bound ], call: 'db_putHex' },
     getHex: { [Function: send] request: [Function: bound ], call: 'db_getHex' } },
  shh: 
   Shh {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     version: { [Function: send] request: [Function: bound ], call: 'shh_version' },
     info: { [Function: send] request: [Function: bound ], call: 'shh_info' },
     setMaxMessageSize: { [Function: send] request: [Function: bound ], call: 'shh_setMaxMessageSize' },
     setMinPoW: { [Function: send] request: [Function: bound ], call: 'shh_setMinPoW' },
     markTrustedPeer: { [Function: send] request: [Function: bound ], call: 'shh_markTrustedPeer' },
     newKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_newKeyPair' },
     addPrivateKey: { [Function: send] request: [Function: bound ], call: 'shh_addPrivateKey' },
     deleteKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_deleteKeyPair' },
     hasKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_hasKeyPair' },
     getPublicKey: { [Function: send] request: [Function: bound ], call: 'shh_getPublicKey' },
     getPrivateKey: { [Function: send] request: [Function: bound ], call: 'shh_getPrivateKey' },
     newSymKey: { [Function: send] request: [Function: bound ], call: 'shh_newSymKey' },
     addSymKey: { [Function: send] request: [Function: bound ], call: 'shh_addSymKey' },
     generateSymKeyFromPassword: 
      { [Function: send]
        request: [Function: bound ],
        call: 'shh_generateSymKeyFromPassword' },
     hasSymKey: { [Function: send] request: [Function: bound ], call: 'shh_hasSymKey' },
     getSymKey: { [Function: send] request: [Function: bound ], call: 'shh_getSymKey' },
     deleteSymKey: { [Function: send] request: [Function: bound ], call: 'shh_deleteSymKey' },
     post: { [Function: send] request: [Function: bound ], call: 'shh_post' } },
  net: 
   Net {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     listening: [Getter],
     getListening: { [Function: get] request: [Function: bound ] },
     peerCount: [Getter],
     getPeerCount: { [Function: get] request: [Function: bound ] } },
  personal: 
   Personal {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     newAccount: { [Function: send] request: [Function: bound ], call: 'personal_newAccount' },
     importRawKey: { [Function: send] request: [Function: bound ], call: 'personal_importRawKey' },
     unlockAccount: { [Function: send] request: [Function: bound ], call: 'personal_unlockAccount' },
     ecRecover: { [Function: send] request: [Function: bound ], call: 'personal_ecRecover' },
     sign: { [Function: send] request: [Function: bound ], call: 'personal_sign' },
     sendTransaction: 
      { [Function: send]
        request: [Function: bound ],
        call: 'personal_sendTransaction' },
     lockAccount: { [Function: send] request: [Function: bound ], call: 'personal_lockAccount' },
     listAccounts: [Getter],
     getListAccounts: { [Function: get] request: [Function: bound ] } },
  bzz: 
   Swarm {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     blockNetworkRead: { [Function: send] request: [Function: bound ], call: 'bzz_blockNetworkRead' },
     syncEnabled: { [Function: send] request: [Function: bound ], call: 'bzz_syncEnabled' },
     swapEnabled: { [Function: send] request: [Function: bound ], call: 'bzz_swapEnabled' },
     download: { [Function: send] request: [Function: bound ], call: 'bzz_download' },
     upload: { [Function: send] request: [Function: bound ], call: 'bzz_upload' },
     retrieve: { [Function: send] request: [Function: bound ], call: 'bzz_retrieve' },
     store: { [Function: send] request: [Function: bound ], call: 'bzz_store' },
     get: { [Function: send] request: [Function: bound ], call: 'bzz_get' },
     put: { [Function: send] request: [Function: bound ], call: 'bzz_put' },
     modify: { [Function: send] request: [Function: bound ], call: 'bzz_modify' },
     hive: [Getter],
     getHive: { [Function: get] request: [Function: bound ] },
     info: [Getter],
     getInfo: { [Function: get] request: [Function: bound ] } },
  settings: Settings { defaultBlock: 'latest', defaultAccount: undefined },
  version: 
   { api: '0.20.1',
     node: [Getter],
     getNode: { [Function: get] request: [Function: bound ] },
     network: [Getter],
     getNetwork: { [Function: get] request: [Function: bound ] },
     ethereum: [Getter],
     getEthereum: { [Function: get] request: [Function: bound ] },
     whisper: [Getter],
     getWhisper: { [Function: get] request: [Function: bound ] } },
  providers: 
   { HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] },
  _extend: 
   { [Function: ex]
     formatters: 
      { inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
        inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
        inputCallFormatter: [Function: inputCallFormatter],
        inputTransactionFormatter: [Function: inputTransactionFormatter],
        inputAddressFormatter: [Function: inputAddressFormatter],
        inputPostFormatter: [Function: inputPostFormatter],
        outputBigNumberFormatter: [Function: outputBigNumberFormatter],
        outputTransactionFormatter: [Function: outputTransactionFormatter],
        outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
        outputBlockFormatter: [Function: outputBlockFormatter],
        outputLogFormatter: [Function: outputLogFormatter],
        outputPostFormatter: [Function: outputPostFormatter],
        outputSyncingFormatter: [Function: outputSyncingFormatter] },
     utils: 
      { padLeft: [Function: padLeft],
        padRight: [Function: padRight],
        toHex: [Function: toHex],
        toDecimal: [Function: toDecimal],
        fromDecimal: [Function: fromDecimal],
        toUtf8: [Function: toUtf8],
        toAscii: [Function: toAscii],
        fromUtf8: [Function: fromUtf8],
        fromAscii: [Function: fromAscii],
        transformToFullName: [Function: transformToFullName],
        extractDisplayName: [Function: extractDisplayName],
        extractTypeName: [Function: extractTypeName],
        toWei: [Function: toWei],
        fromWei: [Function: fromWei],
        toBigNumber: [Function: toBigNumber],
        toTwosComplement: [Function: toTwosComplement],
        toAddress: [Function: toAddress],
        isBigNumber: [Function: isBigNumber],
        isStrictAddress: [Function: isStrictAddress],
        isAddress: [Function: isAddress],
        isChecksumAddress: [Function: isChecksumAddress],
        toChecksumAddress: [Function: toChecksumAddress],
        isFunction: [Function: isFunction],
        isString: [Function: isString],
        isObject: [Function: isObject],
        isBoolean: [Function: isBoolean],
        isArray: [Function: isArray],
        isJson: [Function: isJson],
        isBloom: [Function: isBloom],
        isTopic: [Function: isTopic] },
     Method: [Function: Method],
     Property: [Function: Property] } }
> web3.eth.accounts
[ '0x06cec08000d610dabd59f80f375ccc27c40c5d73',
  '0x557e844c380ad562dbe6d4e0ebdb6e9865cde58f',
  '0xb952403a36a837bfdfa307fdfb29ec99b65b730d',
  '0xe3c5e25a4cdb8fec285c6c9cc1c11625da3372cc',
  '0x291374b02271567b07acb778fc3f2bf1081b8775',
  '0x08af6e16f8a0e369a7c5dce6cfb8bacc232a31af',
  '0xd39cef71f8233dfc8b3f80bf65560160e9bee7da',
  '0x69c3ce65b92f383b3b7b6bc4b8272d2e467a79da',
  '0x7143cf894496d4554a74696e8620e9e47019efc1',
  '0x6a284414567d9a2f10cf575e45db0f9b575eb05a' ]
> code = fs.readFileSync('Voting.sol').toString()
'pragma solidity ^0.4.18;\n\ncontract Voting {\n\n    mapping (bytes32 => uint8) public votesReceived;\n    bytes32[] public machineList;\n\n    function Voting(bytes32[] machineNames) public {\n        machineList = machineNames;\n    }\n\n    function totalVotesFor(bytes32 machine) view public returns (uint8) {\n        require(validMachine(machine));\n        return votesReceived[machine];\n    }\n\n    function voteForMachine(bytes32 machine) public {\n        require(validMachine(machine));\n        votesReceived[machine]  += 1;\n    }\n\n    function validMachine(bytes32 machine) view public returns (bool) {\n        for(uint i = 0; i < machineList.length; i++) {\n            if (machineList[i] == machine) {\n                return true;\n            }\n        }\n        return false;\n    }\n}'
> solc = require('solc')
{ version: [Function],
  license: [Function],
  compile: [Function: compile],
  compileStandard: [Function: compileStandard],
  compileStandardWrapper: [Function: compileStandardWrapper],
  linkBytecode: [Function: linkBytecode],
  supportsMulti: true,
  supportsImportCallback: true,
  supportsStandard: true,
  loadRemoteVersion: [Function: loadRemoteVersion],
  setupMethods: [Function: setupMethods] }
> compiledCode = solc.compile(code)
{ contracts: 
   { ':Voting': 
      { assembly: [Object],
        bytecode: '6060604052341561000f57600080fd5b6040516103da3803806103da833981016040528080518201919050508060019080519060200190610041929190610048565b50506100c0565b82805482825590600052602060002090810192821561008a579160200282015b82811115610089578251829060001916905591602001919060010190610068565b5b509050610097919061009b565b5090565b6100bd91905b808211156100b95760008160009055506001016100a1565b5090565b90565b61030b806100cf6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf7146100725780633c9ab950146100b357806361f9c1cb146100f25780637021939f14610119578063b47918af1461015a575b600080fd5b341561007d57600080fd5b610097600480803560001916906020019091905050610199565b604051808260ff1660ff16815260200191505060405180910390f35b34156100be57600080fd5b6100d460048080359060200190919050506101de565b60405180826000191660001916815260200191505060405180910390f35b34156100fd57600080fd5b610117600480803560001916906020019091905050610202565b005b341561012457600080fd5b61013e60048080356000191690602001909190505061025f565b604051808260ff1660ff16815260200191505060405180910390f35b341561016557600080fd5b61017f60048080356000191690602001909190505061027f565b604051808215151515815260200191505060405180910390f35b60006101a48261027f565b15156101af57600080fd5b600080836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b6001818154811015156101ed57fe5b90600052602060002090016000915090505481565b61020b8161027f565b151561021657600080fd5b6001600080836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff16021790555050565b60006020528060005260406000206000915054906101000a900460ff1681565b600080600090505b6001805490508110156102d45782600019166001828154811015156102a857fe5b9060005260206000209001546000191614156102c757600191506102d9565b8080600101915050610287565b600091505b509190505600a165627a7a7230582016f3a89ded7691e739d5ba32bd062a5a4607692a6809599a6dadbeb7e600f88d0029',
        functionHashes: [Object],
        gasEstimates: [Object],
        interface: '[{"constant":true,"inputs":[{"name":"machine","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"machineList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"machine","type":"bytes32"}],"name":"voteForMachine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"machine","type":"bytes32"}],"name":"validMachine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"machineNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
        metadata: '{"compiler":{"version":"0.4.18+commit.9cf6e910"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[{"name":"machine","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"machineList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"machine","type":"bytes32"}],"name":"voteForMachine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"machine","type":"bytes32"}],"name":"validMachine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"machineNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"Voting"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0x838745a408651975b0444f6679d8e05a7a0f15c7ac93fbdbb7a63fdc2888dbc4","urls":["bzzr://d55019f7330d78293c5bae26ddfff90ef2d32fc296314f4d4bdc46a99fb2cbe2"]}},"version":1}',
        opcodes: 'PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3DA CODESIZE SUB DUP1 PUSH2 0x3DA DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP1 MLOAD DUP3 ADD SWAP2 SWAP1 POP POP DUP1 PUSH1 0x1 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x41 SWAP3 SWAP2 SWAP1 PUSH2 0x48 JUMP JUMPDEST POP POP PUSH2 0xC0 JUMP JUMPDEST DUP3 DUP1 SLOAD DUP3 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP3 DUP3 ISZERO PUSH2 0x8A JUMPI SWAP2 PUSH1 0x20 MUL DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x89 JUMPI DUP3 MLOAD DUP3 SWAP1 PUSH1 0x0 NOT AND SWAP1 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x68 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x97 SWAP2 SWAP1 PUSH2 0x9B JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0xBD SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xB9 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xA1 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x30B DUP1 PUSH2 0xCF PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x6D JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x2F265CF7 EQ PUSH2 0x72 JUMPI DUP1 PUSH4 0x3C9AB950 EQ PUSH2 0xB3 JUMPI DUP1 PUSH4 0x61F9C1CB EQ PUSH2 0xF2 JUMPI DUP1 PUSH4 0x7021939F EQ PUSH2 0x119 JUMPI DUP1 PUSH4 0xB47918AF EQ PUSH2 0x15A JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x7D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x97 PUSH1 0x4 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP2 SWAP1 POP POP PUSH2 0x199 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0xFF AND PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xBE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD4 PUSH1 0x4 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP2 SWAP1 POP POP PUSH2 0x1DE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xFD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x117 PUSH1 0x4 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP2 SWAP1 POP POP PUSH2 0x202 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0x124 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x13E PUSH1 0x4 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP2 SWAP1 POP POP PUSH2 0x25F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0xFF AND PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x165 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x17F PUSH1 0x4 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP2 SWAP1 POP POP PUSH2 0x27F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH2 0x1A4 DUP3 PUSH2 0x27F JUMP JUMPDEST ISZERO ISZERO PUSH2 0x1AF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 DUP4 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x1ED JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 ADD PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH2 0x20B DUP2 PUSH2 0x27F JUMP JUMPDEST ISZERO ISZERO PUSH2 0x216 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP1 DUP4 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 DUP3 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ADD SWAP3 POP PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 POP JUMPDEST PUSH1 0x1 DUP1 SLOAD SWAP1 POP DUP2 LT ISZERO PUSH2 0x2D4 JUMPI DUP3 PUSH1 0x0 NOT AND PUSH1 0x1 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x2A8 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 ADD SLOAD PUSH1 0x0 NOT AND EQ ISZERO PUSH2 0x2C7 JUMPI PUSH1 0x1 SWAP2 POP PUSH2 0x2D9 JUMP JUMPDEST DUP1 DUP1 PUSH1 0x1 ADD SWAP2 POP POP PUSH2 0x287 JUMP JUMPDEST PUSH1 0x0 SWAP2 POP JUMPDEST POP SWAP2 SWAP1 POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 AND RETURN 0xa8 SWAP14 0xed PUSH23 0x91E739D5BA32BD062A5A4607692A6809599A6DADBEB7E6 STOP 0xf8 DUP14 STOP 0x29 ',
        runtimeBytecode: '60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf7146100725780633c9ab950146100b357806361f9c1cb146100f25780637021939f14610119578063b47918af1461015a575b600080fd5b341561007d57600080fd5b610097600480803560001916906020019091905050610199565b604051808260ff1660ff16815260200191505060405180910390f35b34156100be57600080fd5b6100d460048080359060200190919050506101de565b60405180826000191660001916815260200191505060405180910390f35b34156100fd57600080fd5b610117600480803560001916906020019091905050610202565b005b341561012457600080fd5b61013e60048080356000191690602001909190505061025f565b604051808260ff1660ff16815260200191505060405180910390f35b341561016557600080fd5b61017f60048080356000191690602001909190505061027f565b604051808215151515815260200191505060405180910390f35b60006101a48261027f565b15156101af57600080fd5b600080836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b6001818154811015156101ed57fe5b90600052602060002090016000915090505481565b61020b8161027f565b151561021657600080fd5b6001600080836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff16021790555050565b60006020528060005260406000206000915054906101000a900460ff1681565b600080600090505b6001805490508110156102d45782600019166001828154811015156102a857fe5b9060005260206000209001546000191614156102c757600191506102d9565b8080600101915050610287565b600091505b509190505600a165627a7a7230582016f3a89ded7691e739d5ba32bd062a5a4607692a6809599a6dadbeb7e600f88d0029',
        srcmap: '26:756:0:-;;;137:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;208:12;194:11;:26;;;;;;;;;;;;:::i;:::-;;137:90;26:756;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
        srcmapRuntime: '26:756:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;233:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;102:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;393:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;532:248;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;233:154;294:5;319:21;332:7;319:12;:21::i;:::-;311:30;;;;;;;;358:13;:22;372:7;358:22;;;;;;;;;;;;;;;;;;;;;;;;;;;351:29;;233:154;;;:::o;102:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;393:133::-;459:21;472:7;459:12;:21::i;:::-;451:30;;;;;;;;518:1;491:13;:22;505:7;491:22;;;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;393:133;:::o;49:47::-;;;;;;;;;;;;;;;;;;;;;;:::o;532:248::-;592:4;612:6;621:1;612:10;;608:144;628:11;:18;;;;624:1;:22;608:144;;;689:7;671:25;;;:11;683:1;671:14;;;;;;;;;;;;;;;;;;;:25;;;;667:75;;;723:4;716:11;;;;667:75;648:3;;;;;;;608:144;;;768:5;761:12;;532:248;;;;;:::o' } },
  sourceList: [ '' ],
  sources: { '': { AST: [Object] } } }
> 
```


