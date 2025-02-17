import React, { useState } from 'react';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');
  const [error, setError] = useState(false);

  const handleTipClick = (value) => {
    if (!people || parseInt(people) === 0) {
      setError(true); 
      return;
    }
    setTip(value);
    setCustomTip('');
    setError(false);
  };

  const handleCustomTipChange = (e) => {
    if (!people || parseInt(people) === 0) {
      setError(true); 
      return;
    }
    setCustomTip(e.target.value);
    setTip(null);
    setError(false);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
    if (parseInt(e.target.value) > 0) {
      setError(false);
    }
  };

  const handleReset = () => {
    setBill('');
    setTip(null);
    setCustomTip('');
    setPeople('');
    setError(false);
  };


  const billAmount = parseFloat(bill) || 0;
  const tipPercentage = tip !== null ? tip : parseFloat(customTip) || 0;
  const peopleCount = parseInt(people) || 0;

  let tipPerPerson = 0;
  let totalPerPerson = 0;
  if (peopleCount > 0) {
    const totalTip = billAmount * (tipPercentage / 100);
    tipPerPerson = totalTip / peopleCount;
    totalPerPerson = (billAmount + totalTip) / peopleCount;
  }

  const isResetActive = billAmount > 0 && tipPercentage > 0 && peopleCount > 0;

  return (
    <div className="w-full md:h-screen flex items-center flex-col pt-[2rem] md:pt-[8rem]" role="main">
      <h1 className='mb-[2rem] md:mb-[6rem] text-4xl uppercase tracking-widest'>Spli<br/>tter</h1>
      <div className="w-full md:w-[1110px] h-full md:h-auto flex flex-col md:flex-row bg-white rounded-0 rounded-t-3xl md:rounded-3xl p-8 text-left gap-10">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-sm mb-2 text-[var(--Dark-grayish-cyan)]">Bill</p>
          <div className="relative mb-8">
            <span className="absolute inset-y-0 left-0 flex items-center p-3 text-[var(--Light-grayish-cyan)]">$</span>
            <input
              type="text"
              placeholder="0"
              className="bg-[var(--Very-light-grayish-cyan)] rounded-lg w-full py-3 pl-12 pr-5 border border-[var(--Very-light-grayish-cyan)] text-right"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <p className="text-sm mb-2 text-[var(--Dark-grayish-cyan)]">Select Tip %</p>
          <div className="grid grid-cols-3 gap-4 text-[var(--Very-light-grayish-cyan)] mb-8 text-base md:text-xl">
            {[10, 20, 30, 40, 50].map((value) => (
              <button
                key={value}
                onClick={() => handleTipClick(value)}
                className={`cursor-pointer rounded-lg p-2 ${tip === value ? 'bg-[var(--Strong-cyan)]' : 'bg-[var(--Very-dark-cyan)]'}`}
              >
                {value}%
              </button>
            ))}
            <input
              type="text"
              placeholder="Custom"
              className="cursor-pointer bg-[var(--Very-light-grayish-cyan)] text-[var(--Very-dark-cyan)] rounded-lg p-2 text-center placeholder-[var(--Very-dark-cyan)]"
              value={customTip}
              onChange={handleCustomTipChange}
            />
          </div>
          <p className="text-sm mb-2 text-[var(--Dark-grayish-cyan)]">Number of people</p>
          <div className="relative">
            {error && (
              <p className="absolute -top-6 right-0 text-red-500 text-xs">Can't be zero</p> 
            )}
            <span className="absolute inset-y-0 left-0 flex items-center p-3 text-[var(--Light-grayish-cyan)]">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="0"
              className={`bg-[var(--Very-light-grayish-cyan)] rounded-lg w-full py-3 pl-12 pr-5 border ${error ? 'border-red-500' : 'border-[var(--Very-light-grayish-cyan)]'} text-right`}
              value={people}
              onChange={handlePeopleChange}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[var(--Very-dark-cyan)] rounded-xl p-8 flex flex-col justify-between h-full">
          
          {/* Calculation Results */}
          <div className="flex-grow">
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-[var(--Light-grayish-cyan)] text-xl">Tip Amount</p>
                <p className="text-[var(--Dark-grayish-cyan)] text-base">/ person</p>
              </div>
              <p className="text-[var(--Strong-cyan)] text-4xl">${tipPerPerson.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-[var(--Light-grayish-cyan)] text-xl">Total</p>
                <p className="text-[var(--Dark-grayish-cyan)] text-base">/ person</p>
              </div>
              <p className="text-[var(--Strong-cyan)] text-4xl">${totalPerPerson.toFixed(2)}</p>
            </div>
          </div>

          {/* Reset Button at the Bottom */}
          <button
            onClick={handleReset}
            className={`w-full text-white font-bold py-3 rounded-md uppercase transition ${
              isResetActive ? 'bg-[var(--Strong-cyan)] hover:bg-[var(--Light-grayish-cyan)]' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isResetActive}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
