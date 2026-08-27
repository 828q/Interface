import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

import { NetworkConnector } from './NetworkConnector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: { [Number(process.env.REACT_APP_CHAIN_ID)]: NETWORK_URL }
})

export const injected = new InjectedConnector({
  supportedChainIds: [1380996178]
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: { 1380996178: 'https://rpc.raptorchain.io/web3' },
  bridge: 'https://bridge.raptorchain.io',
  qrcode: true,
  pollingInterval: 15000
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: 'https://raptorchain.io/',
  appName: 'RaptoX',
  appLogoUrl:
    'https://raw.githubusercontent.com/828q/fg47g3gfrh7y5ry3ewh43e92w3yur38ru38ut8u58ut5/refs/heads/main/Untitled_design__10_-removebg-preview.png'
})
