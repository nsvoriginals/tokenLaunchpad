import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useState } from "react";

export default function Faucet(){
    const connection=useConnection();

    const wallet=useWallet();
    const [sol,setSol]=useState(0);
     const handleDrop=async()=>{
         const dropsol=connection.value
     }
    return <div>
        <input type="number" value={sol}  onChange={(e)=>{setSol(e.target.value)}} placeholder="enter no of sol" />
        <button onClick={handleDrop}>Airdrop</button>
        {wallet.publicKey?.toBase58()}
    </div>
}