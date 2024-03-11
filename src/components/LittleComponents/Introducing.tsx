import { IntroProp } from "../../interface";

export default function Introducing({intro,span,digital,span2,paragraph,need,span3}:IntroProp) {
  return (
   <>
      <section className="hidden xl:flex flex-col justify-center items-center mt-[200px] gap-8 mb-[160px]">
          <h2 className="text-[20px] leading-[21px]">
            {intro}
            <span className="text-[#BFB0FF] font-semibold">{span}</span>
          </h2>
          <h1 className="text-[38px] leading-10">
            {digital} <span className="text-[#BFB0FF]">{span2}</span>,
            {span3}
          </h1>
          <p className="text-[18px] leading-[30px]">
            {paragraph}
          </p>
          <div className="flex justify-center items-center bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 pt-[15px] pb-[15px] pl-5 pr-5 gap-[45px] rounded-lg mt-[28px]">
            <h3>{need}</h3>
            <img src="/assets/Line 1.svg" alt="" />
          </div>
        </section>
   </>
  )
}
