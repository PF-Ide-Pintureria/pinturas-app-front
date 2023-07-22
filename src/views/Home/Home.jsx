import banner from "../../img/banner-home.png";
import featuredBanner from "../../img/featured-banner.png";
import AboutCard from "../../components/AboutCard/AboutCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import Banner from "../../components/Banner/Banner";
import React from "react";

const Home = () => {
  return (
    <div>
      <main>
        <div>
          <Banner />
        </div>
        <div>
          <FeaturedContainer />
        </div>
        <div>
          <AboutCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
