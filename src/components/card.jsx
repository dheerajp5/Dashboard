
function Card({ title, colspan, type, body }) {

    return (
        <article className={`${colspan} bg-white rounded-lg h-[300px] shadow-md`}>
            <h3 className="mt-3 text-lg text-[#00337A] font-bold border-s-4 border-[#00337A] px-2">{title}</h3>
            <div className="mt-5 h-full px-2">
                {type === 'attendance' && attendanceCardBody(body[0])}
                {type === 'leave' && body.map((item, index) => leaveCardBody(item, index))}
                {type === 'time' && timeTrackerCardBody(body[0])}
                {type === 'announcement' && body.map((item, index) => annoucementCardBody(item, index))}
                {type === 'holiday' && body.map((item, index) => holiDayCardBody(item, index))}
                {type === 'policy' && body.map((item, index) => policyCardBody(item, index))}
            </div>

        </article>
    )
}

function leaveCardBody(cardBody, index) {
    return (
        <div key={index} className='flex gap-2  items-center border-b p-2 hover:bg-[#ECF0F8]'>
            <div className="p-[2px] rounded-full border-2  border-gray-300">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
            </div>

            <div>
                <h4 className='text-black/80  text-lg'>{cardBody.title}</h4>
                <p className="text-black/30 text-md">{cardBody.body}</p>
            </div>
        </div>
    )
}

function policyCardBody(cardBody, index) {
    return (
        <div key={`policy-${index}`} className="">
            <p>{cardBody.body}</p>
        </div>
    )
}

function holiDayCardBody(cardBody, index) {
    return (
        <div key={index} className='flex gap-2  items-center border-b p-2 hover:bg-[#ECF0F8]'>
            <div className="p-[2px] rounded-full border-2  border-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>

            <div>
                <h4 className='text-black/80  text-lg'>{cardBody.title}</h4>
                <p className="text-black/30 text-md">{cardBody.body}</p>
            </div>
        </div>
    )
}

function annoucementCardBody(cardBody, index) {
    return (
        <div key={index} className='flex gap-2  items-center border-b p-2 hover:bg-[#ECF0F8]'>
            <div className="p-[2px] rounded-full border-2  border-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-700"></div>
            </div>

            <div className="flex justify-between w-[100%]">
                <h4 className='text-black/80  text-lg'>{cardBody.title}</h4>
                <p className="text-black/30 text-md">{cardBody.body}</p>
            </div>
        </div>
    )
}


function timeTrackerCardBody(cardBody) {
    console.log(cardBody);
    return (
        <div className='flex gap-1 flex-col justify-center items-center border-b p-2 h-[60%]'>
            {/* <h4 className='text-[#00337A]/80  text-4xl'>{cardBody.title}</h4> */}
            <p className="text-[#26374F]/80 text-base">{cardBody.body}</p>

        </div>
    )
}






function attendanceCardBody(cardBody) {
    console.log(cardBody);
    return (
        <div className='flex gap-1 flex-col justify-center items-center border-b p-2 h-[60%]'>
            <h4 className='text-[#00337A]/80  text-4xl'>{cardBody.title}</h4>
            <p className="text-[#26374F]/80 text-base">{cardBody.body}</p>

        </div>
    )
}








export default Card;

