import axios from "axios";
import { useState, useEffect } from "react";

export default function CastInfo({ mediaID}) {
    const [credits, setCredits] = useState([])
    const [crew, setCrew] = useState([])
  


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${mediaID}/credits?api_key=1418807822dc08d848a20722bb586c6f&%22`
      )
      .then((success) => {
        setCredits(success.data.cast.slice(0,20))
        setCrew((success.data.crew).slice(0,20))
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mediaID]);

console.log(crew)



// credits.forEach(each => {
//     console.log(`${each.name} - ${each.character}`)
// })

  return (
    <div className="cast-info p-[50px]">
      <div className="cast-info__group-title text-[1.7rem] font-bold mb-8">
        Cast 
      </div>
      <div className="cast-info__list flex flex-col gap-[5px] text-[1.2rem] ">
      {credits.map(cast => {
        return (
              <ul className="cast-info__crew  flex ">
          <li>{cast.name}</li>
          <li>{cast.character}</li>
        </ul>
        )
      })}

      </div>
      <div className="cast-info__group-title text-[1.7rem] font-bold my-8">
        Crew
      </div>
      <div className="cast-info__list flex flex-col gap-[5px] text-[1.2rem] ">
      {crew.map(crew => {
        return (
            <ul className="cast-info__crew  flex ">
            <li>{crew.job}</li>
            <li>{crew.name}</li>
          </ul>
        )
      })}
      </div>
    </div>
  );
}
