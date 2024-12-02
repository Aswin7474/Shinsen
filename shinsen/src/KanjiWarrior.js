import { useState, useEffect } from "react";

export function KanjiWarrior() {
    const [text, setText] = useState("");
    const [kanji, setKanji] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [grade, setGrade] = useState('n5');
    const [dic, setDic] = useState('n5');
    const [streak, setStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);


    useEffect(() => {
        const filename = `${grade}.json`;
        fetch(`dictionaries/${filename}`)
        .then((res) => res.json())
        .then((data) => setDic(data))
        .catch((error) => console.error(`Error - Could not load ${filename}`))
    }, [grade]);

    const generateRandomKanji = () => {
        const keys = Object.keys(dic);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomValue = dic[randomKey];
        
        setKanji({key:randomKey, value:randomValue});
    } 

    const checkAnswer = () => {
        var currentStreak = null;
        if (text == kanji.value.reading) {
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
        generateRandomKanji();
        setText("");
    }

    // console.log(dic);
    // console.log(kanji);

    return (
        <div className='kana_game'>
            <div className='maintitle'>Kanji Warrior</div>
            <div className='streakdiv'>
                    <h2>Highest Streak: {highestStreak}</h2>
                    <h2>Current Streak: {streak}</h2>
            </div>
            {!gameStarted?
                <select  name="level" id="n-grade" value={grade} onChange={(event) => setGrade(event.target.value)}>
                <option value='n5'>N5</option>
                <option value='n4'>N4</option>
                <option value='n3'>N3</option>
                <option value='n2'>N2</option>
                <option value='n1'>N1</option>
                <option value='ffa'>FFA</option>
            </select>
            :
            <select disabled name="level" id="n-grade" value={grade} onChange={(event) => setGrade(event.target.value)}>
                <option value='n5'>N5</option>
                <option value='n4'>N4</option>
                <option value='n3'>N3</option>
                <option value='n2'>N2</option>
                <option value='n1'>N1</option>
                <option value='ffa'>FFA</option>
            </select>
            }


            {!gameStarted ? <button onClick={() => {setGameStarted(true); generateRandomKanji();}}>Start Game</button> : <button onClick={() => setGameStarted(false)}>Stop Game</button>}

            {gameStarted && (
                <><h1 className='kanji_div'>{kanji.key}</h1>
                <form onSubmit={handleClick}>
                    <input className='inputbox' value={text} type='text' onChange={(event) => setText(event.target.value)} placeholder='Enter reading'/>
                    <button >Check</button>
                </form>
                </>

            )
            }         
        </div>
          
    )
}

export default KanjiWarrior;
