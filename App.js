import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



import Splash from './agrimart/screens/splash';
import Home from './agrimart/screens/home';
import Welcome from './agrimart/screens/welcome';
import Category from './agrimart/screens/category';

const App = createStackNavigator({
Splash:{screen:Splash,navigationOptions:{header:null}},
Home:{screen:Home},
Welcome:{screen:Welcome},
Products:{screen:Category}
});

export default createAppContainer(App);