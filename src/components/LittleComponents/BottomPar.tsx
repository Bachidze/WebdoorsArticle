import { BottomParProp } from "../../interface";

export default function BottomPar({par1,par2,par3,par4}:BottomParProp) {
  return (
    <>
    <section className=" m-auto mt-[10.2px] md:max-w-[680px]  xl:max-w-[1050px]">
          <div className="flex flex-col gap-6 break-all">
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px]  xl:leading-[30px] spacing">
              {par1}
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              {par2}
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              {par3}
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              {par4}
            </p>
          </div>
        </section>
    </>
  )
}
