import React from 'react'

const About = () => {

    const stats = [
  { value: "5.6K", label: "Brands Built" },
  { value: "12K", label: "Happy Clients" },
  { value: "17", label: "Years Experience" },
  { value: "20+", label: "Awards Received" },
];
  return (
    <div>
       <div>
        <header className="bg-[url('https://img.freepik.com/free-photo/business-background-woman-showing-invisible-object-hand-gesture_53876-124709.jpg?uid=R200479600&ga=GA1.1.1987297158.1747410234&semt=ais_hybrid&w=740')] bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col  p-6 relative">
   
      <div className="flex flex-col py-40">
        <h1 className="text-9xl font-extrabold mt-3">About US</h1>
        
      </div>

        </header>
    </div>

    <div className='py-10 p-4'>
    
    <h1 className=' text-6xl font-bold py-10'>Our agency is revolutionizing businesses and brands by leveraging innovative online solutions.</h1>
        
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4 py-8">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
            src="https://img.freepik.com/free-photo/high-angle-unknown-woman-posing_23-2149417557.jpg?uid=R200479600&ga=GA1.1.1987297158.1747410234&semt=ais_hybrid&w=740"
            alt="Client"
            className="max-w-xs md:max-w-sm rounded shadow-lg object-cover"
            />
        </div>
         <div className="w-full md:w-1/2 text-left md:pl-12">
        <div className="text-blue-500 text-5xl font-bold mb-2">”</div>
        <p className="text-xl uppercase font-semibold tracking-widest mb-2">Message from CEO</p>
        <h2 className="text-5xl md:text-5xl font-bold mb-4 leading-tight">
          Empowering Your Digital Journey
        </h2>
        <p className="italic text-lg text-gray-500 mb-6">
         Driving innovation and growth, our CEO shares insights on empowering businesses through cutting-edge digital solutions and strategies for online success.
        </p>
        <div>
          <h4 className="font-bold text-lg">Thomas Jackson</h4>
          <p className="text-lg text-blue-400 underline">Co-Founder, CEO</p>
        </div>
      </div>
    </div>

    <div className='bg-black text-white p-6 py-10 mt-10'>
            <div className="flex items-center justify-center bg-black py-10">
            <div className="w-30 h-0.5 bg-blue-400 mr-4"></div>
            <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center">
                Our Agency Story
            </h1>
            <div className="w-30 h-0.5 bg-blue-400 mt-2 ml-4"></div>
            </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
            <h1 className='text-5xl font-bold'>Our agency is redefining the limits of online marketing and design to drive exceptional results.</h1>
            <p className='text-xl'>We are a digital agency dedicated to helping businesses like yours thrive online. Our services range from website design and development to digital marketing and advertising, equipping you with the tools and expertise to enhance your online presence. Partner with us to navigate the ever-changing digital landscape, drive growth, and achieve your goals.
               <br /> <br /> Our services range from website design and development to digital marketing and advertising, equipping you with the tools and expertise to enhance your online presence. Partner with us to navigate the ever-changing digital landscape, drive growth, and achieve your goals.</p>
        </div>
    </div>

    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-7xl font-bold text-transparent stroke-text mb-2">
                {stat.value}
              </div>
              <div className="text-xl md:text-2xl font-bold text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

     <div
      className="bg-cover bg-center py-20 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?uid=R200479600&ga=GA1.1.1987297158.1747410234&semt=ais_hybrid&w=740')",
      }}
    >
        <div className="  p-8 rounded-lg text-center">
            <h1 className='text-6xl font-bold text-center'>We’d love to Dive Deeper into Your Project and Explore the <br /> Possibilities!</h1>
            <button className='border-2 mt-10 p-3 font-semibold'>BOOK YOUR APPOINTMENT</button>
        </div>
    </div>
    </div>
  )
}

export default About
