import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { format } from 'date-fns'

export default function AddLeaveDiaglog() {
    const date =  new Date();
    const dateString = format(date,'yyyy-MM-dd');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const formFields = [
        {
            id : 'type',
            type : 'text',
            lable : 'Type',
            placeholder : 'casual Leave',
            value : ''
        },
        {
            id : 'subject',
            type : 'text',
            lable : 'Subject',
            placeholder : 'casual Leave',
            value : ''
        },
        {
            id : 'description',
            type : 'text',
            lable : 'Description',
            placeholder : 'casual Leave',
            value : ''
        },
        {
            id : 'startDate',
            type : 'date',
            lable : 'Start Date',
            placeholder : '',
            value : dateString
        },
        {
            id : 'endDate',
            type : 'date',
            lable : 'End Date',
            placeholder : '',
            value : dateString
        },
        {
            id : 'email',
            type : 'email',
            lable : 'Reporting Manager Email',
            placeholder : 'debanshu.quantumtinnovation@gmail.com',
            value : ''
        },
        {
            id : 'status',
            type : 'text',
            lable : 'Status',
            placeholder : '',
            value : 'Requested',
            disabled : true
        },
    ]
    return (
        <>
            <button onClick={() => setIsDialogOpen(true)} className="px-4 py-2 bg-blue-600 rounded-md text-white">Add leave</button>
            <Dialog 
              
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            >
                <DialogTitle >Leave Request</DialogTitle>
                <DialogContent>
                    <form action="">
                      
                    {
                        formFields.map((field, index) => {
                            return (
                                <div className="my-3">
                                <label className="text-md font-normal" htmlFor={field.id}>{field.lable}</label>
                                <TextField
                                className="m-2"
                                hiddenLabel
                                 type={field.type}
                                 fullWidth
                                 size="small"
                                 defaultValue={field.value}
                                 disabled ={field.disabled || false}
                                 variant="filled"
                                 value={field.value}
                                 placeholder={field.placeholder}
                                >

                                </TextField>
                                </div>
                                
                            )
                        }) 
                    }
                    
                    <DialogActions>
                        <button onClick={() => setIsDialogOpen(false)} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Close</button>
                    </DialogActions>
                       </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
