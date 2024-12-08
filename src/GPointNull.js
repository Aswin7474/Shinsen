export function GPointNull({ setgPoint, setPage, currentData, dict, currentPage, totalPages, setDifficulty }) {
    return (
        <div>
            <div className="flex justify-start mt-20 p-4.5">
            <button className="px-3 py-1  bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300" onClick={() => setDifficulty(null)}>Go Back</button>
                <table className="table-fixed border-b">
                    <thead>
                        <tr>
                            <th className='bg-shinsenwhite border-l-2 border-r-2 border-b border-t dark:border-slate-700'>Grammar Point</th>
                            <th className='bg-shinsenwhite border-l-2 border-r-2 border-b border-t dark:border-slate-700 p-4 pl-8'>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((key) => (
                            <tr key={key}>
                                <td className='bg-shinsenwhite border-b border-l border-r-2 border-slate-100 dark:border-slate-700 p-4 pl-8 '>
                                    <button onClick={() => setgPoint(key)}>{key}</button>
                                </td>
                                <td className='bg-shinsenwhite border-b border-l border-r-2 border-slate-100 dark:border-slate-700 p-4 pl-8 '>
                                    <button onClick={() => setgPoint(key)}>{dict[key]['meaning']}</button>
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-evenly p-4'>
                {currentPage > 1 && <button onClick={() => setPage(currentPage-1)}>Prev Page</button>}
                {currentPage < totalPages && <button onClick={() => setPage(currentPage+1)}>Next Page</button>}
            </div>
        </div>
    )
}
