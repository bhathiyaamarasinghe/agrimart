import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



import Splash from './agrimart/screens/splash';
import Home from './agrimart/screens/home';
import Welcome from './agrimart/screens/welcome';
import Category from './agrimart/screens/category';
import Signin from './agrimart/screens/signin';
import Signup from './agrimart/screens/signup';
import Explore from './agrimart/screens/explore';


const App = createStackNavigator({
Splash:{screen:Splash,navigationOptions:{header:null}},
Home:{screen:Home},
Welcome:{screen:Welcome,navigationOptions:{header:null}},
Products:{screen:Category},
Signin:{screen:Signin,navigationOptions:{header:null}},
Signup:{screen:Signup,navigationOptions:{header:null}},
Explore:{screen:Explore}
});

export default createAppContainer(App);