// import Link from "next/link";

//  import Logo from './logo'
// import classes from './main-navigation.module.css'

// export default function MainNavigation() {
//   return (
//     <header className={classes.header}>
//       <Link href='/'>
//         <Logo />
//       </Link>
//       <nav>
//   <ul className={classes.navList}>
//   <li>
//     <Link href="/#projects" className={classes.navLink}>Projects</Link>
//     <Link href="/#skills" className={classes.navLink}>Skills</Link>
//     <Link href="/#motivation" className={classes.navLink}>Motivation</Link>
//     <Link href="/#certificate" className={classes.navLink}>Certificate</Link>
//     <Link href="/#contacts">Contacts</Link>
//   </li>
// </ul>

//       </nav>
//     </header>
//   );
// }



import { Link } from 'react-scroll';
import Logo from './logo';
import classes from './main-navigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Logo />
      </div>
      <nav>
        <ul className={classes.navList}>
          <li>
            <Link
              className={classes.navLink}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              to="motivation"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Motivation
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              to="certificate"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Certificate
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
