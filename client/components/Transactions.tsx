import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
  url,
}) => {
  return (
    <div className="bg-indigo-100 bg-opacity-25 m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <a
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-blue-600 text-base">
              From: {addressFrom && shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-green-600 text-base">
              To: {addressTo && shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-red-600 text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className=" text-base"> Message: {message}</p>
            </>
          )}
        </div>
        <div className="bg-green-400 p-3 px-5 w-max rounded-md -mt-5 shaodow-2xl">
          <p className="text-white font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};
const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 ">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-indigo-600 text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className=" text-black text-3xl text-center my-2">
            Connect Your Account to see the latest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map(
            (
              transaction: React.JSX.IntrinsicAttributes & {
                addressTo: any;
                addressFrom: any;
                timestamp: any;
                message: any;
                keyword: any;
                amount: any;
                url: any;
              },
              i: React.Key | null | undefined,
            ) => (
              <TransactionCard key={i} {...transaction} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
