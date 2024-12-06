import {useState, useEffect} from 'react';

export function BunpouStudy() {
    const [difficulty, setDifficulty] = useState(null);
    const [dict, setDict] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const [gPoint, setgPoint] = useState(null);

    useEffect(() => {
        if (difficulty === null) return;

        const filename = `${difficulty}.json`;
        fetch(`dictionaries/${filename}`)
        .then((res) => res.json())
        .then((data) => {setDict(data); console.log(data) } )
        .catch((error) => console.error(`Error - Could not load ${filename}`))
    }, [difficulty]);


    const keys = Object.keys(dict);
    const currentData = keys.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.ceil(keys.length / pageSize);

    const setPage = (pageNo) => {
        if (pageNo > 0 && pageNo < totalPages)
            setCurrentPage(pageNo);
    };

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
    
    /*if (gPoint === null) return (
        <div className='pt-20'>
            <button onClick={() => setDifficulty(null)}>Go Back</button>
            <ul class="list-disc pl-5">
                {currentData.map((key) => (

                    <li> <button onClick={() => setgPoint(key)}> {key}</button> </li>
                ))}
            </ul>

            {currentPage > 1 && <button onClick={() => setPage(currentPage-1)}>Prev Page</button>}
            {currentPage < totalPages && <button onClick={() => setPage(currentPage+1)}>Next Page</button>}
            
        </div>

    ) */

    if (gPoint !== null) return (
        <div>
            <button onClick={() => setgPoint(null)}>Go Back</button>

            <h1>{gPoint}</h1>
            <h2>{dict[gPoint]['meaning']}</h2>
            {console.log(dict[gPoint]['examples'])}

            {dict[gPoint]['examples'].map((example, index) => (
               <div key={index}>
                    <h3>{example[0]}</h3>
                    <h3>{example[1]}</h3>
               </div>
            ))}
        </div>
    )

    if (gPoint == null) return (
        <div className="flex justify-start mt-20 p-4.5">

            <table className="table-fixed border-b">
                <thead>
                    <tr>
                        <th className=' border-l-2 border-r-2 border-b border-t dark:border-slate-700'>Grammar Point</th>
                        <th className=' border-l-2 border-r-2 border-b border-t dark:border-slate-700 p-4 pl-8'>Meaning </th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((key) => (
                        <tr key={key}>
                            <td className='border-b border-l border-r-2 border-slate-100 dark:border-slate-700 p-4 pl-8 '>
                                <button onClick={() => setgPoint(key)}>{key}</button>
                            </td>
                            <td className='border-b border-l border-r-2 border-slate-100 dark:border-slate-700 p-4 pl-8 '>
                                <button onClick={() => setgPoint(key)}>{dict[key]['meaning']}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

}

export default BunpouStudy;
