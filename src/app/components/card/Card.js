import style from "./card.module.css";

export default function Card({ text, mainText }) {
  return (
    <div className={`${style.card} flex justify-center flex-col `}>
      <h1 className="mt-4 mb-6 mx-4 font-medium">{text}</h1>
      <div className="mt-4 mx-4">{mainText}</div>
    </div>
  );
}
