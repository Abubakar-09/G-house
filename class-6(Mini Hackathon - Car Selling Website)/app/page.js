// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-md:block hidden">Not Avilable on Mobile Screen,Just On laptop screen</div>
      <div className="hero_section w-[80vw] m-auto my-3 h-[80vh] flex flex-col justify-center max-md:hidden">
        <h1 className="w-full text-center text-2xl font-bold">Sell Your Cars On Pakwheels and Get the Best Price</h1>
        <div className="w-full grid grid-cols-7 my-6 gap-2 px-2">
          <div className="border border-black col-span-3 py-3 rounded-xl">
            <div className="flex flex-col gap-3 pl-6">
              <h1 className="text-xl font-semibold">Post Your Ad on Pakwheels</h1>
              <div>
                <p className="text-sm">Post your ad for free in 3 easy steps</p>
                <p className="text-sm">Get Geniune Offer From Verfied Buyer</p>
                <p className="text-sm">Sell Your Cars Fast at a Best Price</p>
              </div>
              <div>
                <button className="bg-red-700 px-4 py-2 font-bold text-sm rounded text-white">Post Your Ads</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center text-xl">OR</div>
          <div className="border border-black col-span-3 py-3 rounded-xl">
            <div className="flex flex-col gap-3 pl-6">
              <h1 className="text-xl font-semibold">Try Pakwheels Sell it for me</h1>
              <div>
                <p className="text-sm">Post your ad for free in 3 easy steps</p>
                <p className="text-sm">Get Geniune Offer From Verfied Buyer</p>
                <p className="text-sm">Sell Your Cars Fast at a Best Price</p>
              </div>
              <div>
                <button className="bg-blue-700 px-4 py-2 font-bold text-sm rounded text-white">Register Your Car</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featuring Section  */}
      <div className="bg-slate-100 py-3 h-[80vh] flex items-center">
        <div className="w-[80vw] m-auto ">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-xl">Featuring New Cars</h1>
            <p className="text-sm text-blue-500">View New Cars</p>
          </div>
          <div className="py-1 border-b-[1px] border-slate-700 my-4 flex gap-3 text-[18px]">
            <p className="font-bold border-b-[2px] cursor-pointer border-blue-800">Popular</p>
            <p className="cursor-pointer">Upcoming</p>
            <p className="cursor-pointer">Newly Launched</p>
          </div>
          <div className="my-4 grid grid-cols-4 gap-2 h-[40vh] rounded-lg cursor-pointer">
            <Link href={'/1'}>
              <div className="bg-white flex flex-col items-center justify-center rounded-lg">
                <img src="1.jpg" className="w-[200px]" alt="car1" />
                <div className="flex flex-col justify-center items-center my-2">
                  <h3 className="text-base font-semibold text-purple-500">Toyota Corolla</h3>
                  <p className="text-[12px]">PKR 59 - 60 lac</p>
                  <p className="text-[12px]">621 reviews</p>
                </div>
              </div>
            </Link>
            <Link href={'/2'}>
              <div className="bg-white flex flex-col items-center justify-center rounded-lg cursor-pointer">
                <img src="2.png" className="w-[200px]" alt="car1" />
                <div className="flex flex-col justify-center items-center my-2">
                  <h3 className="text-base font-semibold text-purple-500">Suzuki Alto</h3>
                  <p className="text-[12px]">PKR 59 - 60 lac</p>
                  <p className="text-[12px]">621 reviews</p>
                </div>
              </div>
            </Link>
            <Link href={'/3'}>
              <div className="bg-white flex flex-col items-center justify-center rounded-lg cursor-pointer">
                <img src="3.jpg" className="w-[200px]" alt="car1" />
                <div className="flex flex-col justify-center items-center my-2">
                  <h3 className="text-base font-semibold text-purple-500">Honda City</h3>
                  <p className="text-[12px]">PKR 59 - 60 lac</p>
                  <p className="text-[12px]">621 reviews</p>
                </div>
              </div>
            </Link>
            <Link href={'/4'}>
              <div className="bg-white flex flex-col items-center justify-center rounded-lg cursor-pointer">
                <img src="4.jpg" className="w-[200px]" alt="car1" />
                <div className="flex flex-col justify-center items-center my-2">
                  <h3 className="text-base font-semibold text-purple-500">Honda Civic</h3>
                  <p className="text-[12px]">PKR 59 - 60 lac</p>
                  <p className="text-[12px]">621 reviews</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ending Featuring Section  */}
    </>
  );
}
