
import Navbar from 'components/Navbar'
import FeaturedArtists from 'components/FeaturedArtists'
import FeaturedArts from 'components/FeaturedArts'

export default function Home() {
  

  return (
    <>
      <Navbar/>
      <div className="heroimg text-white">
        <div className='w-1/3 pl-[5%] pt-[15%]'>
        <h3 className='text-xl text-[rgba(197,163,111,255)] mb-2'>Welcome to </h3>
        <h1 className='text-4xl'>ARTVERSE!!!</h1>
        <h4 className='mt-2'>Explore a wide range of artwork from established and emerging artists alike. With our easy-to-use platform, you can browse, discover, and even sell your own art.</h4>
        </div>
       
      </div>
      <FeaturedArts/>
      <FeaturedArtists/>
    </>
  )
}
