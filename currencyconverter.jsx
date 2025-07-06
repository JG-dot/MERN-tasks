import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [dollarAmount, setDollarAmount] = useState(10);
  const [rupeeAmount, setRupeeAmount] = useState(736.6);
  const [exchangeRate] = useState(83.66); // Fixed rate based on your example
  const [lastChanged, setLastChanged] = useState('dollar');

  useEffect(() => {
    if (lastChanged === 'dollar') {
      setRupeeAmount((dollarAmount * exchangeRate).toFixed(2));
    } else {
      setDollarAmount((rupeeAmount / exchangeRate).toFixed(2));
    }
  }, [dollarAmount, rupeeAmount, exchangeRate, lastChanged]);

  const handleDollarChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setDollarAmount(value);
    setLastChanged('dollar');
  };

  const handleRupeeChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setRupeeAmount(value);
    setLastChanged('rupee');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {rupeeAmount} Indian Rupee
      </h1>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="number"
            value={dollarAmount}
            onChange={handleDollarChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            step="0.01"
            min="0"
          />
          <span className="text-lg font-medium text-gray-700">Dollar</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <input
            type="number"
            value={rupeeAmount}
            onChange={handleRupeeChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            step="0.01"
            min="0"
          />
          <span className="text-lg font-medium text-gray-700">Rupee</span>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 text-center">
        Exchange Rate: 1 USD = {exchangeRate} INR
      </div>
    </div>
  );
};

export default CurrencyConverter;