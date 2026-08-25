import React from "react"
import { ConnectButton } from  'thirdweb/react'
import { thirdwebClient } from "../thirdweb/client"

export default function ThirdwebWalletButton() {
    return <ConnectButton client={thirdwebClient} />
}