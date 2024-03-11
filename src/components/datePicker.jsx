import {format} from 'date-fns';

export default function DatePicker({label}) {
    const date =  new Date();
    const dateString = format(date,'yyyy-MM-dd')
    return (
        <>
            <label className="block text-[#00337A]/80 text-lg font-bold my-2" htmlFor="startDate">{label}</label>

            <input id="startDate" className="border-2 w-72 p-1" type="date" name="" value={dateString} />
        </>
    )
}