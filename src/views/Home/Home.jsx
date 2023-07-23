import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutCard from "../../components/AboutCard/AboutCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import Banner from "../../components/Banner/Banner";
import { bestSellers } from "../../redux/actions/bestSellers";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bestSellers());
  }, [dispatch]);

  return (
    <div>
      <main>
        <div>
          <Banner />
      {/* </div> --------------> SEARCH TEMPORALY SUSPENDED <--------------------------------
        <SearchBar />
        <div> */}
          <FeaturedContainer />
        </div>
        <div>
          <CategoryContainer />
        </div>
        <div>
          <AboutCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
