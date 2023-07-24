import classes from './my-motivation.module.css'


export default function MyMotivation() {
  return (
    <section id='motivation' className={classes.motivation}>
      <h3>My Motivation</h3>
      <ul>
        <li>
          <p>
            I love to travel and I hope to have the opportunity to transition to
            remote work someday, which would allow me to live in different
            countries and immerse myself in local culture.
          </p>
        </li>
        <li>
          <p>
            My previous job had a good salary, but the work was quite mundane
            and boring. I felt that my intellectual potential was not being
            developed and this did not satisfy me. I genuinely want to see
            changes for the better in myself, which is why I play chess in the
            evening (my  {' '}
            <a href="https://lichess.org/@/Montebet" target="_blank">
              lichess rating
            </a>
                      {' '} is 1850-1900), read books instead of watching tv.
          </p>
        </li>
        <li>
          <p>
            Working in IT offers good opportunities to find employment and
            assimilate in top countries like Austria, the USA, Germany, the
            Netherlands, and others.
          </p>
        </li>
        <li>
          <p>
            On my course, they advised not to say that the motivation for
            learning IT was the desire to earn money. This is a popular reason
            for studying IT in my home country of Ukraine, and therefore such
            specialists often experience emotional burnout. But for me, this was
            not the only motivating factor, but one of several. I want to feel
            financially stable and I want my work to be appreciated and paid
            appropriately.
          </p>
        </li>
      </ul>
    </section>
  );
}
