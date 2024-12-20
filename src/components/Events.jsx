import React from 'react'
// import img1 from "../images/Image1.jpg"
import event1 from "../assets/pic/event1.jpg"
import event2 from "../assets/pic/event2.jpg"
import event3 from "../assets/pic/event3.jpg"
import event4 from "../assets/pic/event4.jpg"
import { Slide, Fade } from 'react-awesome-reveal'

const cardData = [
  {
    id:1,
    img:event1,
    title:'Event ka Name',
    desc:'Abhi thodi der me likhunga'
  },
  {
    id:2,
    img:event2,
    title:'Event ka Name',
    desc:'Abhi thodi der me likhunga'
  },
  {
    id:3,
    img:event3,
    title:'Event ka Name',
    desc:'Abhi thodi der me likhunga'
  },
  {
    id:4,
    img:event4,
    title:'Event ka Name',
    desc:'Abhi thodi der me likhunga'
  }
]

function Events() {
  return (
    <div className='bg-slate-400'>
      <h1 className='text-[4em] text-center mb-[5vh]'> <b>Events</b> </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1'>
        {
          cardData.map(({id,img, title, desc}) =>{
            return (
                  <div key = {id} className='text-white shadow-md rounded-lg overflow-hidden relative group'> 
                      <img src= {img} alt="Event Image" className='w-full max-w-[300px] h-[350px] rounded-lg' />
                      <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500 duration-500'>
                          <div className='space-y-4'>
                            <Slide cascade>
                                    <h1 className='text-3xl font-bold'>{title}</h1>
                                    <Fade cascade damping={0.05}>
                                      {desc}
                                    </Fade>
                                    <div>
                                      <button className='border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300'> View</button>
                                    </div>
                            </Slide>
                          </div>
                      </div>
                  </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Events