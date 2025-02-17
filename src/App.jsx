import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import '@solana/wallet-adapter-react-ui/styles.css'
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletModalButton
} from '@solana/wallet-adapter-react-ui';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react'
 

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const wallets = useMemo(
    () => [
        /**
         * Wallets that implement either of these standards will be available automatically.
         *
         *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
         *     (https://github.com/solana-mobile/mobile-wallet-adapter)
         *   - Solana Wallet Standard
         *     (https://github.com/anza-xyz/wallet-standard)
         *
         * If you wish to support a wallet that supports neither of those standards,
         * instantiate its legacy wallet adapter here. Common legacy adapters can be found
         * in the npm package `@solana/wallet-adapter-wallets`.
         */
        new UnsafeBurnerWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
);


  const endpoint='https://solana-devnet.g.alchemy.com/v2/oilDdlzNFRWdyvsQ2QmWC-Dw46RsST1O'
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
       <WalletModalProvider className='bg-blue-700'>
       <div style={{
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px"
       }}>
       <WalletMultiButton>
        </WalletMultiButton>

        <WalletDisconnectButton></WalletDisconnectButton>
       </div>

        <TokenLaunchpad></TokenLaunchpad>


       </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
