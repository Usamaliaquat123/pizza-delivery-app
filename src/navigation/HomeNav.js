import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Dashboard from './../containers/Dashboard/Dashboard';
import ProductDetail from './../containers/Dashboard/ProductDetail/ProductDetail';
import Cart from './../containers/Dashboard/Cart/Cart';
import  OrderCompleted  from './../containers/Dashboard/ProductStatus/OrderCompleted';
import OrderSubmit  from './../containers/Dashboard/ProductStatus/OrderSubmit';
import  OrderProcessing  from './../containers/Dashboard/ProductStatus/OrderProcessing';
import  OrderRejected  from './../containers/Dashboard/ProductStatus/OrderRejected';
import MainTab from "./../containers/Dashboard/ProductStatus/MainTab";
import Login from './../containers/Auth/Login/Login';
const HomeNav = createStackNavigator(
  {
    Dashboard: {screen: Dashboard},
    ProductDetail: {screen: ProductDetail},
    Cart: {screen: Cart},
    OrdrCompleted: { screen: OrderCompleted },
    OrdrSubmit:  { screen : OrderSubmit },
    OrdrProcessing: { screen : OrderProcessing },
    OrdrRejected: { screen : OrderRejected },
    MainTab: { screen: MainTab }
    // Login : { screen: Login }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Dashboard',
  },
);

const Home = createAppContainer(HomeNav);
export default Home;
