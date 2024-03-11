import { aboutinfo, data6, data7, dmcaEba, media } from '../../data'
import Sponsor from '../LittleComponents/Sponsor'
import LeftFooter from '../LittleComponents/LeftFooter'
import Media from '../LittleComponents/Media'
import Information from '../LittleComponents/Information'
import Border from '../LittleComponents/Border'
import DmcaEba from '../LittleComponents/DmcaEba'
const Footer = () => {
  return (
    <footer className='w-[95%] m-[auto] max-w-[1200px] mt-20 xl:w-[80%] xl:max-w-[1920px]'>
                {data6.map(el6 => (
                    <Sponsor
                    Pirveli={el6.Pirveli}
                    Sharm={el6.Sharm}
                    Saqartvelo={el6.Saqartvelo}
                    Tbilisi={el6.Tbilisi}
                    Creatour={el6.Creatour}
                    Kikala={el6.Kikala}
                    NBR={el6.NBR}
                    Pitstop={el6.Pitstop}
                    QartuliSaqme={el6.QartuliSaqme}
                    Proteller={el6.Proteller}
                    Supta={el6.Supta}
                    />
                ))}
        <section className='flex   max-w-[1550px] m-auto  flex-col justify-center items-center  xl:flex-row xl:justify-between'>
                {data7.map(el7 => (
                    <LeftFooter 
                    MainImg={el7.MainImg}
                    Dmca={el7.Dmca}
                    Eba={el7.Eba}
                    year={el7.year}
                    />
                ))}
            <div className='flex gap-[18px] pt-[21.14px] pb-[5.35px] md:gap-10 md:pt-[64px] md:pb-10 medium3 flex-wrap xl:flex-col'>
                {media.map(el8 =>(
                    <Media 
                    Be={el8.Be}
                    Instagram={el8.Instagram}
                    Twitter={el8.Twitter}
                    Linkdein={el8.Linkdein}
                    Facebook={el8.Facebook}
                    Youtube={el8.Youtube}
                    Basketball={el8.Basketball}
                    GitHub={el8.GitHub}
                    />
                ))}

                {aboutinfo.map(el9 => (
                    <Information 
                    name={el9.name}
                    namedsc={el9.namedesc}
                    govid={el9.govid}
                    goviddesc={el9.goviddesc}
                    Telephone={el9.Telephone}
                    Telephonedesc={el9.Telephonedesc}
                    Telephone2={el9.Telephone2}
                    Telephone2desc={el9.Telephone2desc}
                    Email={el9.Email}
                    Emaildesc={el9.Emaildesc}
                    Address={el9.Address}
                    Addressdesc={el9.Addressdesc}
                    Zip={el9.Zip}
                    Zipdesc={el9.Zipdesc}
                    />
                ))}
                   
            </div>

            <Border />

        </section>
        {dmcaEba.map(el10 => (
            <DmcaEba 
            Dmca2={el10.Dmca2}
            Eba2={el10.Eba2}
            Paragraph={el10.Paragraph}
            />
        ))}
    </footer>
  )
}

export default Footer