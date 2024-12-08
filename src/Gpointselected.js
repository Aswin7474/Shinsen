export function GPointSelected({ dict, gPoint, setgPoint}) {

    return (
        <div className='bg-shinsenwhite'>
            <div className='flex justify-center  p-24'>
            <button className="px-3 py-1  bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300" onClick={() => setgPoint(null)}>Go Back</button>
                <table className='table-fixed'>
                    <thead>
                        
                            <tr>
                                <th className='bg-shinsenwhite border-l-2 border-r-2 border-b border-t dark:border-slate-700'>Example Sentence</th>
                                <th className='bg-shinsenwhite border-l-2 border-r-2 border-b border-t dark:border-slate-700 p-4 pl-8'>Translation</th>
                            </tr>
                    </thead>
                    <tbody>

                        {dict[gPoint]['examples'].map((example, index) => (
                            <tr key={index}>
                                <td className='bg-shinsenwhite border-b border-l border-r-2 border-slate-100 dark:border-slate-700 p-4 pl-8 '>
                                    {example[0]}
                                </td>
                                <td className='bg-shinsenwhite border-b border-l border-r-2 border-slate-100 dark:border-slate-700 p-4 pl-8 '>
                                    {example[1]}
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
