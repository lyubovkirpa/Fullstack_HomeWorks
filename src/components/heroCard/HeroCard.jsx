import "./heroCard.css";

function HeroCard({hero}) {
  return (
    <article className={hero.isDark ? "hero-dark" : "hero-light"} >
      <h3>{hero.name}</h3>
      <p>
        {hero.name} is {hero.age} years old{" "}
      </p>
      <img src={hero.image} alt="" />
      <p>
        Hero weapons:{" "}
        {hero.weapons.map((weapon, index) => (
          <span className="weapon" key={index}>
            {" "}
            | {weapon}{" "}
          </span>
        ))}
      </p>
    </article>
  );
}

export default HeroCard;
