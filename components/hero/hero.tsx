import Image from "next/image";
import NavBar from "../nav/navBar";
export default function HeroSection() {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: " url('/bgline.png')",
        backgroundSize: "cover",
        backgroundPosition: " center",
        backgroundRepeat: " no-repeat",
      }}>
      <section className="bg-[#F3F3F5]  px-4 text-center space-y-12 ">
        <NavBar />
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-[#E9E9E9] rounded-full px-4 py-2 mt-14 hover:animate-bounce transition-all duration-100 cursor-pointer mb-10 shadow-sm">
          <div className="w-5 h-5 bg-white rounded-full  ">
            <Image src="/shield2.png" alt="#" width={32} height={32} />
          </div>
          <span className="text-gray-800 font-medium">
            Smart Finance, Smart Living
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black max-w-4xl mx-auto mb-6">
          Revolutionizing Finance for a Better Tomorrow, Today
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Fintech services leverage technology to enhance financial processes,
          offering innovative solutions for banking
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#D1F701] hover:bg-[#D1F701] text-black font-medium px-8 py-3 cursor-pointer hover:underline rounded-full transition-colors">
            Get Started
          </button>
          <button className="bg-[#5945FD] hover:bg-[#5945FD] text-white font-medium px-8 py-3 rounded-full cursor-pointer hover:underline transition-colors">
            Request a demo
          </button>
        </div>

        {/* image - showing at the bottom background */}
        {/* <div className="mt-12 max-w-6xl h-56 mx-auto w-[70%]
        
        "
        style={{
          backgroundImage:
          " url('/herobgbottom.png')",
        backgroundSize: "cover",
        backgroundPosition: " center",
        backgroundRepeat: " no-repeat",
        }}
        
        >
        <Image src="/iphone.png" alt="#"  layout="fill" />
        </div> */}
      </section>
    </div>
  );
}
