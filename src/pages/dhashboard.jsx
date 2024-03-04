
import { format } from 'date-fns'
import Card from '../components/card'
import { useEffect, useState } from 'react';

function getTime() {
  const time = new Date();
  const hours = time.getHours();
  return `${hours}:${time.getMinutes()}:${time.getSeconds()}`;
}

function Dashboard() {

  // const {currentTime,setC} = useState(getTime());

  // useEffect(()=> setC(getTime()),[1000]);


    const leaveRequests = [

        {
          title: "casual Leave",
          body: "Requested"
        },
    
        {
          title: "casual Leave",
          body: "Requested"
        }
      ]
    
      const attendance = [
        {
          title: "12:09:16 hrs",
          body: '06 feb 2024'
        }
      ]
    
      const timeTracker = [
        {
          body: "Time Tracker is not updated yet"
        }
      ]
    
      const holiday = [
        {
          title: 'Mahashivratri',
          body: 'Start Date : 2024-03-08 End Date : 2024-03-08',
          icon: true
        },
    
        {
          title: "Holi",
          body: 'Start Date : 2024-03-08 End Date : 2024-03-08',
          icon: true
        }
      ]
    
      const announcement = [
        {
          title: 'Leave Update',
          body: '2024-02-06'
        },
    
        {
          title: 'Camera Activation for Client Call',
          body: '2024-02-06'
        },
    
        {
          title: 'Leave Update',
          body: '2024-02-06'
        },
    
        {
          title: 'Leave Update',
          body: '2024-02-06'
        },
    
      ]

      const policy = [
        {
          body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
         
        }
      ]


    return (
        <div className="grid grid-cols-12 gap-4 mt-8 px-2">

          {/* widgets Section  */}
          <div className='col-span-12 flex justify-between items-center mt-5 mb-10'>
              <h2 className='text-2xl font-semibold text-[#00337A]'>Employee <span className='font-normal text-black/40'>Dashboard</span></h2>

              <div id='widgets' className='flex gap-2' >
                <div className='bg-[#DBE5FF] p-2 flex gap-2 items-center'>
                  <img src="/assets/uil_calender.png" alt="" />
                  <span className='text-sm text-[#404A56]/80'>{format(new Date(), 'dd mm yyyy')}</span>
                </div>

                <div className='p-2 flex gap-2 items-center bg-[#DBE5FF] '>
                  {/* <div className=''> */}
                  <img src="/assets/mdi_clock-outline.png" alt="" />
                  <span className='text-sm text-[#404A56]/80'>{getTime()}</span>
                  {/* </div> */}
                  {/* <span className='text-sm text-[#404A56]/80'>Total Login Time</span> */}
                </div>

                <button className='px-3 py-2 bg-red-500 text-white rounded-lg'>Clock Out</button>


              </div>
          </div>


            {/* ROw 1 */}
            <Card title='Attendance' colspan="col-span-4" type='attendance' body={attendance} />
            <Card title='Leave Request' colspan="col-span-4" type='leave' body={leaveRequests} />

            {/* Row 2 */}
            <Card title='Time Tracker' colspan="col-span-4" type='time' body={timeTracker} />
            <Card title='Announcement' colspan="col-span-6" type='announcement' body={announcement} />
            <Card title='Upcomming Holiday' colspan="col-span-6" type='holiday' body={holiday} />

            {/* Row 3 */}
            <Card title='Company Policy' colspan="col-span-12" type='policy' body={policy} />
          </div>
    )
}

export default Dashboard;