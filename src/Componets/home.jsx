import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaBolt,FaProjectDiagram,FaGlobeAfrica,FaFan,FaClipboard} from "react-icons/fa";
import { AiOutlineDollarCircle} from "react-icons/ai";

const Home = () => { 
    return ( 
     <>

<div class="relative bg-white drop-shadow-xl...">
    <div class="max-w-7xl mx-auto px-2 sm:px-3">
           <div class="flex justify-between items-center border-b-2 border-gray-100  py-3 md:justify-start md:space-x-6">
               <div class="flex justify-start lg:w-0 lg:flex-1">
                   <img class="h-8 w-auto sm:h-10" src="https://www.quoality.com/static/img/logo.png"/>
               </div>
               <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            
            <a href="#" class="bg-stone-900 text-white px-3 py-2 rounded-md text-sm font-medium flex" aria-current="page"> <FaBolt /> How Quolity Work</a>

            <a href="#" class="text-stone-900 hover:bg-fuchsia-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex"> <AiOutlineDollarCircle/>  Pricing</a>

            <a href="#" class="text-stone-900 hover:bg-fuchsia-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex"><FaProjectDiagram />Projects</a>
            <a href="#" class="text-stone-900 hover:bg-fuchsia-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex"><FaGlobeAfrica />Blog</a>

            <a href="#" class="text-stone-900 hover:bg-fuchsia-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex" ><FaFan/>Book a Demo</a>
            <a href="#" class="text-stone-900 hover:bg-fuchsia-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex"><FaClipboard />About Us</a>
          </div>
        </div>
           </div>
    </div>
</div>
<div class="mt-10 mx-auto max-w-6xl px-4 sm:mt-8 sm:px-4 md:mt-8 lg:mt-10 lg:px-4 xl:mt-10">
<div class="grid grid-cols-2  ">
  <div class="">
  <div class="sm:text-center lg:text-left">
          <h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">
            <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={70}
            delaySpeed={1000}
            words={['Upselling', "Guest Engagement", "&", " Experience "]}
          />
        </span>
       - All In One{' '}
 
            </span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-base">
          Think about the Total Hotel Revenue. Create Personalized Experiences to Engage, Upsell, and Attract.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
            <button class="h-10 px-6 font-semibold rounded-md bg-fuchsia-500 text-white  hover:bg-gray-900" type="submit">
          Get Started
        </button>
            </div>
           </div>
    

        </div>
  </div>
  <div class="bg-white">
  <img class="h-120 w-auto sm:h-150" src="https://imgur.com/5bojWno.png"/>
  </div>
  </div>
  </div>


  <div class="flex ...">
  <div class="grow h-14 ...">
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-2xl flex items-center space-x-4 bg-blue-50">
  <div class="shrink-0">
    <img class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/4pCaFMP.gif" alt="hotel" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">Hotel</div>
    <p class="text-gray-500">Increased Hotel Revenue!</p>
  </div>
</div>
  </div>
  <div class="grow h-14 ...">
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-2xl flex items-center space-x-4 bg-orange-50 overflow-visible ...">
  <div class="shrink-0">
    <img class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ThGz3AO.gif" alt="hotel" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">Hostel</div>
    <p class="text-gray-500">Experience & Optimized Revenue!</p>
  </div>
  <div class="overflow-visible ..."></div>
</div>
  </div>
  <div class="grow h-14 ...">
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-2xl flex items-center space-x-4 bg-purple-50">
  <div class="shrink-0">
    <img class="block mx-auto h-12 w-13 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/K3EQzqu.gif" alt="hotel" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">Vacation Homes</div>
    <p class="text-gray-500">Increased Vacation Home Revenue!</p>
  </div>
</div>
  </div>
</div>


     </>
    )
}

export default Home