import { task } from 'hardhat/config';
import { waitForTx } from '../../helpers/utilities/tx';
import { parseUnits } from 'ethers/lib/utils';

task(`setup-faucet-limit`, `Setups Faucet limit of per symbol`)
  .addParam('symbol', 'The ERC20 symbol')
  .addParam('userAllowd', 'Daily limit per user')
  .addParam('totalAllowd', 'Daily limit for all user')
  .setAction(async ({ symbol, userAllowd, totalAllowd }, hre) => {
    if (!hre.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    const { address: faucetAddress } = await hre.deployments.get('Faucet');
    const { address: erc20Address } = await hre.deployments.get(symbol);

    if (!faucetAddress || !erc20Address) {
      console.log('[Error] Faucet or ERC20 address empty!');
      return;
    }
    const faucet = await hre.ethers.getContractAt('Faucet', faucetAddress);
    const erc20 = await hre.ethers.getContractAt('MintableERC20', erc20Address);

    const decimal = await erc20.decimals();
    if (!decimal) {
      console.log('[Error] ERC20 decimal is zero!');
      return;
    }
    await waitForTx(
      await faucet.setAllownAmount(
        erc20Address,
        parseUnits(userAllowd, decimal),
        parseUnits(totalAllowd, decimal)
      )
    );
    console.log(`[Setup] Setup Faucet limit for ${symbol}`);
  });
