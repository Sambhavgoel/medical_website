import React, { useState } from 'react';
import { ethers } from 'ethers';

const EthereumPayment = ({ recipientAddress, amount, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentFailed, setPaymentFailed] = useState(false);  // Track payment failure state

  // Handle the actual payment
  const handlePayment = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask to make a payment.');
      return;
    }

    try {
      setLoading(true);
      setError(null); // Reset previous errors
      setPaymentFailed(false); // Reset payment failure state

      // Request access to the user's MetaMask account
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []); // Prompt MetaMask to connect

      const signer = provider.getSigner(); // Get the user's MetaMask account

      // Prepare the transaction data
      const tx = {
        to: recipientAddress,
        value: ethers.utils.parseEther(amount.toString()), // Convert Ether to Wei
      };

      // Send the transaction
      const transactionResponse = await signer.sendTransaction(tx);

      // Wait for the transaction to be mined
      await transactionResponse.wait();

      // Call onSuccess callback if payment is successful
      onSuccess();
    } catch (err) {
      console.error('Transaction failed:', err);
      setError('Payment failed. Please try again.');
      setPaymentFailed(true); // Set payment failure state to true
      onError(err); // Pass error to parent component
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setPaymentFailed(false); // Reset failure state
    handlePayment(); // Retry the payment
  };

  return (
    <div>
      <button
        onClick={paymentFailed ? handleRetry : handlePayment}  // Use handleRetry if payment failed
        className="bg-blue-500 text-white px-6 py-3 rounded-md"
        disabled={loading}  // Disable the button if loading
      >
        {loading ? 'Processing...' : paymentFailed ? 'Retry' : 'Pay Now'}
      </button>

      {error && paymentFailed && (
        <p className="text-red-500 mt-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default EthereumPayment;
