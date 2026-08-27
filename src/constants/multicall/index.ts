import { ChainId } from '@raptordex/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x68971ffaaBbf9b78CE08D6880368604a9CcB8F95'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
