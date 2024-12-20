import React from 'react'
import event1 from "../assets/pic/event1.jpg"
import event2 from "../assets/pic/event2.jpg"
import event3 from "../assets/pic/event3.jpg"
import event4 from "../assets/pic/event4.jpg"
import { Slide, Fade } from 'react-awesome-reveal'

const cardData = [
  {
    id:1,
    img:event1,
    title:'Abhudya',
    desc:"KOSHISH's annual function showcases kids' talents through performances like dance and drama, spreading awareness on rural education's necessity"
  },
  {
    id:2,
    img:event2,
    title:'Udaan',
    desc:'KOSHISH organizes technical, sports, GK, and art events, including waste material projects, competitions, and awards at semester-end'
  },
  {
    id:3,
    img:event3,
    title:'Republic Day',
    desc:'The KOSHISH family celebrates Republic Day with children and members, organizing a quiz on the Constitution and national duties'
  },
  {
    id:4,
    img:event4,
    title:'Independence Day',
    desc:'The KOSHISH family, with children and members, celebrates 15th August with enthusiasm, conducting Independence Day quizzes and spreading patriotism'
  },
  {
    id:5,
    img:event3,
    title:'Deepawali',
    desc:'The KOSHISH family celebrates Republic Day with children and members, organizing a quiz on the Constitution and national duties'
  },
  {
    id:6,
    img:event4,
    title:'Independence Day',
    desc:'The KOSHISH family, with children and members, celebrates 15th August with enthusiasm, conducting Independence Day quizzes and spreading patriotism'
  }
];

function Events() {
  return (
    <div className='bg-[#ccc] min-h-screen pb-[15vh]'>
      <h1 className='text-[4em] text-center mb-[10vh] pt-8'> <b>Events</b> </h1>
      <div className='flex flex-wrap justify-center place-items-center gap-8'>
        {
          cardData.map(({id,img, title, desc}) =>{
            return (
                  <div key = {id} className='text-white shadow-md rounded-lg overflow-hidden relative group mb-6'> 
                      <img src= {img} alt="Event Image" className='w-full max-w-[300px] h-[350px] rounded-lg' />
                      <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500 duration-500'>
                          <div className='space-y-4'>
                            <Slide cascade>
                                    <h1 className='text-3xl font-bold px-2'>{title}</h1>
                                    <Fade cascade damping={0.05}>
                                      <p className='text-sm max-h-[80px] overflow-hidden text-ellipsis'>{desc}</p>
                                    </Fade>
                                    <div>
                                      <button className='border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300'> View</button>
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