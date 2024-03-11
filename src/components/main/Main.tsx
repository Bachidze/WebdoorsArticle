import "./Main.css";
const Main = () => {
  return (
    <>
      <main className="w-[90%] max-w-[1920px] m-auto mt-[18px] ">
        <section className="hidden xl:flex flex-col justify-center items-center mt-[200px] gap-8 mb-[160px]">
          <h2 className="text-[20px] leading-[21px]">
            INTRODUCING{" "}
            <span className="text-[#BFB0FF] font-semibold">WEBDOORS</span>
          </h2>
          <h1 className="text-[38px] leading-10">
            DIGITAL <span className="text-[#BFB0FF]">EXPERIENCE</span>,
            RE-IMAGINED
          </h1>
          <p className="text-[18px] leading-[30px]">
            A full-service digital agency with capabilities across web design
            and development
          </p>
          <div className="flex justify-center items-center bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 pt-[15px] pb-[15px] pl-5 pr-5 gap-[45px] rounded-lg mt-[28px]">
            <h3>NEED A WEBSITE?</h3>
            <img src="/assets/Line 1.svg" alt="" />
          </div>
        </section>
        <section className="flex justify-between  m-auto md:max-w-[675px] md:mt-[39px] xl:max-w-[1040px]">
          <div className="flex flex-col gap-[4.6px]">
            <h3 className="text-[13px] font-medium leading-[16.25px] md:text-[16px] md:leading-5">
              Read more Article
            </h3>
            <h1 className="text-[20px] leading-[25px] font-normal md:text-[32px] md:leading-10">
              lorem ipsum dolor
            </h1>
          </div>
          <div className="flex items-end">
            <h4 className="text-[14px] font-bold leading-[17.5px] opacity-75 md:text-[16px] md:leading-5">
              11 November 2021
            </h4>
          </div>
        </section>
        <section className="flex justify-center items-center xl:mt-3 xl:mb-[30px]">
          <div className="relative flex justify-between flex-col">
            <div className="flex justify-between relative top-8 z-10 md:top-12 xl:top-14">
              <img
                className="md:w-[157px] md:h-[40px]"
                src="/assets/blackmediaWebdoors.svg"
                alt=" blackmediaFirst"
              />
              <img
                className="md:w-[120px] md:h-[40.77px]"
                src="/assets/BlackWebdoorsEye.svg"
                alt="BlackmediaSecond"
              />
            </div>
            <div>
              <img
                className="rounded-[15px] relative w-[363px] h-[200.51px] bottom-2 md:hidden"
                src="/assets/ArticleWebdoors.svg"
                alt="ArticleFirstImg"
              />
              <img
                className="hidden xl:flex"
                src="/assets/Mask Group (1).svg"
                alt="Desktopimg"
              />
              <img
                className="hidden md:flex md:relative md:bottom-4 xl:hidden"
                src="/assets/Mask Group (2).svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className=" m-auto md:max-w-[680px] xl:max-w-[1050px]">
          <div className="flex flex-col gap-6 break-all md:mt-[5.16px]">
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              eu, quis urna diam scelerisque mus. Sed turpis turpis urna eu, ut
              commodo non faucibus ipsum. Viverra proin sit nulla quis ut neque,
              vel. Cras nisl at iaculis egestas quisque neque velit amet.
              Adipiscing id eget pharetra viverra. Tellus interdum sit aliquam
              mauris quam vestibulum commodo sollicitudin. Sagittis neque quam
              id eu at vestibulum. Lorem ut pharetra, ut pharetra at lectus et
              ut. Vestibulum, mi tristique tristique posuere odio aliquet proin.
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              Et sed massa ultricies cras imperdiet in amet est. A mauris eros,
              nullam tempus, bibendum adipiscing hac nisi, libero. Vitae
              nascetur a tellus imperdiet dictum lacus molestie. Feugiat urna
              venenatis laoreet pretium vitae. Sagittis tempus, donec vel nunc,
              sollicitudin pharetra turpis ultricies. Pellentesque scelerisque
              augue et eget lacus. Mauris sed diam nec vitae sed. In sit sit
              nulla enim. Placerat pretium iaculis varius aliquet.
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              Urna duis natoque ullamcorper egestas lacinia lectus. Urna, turpis
              quam sed porttitor odio purus in. Congue euismod viverra amet ut
              viverra fringilla donec volutpat. In elit ante scelerisque
              condimentum elit orci, sed quis velit. Urna viverra gravida diam
              vel, iaculis eget nullam. Mattis nunc erat pulvinar phasellus
              tempus. Libero dictum rutrum montes, nulla nunc. Non nam
              ullamcorper sed pellentesque lorem congue nunc
            </p>
          </div>
        </section>
        <section className="flex  justify-center   mt-4 xl:mt-[30px] xl:mb-[-60px]">
          <div className="grid2">
            <div className="relative xl:right-4">
              <img
                className="w-[363px] h-[353px] pirveli md:w-[351px] md:h-[341px] xl:hidden"
                src="/assets/Grid1Webdoors.svg"
                alt=""
              />
              <img
                className="hidden xl:flex xl:w-[539px] xl:h-[564px] relative"
                src="/assets/unsplash_SYbD0jfSF3s.svg"
                alt="Grid1Desktop"
              />
            </div>
            <div className="relative xl:left-7">
              <img
                className="hidden xl:flex relative xl:top-4"
                src="/assets/unsplash_SYbD0jfSF3s (1).svg"
                alt="desktopgrid2img"
              />
              <img
                className="w-[363px] h-[185px] meore md:w-[319px] md:h-[159px] xl:hidden"
                src="/assets/Grid2Webdoors.svg"
                alt=""
              />
              <img
                className="w-[363px] h-[185px] mesame md:w-[319px] md:h-[159px] md:mt-4 xl:w-[500px] xl:h-[360px] xl:mt-0 relative xl:bottom-8"
                src="/assets/Grid3Webdoors.svg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className=" m-auto mt-[10.2px] md:max-w-[680px]  xl:max-w-[1050px]">
          <div className="flex flex-col gap-6 break-all">
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px]  xl:leading-[30px] spacing">
              Et sed massa ultricies cras imperdiet in amet est. A mauris eros,
              nullam tempus, bibendum adipiscing hac nisi, libero. Vitae
              nascetur a tellus imperdiet dictum lacus molestie. Feugiat urna
              venenatis laoreet pretium vitae. Sagittis tempus, donec vel nunc,
              sollicitudin pharetra turpis ultricies. Pellentesque scelerisque
              augue et eget lacus. Mauris sed diam nec vitae sed. In sit sit
              nulla enim. Placerat pretium iaculis varius aliquet.
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              Urna duis natoque ullamcorper egestas lacinia lectus. Urna, turpis
              quam sed porttitor odio purus in. Congue euismod viverra amet ut
              viverra fringilla donec volutpat. In elit ante scelerisque
              condimentum elit orci, sed quis velit. Urna viverra gravida diam
              vel, iaculis eget nullam. Mattis nunc erat pulvinar phasellus
              tempus. Libero dictum rutrum montes, nulla nunc. Non nam
              ullamcorper sed pellentesque lorem congue nunc
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              Lectus metus sagittis sit sit vitae eleifend venenatis mattis.
              Fames mi orci sed mauris, imperdiet. Luctus venenatis dis orci
              diam mattis lectus ultrices. Praesent orci pellentesque lectus
              pretium tempus, facilisis eu semper. Etiam a interdum sed non at.
              Amet, bibendum faucibus ut amet. Aliquet diam lorem egestas
              viverra urna, urna nibh condimentum. In pharetra, nibh at aliquam
              imperdiet. Et diam diam dignissim eu nec risus penatibus tellus
              mauris. Etiam purus risus platea convallis elementum. Dolor tempor
              vivamus sit varius.
            </p>
            <p className="text-[15px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-[30px] spacing">
              Sagittis dignissim mauris condimentum libero. Vel ultrices
              suscipit adipiscing ultrices quam nec ullamcorper sem aliquet. At
              suspendisse ultricies eu mi. Porttitor phasellus in nibh facilisis
              enim, tempus cum. Elit, posuere gravida praesent dui iaculis
              imperdiet quis. At imperdiet quam hendrerit varius. Tortor enim,
              purus auctor tellus sed ut eleifend id laoreet. Magna pellentesque
              egestas nullam scelerisque fermentum proin porttitor. Ac tortor eu
              euismod facilisi iaculis odio justo vitae malesuada. Eu pharetra
              arcu urna condimentum in ultricies pellentesque quisque et. Nullam
              proin faucibus turpis hendrerit.
            </p>
          </div>
        </section>

        <section className="hidden xl:flex max-w-[80%] flex-col justify-start items-center  m-auto mt-[120px]">
          <div className="flex flex-col self-start">
            <h1 className="text-[32px] leading-10">Read more news</h1>
            <div className="flex items-center justify-end mt-[12px]">
              <div className="border-2 border-[#8F8CEF] h-2 w-[2px]"></div>
              <div className="border-2 border-[#8F8CEF] w-[117px]"></div>
              <div className="border-2 border-[#8F8CEF] w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
        </section>
      <section className="hidden xl:flex justify-center   m-auto max-w-[1920px]">
          <div className="hidden xl:flex  justify-center items-center mt-[50px]">
            <div className="relative ">
              <img
                className="w-[832px] h-[467px]"
                src="/assets/unsplash_PhYq704ffdA.svg"
                alt="NY"
              />
            </div>
            <div className=" relative right-[70px]">
              <h1 className="text-[26px] text-white font-bold mb-[20px] text-right">
                Lorem ipsum dolor amet
              </h1>
              <h4 className="text-[18px] font-bold text-white mb-[20px] text-right">
                11 November 2021
              </h4>
              <p className=" w-[688px] mb-[20px] text-right text-[18px] text-white break-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                condimentum scelerisque viverra magna sollicitudin vestibulum.
                Augue augue elementum massa vestibulum, vitae cras tempor,
                vulputate risus. Facilisis tristique lorem cras porttitor
                ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
              </p>
              <div className="flex items-end justify-end  mt-[80px]">
                <div className="flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5">
                  <div className="border-2 w-[12px] h-[12px] rounde-2xl border-[#8F8CEF]"></div>
                  <h2 className="font-bold text-white">READ ME</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="hidden xl:flex justify-center m-auto max-w-[1920px]">
            <div className="relative left-[70px]">
              <h1 className="text-[26px] text-white font-bold mb-[20px] text-left">
                Lorem ipsum dolor amet
              </h1>
              <h4 className="text-[18px] font-bold text-white mb-[20px] text-left">
                11 November 2021
              </h4>
              <p className=" w-[688px] mb-[20px] text-left text-[18px] text-white break-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                condimentum scelerisque viverra magna sollicitudin vestibulum.
                Augue augue elementum massa vestibulum, vitae cras tempor,
                vulputate risus. Facilisis tristique lorem cras porttitor
                ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
              </p>
              <div className="flex items-end justify-start  mt-[80px]">
                <div className="flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5">
                <div className="border-2 w-[12px] h-[12px] rounde-2xl border-[#8F8CEF]"></div>
                  <h2 className="font-bold text-white">READ ME</h2>
                </div>
              </div>
            </div>
          <div className="hidden xl:flex  justify-center items-center -z-10">
            <div className="relative">
              <img
                className="w-[832px] h-[467px]"
                src="/assets/unsplash_aJYO8JmVodY.svg"
                alt="NY"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
