import { bottomparagraph, downside, gridimg, introducing, readmore, topimages, topparagraphs } from "../../data";
import BottomPar from "../LittleComponents/BottomPar";
import FirstParagraph from "../LittleComponents/FirstParagraph";
import GridImages from "../LittleComponents/GridImages";
import Introducing from "../LittleComponents/Introducing";
import ReadMore from "../LittleComponents/ReadMore";
import ReadMoreNews from "../LittleComponents/ReadMoreNews";
import TopImages from "../LittleComponents/TopImages";
import "./Main.css";
const Main = () => {
  return (
    <>
      <main className="w-[90%] max-w-[1920px] m-auto mt-[18px] ">
     {introducing.map(el =>(
      <Introducing 
      digital={el.digital}
      intro={el.intro}
      need={el.need}
      paragraph={el.paragraph}
      span={el.span}
      span2={el.span2}
      span3={el.span3}
      />
     ))}
       {readmore.map(el=>(
        <ReadMore 
        par1={el.par1}
        par2={el.par2}
        par3={el.par3}
        />
       ))}
      {topimages.map(el=>(
        <TopImages 
        img1={el.img1}
        img2={el.img2}
        img3={el.img3}
        img4={el.img4}
        img5={el.img5}
        />
      ))}
       {topparagraphs.map(el=>(
        <FirstParagraph 
        par1={el.par1}
        par2={el.par2}
        par3={el.par3}
        />
       ))}
       
       {gridimg.map(el=>(
        <GridImages 
        img1={el.img1}
        img2={el.img2}
        img3={el.img3}
        img4={el.img4}
        img5={el.img5}
        />
       ))}

        {bottomparagraph.map(el=>(
          <BottomPar 
          par1={el.par1}
          par2={el.par2}
          par3={el.par3}
          par4={el.par4}
          />
        ))}

       {downside.map(el =>(
        <ReadMoreNews 
        Nyimg={el.Nyimg}
        date={el.date}
        date2={el.date2}
        img2={el.img2}
        lorem={el.lorem}
        lorem2={el.lorem2}
        par={el.par}
        par2={el.par2}
        readme={el.readme}
        readmorenews={el.readmorenews}
        />
       ))}
      </main>
    </>
  );
};

export default Main;
