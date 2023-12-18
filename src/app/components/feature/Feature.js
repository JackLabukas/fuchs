import style from "./feature.module.css";
import Card from "../card/Card";

const mainTexts = `250 Millionen Menschen besuchen Indeed jeden Monat und verschaffen Ihnen Zugang zu den besten Talenten in jedem Bereich.*`;

export default function Feature() {
  return (
    <div className={`${style.feature} flex justify-center `}>
      <div className="">
        <div className="text-2xl font-semibold text-center">
          Alles, was Sie brauchen
        </div>
        <div className={`flex flew-row`}>
          <Card text="Das Richtige für Ihre Aufgaben" mainText={mainTexts} />
          <Card text="Das Richtige für Ihre Aufgaben" mainText={mainTexts} />
          <Card text="Das Richtige für Ihre Aufgaben" mainText={mainTexts} />
        </div>
      </div>
    </div>
  );
}
