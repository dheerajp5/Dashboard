import { FormControl, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormGroup } from "@mui/material";
import { useState } from "react";
import { format } from 'date-fns'

export default function AddLeaveDiaglog() {
    const date = new Date();
    const dateString = format(date, 'yyyy-MM-dd');

    
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const formFields = [
        {
            id: 'type',
            type: 'text',
            lable: 'Type',
            placeholder: 'casual Leave',
            value: ''
        },
        {
            id: 'subject',
            type: 'text',
            lable: 'Subject',
            placeholder: 'casual Leave',
            value: ''
        },
        {
            id: 'description',
            type: 'text',
            lable: 'Description',
            placeholder: 'casual Leave',
            value: ''
        },
        {
            id: 'startDate',
            type: 'date',
            lable: 'Start Date',
            placeholder: '',
            value: dateString
        },
        {
            id: 'endDate',
            type: 'date',
            lable: 'End Date',
            placeholder: '',
            value: dateString
        },
        {
            id: 'email',
            type: 'email',
            lable: 'Reporting Manager Email',
            placeholder: 'debanshu.quantumtinnovation@gmail.com',
            value: ''
        },
        {
            id: 'status',
            type: 'text',
            lable: 'Status',
            placeholder: '',
            value: 'Requested',
            disabled: true
        },
    ]
    return (
        <>
            <button onClick={() => setIsDialogOpen(true)} className="px-4 py-2 bg-blue-600 rounded-md text-white">Add leave</button>
            <Dialog maxWidth='sm' fullWidth
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}


            >
                <DialogTitle >Leave Request</DialogTitle>
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
                            <button onClick={() => setIsDialogOpen(false)} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Close</button>
                        </DialogActions>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
    )
}

export function AddAttendanceDialog() {
    const date = new Date();
    const dateString = format(date, 'yyyy-MM-dd');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const formFields = [
        {
            id: 'type',
            type: 'text',
            lable: 'Type',
            placeholder: 'casual Leave',
            value: ''
        },
        {
            id: 'subject',
            type: 'text',
            lable: 'Subject',
            placeholder: 'casual Leave',
            value: ''
        },
        {
            id: 'description',
            type: 'text',
            lable: 'Description',
            placeholder: 'casual Leave',
            value: ''
        },
        {
            id: 'startDate',
            type: 'date',
            lable: 'Start Date',
            placeholder: '',
            value: dateString
        },
        {
            id: 'endDate',
            type: 'date',
            lable: 'End Date',
            placeholder: '',
            value: dateString
        },
        {
            id: 'email',
            type: 'email',
            lable: 'Reporting Manager Email',
            placeholder: 'debanshu.quantumtinnovation@gmail.com',
            value: ''
        },
        {
            id: 'status',
            type: 'text',
            lable: 'Status',
            placeholder: '',
            value: 'Requested',
            disabled: true
        },
    ]
    return (
        <>
            <button onClick={() => setIsDialogOpen(true)} className="px-4 py-2 bg-blue-600 rounded-md text-white">Add leave</button>
            <Dialog maxWidth='sm' fullWidth
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}


            >
                <DialogTitle >Leave Request</DialogTitle>
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
                            <button onClick={() => setIsDialogOpen(false)} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Close</button>
                        </DialogActions>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
    )
}



export function Add({ title, onSubmitHandler }) {


    return (
        <Dialog maxWidth='sm' fullWidth>
            <DialogTitle>Add {title}</DialogTitle>
            <DialogContent>
                <FormControl>
                    <TextField
                        
                        placeholder='Select'
                        size="small"
                        margin="normal"
                        label={title}
                        type='text'
                    />

                </FormControl>
                <DialogActions>
                            <button onClick={onSubmitHandler} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Close</button>
                        </DialogActions>
            </DialogContent>
        </Dialog>
    )
}