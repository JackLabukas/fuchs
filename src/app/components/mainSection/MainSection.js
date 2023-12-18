import style from "./mainsection.module.css";

export default function MainSection() {
  return (
    <div className={`${style.mainSection} flex justify-center`}>
      <div className={`${style.box1} mx-2`}>
        <div className={style.testText}></div>
        <div className={style.testText}></div>
        <div className={style.testText}></div>
        <div className={style.testText}></div>
        <div className={style.testText}></div>
      </div>
      <div className={`${style.box2} mx-2 `}>
        <div className={style.testText1}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </div>
        <li className={style.testText1}>
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
        </li>
      </div>
    </div>
  );
}
