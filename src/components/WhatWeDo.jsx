import React from 'react'
import pic1 from '../assets/whatWeDoPic/whatwedo1.jpg'
import pic2 from '../assets/whatWeDoPic/whatwedo2.jpg'
import pic3 from '../assets/whatWeDoPic/whatwedo3.jpg'
import pic4 from '../assets/whatWeDoPic/whatwedo4.jpg'

const data = [
  {
    id:1,
    img:pic1,
    name: "Project Exhibition",
    desc: "KOSHISH organizes a project exhibition as part of its technical event, where students from various backgrounds and schools participate. This event provides a platform for students to showcase their innovative projects and demonstrates their creativity and technical skills"
  },
  {
    id:2,
    img:pic2,
    name: "Various Entrance Examination classes",
    desc: "KOSHISH prepares students from 9th to 12th for regular classes and competitive exams like IIT JEE, NEET, NTSE, and Olympiads. Special six-month classes are held for 12th graders. Additionally, students in 5th and 8th are prepared for Navodaya Vidyalaya and Central Hindu School entrance exams, considering their financial constraints"
  },
  {
    id:3,
    img:pic3,
    name: "District Level Examination",
    desc: "KOSHISH organizes a district-level examination in which students from various backgrounds and schools participate. The examination consists of three categories: Junior, Senior-Secondary, and Senior, providing a platform for students to compete and showcase their knowledge"
  },
  {
    id:4,
    img:pic4,
    name: "Cultural Event",
    desc: "KOSHISH organizes a cultural event for its students, providing them a platform to showcase their talents. Students perform various cultural activities, including drama, singing, poetry, and dancing. This event not only highlights their creativity but also fosters a sense of confidence and community within the KOSHISH family"
  },
];

const WhatWeDo = () => {
  return (
    <div className='w-full bg-gray-500 py-[10vh]'>
      <h1 className='text-[2em] md:text-[3em] lg:text-[4em] text-center font-bold pb-8'>What we do ?</h1>
      <div className='w-[90%] md:w-[70%] lg:w-[55%] flex justify-center items-center mx-auto'>
      <p className='text-center text-xm pb-8'><b>KOSHISH</b> engages students in activities like reading, playing, painting, experiments, and music, while supporting needy students financially. A library aids their studies, and moral values like discipline and social awareness are taught. Volunteers visit villages to understand and address children's problems, fostering holistic growth and community connection.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:px-8 lg:px-20'>
        {
          data.map(({id, img, name, desc})=> {
            return(
              <div key={id}  className=' bg-white group shadow-md w-full flex flex-col hover:rounded-3xl md:flex-row items-center gap-4 p-4 transition-all duration-300'>
                <div className='w-full md:w-[45%]'>
                  <img src={img} alt="Work Image" className='w-full h-40 md:h-48 object-cover transition-all duration-300 group-hover:scale-110 '/>
                </div>
                <div className='w-full md:w-[55%]'>
                  <h2 className='text-xl md:text-2xl font-semibold text-center md:text-left mb-2'>{name}</h2>
                  <p className='text-justify text-sm md:text-base '>{desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WhatWeDo