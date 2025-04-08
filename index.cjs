/* START CONFIG FOR BITGESELL MAINNET NETWORK */
// SOURCE: https://github.com/BitgesellOfficial/bitgesell/blob/master/src/kernel/chainparams.cpp#L148-L154
const BITGESELL_MAINNET = {
	messagePrefix: '\x18Bitgesell Signed Message:\n',
	bech32: 'bgl',
	bip32: {
		public: 0x0488b21e,
		private: 0x0488ade4,
	},
	pubKeyHash: 0x0A,
	scriptHash: 0x19,
	wif: 0x80,
};
/* END CONFIG FOR BITGESELL MAINNET NETWORK */

module.exports = {
	BITGESELL_MAINNET,
};
