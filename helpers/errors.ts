export enum ProtocolErrors {
  ZERO_ADDRESS_NOT_VALID = '1', // 'Zero address not valid'
  CALLER_NOT_MINTER = '2', // 'The caller of the function is not a minter'
  CANT_RENOUNCE_OWNERSHIP = '3', // 'Can't renounce ownership'
  CONFIG_SUPPORT_ASEETS = '4', // 'Config sales contract support assets'
  INVALID_CUSTODIAN_ADDRESS = '5', // 'Invalid custodian address'
  INVALID_ASSET_ADDRESS = '6', // 'Invalid asset address'
  INVALID_FEE_RATE = '7', // 'Fee rate must be greater than 0 and less than 1e5'
  ZERO_AMOUNT_NOT_VALID = '8', // 'Zero amount not valid'
  UNSUPPORT_ASSETS = '9', // 'Zero amount not valid'
  USDX_BUY_DISABLED = '10', // 'USDX has stoppd purchasing'
  INVALID_ROUTE = '11', // 'Invalid route'
  CANT_BLACKLIST_OWNER = '12', // 'Can't set owner to blacklist'
  STILL_VESTING = '13', // 'Still vesting'
  INVALID_TOKEN = '14', // 'Invalid token'
  OPERATION_NOT_ALLOWED = '15', // 'Operation not allowed'
  MIN_SHARES_VIOLATION = '16', // 'Min shares violation'
  ONLY_STAKING_VAULT = '17', // 'The caller of the function is not staking vault'
  INVALID_COOLDOWN = '18', // 'Invalid cooldown'
  EXCESSIVE_WITHDRAW_AMOUNT = '19', // 'Excessive withdraw amount'
  EXCESSIVE_REDEEM_AMOUNT = '20', // 'Excessive redeem amount'
  INVALID_EPOCH = '21', // 'Invalid epoch'
  MAX_COOLDOWN_EXCEEDED = '22', // 'Max cooldown exceeded'
  TRANSFER_FAILED = '23', // 'Transfer failed'
  INVALID_AMOUNT = '24', // 'Invalid amount'
  INVARIANT_BROKEN = '25', // 'Invariant broken'
  COOLDOWN_NOT_OVER = '26', // 'Cooldown not over'
  STAKE_LIMIT_EXCEEDED = '27', // 'Stake limit exceeded'
  DEPOSIT_OPERATION_PAUSED = '28', // 'Deposit operation paused'
  WITHDRAW_OPERATION_PAUSED = '29', // 'Withdraw operation paused'
  MIN_REDEEM_VIOLATION = '30', // 'Min redeem violation'
}
