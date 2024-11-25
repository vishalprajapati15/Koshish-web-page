import React from 'react'

function Home() {
  return (
    <div className='w-full flex flex-col md:flex-row justify-evenly items-center my-[20vh] py-8 gap-6'>
        <div className='w-[30%] flex justify-center bg-red-600 '>Image Section</div>
        <div className='w-[50%]'>
            <div className='w-full text-xl text-justify'> <b>KOSHISH</b>, a social initiative by <a href="https://www.recabn.ac.in/" target='blank' className='underline text-[#2b1fb0]'>REC Ambedkar Nagar</a> students, focuses on educating marginalized children, helping them dream big through knowledge. The students teach nearby village children, bringing education and hope, which fosters peace and fulfillment. In 2018, KOSHISH established a library with resources for exams like Boards and competitive tests. The initiative also provides financial aid to needy students and teaches music, art, and experiments. Along with academics, it instills discipline, punctuality, and moral values while raising awareness of social issues. Volunteers visit homes to better understand the students’ challenges and support their holistic development. </div>
            <button className='bg-[#2b1fb0] text-xl text-white rounded px-2 py-1 border border-transparent hover:bg-transparent hover:text-[#2b1fb0] hover:border-blue-800 transition-all duration-300'>Read more...</button>
        </div>
        
    </div>
  )
}

export default Home