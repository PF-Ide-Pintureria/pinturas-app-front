import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AboutCard from '../../components/AboutCard/AboutCard'
import FeaturedContainer from '../../components/FeaturedContainer/FeaturedContainer'
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer'
import Banner from '../../components/Banner/Banner'
import BannerBlog from '../../components/BannerBlog/BannerBlog'
import { bestSellers } from '../../redux/actions/Products/bestSellers'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bestSellers())
  }, [dispatch])

  return (
    <main className="flex flex-col items-center w-full h-full p-whiteSpaceTop bg-gradient-to-bl from-[#E9682799] to-[#00A49199]">
      <Banner />
      <CategoryContainer />
      <FeaturedContainer />
      <AboutCard />
      <BannerBlog />
    </main>
  )
}

export default Home