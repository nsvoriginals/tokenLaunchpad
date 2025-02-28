import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function Faucet() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [sol, setSol] = useState(0);

    const handleDrop = async () => {
        if (!wallet.publicKey) {
            alert("Wallet not connected");
            return;
        }

        try {
            const drop = await connection.requestAirdrop(wallet.publicKey, sol * LAMPORTS_PER_SOL);
            alert("Airdrop initiated. Transaction signature: " + drop);
        } catch (error) {
            console.error("Airdrop failed:", error);
            alert("Airdrop failed");
        }
    };

    return (
        <div>
            <input
                type="number"
                value={sol}
                onChange={(e) => setSol(Number(e.target.value))}
                placeholder="Enter number of SOL"
            />
            <button onClick={handleDrop} disabled={!wallet.publicKey}>
                Airdrop
            </button>
            <div>{wallet.publicKey?.toBase58()}</div>
        </div>
    );
}
