import Blog from "../../components/blog/Blog"
import Brands from "../../components/brands/Brands"
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs"
import Catalog from "../../components/catalog/Catalog"

const Category = () => {
  return (
    <>
    <BreadCrumbs/>
    <Catalog/>
    <Brands/>
    <Blog/>
    </>
  )
}

export default Category