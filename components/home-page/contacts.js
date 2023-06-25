import Link from "next/link";

import GmailIcon from "@/public/svg/gmailIconSvg";
import TelegramIcon from "@/public/svg/telegramSvg";
import LinkedInIcon from "@/public/svg/linkIdInSvg";

import classes from "./contacts.module.css";

// export default function Contacts() {
//   return (
//     <footer className={classes.footer} id="contacts">
//       <div>
//         <Link
//           href="https://www.linkedin.com/in/mykola-trush/"
//           target="_blank"
//           rel="noreferrer noopener"
//           className={classes.text}
//         >
//           <LinkedInIcon className={classes.linkedin} />
//           LinkedIn
//         </Link>
//       </div>
//       <div>
//         <Link
//           href="https://t.me/kpl2018"
//           target="_blank"
//           rel="noreferrer noopener"
//           className={classes.text}
//         >
//           <TelegramIcon className={classes.telegram} />
//           Telegram
//         </Link>
//       </div>
//       <div>
//         <Link href="mailto:your_email@gmail.com" className={classes.text}>
//           <GmailIcon className={classes.gmail} />
//           montebet2020@gmail.com
//         </Link>
//       </div>
//     </footer>
//   );
// }




export default function Contacts() {
  return (
    <footer className={classes.footer} id="contacts">
      <div className={classes.linkContainer}>
        <Link href="https://www.linkedin.com/in/mykola-trush/" passHref>
          <div className={classes.link}>
            <LinkedInIcon className={classes.linkedin} />
            LinkedIn
          </div>
        </Link>
      </div>
      <div className={classes.linkContainer}>
        <Link href="https://t.me/kpl2018" passHref>
          <div className={classes.link}>
            <TelegramIcon className={classes.telegram} />
            Telegram
          </div>
        </Link>
      </div>
      <div className={classes.linkContainer}>
        <Link href="mailto:your_email@gmail.com" passHref>
          <div className={classes.link}>
            <GmailIcon className={classes.gmail} />
            montebet2020@gmail.com
          </div>
        </Link>
      </div>
    </footer>
  );
}


