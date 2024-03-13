
import { TableHead } from "../components/table";
import { LeaveBody } from "../components/table";
import AddLeaveDiaglog from "../components/miui-Dialog";

export default function Leave() {
    const title2 = ['S.No.', 'Title', 'Start Date', 'End Date', 'View', 'Edit'];
    const leave = [
        {
            sno: '1',
            title: 'Casual Leave',
            startdate: '01/01/2022',
            enddate: '01/01/2022',
        },
        {
            sno: '2',
            title: 'Casual Leave',
            startdate: '01/01/2022',
            enddate: '01/01/2022',
        }, {
            sno: '3',
            title: 'Casual Leave',
            startdate: '01/01/2022',
            enddate: '01/01/2022',
        }, {
            sno: '4',
            title: 'Casual Leave',
            startdate: '01/01/2022',
            enddate: '01/01/2022',
        }, {
            sno: '5',
            title: 'Casual Leave',
            startdate: '01/01/2022',
            enddate: '01/01/2022',
        }, {
            sno: '6',
            title: 'Casual Leave',
            startdate: '01/01/2022',
            enddate: '01/01/2022',
        },

    ]

   
    return (
        <div className="w-full  px-2">
            <div className="flex justify-between items-center my-5 ">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Leave</h2>
                <AddLeaveDiaglog />
                {/* <button className="px-4 py-2 bg-blue-600 rounded-md text-white">Add leave</button> */}
            </div>
            <div className="bg-white rounded-lg shadow-md-4 px-7 py-4">


                <table >
                    <TableHead thead={title2} />
                    <LeaveBody data={leave} />
                </table>
            </div>
        </div>
    )
}
