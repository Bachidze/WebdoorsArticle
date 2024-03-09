
const Sponsor = ({Pirveli,Sharm, Saqartvelo,Tbilisi,Creatour,Kikala,NBR,Pitstop,QartuliSaqme,Proteller,Supta}:any) => {
  return (
    <>
    <section className='hidden xl:flex xl:flex-col xl:mt-[159px] xl:m-auto'>
            <div className='flex justify-center flex-wrap gap-[65px] xl:mb-[60px] dashoreba'>
                <img src={Pirveli} alt="Pirveli" />
                <img src={Sharm} alt="Sharm" />
                <img src={Saqartvelo} alt="Saqartvelo" />
                <img src={Tbilisi} alt="Tbilisi" />
                <img src={Creatour} alt="Creatour" />
                <img src={Kikala} alt="Kikala" />
            </div>
            <div className='flex justify-center m-auto gap-[65px] pb-[160px] dashoreba'>
                <img src={NBR} alt="NBR" />
                <img src={Pitstop} alt="Pitstop" />
                <img src={QartuliSaqme} alt="QartuliSaqme" />
                <img src={Proteller} alt="Proteller" />
                <img src={Supta} alt="Supta" />
            </div>
            <div>

            </div>
        </section>
    </>
  )
}

export default Sponsor