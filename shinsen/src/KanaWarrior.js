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
            <div className='maintitle'>Kana Warrior</div>
            <div className='streakdiv'>
                    <h2>Highest Streak: {highestStreak}</h2>
                    <h2>Current Streak: {streak}</h2>
            </div>

             {!gameStarted ? <button onClick={() => {setGameStarted(true); generateRandomKana()}}>Start Game</button> : <button onClick={() => setGameStarted(false)}>Stop Game</button>}
    
             {gameStarted && (
                <><h1 className='kana_div'>{randomKana?.key}</h1>
                <form onSubmit={handleClick}>
                    <input className='inputbox' value={text} type='text' onChange={(event) => setText(event.target.value)} placeholder='Enter romaji'/>
                    <button >Check</button>
                </form>
                </>
            )
            }
        </div>          
    )
}

export default KanaWarrior;
