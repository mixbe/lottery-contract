import { task } from 'hardhat/config';

task(`verify-faucet-erc20`, `Etherscan verify Faucet & ERC20 contract`)
  .addParam('symbol', 'The ERC20 symbol')
  .setAction(async ({ symbol }, hre) => {
    if (!hre.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    const { address: faucetAddress } = await hre.deployments.get('Faucet');
    const { address: erc20Address } = await hre.deployments.get(symbol);

    const erc20 = await hre.ethers.getContractAt('MintableERC20', erc20Address);
    const decimal = await erc20.decimals();

    console.log(`- Verifying Faucet:`);
    try {
      await hre.run('verify:verify', {
        address: faucetAddress,
        constructorArguments: [],
      });
    } catch (error) {
      console.error(error);
    }
    console.log(`- Verifying ERC20 ${symbol}:`);
    try {
      if (symbol == 'WETH') {
        await hre.run('verify:verify', {
          address: erc20Address,
          constructorArguments: [faucetAddress],
        });
      } else {
        await hre.run('verify:verify', {
          address: erc20Address,
          constructorArguments: [symbol, symbol, decimal, faucetAddress],
        });
      }
    } catch (error) {
      console.error(error);
    }
  });
