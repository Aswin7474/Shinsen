import { useState } from "react";
import { fetch } from 'whatwg-fetch';

export function KanjiWarrior() {
    const [word, setWord] = useState("");
    
    return (
        <div className='kana_game'>
            <div className='maintitle'>Kanji Warrior</div>
            <div className='streakdiv'>
                    <h2>Highest Streak: {'lol'}</h2>
                    <h2>Current Streak: {'lol'}</h2>
            </div>
            <select name="level" id="n-grade">
                <option value='n5'>N5</option>
                <option value='n4'>N4</option>
                <option value='n3'>N3</option>
                <option value='n2'>N2</option>
                <option value='n1'>N1</option>
                <option value='ffa'>FFA</option>
            </select>

            <input type="text" onChange={(event) => setWord(event.target.value)} />
            
        </div>
          
    )
}


export default KanjiWarrior;


// const handleSearch = () => {
//     console.log('why is this being run');
//     fetch(`/api/v1/search/words?keyword=${word}`)
//     .then((res) => res.json())
//     .then((data) => {
//         if (data?.meta?.status !== 200) {
//             throw new Error(`HTTP Error Status: ${data.meta.status}`);
//         }
//         console.log(data);
//     })
// .then((data) => console.log(data))
// .catch((error) => {
//     console.error('Error:', error.message);
// });
