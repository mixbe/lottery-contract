import { task } from 'hardhat/config';
import { waitForTx } from '../../helpers/utilities/tx';
import { parseUnits } from 'ethers/lib/utils';

task(`faucet-drip`, `Faucet drip`)
  .addParam('symbol', 'The ERC20 symbol')
  .addParam('to', 'Receiving address')
  .addParam('amount', 'Amount')
  .setAction(async ({ symbol, to, amount }, hre) => {
    if (!hre.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    const { address: erc20Address } = await hre.deployments.get(symbol);

    if (!erc20Address) {
      console.log('[Error] Faucet or ERC20 address empty!');
      return;
    }
    const erc20 = await hre.ethers.getContractAt('MintableERC20', erc20Address);

    const decimal = await erc20.decimals();
    if (!decimal) {
      console.log('[Error] ERC20 decimal is zero!');
      return;
    }
    await waitForTx(await erc20['mint(address,uint256)'](to, parseUnits(amount, decimal)));
    console.log(`[INFO] Faucet drip ${symbol} to ${to} ${amount}`);
  });
