import {format} from 'date-fns';
import { useState } from 'react';

export default function DatePicker({label, setValue,value}) {
    const date =  new Date();

    const [dateString, setDateString] = useState(format(date,'yyyy-MM-dd'));
    
    return (
        <>
            <label className="block text-[#00337A]/80 text-lg font-bold my-2" htmlFor="startDate">{label}</label>

            <input id="startDate" onChange={(e) => setValue? setValue(e.target.value):setDateString(e.target.value)} className="border-2 w-72 p-1" type="date"  value={value ? value : dateString} />
        </>
    )
}