import { useState } from 'react'
import TaskCard from '../utilitys/TaskCard'

export default function Home() {
const [tasks, settasks] = useState([
    {
        title : "Learn React",
        status : false,
        dedline : "15-9-2024"
    },
    {
       title : "Learn React",
        status : false,
        dedline : "15-9-2024"
    },
    {
      title : "Learn React",
        status : true,
        dedline : "15-9-2024"
    },
    {
       title : "Learn React",
        status : false,
        dedline : "15-9-2024"
    },
])
 
  return (<div className='w-[90%] m-auto'>
            <h3>Recent Task</h3>
            <article className='flex flex-col gap-3 mt-2'>
                  {tasks?.map((task,ind)=>
                  {
                    const {status,dedline} = task
                 let currntStatus;
                //  let currentDate =new Date().toLocaleDateString()
                //  let currentDate =new Date().toLocaleString()
                 let currentDate = new Date().toJSON()
                 console.log(currentDate);
                 console.log(currentDate === "5:23:58");

                 
                   if(!status){
                    currntStatus = "Pending"
                   }


                    <TaskCard {...task} key={ind}/>
                    }
                    )}
            </article>
  </div>
  )
}
