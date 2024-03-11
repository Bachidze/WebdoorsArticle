import { Grid } from "../../interface";


export default function GridImages({img1,img2,img3,img4,img5}:Grid) {
  return (
    <>
     <section className="flex  justify-center   mt-4 xl:mt-[30px] xl:mb-[-60px]">
          <div className="grid2">
            <div className="relative xl:right-4">
              <img
                className="w-[363px] h-[353px] pirveli md:w-[351px] md:h-[341px] xl:hidden"
                src={img1}
                alt="grid1"
              />
              <img
                className="hidden xl:flex xl:w-[539px] xl:h-[564px] relative"
                src={img2}
                alt="Grid1Desktop"
              />
            </div>
            <div className="relative xl:left-7">
              <img
                className="hidden xl:flex relative xl:top-4"
                src={img3}
                alt="desktopgrid2img"
              />
              <img
                className="w-[363px] h-[185px] meore md:w-[319px] md:h-[159px] xl:hidden"
                src={img4}
                alt="grid2"
              />
              <img
                className="w-[363px] h-[185px] mesame md:w-[319px] md:h-[159px] md:mt-4 xl:w-[500px] xl:h-[360px] xl:mt-0 relative xl:bottom-8"
                src={img5}
                alt="grid3"
              />
            </div>
          </div>
        </section>
    </>
  )
}
