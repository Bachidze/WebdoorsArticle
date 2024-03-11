import { ReadMoreNewsProp } from "../../interface";

export default function ReadMoreNews({
  readmorenews,
  Nyimg,
  lorem,
  date,
  par,
  readme,
  lorem2,
  date2,
  par2,
  img2,
}: ReadMoreNewsProp) {
  return (
    <>
      <section className="hidden xl:flex w-[90%] translate-x-8 flex-col justify-start items-center  m-auto mt-[120px]">
        <div className="flex flex-col self-start">
          <h1 className="text-[32px] leading-10">{readmorenews}</h1>
          <div className="flex items-center justify-end  mt-[12px]">
            <div className="border-2 border-[#8F8CEF] h-2 w-[2px]"></div>
            <div className="border-2 border-[#8F8CEF] w-[117px]"></div>
            <div className="border-2 border-[#8F8CEF] w-[10px] h-[10px] rounded-[50%]"></div>
          </div>
        </div>
      </section>

      <section className="hidden xl:flex items-center w-[95%] m-auto justify-center">
        <div className="translate-x-6">
          <img
            className="min-w-[832px] min-h-[467px]"
            src={Nyimg}
            alt="NyImg"
          />
        </div>
        <div className="text-right -translate-x-16">
          <h1 className="text-[26px] text-white font-bold mb-[20px]">
            {lorem}
          </h1>
          <h4 className="text-[18px] font-bold text-white mb-[20px]">{date}</h4>
          <p className=" text-[18px] text-white break-all">{par}</p>
          <div className="flex justify-end mt-[80px]">
            <div className="flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5">
              <div className="border-2 w-[12px] h-[12px] rounde-2xl border-[#8F8CEF]"></div>
              <h2 className="font-bold text-white">{readme}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden xl:flex items-center w-[95%] m-auto justify-center">
        <div className="ored-2 relative translate-x-16">
          <h1 className="text-[26px] text-white font-bold mb-[20px]">
            {lorem2}
          </h1>
          <h4 className="text-[18px] font-bold text-white mb-[20px]">
            {date2}
          </h4>
          <p className="text-[18px] text-white break-all">{par2}</p>
          <div className="flex mt-[80px]">
            <div className="flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5">
              <div className="border-2 w-[12px] h-[12px] rounde-2xl border-[#8F8CEF]"></div>
              <h2 className="font-bold text-white">{readme}</h2>
            </div>
          </div>
        </div>
        <div className="oredr-1 -translate-x-6 -z-10">
          <img className="min-w-[832px] min-h-[467px]" src={img2} alt="NyImg" />
        </div>
      </section>
    </>
  );
}
