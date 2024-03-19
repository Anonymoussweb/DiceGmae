import React, { useState } from 'react';
import Rules from './Rules';
function Playgame({ show }) {
    
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [rules, setRules] = useState(false);


    //Toggle rules
    const showrule = ()=>{
        setRules(prev => !prev)
    }
  

    // Generate a random number between 1 and 6
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    // Handle number selection
    const handleNumberSelect = number => {
        setSelectedNumber(number);
        setMessage('');
    };

    // Handle clicking on the Dice button
    const handleDiceClick = () => {
        if (selectedNumber === null) {
            setMessage('Please select a number before rolling the dice.');
            return;
        }

        const newRandomNumber = generateRandomNumber();
        setRandomNumber(newRandomNumber);

        if (selectedNumber === newRandomNumber) {
            setScore(prevScore => prevScore + newRandomNumber);
            setMessage('Congratulations! Your guess was correct.');
        } else {
            setScore(prevScore => prevScore - 2);
            setMessage('Oops! Your guess was wrong.');
        }

        setSelectedNumber(null);
    };

    return (
        <div className='w-full h-screen'>
            <div className='flex justify-between px-10'>
                <button onClick={show} className='bg-black text-white w-[200px] mt-3 rounded-sm py-1 absolute bottom-5 left-0'>Exit</button>
                <div>
                    <h2 className='text-8xl semi-bold mt-10 text-center'>{score}</h2>
                    <p className='font-bold mt-2 text-center'>Total Score</p>
                </div>
                <div className='mt-10'>
                    <p className={`absolute top-2 font-bold mt-2 text-center ${message.includes('Congratulations') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
                    <div className='flex gap-5'>
                        {[1, 2, 3, 4, 5, 6].map((number, index) => (
                            <button
                                key={index}
                                onClick={() => handleNumberSelect(number)}
                                className={`flex justify-center items-center border-2 p-8 cursor-pointer font-bold border-black w-5 h-8 ${selectedNumber === number ? 'bg-black text-white' : ''}`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                    <p className='font-bold mt-5 text-end'>Select Number</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img onClick={handleDiceClick} className='w-[12vw] cursor-pointer' src={`/dice${randomNumber || 1}.png`} alt="" />
                <h3 className='mt-5 font-semibold'>Click on Dice to roll</h3>
                <button onClick={() => setScore(0)} className='border-black border-[1px] w-[200px] mt-3 rounded-sm py-1'>Reset Score</button>
                <button onClick={showrule} className='border-black text-white bg-black border-[1px] w-[200px] mt-3 rounded-sm py-1'>Show Rules</button>
                {rules && <Rules/>}
            </div>
        </div>
    );
}

export default Playgame;
