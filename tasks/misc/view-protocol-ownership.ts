import {FORK} from '../../helpers';
import {task} from 'hardhat/config';
import {eNetwork} from '../../helpers';
import {getContract} from '../../helpers';
import {getParamPerNetwork} from '../../helpers/config-helpers';
import {Configs} from '../../helpers/config';

task(`view-protocol-ownership`, `View current admin of each role and contract`).setAction(
    async (_, hre) => {
        // testnet owner
        const {deployer} = await hre.getNamedAccounts();

        const network = (FORK ? FORK : hre.network.name) as eNetwork;
        const owner = getParamPerNetwork(Configs.Owner, network);

        console.log('--- CURRENT DEPLOYER ADDRESSES ---');
        console.table({
            deployer,
        });
        console.log('--- DESIRED MULTISIG OWNER ---');
        console.log('Owner: ', owner);


        console.table();

        return;
    }
);
