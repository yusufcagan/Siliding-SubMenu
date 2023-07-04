import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home'
import Social from '../screens/social/Social'
import Bulten from '../screens/bulten/Bulten'
import Coupon from '../screens/coupon/Coupon'
import Ratio from '../screens/ratio/Ratio'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Social" component={Social} />
            <Tab.Screen name="Bulten" component={Bulten} />
            <Tab.Screen name="Ratio" component={Ratio} />
            <Tab.Screen name="Coupon" component={Coupon} />
        </Tab.Navigator>
    );
}

export default MyTabs;