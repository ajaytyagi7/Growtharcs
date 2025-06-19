import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Home = () => {


    const steps = [
  {
    number: 1,
    title: "Research",
    description:
      "Welcome to our digital agency! We specialize in empowering your business to thrive.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "Welcome to our digital agency! We specialize in empowering your business to thrive.",
  },
  {
    number: 3,
    title: "Develop",
    description:
      "Welcome to our digital agency! We specialize in empowering your business to thrive.",
  },
  {
    number: 4,
    title: "Deploy",
    description:
      "Welcome to our digital agency! We specialize in empowering your business to thrive.",
  },
];


    const teamMembers = [
  {
    name: "Ajay Tyagi",
    image: "https://img.freepik.com/free-photo/young-sensitive-man-thinking_23-2149459707.jpg",
  },
  {
    name: "Kishan Kumar",
    image: "https://img.freepik.com/free-photo/portrait-young-man-posing_23-2148884296.jpg",
  },
  {
    name: "Dev",
    image: "https://img.freepik.com/free-photo/man-portrait_1296-635.jpg",
  },
  {
    name: "Harshit",
    image: "https://img.freepik.com/free-photo/portrait-charismatic-sensual-male-black-sweater-creative-personality_613910-11130.jpg",
  },
];


    const images = [
  {
    src: "https://img.freepik.com/free-photo/man-black-hood-looking-down_23-2148277438.jpg",
    title: "Digital Presence",
    profile:'UI/UX Design Service'
  },
  {
    src: "https://img.freepik.com/free-photo/medium-shot-unknown-woman-posing_23-2149417556.jpg",
    title: "Digital Presence",
    profile:'UI/UX Design Service'
  },
  {
    src: "https://img.freepik.com/free-photo/woman-hare-costume-hood_23-2147680492.jpg",
    title: "Digital Presence",
    profile:'UI/UX Design Service'
  },
  {
    src: "https://img.freepik.com/free-photo/young-woman-with-sunglasses-black-t-shirt_140725-12984.jpg",
    title: "Digital Presence",
    profile:'UI/UX Design Service'
  },
  {
    src: "https://img.freepik.com/free-photo/portrait-lonely-sad-woman_23-2151263103.jpg",
    title: "Digital Presence",
    profile:'UI/UX Design Service'
  },
];

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
   
      <div className="flex flex-col py-34">
        <h1 className="text-9xl font-extrabold mt-3">Digital Marketing </h1>
        <h1 className="text-9xl font-extrabold mt-2">
         
        <span className="Studio-text mx-3.5">Solutions</span>
         </h1>
      <p className="text-xl mt-8 text-gray-200">
       Transform your brand into valuable customer’s destination with our data-driven growth marketing strategies!
       </p>
      </div>

        </header>
    </div>

    <div className='py-10 p-4'>
        <section>
            <h1 className='text-center text-3xl font-bold '>Our Studio Journey</h1>
            <h1 className='text-center text-6xl font-bold py-10'>From passion to excellence , we craft impactful designs , innovate fearlessly, and elevate brands through  creativity and collaboration.</h1>
        </section>
    </div>
    <div className='py-10 p-4 bg-black'>
        <h1 className='text-4xl font-bold text-center text-white '><span className='text-blue-500'>Let's work together, </span> take your brand to new heights with expertise.</h1>
            
    </div>
    <div className="flex justify-between p-12  font-sans">
      <div className="flex-1 pr-8">
        <h2 className="text-lg mb-4 font-bold">OUR SERVICES</h2>
        <h1 className="text-5xl mb-8 font-bold">Transformation of Your Brand Design</h1>
        <ul className="list-none pl-0">
          <li className="text-2xl mb-2 font-bold">1. UI/UX Design</li>
          <li className="text-2xl mb-2 font-bold">2. Branding Design</li>
          <li className="text-2xl mb-2 font-bold">3. Video Marketing</li>
          <li className="text-2xl mb-2 font-bold">4. Social Media Marketing</li>
          <li className="text-2xl mb-2 font-bold">5. App Development</li>
          <li className="text-2xl mb-2 font-bold">6. Web Development</li>
        </ul>
      </div>
    <div className="flex-1 relative">
  <img src="https://img.freepik.com/free-photo/business-background-woman-showing-invisible-object-hand-gesture_53876-124709.jpg?uid=R200479600&ga=GA1.1.1987297158.1747410234&semt=ais_hybrid&w=740" alt="Brand Identity" className="w-full h-auto" />
  <div className="absolute bottom-6 left-6 bg-black p-4 w-1/2 text-white">
    <h3 className="text-3xl font-semibold mb-2">Creating a Strong Brand Identity Through The Design</h3>
    <p className="text-lg">
      We are a creative design studio specializing in branding, UI/UX, and digital experiences. We craft visually stunning, user-focused solutions that elevate brands and drive engagement.
    </p>
  </div>
</div>
    </div>

    <div className="">
      <div className="bg-black text-white py-10">
      <div className="text-center mb-10">
        <h4 className="text-3xl font-bold uppercase tracking-wider text-white">Portfolio</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          A Spotlight on Our Most Recently <br /> Accomplished Projects
        </h2>
      </div>

  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
      {/* Top Row - 2 images (6 columns each on md+) */}
      <div className="col-span-1 md:col-span-6 relative group overflow-hidden h-64 md:h-80">
        <img
          src={images[0].src}
          alt="Portfolio"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black/50 flex items-end justify-center transition-all duration-500 group-hover:bottom-0">
          <div className="text-center">
            <p className="text-white text-lg mb-2 font-semibold">{images[0].title}</p>
            {images[0].profile && <p className="text-blue-500 text-lg font-bold mb-4">{images[0].profile}</p>}
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 relative group overflow-hidden h-64 md:h-80">
        <img
          src={images[1].src}
          alt="Portfolio"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black/50 flex items-end justify-center transition-all duration-500 group-hover:bottom-0">
          <div className="text-center">
            <p className="text-white text-lg mb-2 font-semibold">{images[1].title}</p>
            {images[1].profile && <p className="text-blue-500 text-lg font-bold mb-4">{images[1].profile}</p>}
          </div>
        </div>
      </div>

      {/* Bottom Row - 3 images each spanning 4 columns */}
      {images.slice(2).map((img, index) => (
        <div
          key={index}
          className="col-span-1 md:col-span-4 relative group overflow-hidden h-64 md:h-80"
        >
          <img
            src={img.src}
            alt="Portfolio"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black/50 flex items-end justify-center transition-all duration-500 group-hover:bottom-0">
            <div className="text-center">
              <p className="text-white text-lg mb-2 font-semibold">{img.title}</p>
              {img.profile && <p className="text-blue-500 text-lg font-bold mb-4">{img.profile}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
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
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://img.freepik.com/free-photo/high-angle-unknown-woman-posing_23-2149417557.jpg?uid=R200479600&ga=GA1.1.1987297158.1747410234&semt=ais_hybrid&w=740"
          alt="Client"
          className="max-w-xs md:max-w-sm rounded shadow-lg object-cover"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full md:w-1/2 text-left md:pl-12">
        <div className="text-blue-500 text-5xl font-bold mb-2">”</div>
        <p className="text-xl uppercase font-semibold tracking-widest mb-2">Testimonial</p>
        <h2 className="text-5xl md:text-5xl font-bold mb-4 leading-tight">
          Here’s What Our Clients Are Saying.
        </h2>
        <p className="italic text-lg text-gray-300 mb-6">
          “Working with this team was a game-changer for me. Their creativity, professionalism,
          and attention to detail exceeded our expectations. Highly recommend their exceptional services!”
        </p>
        <div>
          <h4 className="font-bold text-lg">Maya Coral</h4>
          <p className="text-sm text-blue-400 underline">Entrepreneur, Model</p>
        </div>
      </div>
    </div>

    <div className="py-16 px-4 md:px-20 bg-white">
      {/* Top Text */}
      <p className="text-2xl font-bold uppercase tracking-widest text-gray-700 mb-2">Our Core Team</p>
      <h2 className="text-4xl font-extrabold leading-tight text-left">
        Our Skilled Team is Experienced <br />
        Transform Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400">
          Brand Digitally
        </span>
      </h2>

      {/* Team Members */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay for Hover Text */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div className="transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 text-white">
                <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                <div className="flex space-x-3 text-sm">
                  <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-300 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-black text-white py-20 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Our Step-by-Step Approach to <br /> Delivering Results
        </h2>
      </div>

      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-6xl font-extrabold text-white/30">{step.number}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-lg text-white/80 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>

     <div className="bg-white px-6 md:px-16 py-20">
      {/* Top Heading */}
      <div className="mb-10">
        <p className="text-2xl text-gray-600 tracking-wide font-bold mb-1">LATEST BLOGS</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Shaping the Future of Business <br />
          Insights and <span className="text-gray-400 font-medium">Trends</span>
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div>
          <img
            src="https://i0.wp.com/wpopus.com/wpopus-studio/wp-content/uploads/sites/10/2025/02/blog3.webp?resize=768%2C509&ssl=1"
            alt="Blog 1"
            className="w-full h-56 object-cover"
          />
          <h3 className="mt-4 font-semibold text-lg">
            Where creativity meets technology to redefine digital experiences
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            At our digital studio, we blend innovation and artistry to...
          </p>
        </div>

        {/* Blog Card 2 */}
        <div>
          <img
            src="https://i0.wp.com/wpopus.com/wpopus-studio/wp-content/uploads/sites/10/2025/02/blog2.webp?resize=768%2C509&ssl=1"
            alt="Blog 2"
            className="w-full h-56 object-cover"
          />
          <h3 className="mt-4 font-semibold text-lg">
            Crafting stunning visuals that tell your story with impact
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            At our digital studio, we blend innovation and artistry to...
          </p>
        </div>

        {/* Blog Card 3 */}
        <div>
          <img
            src="https://i0.wp.com/wpopus.com/wpopus-studio/wp-content/uploads/sites/10/2025/02/blog1.webp?resize=768%2C509&ssl=1"
            alt="Blog 3"
            className="w-full h-56 object-cover"
          />
          <h3 className="mt-4 font-semibold text-lg">
            Bringing your vision to life through cutting-edge digital design
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            At our digital studio, we blend innovation and artistry to...
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;