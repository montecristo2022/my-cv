import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/MykolaPhoto.jpg"
          alt="an image of showing Mykola"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi,i am Mykola!</h1>
      <p>On this page you can find all information about my knowledge and motivation.</p>
    </section>
  );
}

export default Hero;
