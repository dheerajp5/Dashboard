
import {format, startOfMonth, endOfMonth, eachDayOfInterval, getDay} from 'date-fns';
import CalendarWeakDays from '../components/calendar'
import {EmptyDiv, DateDiv} from '../components/calendar'
const weakDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function Holiday() {
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    });

    const startingIndex = getDay(firstDayOfMonth);
    return (
        <div className='container mx-auto p-4 border shadow-md bg-white m-4 '>
            <div className='mb-4'>
                <h2 className=' text-2xl text-[#00337A]/80 font-semibold text-center'>{format(currentDate, "MMMM yyyy")}</h2>
            </div>
            <div className='grid grid-cols-7'>
                {/* weak days */}
                <CalendarWeakDays  />
                {/* empty Divs */}
                <EmptyDiv Length= {startingIndex} />

                {/* date div */}
                <DateDiv dates={daysInMonth} />
            </div>
        </div>
    )
}

export default Holiday;