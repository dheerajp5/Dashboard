import { TableHead, TableBody } from "../components/table";
const title = ['Date', 'First Check In', 'Last Check In', 'Time', 'HR Comment', 'Status'];
const attendence = [
    {
        date: '2024-02-01',
        firstCheckIn: '09:21 AM',
        lastCheckIn: '09:21 AM',
        time: '09:21 AM',
        hrComment: '09:21 AM',
        status: 'Pending'
    },
    {
        date: '2024-02-01',
        firstCheckIn: '09:21 AM',
        lastCheckIn: '09:21 AM',
        time: '09:21 AM',
        hrComment: '09:21 AM',
        status: 'Pending'
    },
    {
        date: '2024-02-01',
        firstCheckIn: '09:21 AM',
        lastCheckIn: '09:21 AM',
        time: '09:21 AM',
        hrComment: '09:21 AM',
        status: 'Pending'
    },
    {
        date: '2024-02-01',
        firstCheckIn: 'Not Checked In',
        status: 'Weekend'
    },
    {
        date: '2024-02-01',
        firstCheckIn: 'Not Checked In',
        status: 'Weekend'
    },
    {
        date: '2024-02-01',
        firstCheckIn: '09:21 AM',
        lastCheckIn: '09:21 AM',
        time: '09:21 AM',
        hrComment: '09:21 AM',
        status: 'Pending'
    },
    {
        date: '2024-02-01',
        firstCheckIn: '09:21 AM',
        lastCheckIn: '09:21 AM',
        time: '09:21 AM',
        hrComment: '09:21 AM',
        status: 'Pending'
    },
    {
        date: '2024-02-01',
        firstCheckIn: '09:21 AM',
        lastCheckIn: '09:21 AM',
        time: '09:21 AM',
        hrComment: '09:21 AM',
        status: 'Pending'
    },


]
export default function Attendance() {
    return (

        <div className="w-full  px-2">
            <div className="flex justify-between items-center my-5 ">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Attendance</h2>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-white">Add</button>
            </div>

            <div className="bg-white rounded-lg shadow-md-4 px-7 pb-4">
                <form action="" className="sm:flex justify-between">
                    <div>
                        <label className="block text-[#00337A]/80 text-lg font-bold my-2" htmlFor="startDate">Start Date</label>

                        <input id="startDate" className="border-2 w-72 p-1" type="date" name="" />
                    </div>
                    <div>
                        <label className="block text-[#00337A]/80 text-lg font-bold my-2" htmlFor="endDate">End Date</label>

                        <input id="endDate" className="border-2 w-72 p-1" type="date" />
                        <button className="ml-5 w-20 h-10 bg-blue-600 rounded-md text-white text-lg">Apply</button>
                    </div>
                </form>

                <div className="border rounded-lg mt-4 mb-4  ">
                    <table className="">
                        <TableHead thead={title} />
                        <TableBody data={attendence} />

                    </table>
                </div>

            </div>
        </div>


    )
}