/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '@/utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
    const [connectAccount, setCurrentAccouont] = useState();

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert('Please install metamask');

        const accounts = await ethereum.request({method: 'eth_accounts'});
        console.log(accounts);
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please install metamask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccouont(accounts[0]);
        } catch (error) {
            console.error(error);
            throw new Error('No Ethereum Object!');
        }
    }

    useEffect(()=> {
        checkIfWalletIsConnected();
    }, []); 

    return (
        <TransactionContext.Provider value={{ connectWallet }}>
            {children}
        </TransactionContext.Provider>
    );
};
