"use client"
import React, { useState, useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { Web3ModalContext } from "@/contexts/Web3ModalProvider";

const Content: React.FC = () => {
  const [xdcAddress, setXdcAddress] = useState("");
  const [xdcBalance, setXdcBalance] = useState("");
  const [amount , setAmount] = useState(0);
  const [toAddress, setToAddress] = useState("");
  const [currentChainId, setCurrentChainId] = useState("");
  const [walletStatus, setWalletStatus] = useState(false);

  const { account, chainId, web3 } = useContext(Web3ModalContext);

  const getAccounts = async () =>{
      const accounts = await web3?.eth.getAccounts();
      console.log(accounts)
  }


  const sendXdcTokens = async (toAddress, amount) => {
    if (web3 && account) {
      // Wallet is available, proceed with sending tokens
      try {
        const valueInWei = web3.utils.toWei(amount, "ether");

        // Send XDC transaction
        const txReceipt = await web3.eth.sendTransaction({
          from: account,
          to: toAddress,
          value: valueInWei,
        });

        // You can handle the transaction receipt as needed
        console.log("Transaction Receipt:", txReceipt);

        // Clear the input fields after a successful transaction
        setToAddress("");
        setAmount(0);
      } catch (error) {
        console.error("Error sending XDC tokens:", error);
      }
    } else {
      // Wallet is not available, handle it gracefully
      console.error("Wallet is not available. Please connect your wallet.");
      // You can show a message to the user or take appropriate action.
    }
  };


  const getBalance = async () => {
    if (web3 && account) {
      const balance = await web3.eth.getBalance(account);

      setXdcBalance((Number(balance) / 1e18).toString());
    } else {
      setXdcBalance("");
    }
  };

  const getChainId = () => {
    if (web3 && chainId) {
      setCurrentChainId(String(chainId));
    } else {
      setCurrentChainId("");
    }
  };

  const getWalletStatus = () => {
    if (!account) {
      setWalletStatus(false);
    } else {
      setWalletStatus(true);
    }
  };

  const getAddress = () => {
    if (account) {
      setXdcAddress(`xdc${account.slice(2)}`);
    } else {
      setXdcAddress("");
    }
  };

  useEffect(() => {
    getBalance();
    getChainId();
    getWalletStatus();
    getAddress();
  }, [account, chainId, web3]);

   return (
     <section className={styles.content}>
       <div className={styles.container}>
         <div className={styles.interface}>
           <div className={styles.columns} style={{ height: "300px" }}>
             <div className={styles.form}>
               <div className={styles.input}>
                 <div className={styles.title}>
                   <label>My XDC Address:</label>
                 </div>
                 <input type="text" value={xdcAddress} />
               </div>

               <div className={styles.input}>
                 <div className={styles.title}>
                   <label>Connected to:</label>
                 </div>
                 <input type="text" value={currentChainId} />
               </div>

               <div className={styles.input}>
                 <div className={styles.title}>
                   <label>My XDC Balance:</label>
                 </div>
                 <input type="text" value={xdcBalance} />
               </div>

               <div className={styles.walletStatus}>
                 <div
                   className={styles.ball}
                   style={
                     walletStatus
                       ? { backgroundColor: "lime" }
                       : { backgroundColor: "red" }
                   }
                 />
                 Wallet {walletStatus ? "Connected" : "Disconnected"}
               </div>
             </div>

             {/* Send XDC Tokens Form */}
             <div className={styles.form}>
               <h3>Send XDC Tokens</h3>
               <div className={styles.input}>
                 <label>To Address:</label>
                 <input
                   type="text"
                   placeholder="Recipient address"
                   value={toAddress}
                   onChange={(e) => setToAddress(e.target.value)}
                 />
               </div>
               <div className={styles.input}>
                 <label>Amount (XDC):</label>
                 <input
                   type="number"
                   placeholder="Amount"
                   value={amount}
                   onChange={(e) => setAmount(parseFloat(e.target.value))}
                 />
               </div>

               <button onClick={getAccounts}>
                 Send Tokens
               </button>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
};

export default Content;
