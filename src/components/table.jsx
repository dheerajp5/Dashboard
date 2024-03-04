

function TData({ tabledata }) {
    return (


        tabledata?.map((data, index) => {
            const { sno, projectName, jobName, workDescription, time } = data;
            return (
                <tr key={index} className="hover:bg-[#ECF0F8]">
                    <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >sno</td>
                    <td className="text-center w-72 p-2 border text-black/60 text-sm font-semibold " >project_name</td>
                    <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >job_name</td>
                    <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold  " >Work_Description</td>
                    <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >Time</td>
                    <td className="py-3 text-center w-72 border text-black/60 text-sm font-semibold  flex items-center justify-center gap-4">
                        <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
                        <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                    </td>
                </tr>
            )
        })


    )
}

export function TableBody({ data }) {
    console.log(data)
    return (
        <tbody >
            {
                data?.map((d, i) => {
                   return ( <tr key={`attendence-${i}`} className="hover:bg-[#ECF0F8]">
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.date}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.firstCheckIn}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.lastCheckIn}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.time}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.hrComment}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.status}</td>
                    </tr>
                   )
                })
            }

        </tbody>
    )
}
export function TableHead({ thead }) {
    
    return (
        <thead>
            <tr>
                {
                    thead.map((headItem, i) => {
                        return <th key={headItem} className="w-72 py-2 border text-black/60 text-lg font-semibold">{headItem}</th>
                    })
                }
            </tr>
        </thead>
    )

}


export default TData;
