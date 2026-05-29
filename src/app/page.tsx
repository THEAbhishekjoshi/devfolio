import Image from 'next/image'
import PixelBar from '../components/PixelBar'
import Journey from '@/components/Journey'
export default function MainPage() {
  return (
    <div className="bg-black h-full font-press">

      <div className='m-3 rounded-lg'>
        <div className="flex flex-row  justify-center gap-12 mb-5 text-white">

          <button>Home</button>
          <button>Work</button>
          <button>Projects</button>
          <button>Resume</button>

        </div>
        <section className=" pt-5 bg-[url('/valley1.jpg')] bg-cover bg-bottom rounded-t-lg">
          {/* <div className="flex items-center justify-center">
            <div className="px-7 py-2 md:px-20 rounded-full gap-7 text-black border-2 border-green-300'
            flex items-center 
            bg-white/90 ">

              <button>Home</button>
              <button>Work</button>
              <button>Projects</button>
            </div>

          </div> */}

          <div className='flex flex-row justify-between p-2 mt-5 ml-5 mr-5'>
            <div className=' w-[40rem] h-[30rem] bg-black/40 rounded-xl p-5 flex flex-col items-center border-2'>
              <div className='bg-white rounded-full border-4 border-yellow-400 w-30 h-30 flex justify-center items-center p-2'>
                <Image
                  src='/pfp.png'
                  width={200}
                  height={200}
                  alt='profile image'
                  className='object-cover  w-full h-full'
                />
              </div>
              <div className='font-press flex flex-col  items-center'>
                <p className='font-bold text-yellow-300'>Abhishek</p>
                <div>Full Stack Developer</div>

                <div className='mt-8 flex flex-col gap-5'>
                  <div className='flex flex-row gap-5 items-end text-green-300'>
                    <div className='flex flex-row gap-2 items-end'>
                      <Image
                        src="/college.png"
                        width={20}
                        height={20}
                        alt='college logo'
                        className='object-cover rounded-md'
                      />
                      <p className='text-[0.4rem] text-white'>College</p>
                    </div>
                    <p className='text-[0.4rem]'>Maharaja Agrasen Institute of Technology(MAIT)</p>
                  </div>
                  <div className='flex flex-row gap-2 items-center text-white'>
                    <Image
                      src="/xp.png"
                      width={30}
                      height={30}
                      alt='college logo'
                      className='object-cover rounded-md'
                    />
                    <p className='text-[0.5rem]'>Open source contributor</p>

                  </div>
                  <div className='flex flex-row gap-2 items-center text-white'>
                    <Image
                      src="/quest.png"
                      width={30}
                      height={30}
                      alt='college logo'
                      className='object-cover rounded-md'
                    />
                    <p className='text-[0.5rem]'>Open source contributor</p>

                  </div>
                </div>
              </div>
              <div className='animate-pulse text-green-400'>
                {'>'}
              </div>
            </div>
            <div className='text-xl text-white flex justify-center w-full mt-20'>
              <div className=' flex flex-col gap-10  '>

                <p>{'>'}BUILD</p>
                <p className='text-yellow-300/90'>{'>'}SHIP</p>
                <p>{'>'}EVOLVE</p>

                {/* <p>BUILD •</p>
                <p className='text-yellow-300/90'>SHIP •</p>
                <p>EVOLVE</p> */}
              </div>
            </div>
            <div className='w-[40rem] h-[30rem] bg-black/40 rounded-xl border-2 border-pink-700'>
              <div className='mt-5 w-full border-b border-pink-700/90 text-center p-2'>Devédex</div>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Frontend" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Backend" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Open Source" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Dsa Journey" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="AI" value={30} />
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="relative py-20 bg-[url('/valley1.jpg')] bg-cover bg-bottom  rounded-b-lg">
          <div
            className="
            absolute
            left-0
            right-0
            top-0
            h-full
            bg-black/20
            backdrop-blur-xl
            rounded-b-lg
            border border-white/10

            px-10 py-8
          "
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima officia recusandae aut, reprehenderit consequatur aperiam dolore pariatur quam voluptatum illum! Odit sit, eos rerum quaerat molestiae nostrum explicabo libero.</p>
          </div>


        </div>
      </div>


      {/* <div className="flex items-center justify-center p-5 ">
        <div className="py-2 px-20  rounded-full gap-7 text-black bg-black-50
        flex items-center shadow-md
        ">`
          <button>Home</button>
          <button>Work</button>
          <button>Projects</button>
        </div>

      </div>

      <div className="bg-pink-300 m-4 rounded-lg h-150">
        <Image
          src='/image.png'
          width={500}
          height={100}
          alt='profile image'
          className='object-cover object-bottom w-full h-full rounded-lg'
        />
      </div> */}


    </div>
  )
  // return (
  //   <div>
  //     <Journey />
  //   </div>
  // )
}
