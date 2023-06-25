// import Image from "next/image";

// import classes from "./certificate.module.css";

// export default function Certificate() {
//   return (
//     <section id="certificate" className={classes.certificate}>
//       <h3>My Certificate</h3>
//       <Image
//         src="/images/certificate/certificate.jpg"
//         alt="image of certificate"
//         width={600}
//         height={800}
//       />
//     </section>
//   );
// }




import Image from "next/image";

import classes from "./certificate.module.css";

export default function Certificate() {
  return (
    <section id="certificate" className={classes.certificate}>
      <h3>My Certificate</h3>
      <div className={classes.image}>
        <Image
          src="/images/certificate/certificate.jpg"
          alt="image of certificate"
          width={600}
          height={800}
          layout="responsive"
        />
      </div>
    </section>
  );
}
