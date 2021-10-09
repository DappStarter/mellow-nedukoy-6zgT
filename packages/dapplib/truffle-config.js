require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rescue night modify hidden knock equal gaze'; 
let testAccounts = [
"0x8a8742f4c7cfb53a81f87f9fb1535bb23d79dc6a57b863c603bad4e87cd5ca1a",
"0x3c0357a096b00a1895776537bb165ff08c95eb2557f48e73b394d951c0c255f8",
"0x1a1da25bddda381f03305a996b2935d4ab90d8ebd7ec8ec89f920d0cad18cb44",
"0xd3cc99211df8c27b532dc9d167a541560ae0234a760cc12ee2d523b8125b869f",
"0xfeaebc74ab982a85532d92c325a88fbe8d0b393787e6d40e668e48dc2ed56757",
"0x1ed2f2c6e8dd16fb8ec374355f95cd39c2a7779451bcab5bd0a54aeac4a3fe2b",
"0xdc2f48ad897e6107d132b640f60383f662f45099b9bf2626a942d412a2e700ea",
"0xe2013983301671c73acda51ca9805959304de41c66941cd41a97b4ca34034808",
"0x19fde01b8bd23f24852cd44e68409994e57bebeab32e9aca0ed50342ecd00890",
"0xfe55862f2b59f8dee70aa4bf9cf64346d448e2dec36037f4a9047f3fa144df03"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


