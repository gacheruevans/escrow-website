import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '@/utils/constants';

export const TransactionContext = React.createContext();

if (typeof window !== 'undefined') {
  const { ethereum } = window;
}

const createEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  );

  return transactionsContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

  // if (typeof window !== 'undefined') {
    
  // }else{
  //   const [transactionCount, setTransactionCount] = useState();
  // }

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if(accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      }else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.error(error);
      throw new Error('No Ethereum Object!');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error('No Ethereum Object!');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask');

      // Get all data from the form
      const { addressTo, amount, keyword, message } = formData;
      const transactionsContract = createEthereumContract();
      const parsedAmount = ethers.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // 21000 Gwei
          value: parsedAmount._hex,
        }]
      });

      const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, keyword, message);

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionsContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.error(error);
      throw new Error('No Ethereum Object!');
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
