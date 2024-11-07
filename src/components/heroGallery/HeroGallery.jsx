import { heroes } from "./data";
import HeroCard from "../heroCard/HeroCard";
import "./heroGallery.css";

function HeroGallery() {
//   console.log(heroes);
  return (
    <section className="grid-container">
      {" "}
      {heroes.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </section>
  );
}

export default HeroGallery;
