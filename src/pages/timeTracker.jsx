// import Table from "../components/table";
import { TimeTrackerBody, TableHead } from "../components/table";
import { useEffect, useState } from "react";
import {format} from 'date-fns';
import DatePicker from "../components/datePicker";
import { NavLink } from "react-router-dom";
import axios from "axios";
function TimeTracker() {

    const tableHeader = ['S.No', 'Project Name', 'Job Name', 'Work Description', 'Time', 'Action']
    const [tableData, setTableData] = useState([]);
    const date =  new Date();
    const [isPressed, setIsPressed] = useState(false);
    const [startDate, setStartDate] = useState(format(date,'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(date,'yyyy-MM-dd'));

    const fetchTimeTracker = () => {

        setIsPressed(false);
        const postData = {
            startDate: startDate,
            endDate: endDate,
            e_id : "employee731"
        }

        console.log(postData);
        const url = "https://op0ag7psd1.execute-api.ap-south-1.amazonaws.com/dev/"
        axios.post(url,postData)
        .then((response) => { console.log("timeTracker", response); setTableData(response.data.data.Items)})
        .catch((err) => console.log("error while fetching timeTracker ", err) )
    };

    useEffect(fetchTimeTracker,[isPressed]);

    return (
        <div className="sm:px-4 px-1 py-6">
            <div className="flex justify-between items-center mt-1">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Time Tracker</h2>
                <NavLink to="/time-tracker/add" className="px-4 py-2 bg-blue-600 rounded-md text-white">Add</NavLink>
            </div>

            <div className="bg-white rounded-lg shadow-md-4 px-7 pb-4">
                <form  className="sm:flex justify-between my-3 w-[75%]">
                    <div>

                        <DatePicker label='Start Date' setValue={setStartDate} value={startDate} />
                    </div>
                    <div>
                    <DatePicker label='End Date' setValue={setEndDate} value={endDate} />
                        <button onClick={(event) =>{ event.preventDefault(); setIsPressed(true)} }  className="ml-5 w-20 h-10 bg-blue-600 rounded-md text-white text-lg">Apply</button>
                    </div>
                </form>


                <div className="w-[100%]  mt-2 py-5 border-t">
                    <h3 className="text-lg font-semibold text-[#00337A]/80 m-2">Date :{startDate}</h3>
                    <table className="border rounded-lg">
                        <TableHead thead={tableHeader} />
                        <tbody>
                            <TimeTrackerBody tabledata={tableData} />
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default TimeTracker;