export default function CastInfo() {
  return(
  <div className="cast-info p-[50px]">

    <div className = "cast-info__group-title text-[1.7rem] font-bold mb-8">
        Cast & Crew
    </div>
    <div className = "cast-info__list flex flex-col gap-[5px] text-[1.2rem] ">

        <ul className = "cast-info__crew  flex ">
            <li>Director</li>
            <li>George Lucas</li>
        </ul>

        <ul className = "cast-info__crew  flex">
            <li>Special FX</li>
            <li>George Lucas</li>
        </ul>

        <ul className = "cast-info__crew  flex">
            <li>Audio</li>
            <li>George Lucas</li>
        </ul>

        <ul className = "cast-info__crew  flex">
            <li>Camera Men</li>
            <li>George Lucas</li>
        </ul>

        <ul className = "cast-info__crew  flex ">
            <li>Actor</li>
            <li>George Lucas</li>
        </ul>

        <ul className = "cast-info__crew  flex">
            <li>Writer</li>
            <li>George Lucas</li>
        </ul>

    </div>
    <div className = "cast-info__group-title text-[1.7rem] font-bold my-8">
        Director
    </div>
    <div className = "cast-info__list flex flex-col gap-[5px] text-[1.2rem] ">

        <ul className = "cast-info__crew  flex ">
            <li>Director</li>
            <li>George Lucas</li>
        </ul>

    </div>
  </div>
  )
}
