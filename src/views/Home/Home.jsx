import banner from "../../img/banner-home.png";
import featuredBanner from "../../img/featured-banner.png";
import AboutCard from "../../components/AboutCard/AboutCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import Paginated from "../../components/Paginated/Paginated";
import React from "react";

const Home = () => {
  return (
    <div>
      <main>
        <div>
          <img src={banner} alt="banner" className="max-width: fit-content;" />
        </div>
        <SearchBar />
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
