import { TopImagesPRop } from "../../interface";

export default function TopImages({img1,img2,img3,img4,img5}:TopImagesPRop) {
 return (
    <>
      <section className="flex justify-center items-center xl:mt-3 xl:mb-[30px]">
          <div className="relative flex justify-between flex-col">
            <div className="flex justify-between relative top-8 z-10 md:top-12 xl:top-14">
              <img
                className="md:w-[157px] md:h-[40px]"
                src={img1}
                alt=" blackmediaFirst"
              />
              <img
                className="md:w-[120px] md:h-[40.77px]"
                src={img2}
                alt="BlackmediaSecond"
              />
            </div>
            <div>
              <img
                className="rounded-[15px] relative w-[363px] h-[200.51px] bottom-2 md:hidden"
                src={img3}
                alt="ArticleFirstImg"
              />
              <img
                className="hidden xl:flex"
                src={img4}
                alt="Desktopimg"
              />
              <img
                className="hidden md:flex md:relative md:bottom-4 xl:hidden"
                src={img5}
                alt="maskimg"
              />
            </div>
          </div>
        </section>
    </>
  )
}
