
const LeftFooter = ({MainImg,Dmca,Eba,year}:any) => {
  return (
    <>
      <div className='xl:relative xl:top-[40px]'>
                <div>
                    <img className='md:w-[252px] xl:pb-[60.64px]' src={MainImg} alt="MainImg" />
                </div>
                <div className='hidden xl:flex items-center pt-[20.65px] gap-[20.9px] relative right-[55px] md:order-2 md:right-0 xl:pb-[100.61px]' >
                    <img className='w-[122px]' src={Dmca} alt="Dmca" />
                    <img className='w-[120px]' src={Eba} alt="Eba" />
                </div>
                <div className='hidden xl:flex pt-[20.13px] pb-[15px] relative right-[10px] md:order-1 md:right-0 md:top-7'>
                        <h2 className='text-[16px] leading-[18.75px] text-[gray]'>{year}</h2>
                </div>
        </div>
    </>
  )
}

export default LeftFooter