import {useState, useEffect} from 'react';

export function BunpouStudy() {
    const [difficulty, setDifficulty] = useState(null);
    const [dict, setDict] = useState({});
    const [displayedkeys, setDisplayedKeys] = useState(20);
    const [gPoint, setgPoint] = useState(null);

    useEffect(() => {
        if (difficulty === null) return;

        const filename = `${difficulty}.json`;
        fetch(`dictionaries/${filename}`)
        .then((res) => res.json())
        .then((data) => {setDict(data); console.log(data) } )
        .catch((error) => console.error(`Error - Could not load ${filename}`))
    }, [difficulty]);

    if (difficulty === null) return (
         
        <div>
            <h1>Select Difficulty</h1>
            <button onClick={() => {setDifficulty('basic')}}>Basic</button> 
            <br></br>
            <button onClick={() => setDifficulty('intermediate')}>Intermediate</button>
            <br></br>
            <button onClick={() => setDifficulty('advanced')}>Advanced</button>            
        </div>
    )

    console.table(Object.keys(dict)); // View keys in a tabular format
    console.log(JSON.stringify(dict, null, 2)); // Pretty-print the entire JSON
    
    
    if (gPoint === null) return (
        <div className='pt-20'>
            <ul class="list-decimal">
                {Object.keys(dict).map((key) => (
                    <li>{key}</li>
                ))}
            </ul>
        </div>
    )
    
}

export default BunpouStudy;
