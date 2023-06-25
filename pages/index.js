import { Fragment } from "react";

import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import TechnicalSkills from "@/components/home-page/technical-skills";
import MyMotivation from "@/components/home-page/my-motivation";
import PROJECT_DATA from "@/data/project-data";
import Certificate from "@/components/home-page/certificate";
import Contacts from "@/components/home-page/contacts";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={PROJECT_DATA} />
      <TechnicalSkills />
      <MyMotivation />
      <Certificate />
      <Contacts/>
    </Fragment>
  );
}

export default HomePage;
