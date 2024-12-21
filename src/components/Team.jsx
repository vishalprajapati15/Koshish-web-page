import React from 'react';
import person1 from "../assets/team_pic/member1.jpg"
import person2 from "../assets/team_pic/member2.jpg"
import person3 from "../assets/team_pic/member3.jpg"
import person4 from "../assets/team_pic/member4.jpg"
import person5 from "../assets/team_pic/member5.jpg"
import person6 from "../assets/team_pic/member6.jpg"
import person7 from "../assets/team_pic/member7.jpg"
import person8 from "../assets/team_pic/member8.jpg"
import person9 from "../assets/team_pic/member9.jpg"
import person10 from "../assets/team_pic/member10.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const teamData = [
    {
        id:1,
        img: person1,
        name:'Person - 1',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:2,
        img: person2,
        name:'Person - 2',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:3,
        img: person3,
        name:'Person - 3',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:4,
        img: person4,
        name:'Person - 4',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:5,
        img: person5,
        name:'Person - 5',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:6,
        img: person6,
        name:'Person - 6',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:7,
        img: person7,
        name:'Person - 7',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:8,
        img: person8,
        name:'Person - 8',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:9,
        img: person9,
        name:'Person - 9',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
    {
        id:10,
        img: person10,
        name:'Person - 10',
        designation: 'Koshish Member',
        socialMediaLinks:{
            linkdeIn: "LinkedIn Link",
            twitter: "Twitter Link",
            instagram: " Instagram Link",
            gitHub: "GitHub Link"
        }
    },
]

function Team() {
  return (
    <div className='min-h-screen bg-gray-500'>
        <h1 className='text-[2em] md:text-[3em] lg:text-[4em] text-center mb-[10vh] pt-8'><b>Our Team</b></h1>
        <div className='flex flex-wrap justify-center place-items-center gap-8 px-32'>
            {
               teamData.map(({id, img, name, designation, socialMediaLinks}) =>{
                return(
                    <div key={id} className='group w-80 bg-white p-8 shadow-lg hover:rounded-3xl border border-transparent hover:bg-transparent hover:text-[#2b1fb0] hover:border-blue-800 text-center transition-all duration-300'>
                         <div className='w-32 h-32 mx-auto mb-4'>
                            <img src={img} alt="Member Image" className='w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110' />
                        </div>
                        <h2 className='text-xl font-semibold mb-2'>{name}</h2>
                        <p className='text-md mb-4 text-gray-600'>{designation}</p>
                        <div className='w-full flex items-center mt-4 '>
                            <div className='w-full flex justify-evenly '>
                                    {
                                     socialMediaLinks.linkdeIn && (
                                        <a href="socialMediaLinks.linkdeIn" target='_blank' className='text-2xl text-blue-400 hover:text-[#0077B5] transition-all duration-300'> <FontAwesomeIcon icon={faLinkedin}/> </a>
                                     )}
                                     {socialMediaLinks.twitter && (
                                        <a href="socialMediaLinks.twitter" target='_blank' className='text-2xl text-blue-400 hover:text-[#000] transition-all duration-300'> <FontAwesomeIcon icon={faXTwitter}/></a>
                                     )}
                                     {socialMediaLinks.instagram && (
                                        <a href="socialMediaLinks.instagram" target='_blank' className='text-2xl text-blue-400 hover:text-blue-800 transition-all duration-300'> <FontAwesomeIcon icon={faInstagram}/></a>
                                     )}
                                     {socialMediaLinks.gitHub && (
                                        <a href="socialMediaLinks.gitHub" target='_blank' className='text-2xl text-blue-400 hover:text-[#171515] transition-all duration-300'><FontAwesomeIcon icon={faGithub}/> </a>
                                     )}
                            </div>
                        </div>
                    </div>
                )
               } ) 
            }
        </div>
    </div>
  )
}

export default Team