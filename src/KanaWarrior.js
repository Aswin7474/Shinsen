import { useState, useEffect } from 'react';

export function KanaWarrior() {
    const [gameStarted, setGameStarted] = useState(false);
    const [randomKana, setRandomKana] = useState(null);
    const [text, setText] = useState("");
    const [streak, setStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);
    const [kanaMap, setKanaMap] = useState({});

    useEffect(() => {
        console.log("Use effect activated");
        const filename = 'kana_map.json';
        fetch(`dictionaries/${filename}`)
        .then((res) => res.json())
        .then((data) => setKanaMap(data))
        .catch((error) => console.error("Error loading Kana Map"));
    }, []);
  
    const generateRandomKana = () => {
        const keys = Object.keys(kanaMap);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomValue = kanaMap[randomKey];

        setRandomKana({key:randomKey, value:randomValue});
    }

    const checkAnswer = () => {
        var currentStreak = null;
        if (text == randomKana.value) {
            currentStreak = streak + 1;
            setStreak(currentStreak);
        }
        else {
            currentStreak = 0;
            setStreak(currentStreak);
        }
        
        if (currentStreak > highestStreak) {
            setHighestStreak(currentStreak);
        }   
    }

    const handleClick = (event) => {
        event.preventDefault();
        checkAnswer();
        generateRandomKana();
        setText("");
    }

    return (
        <div className='kana_game'>
            <div className='maintitle text-white'>Kana Warrior</div>
            <div className='streakdiv text-white'>
                    <h2>Highest Streak: {highestStreak}</h2>
                    <h2>Current Streak: {streak}</h2>
            </div>

             {!gameStarted ? <button class="px-1 py-0.5 m-2 bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300" onClick={() => {setGameStarted(true); generateRandomKana()}}>Start Game</button> : <button class="px-1 py-0.5 m-2 bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300" onClick={() => setGameStarted(false)}>Stop Game</button>}
    
             {gameStarted && (
                <><h1 className='kana_div text-xl m-2 '>{randomKana?.key}</h1>
                <form onSubmit={handleClick}>
                    <input className='inputbox px-1 py-0.5 m-3' value={text} type='text' onChange={(event) => setText(event.target.value)} placeholder='Enter romaji'/>
                    <button class="px-1 py-0.5 m-2 bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300">Check</button>
                </form>
                </>
            )
            }
        </div>          
    )
}

export default KanaWarrior;
