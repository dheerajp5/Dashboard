// import Table from "../components/table";
import TData, {TableHead} from "../components/table";
function TimeTracker() {

    const tableHeader = ['S.No', 'Project Name', 'Job Name', 'Work Description', 'Time', 'Action']
    const tableData = [1, 2, 3, 4, 5, 6];
    return (
        <div className="sm:px-4 px-1 py-6">
            <div className="flex justify-between items-center mt-1">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Time Tracker</h2>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-white">Add</button>
            </div>

            <div className="bg-white rounded-lg shadow-md-4 px-7 pb-4">
                <form action="" className="sm:flex justify-between my-3">
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
                

                <div className="w-[100%]  mt-2 py-5 border-t">
                    <h3 className="text-lg font-semibold text-[#00337A]/80 m-2">Date :01-02-24</h3>
                    <table className="border rounded-lg">
                        <TableHead thead={tableHeader} />
                        <tbody>
                            <TData tabledata={tableData} />
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default TimeTracker;