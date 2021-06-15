import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



import Splash from './agrimart/screens/splash';
import Home from './agrimart/screens/home';
import CreditsTable from './agrimart/screens/table';
import AboutUS from './agrimart/screens/aboutus';
import SGPA from './agrimart/screens/sgpa';
import CGPA from './agrimart/screens/currentgpa';
import Welcome from './agrimart/screens/welcome';

const App = createStackNavigator({
Splash:{screen:Splash,navigationOptions:{header:null}},
Home:{screen:Home},
CreditsTable:{screen:CreditsTable},
AboutUS:{screen:AboutUS},
SGPA:{screen:SGPA},
CGPA:{screen:CGPA},
Welcome:{screen:Welcome}
});

export default createAppContainer(App);