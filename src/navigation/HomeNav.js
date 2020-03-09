import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashboard from './../containers/Dashboard/Dashboard';
import ProductDetail from './../containers/Dashboard/ProductDetail/ProductDetail';

 const HomeNav = createStackNavigator(
    {
        Dashboard: {screen : Dashboard},
        ProductDetail: { screen : ProductDetail },

    }
)


const Home = createAppContainer(HomeNav)
export default Home
