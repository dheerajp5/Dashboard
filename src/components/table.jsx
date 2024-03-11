
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



export function TimeTrackerBody({ tabledata }) {
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
                        <span className="w-6 h-4 bg-yellow-500 rounded-sm"></span>
                        <span className="w-6 h-4 bg-red-500 rounded-sm"></span>
                    </td>
                </tr>
            )
        })


    )
}

export function AttendanceBody({ data }) {

    console.log(data)
    return (
        <tbody >
            {
                data?.map((d, i) => {
                    const pendingTagStyle =  'bg-[#C6D5FF] text-[#3566F6]/80 text-sm font-semibold py-1 px-2 rounded-sm ';
                    const weekendTagStyle = 'bg-[#F9F5E8] text-[#F7AF74]/80 text-sm font-semibold py-1 px-2 rounded-sm '
                   return ( <tr key={`attendence-${i}`} className="hover:bg-[#ECF0F8]">
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.date}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.firstCheckIn}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.lastCheckIn}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.time}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.hrComment}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " ><span className={d.status === 'Pending'? pendingTagStyle : weekendTagStyle}>{d.status}</span></td>
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
                        return <th key={headItem} className="w-72 py-2 border text-black/60 text-base font-semibold">{headItem}</th>
                    })
                }
            </tr>
        </thead>
    )

}




export function LeaveBody({ data }) {
    return (
        <tbody >
            {
                data?.map((d, i) => {
                   return ( <tr key={`attendence-${i}`} className="hover:bg-[#ECF0F8]">
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.sno}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.title}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.startdate}</td>
                        <td className="text-center w-72 py-2 border text-black/60 text-sm font-semibold " >{d.enddate}</td>
                        <td className="text-center w-72 py-2 border" >
                            <span className="bg-[#638BFF] text-sm py-1 px-4 text-white rounded-sm">View</span>
                            </td>
                        <td className="text-center w-72 py-2 border" >
                        <span className="bg-[#E1AF09] text-sm py-1 px-4 text-white rounded-sm">Edit</span>
                        </td>
                    </tr>
                   )
                })
            }

        </tbody>
    )
}
export default TData;
