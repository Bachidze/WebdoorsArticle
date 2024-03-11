
const Media = ({Be,Instagram,Twitter,Linkdein,Facebook,Youtube,Basketball,GitHub}:any) => {
  return (
    <>
    <div className='flex w-[90%] justify-center  m-auto gap-[18px] pt-[21.14px] pb-[5.35px]  md:gap-12 md:pt-[64px] md:pb-10  medium3 xl:pb-[80px]'>
        <img className='md:w-[70px]  xl:w-[53px]' src={Be} alt="Be" />
        <img className='md:w-[45.72px] xl:w-[34.9px]' src={Instagram} alt="Instagram" />
        <img className='md:w-[45.8px] xl:w-[34.97px]' src={Twitter} alt="Twitter" />
        <img className='md:w-[46.55px] xl:w-[35.54px]' src={Linkdein} alt="Linkdein" />
        <img className='md:w-[47px] xl:w-[34.27px]' src={Facebook} alt="Facebook" />
        <img className='md:w-[60px] xl:w-[45.49px]' src={Youtube} alt="Youtube" />
        <img className='md:w-[45px] xl:w-[34.27px]' src={Basketball} alt="Basketball" />
        <img className='md:w-[44.89px] xl:w-[34.27px]' src={GitHub} alt="GitHub" />
    </div>
    </>
  )
}

export default Media