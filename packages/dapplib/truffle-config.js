require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name raise stereo erosion include private fringe gate'; 
let testAccounts = [
"0x88aa89606468f1aaef617506d353984784008dfbef3ee077dc3afd2e27cf45fe",
"0xc0609839db6c546ba3920819c57b0378cadb5d0c58c81149f2d7e89eff659270",
"0x959ba13cb724243a88604af5d023b872429fabdf65c33ff8d1f35e80918a7cf0",
"0x6e413ab60c9209a20d78bc49de674f0ce0bfab77e83b19d0da7d8fe06b035bcb",
"0xea9b81110179cdea54421887be5636ab4431c5843e30ba559fc8acaf264f43d4",
"0x68916757dd2d0109c068d5073c586e30d9514fb26a7acf07e0e7a14962ff2225",
"0xb3092febb4eacb3ca1c0589fe81ce627a79ccfc74128e5f471a4e0156178e9bb",
"0x9e9697f587d4886915cebc39ccaf1fc291c8ec4e505dad791db0bbdc34dded61",
"0x77afd9032b3bc9a63ce63b9b3f289ce74af8a2758e455616b30d9eb8a5a9b79e",
"0xc5f585eebc97dfed308a9264a7f0be2d5d3e0d2a3960e18ce54e25288bae7c3d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
