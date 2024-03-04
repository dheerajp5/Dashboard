// import Table from "../components/table";
import  TData  from "../components/table";
function TimeTracker() {

    const tableHeader = ['S.No', 'Project Name', 'Job Name', 'Work Description', 'Time', 'Action']
    const tableData = [1, 2, 3, 4, 5, 6];
    return (
        <div className="mt-5 sm:px-4 px-1 py-6">
            <div className="flex justify-between items-center mt-5">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Time Tracker</h2>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-white">Add</button>
            </div>

            <div className=" bg-white rounded-lg min-h-[300px] shadow-md  mt-8">
                <form action="" className="sm:flex justify-around">
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



                <div className="w-[100%] border shadow-lg mt-10 px-2 sm:px-5  py-10">
                    <h3 className="text-lg font-semibold text-[#00337A]/80 m-2">Date 06 jan 2024</h3>
                    <table className="">
                        <thead >
                            <tr>
                                <th className="w-72 p-2 border text-black/60 text-lg font-semibold">S.NO</th>
                                <th className="py-1 w-72 border text-black/60 text-lg font-semibold">Project Name</th>
                                <th className="py-1 w-72 border text-black/60 text-lg font-semibold">Job Name</th>
                                <th className="py-1 w-72 border text-black/60 text-lg font-semibold">Work Description</th>
                                <th className="py-1 w-72 border text-black/60 text-lg font-semibold">Time</th>
                                <th className="py-1 w-72 border text-black/60 text-lg font-semibold">Action</th>
                            </tr>
                        </thead>

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