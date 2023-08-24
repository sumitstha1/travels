import React, { useEffect, useState } from 'react'
import './singleDestination.css'
import img from '../../Assets/img (1).jpg'
import video from "../../Assets/ocean.mp4"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsCalendarCheck } from "react-icons/bs"
import { useLocation } from 'react-router-dom'
import axios from 'axios'

// const data = {
//     id: 1,
//     imgSrc: img,
//     title: 'Shri Pashupatinath Temple',
//     location: 'Nepal',
//     city: 'Kathmandu',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// }

const SingleDestination = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const location = useLocation()
    
    
    // const city = data.city.name
    
    // const locations = data.location.name;
    
    useEffect(() => {
        const fetchData = async () => {
            const slug = location.pathname.split("/")[2]
            setLoading(true);
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/v1/products/${slug}`);
                setData(res.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        };
        fetchData()
    }, []);

    console.log(data)
    // console.log(city)
    // console.log(locations)
    console.log(loading)

    return (
        <main className='singlePage'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop typeof='video/mp4'></video>
            <div className="mainSection">
                <div className="right">
                    <img src={img} alt="This is a " />
                </div>
                <div className="left">
                    {/* <article className='destinationDesc'>
                        <div className="leftTitle">
                            <h2>{data.title}</h2>
                            <p>{data.location}</p>
                        </div>
                        <div className="rightPrice"></div>
                    </article> */}
                    <div className="upperTitle">
                        <div className="headingTitle">
                            <h2>{data.title}</h2>
                            <h4>${data.fees}</h4>
                        </div>
                        <p className="grade">{data.grade}</p>
                        <p className="location"><span><HiOutlineLocationMarker className='icon' /></span>{"Kathmandu"}, {"Nepal"}</p>
                    </div>
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                    <button className="btn">
                        <span><BsCalendarCheck className='icon' /></span>
                        Book Now
                    </button>
                </div>

            </div>
        </main>
    )
}

export default SingleDestination

// export async function getServerSideProps(context) {
//     const slug = context.params
//     console.log(slug)
//     try {
//       const data = await axios.get(`http://127.0.0.1:8000/api/v1/products/${slug}`);
//       return {
//         props: {
//           data: data
//         },
//         notFound: false,
//       };
  
//     }
//     catch (error) {
//       return {
//         props: {
//           data: {}
//         }
//       }
//     }
//   }
  
