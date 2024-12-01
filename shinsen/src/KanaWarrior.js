import { useState, useEffect } from 'react';

export function KanaWarrior() {
    const [gameStarted, setGameStarted] = useState(false);
    const [randomKana, setRandomKana] = useState(null);
    const [text, setText] = useState("");
    const [streak, setStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);

    const hiragana_map = {
        'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お':'o', 
        'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 
        'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 
        'た':'ta', 'ち':'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to', 
        'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね':'ne', 'の':'no', 
        'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 
        'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', 'も':'mo', 
        'や':'ya', 'ゆ':'yu', 'よ':'yo', 
        'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 
        'わ':'wa', 'を':'wo', 'ん':'n'
    };
    const katakana_map = {
        'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
        'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
        'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
        'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
        'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
        'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
        'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
        'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
        'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
        'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'
    };

    const kana_map = {...hiragana_map, ...katakana_map};
    
    const generateRandomKana = () => {
        const keys = Object.keys(kana_map);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomValue = kana_map[randomKey];

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
