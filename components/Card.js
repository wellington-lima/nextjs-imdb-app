import Image from 'next/image'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

export default function Card({ result }) {
  const BASE_URL="https://image.tmdb.org/t/p/original"
  return(
    <>
      <Image 
        src={ BASE_URL + result.backdrop_path}
        layout="responsive"
        width={200}
        height={100}
        alt="Photo"
      />
      <div className="">
        <p className="truncate">
          { result.overview }
        </p>
        <h2>{ result.title || result.name }</h2>
        <p>{ result.release_date || result.first_air_date }
        <HandThumbUpIcon className='h-5'/>
        { result.vote_count }
        </p>
      </div>
    </>
  )
}