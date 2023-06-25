import Link from "next/link";

import GmailIcon from "@/public/svg/gmailIconSvg";
import TelegramIcon from "@/public/svg/telegramSvg";
import LinkedInIcon from "@/public/svg/linkIdInSvg";

 import classes from "./contacts.module.css";


export default function Contacts() {
  return (
    <footer className={classes.footer} id="contacts">
      <div className={classes.linkContainer}>
        <Link href="https://www.linkedin.com/in/mykola-trush/" passHref>
          <div className={classes.link}>
            <LinkedInIcon className={`${classes.icon} ${classes.linkedin}`} />
            LinkedIn
          </div>
        </Link>
      </div>
      <div className={classes.linkContainer}>
        <Link href="https://t.me/kpl2018" passHref>
          <div className={classes.link}>
            <TelegramIcon className={`${classes.icon} ${classes.telegram}`} />
            Telegram
          </div>
        </Link>
      </div>
      <div className={classes.linkContainer}>
        <Link href="mailto:your_email@gmail.com" passHref>
          <div className={classes.link}>
            <GmailIcon className={`${classes.icon} ${classes.gmail}`} />
            montebet2020@gmail.com
          </div>
        </Link>
      </div>
    </footer>
  );
}
