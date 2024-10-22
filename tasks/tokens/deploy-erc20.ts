import { task } from 'hardhat/config';
task(`deploy-erc20`, `Deploys mock erc20`)
  .addParam('symbol', 'The ERC20 symbol')
  .addOptionalParam('decimal', 'The ERC20 decimal')
  .setAction(async ({ symbol, decimal }, hre) => {
    if (!hre.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;
    const { address: faucetAddress } = await hre.deployments.get('Faucet');

    if (!faucetAddress) {
      console.log('[Error] Faucet address empty!');
      return;
    }
    if (symbol == 'WETH') {
      const wETHArtifact = await deploy(symbol, {
        contract: 'WETH9Mocked',
        from: deployer,
        args: [faucetAddress],
      });
      console.log(`- ${symbol} deployed: `, wETHArtifact.address);
    } else {
      const erc20Artifact = await deploy(symbol, {
        contract: 'MintableERC20',
        from: deployer,
        args: [symbol, symbol, decimal == null ? 18 : decimal, faucetAddress],
      });
      console.log(`- ${symbol} deployed: `, erc20Artifact.address);
    }
  });
