import { format, isToday } from 'date-fns';
import clsx from 'clsx';


const  CalendarWeakDays = ()=>  {
    const weakDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <>
            {
                weakDays.map(day => <div className='text-sm font-semibp;d text-center py-1 border border-black bg-black/10' key={day}>{day}</div>)
            }
        </>

    )
}

const EmptyDiv = ({Length}) => {
    return (
        <>

            {
                Array.from({ length: Length })
                    .map((_, index) =>
                        <div key={`empty-${index}`} className='h-20 border border-black'> </div>)
            }

        </>

    )

}


function DateDiv({dates}) {
    return (
        <>
            {
                dates.map((day, index) =>
                    <div key={index}
                        className={clsx('h-20 border border-black text-right', { "bg-yellow-100/70": isToday(day,) })}>{format(day, 'd')}
                        {/* Event Div */}
                        <div className='w-full text-[#00337A]/80 bg-green-300 text-center font-semibold text-small'>
                            {
                                format(day, 'EEE') === "Sun" ? "Weekend" : format(day, 'EEE') === 'Thu' ? 'Weekend' : ''
                            }
                            {

                            }
                        </div>
                    </div>)
            }
        </>
    )
}

export default CalendarWeakDays;
export  {EmptyDiv, DateDiv }