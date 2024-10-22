import {task} from 'hardhat/config';
import {getContract, waitForTx, FORK} from '../../helpers';
import {exit} from 'process';
import {eNetwork} from '../../helpers';
import {getParamPerNetwork} from '../../helpers/config-helpers';
import {Configs} from '../../helpers/config';

task(`transfer-protocol-ownership`, `Transfer the ownership of protocol from deployer`).setAction(
    async (_, hre) => {
        // Deployer admins
        const {deployer} = await hre.getNamedAccounts();

        const network = (FORK ? FORK : hre.network.name) as eNetwork;
        const owner = getParamPerNetwork(Configs.Owner, network);

        if (!owner) {
            console.error(
                'The constant owner is undefined. Check missing admin address at owner constant'
            );
            exit(403);
        }

        console.log('--- CURRENT DEPLOYER ADDRESSES ---');
        console.table({
            deployer,
        });
        console.log('--- DESIRED MULTISIG OWNER ---');
        console.log(owner);
        //
        //
        // const AzboxDepositOwner = await AzboxDeposit.owner();
        // if (AzboxDepositOwner === deployer) {
        //     await waitForTx(await AzboxDeposit.transferOwnership(owner));
        //     console.log('- Transfering of USDX Sales');
        // }
        //
        // /** Output of results*/
        // const result = [
        //     {
        //         role: 'AzboxDeposit Sales owner',
        //         address: await AzboxDeposit.owner(),
        //         pendingOwnerAddress: await AzboxDeposit.pendingOwner(),
        //         assert: (await AzboxDeposit.pendingOwner()) === owner,
        //     },
        // ];

        console.table(result);

        return;
    }
);
