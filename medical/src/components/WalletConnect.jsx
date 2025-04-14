// src/components/WalletConnect.jsx
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletConnect = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center p-6 bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">RainbowKit Gateway</h1>
        <ConnectButton />

        {isConnected && (
          <div className="mt-4">
            <h2 className="text-xl">Connected Wallet Address: {address}</h2>
            <button
              onClick={() => disconnect()}
              className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
