import { TableHead, AttendanceBody } from "../components/table";
import DatePicker from "../components/datePicker";

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
                <form action="" className="sm:flex justify-between w-[75%]">
                    <div>

                        <DatePicker label='Start Date' />
                    </div>
                    <div>
                        <DatePicker label='End Date' />
                        <button className="ml-5 w-20 h-10 bg-blue-600 rounded-md text-white text-lg">Apply</button>
                    </div>
                </form>

                <div className="border rounded-lg mt-4 mb-4  ">
                    <table className="">
                        <TableHead thead={title} />
                        <AttendanceBody data={attendence} />

                    </table>
                </div>

            </div>
        </div>


    )
}