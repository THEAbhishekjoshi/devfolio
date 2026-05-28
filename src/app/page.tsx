import Image from 'next/image'

export default function MainPage() {
  return (
    <div className=" h-full">

      <div className='m-3 rounded-lg'>
        <section className="py-20 bg-[url('/valley1.jpg')] bg-cover bg-bottom rounded-t-lg">
          <div className="flex items-center justify-center p-5 ">
            <div className="px-7 py-2 md:px-20 rounded-full gap-7 text-black 
            flex items-center 
            bg-white/70 backdrop-opacity-20">
              {/* bg-gray-300/40 backdrop-blur-md */}
              <button>Home</button>
              <button>Work</button>
              <button>Projects</button>
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
}
