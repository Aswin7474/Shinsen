export function DifficultyNull({ setDifficulty }) {
    return (
        <div>
            <div className='relative pt-80'>
                <h1>Select Difficulty</h1>
                <button onClick={() => {setDifficulty('basic')}}>Basic</button> 
                <br></br>
                <button onClick={() => setDifficulty('intermediate')}>Intermediate</button>
                <br></br>
                <button onClick={() => setDifficulty('advanced')}>Advanced</button>            
            </div>
        </div>
    );
}
