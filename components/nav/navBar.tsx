import Image from "next/image";
export default function NavBar() {
  const navItems = ["About", "Services", "Pricing", "Contact"];

  return (
    <nav className="bg-[#171717] rounded-[100px] w-[80%] mx-auto flex py-3 px-8 justify-between items-center ">
      <div className="flex text-white items-center gap-2">
        <Image src="/logo.png" alt="#" width={28} height={28} />
        <h1>Investo</h1>
      </div>

      <ul className="flex items-center text-white justify-between gap-12">
        {navItems.map((item) => (
          <li
            className="hover:text-[#D1F701] hover:underline cursor-pointer"
            key={item}>
            {item}
          </li>
        ))}
      </ul>

      <button className="text-black bg-[#D1F701] hover:underline rounded-[100px] cursor-pointer px-8 py-3.5 font-medium text-xl">
        Download App
      </button>
    </nav>
  );
}
