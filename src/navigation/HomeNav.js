import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashboard from './../containers/Dashboard/Dashboard';
import ProductDetail from './../containers/Dashboard/ProductDetail/ProductDetail';
import Cart from './../containers/Dashboard/Cart/Cart';

 const HomeNav = createStackNavigator(
    {
        Dashboard: {screen : Dashboard},
        ProductDetail: { screen : ProductDetail },
        Cart: {screen : Cart}
    }
)


const Home = createAppContainer(HomeNav)
export default Home
