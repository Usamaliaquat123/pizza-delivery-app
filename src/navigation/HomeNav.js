import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Dashboard from './../containers/Dashboard/Dashboard';
import ProductDetail from './../containers/Dashboard/ProductDetail/ProductDetail';
import Cart from './../containers/Dashboard/Cart/Cart';
import { OrderCompleted } from './../containers/Dashboard/ProductStatus/OrderCompleted';
import { OrderSubmit } from './../containers/Dashboard/ProductStatus/OrderSubmit';
import { OrderProcessing } from './../containers/Dashboard/ProductStatus/OrderProcessing';
import { OrderRejected } from './../containers/Dashboard/ProductStatus/OrderRejected';

const HomeNav = createStackNavigator(
  {
    Dashboard: {screen: Dashboard},
    ProductDetail: {screen: ProductDetail},
    Cart: {screen: Cart},
    OrderCompleted: { screen: OrderCompleted },
    OrderSubmit:  { screen : OrderSubmit },
    OrderProcessing: { screen : OrderProcessing },
    OrderRejected: { screen : OrderRejected }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Dashboard',
  },
);

const Home = createAppContainer(HomeNav);
export default Home;
