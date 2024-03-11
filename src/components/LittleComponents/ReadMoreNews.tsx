import { ReadMoreNewsProp } from "../../interface";

export default function ReadMoreNews({readmorenews,Nyimg,lorem,date,par,readme,lorem2,date2,par2,img2}:ReadMoreNewsProp) {
  return (
    <>
     <section className="hidden xl:flex max-w-[80%] flex-col justify-start items-center  m-auto mt-[120px]">
          <div className="flex flex-col self-start">
            <h1 className="text-[32px] leading-10">{readmorenews}</h1>
            <div className="flex items-center justify-end mt-[12px]">
              <div className="border-2 border-[#8F8CEF] h-2 w-[2px]"></div>
              <div className="border-2 border-[#8F8CEF] w-[117px]"></div>
              <div className="border-2 border-[#8F8CEF] w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
        </section>
      <section className="hidden xl:flex justify-center   m-auto max-w-[1920px]">
          <div className="hidden xl:flex  justify-center items-center mt-[50px]">
            <div className="relative ">
              <img
                className="w-[832px] h-[467px]"
                src={Nyimg}
                alt="NY"
              />
            </div>
            <div className=" relative right-[70px]">
              <h1 className="text-[26px] text-white font-bold mb-[20px] text-right">
                {lorem}
              </h1>
              <h4 className="text-[18px] font-bold text-white mb-[20px] text-right">
                {date}
              </h4>
              <p className=" w-[688px] mb-[20px] text-right text-[18px] text-white break-all">
               {par}
              </p>
              <div className="flex items-end justify-end  mt-[80px]">
                <div className="flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5">
                  <div className="border-2 w-[12px] h-[12px] rounde-2xl border-[#8F8CEF]"></div>
                  <h2 className="font-bold text-white">{readme}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden xl:flex justify-center m-auto max-w-[1920px]">
            <div className="relative left-[70px]">
              <h1 className="text-[26px] text-white font-bold mb-[20px] text-left">
                {lorem2}
              </h1>
              <h4 className="text-[18px] font-bold text-white mb-[20px] text-left">
                {date2}
              </h4>
              <p className=" w-[688px] mb-[20px] text-left text-[18px] text-white break-all">
                {par2}
              </p>
              <div className="flex items-end justify-start  mt-[80px]">
                <div className="flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5">
                <div className="border-2 w-[12px] h-[12px] rounde-2xl border-[#8F8CEF]"></div>
                  <h2 className="font-bold text-white">READ ME</h2>
                </div>
              </div>
            </div>
          <div className="hidden xl:flex  justify-center items-center -z-10">
            <div className="relative">
              <img
                className="w-[832px] h-[467px]"
                src={img2}
                alt="NY"
              />
            </div>
          </div>
        </section>
    </>
  )
}
