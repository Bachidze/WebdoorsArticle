import { ReadMoreProp } from "../../interface";

export default function ReadMore({par1,par2,par3}:ReadMoreProp) {
  return (
    <>
      <section className="flex justify-between  m-auto md:max-w-[675px] md:mt-[39px] xl:max-w-[1040px]">
        <div className="flex flex-col gap-[4.6px]">
          <h3 className="text-[13px] font-medium leading-[16.25px] md:text-[16px] md:leading-5">
            {par1}
          </h3>
          <h1 className="text-[20px] leading-[25px] font-normal md:text-[32px] md:leading-10">
            {par2}
          </h1>
        </div>
        <div className="flex items-end">
          <h4 className="text-[14px] font-bold leading-[17.5px] opacity-75 md:text-[16px] md:leading-5">
            {par3}
          </h4>
        </div>
      </section>
    </>
  );
}
