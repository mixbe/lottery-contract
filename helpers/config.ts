import {
  IConfiguration,
  eArbitrumNetwork,
  eBscNetwork,
} from './types';

export const Configs: IConfiguration = {
  SupportAssets: {
    [eBscNetwork.bscTestnet]: [
      '0x7C346C27Ef3A48B1AE0454D994A49005C720D6FA', // USDT
      '0xF9173645D5A391d9Fb29Fc3438024499E3AC5eD0', // USDC
    ],
    [eArbitrumNetwork.arbitrum]: [
      '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
    ],
    [eBscNetwork.bsc]: [
      '0x55d398326f99059fF775485246999027B3197955', // USDT
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // USDC
    ],
  },
  Custodians: {
    [eBscNetwork.bscTestnet]: ['0x1Ee532cf775be02E0B306571e3555321FC75988d'],
    [eArbitrumNetwork.arbitrum]: ['0x99219Ec1672F9e6Ec3850005Ca03970B04E668b4'],
    [eBscNetwork.bsc]: ['0x99219Ec1672F9e6Ec3850005Ca03970B04E668b4'],
  },
  MaxPoolDeposit: {
    [eBscNetwork.bscTestnet]: '100000000',
  },
  Owner: {
    [eBscNetwork.bscTestnet]: '0xcbeD65Db7E177D4875dDF5B67E13326A43a7B03f',
    [eArbitrumNetwork.arbitrum]: '0xe0d810FD0f40257F5dFAb72fd170a4800D847408',
    [eBscNetwork.bsc]: '0x3f9a06aD4c83c289DF83461fE5F24EE4c4491935',
  },
};
