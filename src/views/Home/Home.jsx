import style from "./Home.module.css";
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
      <main className={style.container}>
        <div className={style.bannerContainer}>
          <img src={banner} alt="banner" className="max-width: fit-content;" />
        </div>

        <div className={style.featured}>
          <img src={featuredBanner} alt="banner" className="w-full" />
          <Paginated className="paginated" />
          <SearchBar />

          <FeaturedContainer />
        </div>
        <div className={style.about}>
          <AboutCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
