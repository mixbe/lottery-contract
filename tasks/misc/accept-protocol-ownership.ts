import {task} from 'hardhat/config';
import {getContract, waitForTx} from '../../helpers';
// import {AzboxDeposit} from '../../typechain';
// import {AzboxDeposit_ID,} from '../../helpers/deploy-ids';

task(`accept-protocol-ownership`, `Accept the ownership of protocol from deployer`).setAction(
    async (_, hre) => {
        // testnet owner
        const {deployer} = await hre.getNamedAccounts();
        //
        // console.log('--- CURRENT DEPLOYER ADDRESSES ---');
        // console.table({
        //     deployer,
        // });
        //
        // const azboxDeposit = (await getContract(AzboxDeposit_ID)) as AzboxDeposit;
        // await waitForTx(await azboxDeposit.acceptOwnership());
        //
        // /** Output of results*/
        // const result = [
        //     {
        //         role: 'azboxDeposit owner',
        //         address: await azboxDeposit.owner(),
        //         assert: (await azboxDeposit.owner()) === deployer,
        //     },
        // ];

        console.table(result);

        return;
    }
);
