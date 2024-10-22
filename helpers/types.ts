import {BigNumber, BigNumberish, BytesLike, Signer} from 'ethers/lib/ethers';
import {Deployment} from 'hardhat-deploy/types';

export type eNetwork =
    | eEthereumNetwork
    | eArbitrumNetwork
    | eBaseNetwork
    | eBscNetwork
    | eMantleNetwork
    | eZetaChainNetwork
    | ePolygonNetwork;

export enum eEthereumNetwork {
    main = 'main',
    hardhat = 'hardhat',
    goerli = 'goerli',
    sepolia = 'sepolia',
}

export enum eArbitrumNetwork {
    arbitrum = 'arbitrum',
    arbitrumSepolia = 'arbitrum-sepolia',
}

export enum eBaseNetwork {
    base = 'base',
    baseGoerli = 'base-goerli',
}

export enum ePolygonNetwork {
    polygon = 'polygon',
    amoy = 'amoy',
}

export enum eBscNetwork {
    bsc = 'bsc',
    bscTestnet = 'bsc-testnet',
}

export enum eMantleNetwork {
    mantle = 'mantle',
    mantleTestnet = 'mantle-testnet',
}

export enum eZetaChainNetwork {
    zeta = 'zeta',
    zetaTestnet = 'zeta-testnet',
}

export type tEthereumAddress = string;
export type tStringTokenBigUnits = string; // 1 ETH, or 10e6 USDC or 10e18 DAI
export type tBigNumberTokenBigUnits = BigNumber;
export type tStringTokenSmallUnits = string; // 1 wei, or 1 basic unit of USDC, or 1 basic unit of DAI
export type tBigNumberTokenSmallUnits = BigNumber;

export type iParamsPerNetwork<T> = {
    [k in eNetwork]?: T;
};

export type iParamsPerNetworkString<T> = {
    [k in string]?: T;
};

export type iParamsPerNetworkWithDefault<T> = {
    [k in eNetwork]?: T;
} & {
    default: T;
};

export interface iParamsPerNetworkAll<T> extends iEthereumParamsPerNetwork<T> {
}

export interface iEthereumParamsPerNetwork<T> {
    [eEthereumNetwork.main]: T;
}

export interface iArbitrumParamsPerNetwork<T> {
    [eArbitrumNetwork.arbitrum]: T;
    [eArbitrumNetwork.arbitrumSepolia]: T;
}

export interface ITokenAddress {
    [token: string]: tEthereumAddress;
}

export interface SymbolMap<T> {
    [symbol: string]: T;
}

export interface IConfiguration {
    SupportAssets: iParamsPerNetwork<tEthereumAddress[]>;
    Custodians: iParamsPerNetwork<tEthereumAddress[]>;
    Owner: iParamsPerNetwork<tEthereumAddress>;
    MaxPoolDeposit: iParamsPerNetwork<string>;
}
