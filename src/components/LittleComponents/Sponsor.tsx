import { SponsorsProp } from "../../interface";

const Sponsor = ({ Pirveli, Sharm, Saqartvelo, Tbilisi, Creatour, Kikala, NBR, Pitstop, QartuliSaqme, Proteller, Supta }: SponsorsProp) => {
  return (
    <>
      <section className='hidden xl:flex  xl:flex-col xl:mt-[159px] xl:m-auto'>
        <div className='flex justify-center flex-wrap gap-[7%] xl:mb-[60px] dashoreba'>
          <img src={Pirveli} alt="Pirveli" />
          <img src={Sharm} alt="Sharm" />
          <img src={Saqartvelo} alt="Saqartvelo" />
          <img src={Tbilisi} alt="Tbilisi" />
          <img src={Creatour} alt="Creatour" />
          <img src={Kikala} alt="Kikala" />
        </div>
        <div className='flex justify-center  m-auto flex-wrap gap-[120px] pb-[160px] mt-10 dashoreba'>
          <img src={NBR} alt="NBR" />
          <img src={Pitstop} alt="Pitstop" />
          <img src={QartuliSaqme} alt="QartuliSaqme" />
          <img src={Proteller} alt="Proteller" />
          <img src={Supta} alt="Supta" />
        </div>
      </section>
    </>
  );
};

export default Sponsor;
