import {
    ARBISCAN_KEY,
    BASESCAN_KEY,
    BSCSCAN_KEY,
    ETHERSCAN_KEY,
    getCommonNetworkConfig,
    hardhatNetworkSettings,
    loadTasks, POLYGON_KEY,
} from './helpers/hardhat-config-helpers';
import {
    eArbitrumNetwork,
    eBaseNetwork,
    eBscNetwork,
    eEthereumNetwork,
    eMantleNetwork, ePolygonNetwork,
    eZetaChainNetwork,
} from './helpers/types';
import {DEFAULT_NAMED_ACCOUNTS} from './helpers/constants';

import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import 'hardhat-abi-exporter';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-ethers';

const SKIP_LOAD = process.env.SKIP_LOAD === 'true';
const TASK_FOLDERS = ['misc', 'tokens'];

// Prevent to load tasks before compilation and typechain
if (!SKIP_LOAD) {
    loadTasks(TASK_FOLDERS);
}

export default {
    abiExporter: {
        path: './abis', // path to ABI export directory (relative to Hardhat root)
        runOnCompile: true, // whether to automatically export ABIs during compilation
        clear: true, // whether to delete old ABI files in path on compilation
        flat: true, // whether to flatten output directory (may cause name collisions)
        pretty: false, // whether to use interface-style formatting of output for better readability
        except: ['@openzeppelin/contracts', '@chainlink/contracts'],
    },
    contractSizer: {
        alphaSort: true,
        runOnCompile: false,
        disambiguatePaths: false,
    },
    solidity: {
        compilers: [
            {
                version: '0.8.27',
                settings: {
                    optimizer: {enabled: true, runs: 20_000},
                    evmVersion: 'berlin',
                },
            },
        ],
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
    gasReporter: {
        enabled: false,
    },
    networks: {
        hardhat: {
            ...hardhatNetworkSettings,
        },
        localhost: {
            url: 'http://127.0.0.1:8545',
            ...hardhatNetworkSettings,
        },
        [eEthereumNetwork.main]: getCommonNetworkConfig(eEthereumNetwork.main, 1),
        [eEthereumNetwork.goerli]: getCommonNetworkConfig(eEthereumNetwork.goerli, 5),
        [eEthereumNetwork.sepolia]: getCommonNetworkConfig(eEthereumNetwork.sepolia, 11155111),
        [eArbitrumNetwork.arbitrum]: {
            ...getCommonNetworkConfig(eArbitrumNetwork.arbitrum, 42161),
            verify: {
                etherscan: {
                    apiKey: ARBISCAN_KEY,
                },
            },
        },
        [eArbitrumNetwork.arbitrumSepolia]: {
            ...getCommonNetworkConfig(eArbitrumNetwork.arbitrumSepolia, 421614),
            verify: {
                etherscan: {
                    apiUrl: 'https://api-sepolia.arbiscan.io',
                    apiKey: ARBISCAN_KEY,
                },
            },
        },
        [eBaseNetwork.base]: {
            ...getCommonNetworkConfig(eBaseNetwork.base, 8453),
            verify: {
                etherscan: {
                    apiUrl: 'https://api.basescan.org',
                    apiKey: BASESCAN_KEY,
                },
            },
        },


        [eBaseNetwork.baseGoerli]: {
            ...getCommonNetworkConfig(eBaseNetwork.baseGoerli, 84531),
            verify: {
                etherscan: {
                    apiUrl: 'https://api-goerli.basescan.org',
                    apiKey: BASESCAN_KEY,
                },
            },
        },
        [ePolygonNetwork.polygon]: {
            ...getCommonNetworkConfig(ePolygonNetwork.polygon, 137),
            verify: {
                etherscan: {
                    apiUrl: 'https://api.polygonscan.com/api',
                    apiKey: POLYGON_KEY,
                },
            },
        },
        [ePolygonNetwork.amoy]: {
            ...getCommonNetworkConfig(ePolygonNetwork.amoy, 80002),
            verify: {
                etherscan: {
                    apiUrl: 'https://api-amoy.polygonscan.com/api',
                    apiKey: POLYGON_KEY,
                },
            },
        },


        [eBscNetwork.bsc]: {
            ...getCommonNetworkConfig(eBscNetwork.bsc, 56),
            verify: {
                etherscan: {
                    apiUrl: 'https://api.bscscan.com',
                    apiKey: BSCSCAN_KEY,
                },
            },
        },
        [eBscNetwork.bscTestnet]: {
            ...getCommonNetworkConfig(eBscNetwork.bscTestnet, 97),
            verify: {
                etherscan: {
                    apiUrl: 'https://api-testnet.bscscan.com',
                    apiKey: BSCSCAN_KEY,
                },
            },
        },
        [eMantleNetwork.mantle]: {
            ...getCommonNetworkConfig(eMantleNetwork.mantle, 5000),
            verify: {
                etherscan: {
                    apiUrl: 'https://explorer.mantle.xyz',
                    apiKey: ETHERSCAN_KEY,
                },
            },
        },
        [eMantleNetwork.mantleTestnet]: {
            ...getCommonNetworkConfig(eMantleNetwork.mantleTestnet, 5001),
            verify: {
                etherscan: {
                    apiUrl: 'https://explorer.testnet.mantle.xyz',
                    apiKey: ETHERSCAN_KEY,
                },
            },
        },
        [eZetaChainNetwork.zeta]: {
            ...getCommonNetworkConfig(eZetaChainNetwork.zeta, 7000),
            verify: {
                etherscan: {
                    apiUrl: 'https://explorer.zetachain.com',
                    apiKey: ETHERSCAN_KEY,
                },
            },
        },
        [eZetaChainNetwork.zetaTestnet]: {
            ...getCommonNetworkConfig(eZetaChainNetwork.zetaTestnet, 7001),
            verify: {
                etherscan: {
                    apiUrl: 'https://athens.explorer.zetachain.com',
                    apiKey: ETHERSCAN_KEY,
                },
            },
        },
    },
    namedAccounts: {
        ...DEFAULT_NAMED_ACCOUNTS,
    },
    mocha: {
        timeout: 0,
    },
    verify: {
        etherscan: {
            apiKey: ETHERSCAN_KEY,
        },
    },
    etherscan: {
        apiKey: {
            mainnet: ETHERSCAN_KEY,
            sepolia: ETHERSCAN_KEY,
            goerli: ETHERSCAN_KEY,
            arbitrumOne: ARBISCAN_KEY,
            [eArbitrumNetwork.arbitrumSepolia]: ARBISCAN_KEY,
            [eBaseNetwork.base]: BASESCAN_KEY,
            [eBaseNetwork.baseGoerli]: BASESCAN_KEY,
            [eBscNetwork.bsc]: BSCSCAN_KEY,
            [eBscNetwork.bscTestnet]: BSCSCAN_KEY,
            [eMantleNetwork.mantle]: ETHERSCAN_KEY,
            [eMantleNetwork.mantleTestnet]: ETHERSCAN_KEY,
            [ePolygonNetwork.amoy]: POLYGON_KEY,

        },
        customChains: [
            {
                network: 'amoy',
                chainId: 80002,
                urls: {
                    apiURL: 'https://api-amoy.polygonscan.com/api',
                    browserURL: 'https://amoy.polygonscan.com/',
                },
            },
            {
                network: 'arbitrum-sepolia',
                chainId: 421614,
                urls: {
                    apiURL: 'https://api-sepolia.arbiscan.io/api',
                    browserURL: 'https://sepolia.arbiscan.io/',
                },
            },
            {
                network: 'base',
                chainId: 8453,
                urls: {
                    apiURL: 'https://api.basescan.org/api',
                    browserURL: 'https://basescan.org/',
                },
            },
            {
                network: 'base-goerli',
                chainId: 84531,
                urls: {
                    apiURL: 'https://api-goerli.basescan.org/api',
                    browserURL: 'https://goerli.basescan.org',
                },
            },
            {
                network: 'bsc',
                chainId: 56,
                urls: {
                    apiURL: 'https://api.bscscan.com/api',
                    browserURL: 'https://bscscan.com/',
                },
            },
            {
                network: 'bsc-testnet',
                chainId: 97,
                urls: {
                    apiURL: 'https://api-testnet.bscscan.com/api',
                    browserURL: 'https://testnet.bscscan.com/',
                },
            },
            {
                network: 'mantle',
                chainId: 5000,
                urls: {
                    apiURL: 'https://explorer.mantle.xyz/api',
                    browserURL: 'https://explorer.mantle.xyz',
                },
            },
            {
                network: 'mantle-testnet',
                chainId: 5001,
                urls: {
                    apiURL: 'https://explorer.testnet.mantle.xyz/api',
                    browserURL: 'https://explorer.testnet.mantle.xyz',
                },
            },
        ],
    },
};
