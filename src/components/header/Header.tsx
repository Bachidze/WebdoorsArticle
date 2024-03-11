import { data5 } from '../../data'
import HeaderComponent from '../LittleComponents/HeaderComponent'

const Header = () => {
  return (
    <>
    <header className='w-[95%] pt-[17px] max-w-[1920px] m-[auto] md:w-[90%] md:pt-[35px] xl:w-[70%] xl:pt-[60px]'>
       {data5.map(el5 => (
        <HeaderComponent 
          Logo={el5.Logo}
          About={el5.About}
          Projects={el5.Projects}
          Services={el5.Services}
          MiddleImg={el5.MiddleImg}
          Nav={el5.Nav}
          hiddenImg={el5.hiddenImg}
        />
       ))}
    </header>
    </>
  )
}

export default Header