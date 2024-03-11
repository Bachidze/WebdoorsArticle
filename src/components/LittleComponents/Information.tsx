import { InfoProp } from "../../interface";

const Information = ({
  name,
  govid,
  Telephone,
  Telephone2,
  Email,
  Address,
  Zip,
  namedsc,
  goviddesc,
  Telephonedesc,
  Telephone2desc,
  Emaildesc,
  Addressdesc,
  Zipdesc
}: InfoProp) => {
  return (
    <>
      <div className='hidden xl:flex xl:gap-[38px] xl:relative bottom-[20px] xl:pb-[10px] top-[5px]'>
        <div>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{name} </span>{namedsc}</h3>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{govid} </span>{goviddesc}</h3>
        </div>
        <div>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{Telephone} </span>{Telephonedesc}</h3>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{Telephone2} </span>{Telephone2desc}</h3>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{Email} </span>{Emaildesc}</h3>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{Address} </span>{Addressdesc}</h3>
          <h3 className='text-[18px]  leading-[30px] text-[#D7E0E8]'><span className='text-[18px] font-bold leading-[30px] text-white'>{Zip} </span>{Zipdesc}</h3>
          <div className='hidden xl:flex items-center relative  pt-[50px]  medium4'>
            <div className='border-2 w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='border w-[320px] md:w-[353px] medium4'></div>
            <div className='border h-[10px] w-[2px] bg-white'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
