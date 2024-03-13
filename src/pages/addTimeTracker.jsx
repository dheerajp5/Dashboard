import { format } from 'date-fns'

export default function AddTimeTracker() {

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

    const a= [1,2];

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

            <form onChange={() =>{}} >
           
                <div className="bg-white rounded-lg shadow-md-4 px-7 pb-4">

                    {
                        a.map((_, index) => {

                            return (
                                <div key={index} className="grid grid-cols-12 gap-2 pt-4 items-center">
                                    <label className="text-lg  col-span-4" htmlFor="project">Project Name</label>

                                    <select className="py-2 px-2 col-span-6 border-2 " name="" id="project">
                                        {
                                            options.map((option, index) => {

                                                return <option key={`${index}-projectName`} value={option.value}>{option.title}</option>
                                            })
                                        }
                                    </select>
                                    <button className="px-2 py-1 bg-[#0DCD95] text-white">+ Add</button>

                                </div>
                            )

                        })
                    }




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
                <button className="mt-4 px-4 py-2 bg-blue-600 rounded-md text-white">Submit</button>
            </form>
        </div>
    )
}
