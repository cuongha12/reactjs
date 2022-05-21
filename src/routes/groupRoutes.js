import HomePage from "../pages/HomePage";
import path from "../contants/path";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import Detailpage from "../pages/Detailpage";

const GroupRoute = [
	{path: path.HOME, component: <HomePage/>},
	{path: path.BLOG, component: <ShopPage/>},
	{path: path.SHOP, component: <BlogPage/>},
	{path: path.CONTACT, component: <ContactPage/>},
	{path: path.DETAIL,component: <Detailpage/>},
]

export default GroupRoute