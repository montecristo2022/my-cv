import Link from "next/link";

 import Logo from './logo'
import classes from './main-navigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
  <ul>
  <li>
    <Link href="/#projects" className={classes.navLink}>Projects</Link>
    <Link href="/#skills" className={classes.navLink}>Skills</Link>
    <Link href="/#motivation" className={classes.navLink}>Motivation</Link>
    <Link href="/#certificate" className={classes.navLink}>Certificate</Link>
    <Link href="/#contacts">Contacts</Link>
  </li>
</ul>

      </nav>
    </header>
  );
}
