import { format } from 'date-fns'
import { useState } from 'react';

import { FormControl, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormGroup, } from "@mui/material";

export default function AddTimeTracker() {

    const [addProject, setAddProject] = useState(false);
    const [addJobTitle, setAddJobTitle] = useState(false);

    const date = new Date();
    const dateString = format(date, 'yyyy-MM-dd');
    const time = format(date, 'hh:mm');

    const options = [
        {
            title: "Human Resource",
            value: "Human Resource"
        },
        {
            title: "Human Resource",
            value: "Human Resource"
        },

        {
            title: "Human Resource",
            value: "Human Resource"
        },

        {
            title: "Human Resource",
            value: "Human Resource"
        },
    ]



    const formfields = [
        {
            title: 'Date',
            type: 'date',
            id: 'date',
            value: dateString
        },

        {
            title: 'Work Description',
            type: 'text',
            id: 'description',
            value: ''
        },

        {
            title: 'Time',
            type: 'time',
            id: 'time',
            value: time
        },


    ]
    return (
        <div className="w-full  px-2">
            <div className="flex justify-between items-center my-5 ">
                <h2 className="text-2xl font-bold text-[#00337A]/80">Add Time Tracker</h2>
            </div>

            <FormControl  >

                <div className="bg-white rounded-lg shadow-md-4 px-7 pb-4">
                    <div  className="grid grid-cols-12 gap-2 pt-4 items-center">
                        <label className="text-lg  col-span-4" htmlFor="project">Project Name</label>

                        <select className="py-2 px-2 col-span-6 border-2 " name="" id="project">
                            {
                                options.map((option, index) => {

                                    return <option key={`${index}-projectName`} value={option.value}>{option.title}</option>
                                })
                            }
                        </select>
                        <button onClick={() => setAddProject(true)} className="px-2 py-1 bg-[#0DCD95] text-white">+ Add
                        </button>
                        <Dialog open={addProject} onClose={() => setAddProject(false)} maxWidth='sm' fullWidth>
                            <DialogTitle>Add Project Name</DialogTitle>
                            <DialogContent>
                                <FormControl fullWidth>
                                    <TextField
                                        fullWidth
                                        placeholder='Select'
                                        size="small"
                                        margin="normal"
                                        label='Project Name'
                                        type='text'
                                    />

                                </FormControl>
                                <DialogActions>
                                    <button onClick={() => setAddProject(false)} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Close</button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>

                    </div>

                    <div  className="grid grid-cols-12 gap-2 pt-4 items-center">
                        <label className="text-lg  col-span-4" htmlFor="project">Job Name</label>

                        <select className="py-2 px-2 col-span-6 border-2 " name="" id="project">
                            {
                                options.map((option, index) => {

                                    return <option key={`${index}-projectName`} value={option.value}>{option.title}</option>
                                })
                            }
                        </select>
                        <button onClick={() => setAddJobTitle(true)} className="px-2 py-1 bg-[#0DCD95] text-white">+ Add
                        </button>
                        <Dialog open={addJobTitle} onClose={() => setAddJobTitle(false)} maxWidth='sm' fullWidth>
                            <DialogTitle>Add Job Name</DialogTitle>
                            <DialogContent>
                                <FormControl fullWidth>
                                    <TextField
                                        fullWidth
                                        placeholder='Select'
                                        size="small"
                                        margin="normal"
                                        label='Job Name'
                                        type='text'
                                    />

                                </FormControl>
                                <DialogActions>
                                    <button onClick={() => setAddJobTitle(false)} className="px-4 py-2 bg-[#FD7E01] rounded-md text-white">Close</button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>

                    </div>





                    {
                        formfields.map((field, index) => {
                            return (
                                <div key={`${index}-addTimeTracker`} className="grid grid-cols-12 gap-2 pt-4 items-center">
                                    <label className="text-lg  col-span-4" htmlFor={field.id}>{field.title}</label>

                                    <input className="py-2 px-2 col-span-6 border-2" value={field.value} type={field.type} id={field.id} />
                                </div>
                            )
                        })
                    }
                </div>
                <div>

                    <button className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-md text-white">Submit</button>
                </div>

            </FormControl>
        </div>
    )
}



