import {config, ethers} from 'hardhat';
import {expect} from 'chai';
import {loadFixture, time} from '@nomicfoundation/hardhat-network-helpers';
import {ONE_HOUR, ZERO_ADDRESS} from '../helpers';
import {getAddress, parseUnits} from 'ethers/lib/utils';
import {waitForTx} from '../helpers';
import {buildPermitParams, getSignatureFromTypedData} from './helpers/SigHelper';
import {ProtocolErrors} from '../helpers/errors';

describe('DirectFundingConsumer ', () => {
    const accounts = config.networks.hardhat.accounts;
    const index = 0;
    const wallet = ethers.Wallet.fromMnemonic(accounts.mnemonic, accounts.path + `/${index}`);

    const initialUSDTBalance = parseUnits('10000', 6);
    const initialUSDCBalance = parseUnits('10000', 6);
    const initialDAIBalance = parseUnits('10000', 18);
    const NATIVE_TOKEN = getAddress("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE")

    async function deploySalesFixture() {
        const [owner, alice, bob, carol, dave, ...addrs] = await ethers.getSigners();


        const DirectFundingConsumer = await ethers.getContractFactory('DirectFundingConsumer');
        const directFundingConsumer = await DirectFundingConsumer.deploy();
        return {
            owner,
            alice,
            bob,
            directFundingConsumer,
        };
    }

    describe('DirectFundingConsumer ', () => {
        describe('Support token manager', async () => {
            it('add support token will revert', async () => {
                const {directFundingConsumer} = await loadFixture(deploySalesFixture);
                console.log(directFundingConsumer.address)
            });

        });
    });
});
