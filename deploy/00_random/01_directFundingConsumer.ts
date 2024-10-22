import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {COMMON_DEPLOY_PARAMS} from '../../helpers/env';
import {eNetwork} from '../../helpers';
import {DirectFundingConsumer_ID} from '../../helpers/deploy-ids';
import {getParamPerNetwork} from '../../helpers/config-helpers';
import {Configs} from '../../helpers/config';
import {DirectFundingConsumer} from '../../typechain'

const func: DeployFunction = async function ({
                                                 getNamedAccounts,
                                                 deployments,
                                                 ...hre
                                             }: HardhatRuntimeEnvironment) {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    // const network = (process.env.FORK ? process.env.FORK : hre.network.name) as eNetwork;
    // const supportAssets = getParamPerNetwork(Configs.SupportAssets, network);
    // const custodians = getParamPerNetwork(Configs.Custodians, network);
    // if (!supportAssets || !custodians) {
    //     throw '[Deployment][Error] Support assets or custodians not config';
    // }

    const directFundingConsumer = await deploy(DirectFundingConsumer_ID, {
        from: deployer,
        contract: 'DirectFundingConsumer',
        args: [],
        ...COMMON_DEPLOY_PARAMS,
    });

    const azboxInstance = (await hre.ethers.getContractAt(
        directFundingConsumer.abi,
        directFundingConsumer.address
    )) as DirectFundingConsumer;

    return true;
};

func.id = 'Lottery-DirectFundingConsumer';
func.tags = ['lottery-deposit'];

export default func;
