import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="w-full md:h-screen flex items-center justify-center" role="main">
      <div className='w-full md:w-[1110px] h-full md:h-auto flex flex-col md:flex-row bg-white rounded-3xl p-[2rem] text-left gap-10'>
        <div className='w-1/2 p-[1rem]'>
          <p className='text-sm mb-2 text-[var(--Dark-grayish-cyan)]'>Bill</p>
          <div class="relative mb-10">
            <span class="absolute inset-y-0 left-0 flex items-center p-3 text-[var(--Dark-grayish-cyan)]">$</span>
            <input type="text" placeholder="0" class="bg-[var(--Very-light-grayish-cyan)] rounded-lg w-full py-3 px-5 border-1 border-[var(--Very-light-grayish-cyan)] text-right" />
          </div>
          <p className='text-sm mb-2 text-[var(--Dark-grayish-cyan)]'>Select Tip %</p>
        </div>
        
        <div className='w-1/2 bg-[var(--Very-dark-cyan)] rounded-xl p-[1rem]'>
          Trext
        </div>
      </div>
    </div>
  )
}

export default App
