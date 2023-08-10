import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutCard from "../../components/AboutCard/AboutCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import Banner from "../../components/Banner/Banner";
import BannerBlog from "../../components/BannerBlog/BannerBlog";
import { bestSellers } from "../../redux/actions/Products/bestSellers";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bestSellers());
  }, [dispatch]);

  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Banner />
        <FeaturedContainer />
        <CategoryContainer />
        <AboutCard />
        <BannerBlog />
      </main>
    </div>
  );
};

export default Home;
