import {useState, useEffect} from 'react';
import { GPointSelected } from './Gpointselected';
import { GPointNull } from './GPointNull';
import { DifficultyNull } from './Difficultynull';

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
        <DifficultyNull setDifficulty={setDifficulty} />
    )
    

    if (gPoint !== null) return (
        <GPointSelected gPoint={gPoint} dict={dict} setgPoint={setgPoint} />
    )

    if (gPoint == null) return (
        <GPointNull setPage={setPage} setgPoint={setgPoint} currentData={currentData} dict={dict} currentPage={currentPage} totalPages={totalPages} setDifficulty={setDifficulty} />
    )

}

export default BunpouStudy;
