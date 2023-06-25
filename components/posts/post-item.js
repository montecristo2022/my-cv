// import Link from "next/link";
// import Image from "next/image";

// import classes from "./post-item.module.css";

// export default function PostItem(props) {
//   const { title, image, excerpt, date, slug } = props.post;

//   const imagePath = `/images/posts/${slug}/${image}`;
//   const linkPsth = `/posts/${slug}`;

//   const formattedDate = new Date(date).toLocaleDateString("en-US", {
//     date: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <li className={classes.post}>
//       <Link href={linkPsth}>
//         <div className={classes.image}>
//           <Image src={imagePath} alt="title" width={300} height={200} layout="responsive"/>
//         </div>
//         <div className={classes.content}>
//           <h1>{title}</h1>
//           <time>{formattedDate}</time>
//           <p>{excerpt}</p>
//         </div>
//       </Link>
//     </li>
//   );
// }


import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug, technologies, link } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.post}>
      <a href={link} target="_blank" rel="noreferrer">
        <div>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} layout="fill" objectFit="cover" />
          </div>
          <div className={classes.content}>
            <h1>{title}</h1>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
            <p>Technologies: {' '} {technologies}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
