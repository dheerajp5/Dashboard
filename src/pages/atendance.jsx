import { TableHead, AttendanceBody } from "../components/table";
import { FormControl, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormGroup } from "@mui/material";
import { format } from 'date-fns'
import DatePicker from "../components/datePicker";
import { useState } from "react";

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
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const formFields = [
        {
            id: 'Date',
            type: 'date',
            lable: 'Date',
            placeholder: '',
            value: dateString
        },
        {
            id: 'First Check In',
            type: 'time',
            lable: 'First Check In',
            placeholder: '',
            value: time
        },
        {
            id: 'Last Check In',
            type: 'time',
            lable: 'Last Check In',
            placeholder: '',
            value: time
        },
        {
            id: 'time',
            type: 'time',
            lable: 'time',
            placeholder: '',
            value: time,
            disabled: true
        },
        {
            id: 'HR Comment',
            type: 'text',
            lable: 'HR Comment',
            placeholder: '',
            value: ''
        },
        {
            id: 'status',
            type: 'text',
            lable: 'Status',
            placeholder: '',
            value: 'Pending',
            disabled: true
        },
    ]

   function onAddHandler(e) {
        console.log('event',e);
    }


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
                <DialogContent fullWidth>
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