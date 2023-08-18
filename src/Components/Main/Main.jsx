import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'

import Aos from 'aos'
import useFetch from "../../hooks/useFetch"
import 'aos/dist/aos.css'


// const Data = [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: 'Bora Bora',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
//   },

//   {
//     id: 2,
//     imgSrc: img2,
//     destTitle: 'Machu Picchu',
//     location: 'Peru',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 3,
//     imgSrc: img3,
//     destTitle: 'Great Barrier Reef',
//     location: 'Australia',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 4,
//     imgSrc: img4,
//     destTitle: 'Coppadocia',
//     location: 'Turkey',
//     grade: 'CULTURAL RELAX',
//     fees: '$800',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 5,
//     imgSrc: img5,
//     destTitle: 'Guanajuato',
//     location: 'Mexico',
//     grade: 'CULTURAL RELAX',
//     fees: '$1100',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 6,
//     imgSrc: img6,
//     destTitle: 'Cinque Terre',
//     location: 'Italy',
//     grade: 'CULTURAL RELAX',
//     fees: '$840',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 7,
//     imgSrc: img7,
//     destTitle: 'Angkor Wat',
//     location: 'Cambodia',
//     grade: 'CULTURAL RELAX',
//     fees: '$790',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 8,
//     imgSrc: img8,
//     destTitle: 'Tajmahal',
//     location: 'India',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },

//   {
//     id: 9,
//     imgSrc: img9,
//     destTitle: 'Kathmandu',
//     location: 'Nepal',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
//   },
// ]

const Main = () => {

  const { data, loading, error } = useFetch("http://127.0.0.1:8000/api/v1/products/")

  console.log(data)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {loading ? (
          "Destination are loading..."
        ) : (
          <>
            {
              data.map((e) => {
                console.log(e.imgSrc[0].imgSrc)
                return (
                  <div data-aos='fade-up' key={e.uid} className="singleDestination">
                    <div className="imageDiv">
                      <img src={`http://127.0.0.1:8000${e.imgSrc[0].imgSrc}`} alt={e.title} />
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">{e.title}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon' />
                        <span className="name">{e.location.name}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{e.grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>${e.fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{e.meta_desc}</p>
                      </div>

                      <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck className='icon' />
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </>
        )}
      </div>
    </section>
  )
}

export default Main
