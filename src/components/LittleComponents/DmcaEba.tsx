
const DmcaEba = ({Dmca2,Eba2,Paragraph}:any) => {
  return (
    <>
    <section className='flex  m-auto flex-col  items-center md:flex-row md:items-center md:justify-center relative md:top-[60px] md:mb-[120px] md:gap-[175px] md:max-w-[680px] medium5 xl:hidden'>
            <div className='flex right-11 items-center pt-[20.65px] gap-[20.9px] relative md:order-2 md:mr-4 md:right-0' >
                <img className='md:w-[100px]' src={Dmca2} alt="Dmca" />
                <img className='md:w-[91px]' src={Eba2} alt="Eba" />
            </div>
            <div className='pt-[20.13px]  pb-[15px] relative right-[10px] md:order-1 md:ml-3  md:top-2 xl:hidden'>
                <h2 className='text-[16px] leading-[18.75px] text-[gray]'>{Paragraph}</h2>
            </div>
        </section>
    </>
  )
}

export default DmcaEba