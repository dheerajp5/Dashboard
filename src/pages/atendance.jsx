import { TableHead, AttendanceBody } from "../components/table";
import { useState, useEffect } from "react";
import { FormControl, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormGroup } from "@mui/material";
import { format } from 'date-fns'
import DatePicker from "../components/datePicker";

import axios from "axios";
import { da } from "date-fns/locale";
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
    const date = new Date();
    const dateString = format(date, 'yyyy-MM-dd');
    const time =  format(date, 'hh:mm')

    const [tableData, setTableData] = useState([]);
    const [isPressed, setIsPressed] = useState(false);
    const [startDate, setStartDate] = useState(format(date,'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(date,'yyyy-MM-dd'));


    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedDate, setSelectedDate ] = useState(dateString);
    const [checkIn, setCheckIn] = useState(time);
    
    const [lastCheckIn, setLastCheckIn] = useState(time);
    const [totalTime, setTotalTime] = useState(0);
    const formFields = [
        {
            id: 'Date',
            type: 'date',
            lable: 'Date',
            placeholder: '',
            value: dateString,
            onChange: (event) =>  setSelectedDate(event?.target?.value)
        },
        {
            id: 'First Check In',
            type: 'time',
            lable: 'First Check In',
            placeholder: '',
            value: checkIn,
            onChange: (event) =>  setCheckIn(event.target.value)
        },
        {
            id: 'Last Check In',
            type: 'time',
            lable: 'Last Check In',
            placeholder: '',
            value: lastCheckIn,
            onChange: (event) =>  setLastCheckIn(event.target.value)
        },
        {
            id: 'time',
            type: 'number',
            lable: 'time',
            placeholder: '',
            value: totalTime,
            onChange: (event) => setTotalTime(event.table.value)
        },
        
    ]


    const fetchAttendance = () => {

        setIsPressed(false);
        const postData = {
            startDate: startDate,
            endDate: endDate,
            e_id : "employee731"
        }

        console.log(postData);
        const url = "https://op0ag7psd1.execute-api.ap-south-1.amazonaws.com/dev/"
        axios.post(url,postData)
        .then((response) => { console.log("Attendance", response); setTableData(response.data.data.Items)})
        .catch((err) => console.log("error while fetching attendance", err) )
    };

    useEffect(fetchAttendance,[isPressed]);

    return (

        <div className="w-full  px-2">
            <div className="flex justify-between items-center my-5 ">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Attendance</h2>
                <>
            <button onClick={() => setIsDialogOpen(true)} className="px-4 py-2 bg-blue-600 rounded-md text-white">Add</button>
            <Dialog maxWidth='sm' fullWidth
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}


            >
                <DialogTitle >Add Attendance</DialogTitle>
                <DialogContent >
                    <FormControl fullWidth >

                        {
                            formFields.map((field, index) => {
                                return (
                                    <FormGroup key={field.id + index}>
                                        <TextField
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            size="small"
                                            margin="normal"
                                            label={field.lable}
                                            disabled={field.disabled || false}
                                            defaultValue={field.value}
                                            type={field.type}
                                            onChange={field.onChange}
                                        />
                                    </FormGroup>

                                )
                            })
                        }

                        <DialogActions>
                            <button onClick={() => {setIsDialogOpen(false); onAddHandler(event)}} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Submit</button>
                        </DialogActions>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
            </div>

            <div className="bg-white rounded-lg shadow-md-4 px-7 pb-4">
                <form action="" className="sm:flex justify-between w-[75%]">
                    <div>

                        <DatePicker label='Start Date' setValue={setStartDate} value={startDate} />
                    </div>
                    <div>
                    <DatePicker label='End Date' setValue={setEndDate} value={endDate} />
                    <button onClick={(event) =>{ event.preventDefault(); setIsPressed(true)} }  className="ml-5 w-20 h-10 bg-blue-600 rounded-md text-white text-lg">Apply</button>
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