import React, { useEffect } from 'react'
import FeaturedContainer from '../../components/FeaturedContainer/FeaturedContainer'
import { bestSellers } from '../../redux/actions/Products/bestSellers'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '../../redux/actions/Products/allProducts'
import { allCategories } from '../../redux/actions/Categories/allCategories'
import { getProductFilter } from '../../redux/actions/filters/getProductFilter'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const filterCategory = useSelector((state) => state.filterCategory)
  const thisPage = useSelector((state) => state.thisPage)

  useEffect(() => {
    dispatch(allProducts(thisPage))
    if (!filterCategory) {
      dispatch(allCategories())
    } else {
      dispatch(getProductFilter(thisPage, filterCategory))
    }
  }, [dispatch, thisPage, filterCategory])

  useEffect(() => {
    dispatch(bestSellers())
  }, [dispatch])

  return (
    <div>
      <div>
        <ProductsContainer />
      </div>
      <div>
        <FeaturedContainer />
      </div>
    </div>
  )
}

export default ProductsPage
