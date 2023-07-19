import banner from '../../img/banner-home.png';
import featuredBanner from '../../img/featured-banner.png';
import AboutCard from "../../components/AboutCard/AboutCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import React from "react";

const Home = () => {
    return (
        <div>
            <main className=''>
                <div className=''>
                <img src={banner} alt="banner" className='w-full' />
                </div>
                <div className=''>
                    <FeaturedContainer />
                </div>
                <div className=''>
                    <AboutCard />
                </div>
            </main>
        </div>
  );
};

export default Home;
