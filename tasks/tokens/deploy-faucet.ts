import { task } from 'hardhat/config';

task(`deploy-faucet`, `Deploys Faucet`).setAction(async (_, hre) => {
  if (!hre.network.config.chainId) {
    throw new Error('INVALID_CHAIN_ID');
  }

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const faucetArtifact = await deploy('Faucet', {
    contract: 'Faucet',
    from: deployer,
  });
  console.log('- Faucet deployed: ', faucetArtifact.address);
});
