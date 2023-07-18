import style from "./Home.module.css";
import banner from '../../img/banner-home.png';
import AboutCard from "../../components/AboutCard/AboutCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import Footer from "../../components/Footer/Footer";
import React from "react";

const Home = () => {
    return (
        <div>
            <main className={style.container}>
                <div className={style.bannerContainer}>
                <img src={banner} alt="banner" className={style.banner} />
                </div>
                <div className={style.featured}>
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
