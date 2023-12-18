import style from "./feature.module.css";

export default function Feature() {
  return (
    <div className={`${style.feature} flex justify-center`}>
      <div className="f text-2xl font-semibold">Alles, was Sie brauchen</div>
    </div>
  );
}
