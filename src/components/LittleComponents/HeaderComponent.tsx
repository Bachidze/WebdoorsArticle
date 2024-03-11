
const HeaderComponent = ({Logo,Services,Projects,About,MiddleImg,hiddenImg,Nav}:any) => {
  return (
    <>
     <section className='flex items-center justify-between'>
            <img className='xl:hidden' src={Logo} alt="Logo" />
            <div className='hidden xl:flex gap-11'>
              <a className='text-[18px] leading-[22.5px] text-white' href="#">{Services}</a>
              <a className='text-[18px] leading-[22.5px] text-white' href="#">{Projects}</a>
              <a className='text-[18px] leading-[22.5px] text-white' href="#">{About}</a>
            </div>
            <div className='xl:relative right-[70px]'>
              <img className='md:w-[31px] xl:w-[39px]' src={MiddleImg} alt="Main" />
            </div>
            <div className='xl:flex xl:gap-8'>
              <img className='hidden xl:flex' src={hiddenImg} alt="DesktopHeader" />
              <img src={Nav} alt="Nav" />
            </div>
        </section>
    </>
  )
}

export default HeaderComponent