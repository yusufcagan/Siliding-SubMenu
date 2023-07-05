import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home'
import Social from '../screens/social/Social'
import Bulten from '../screens/bulten/Bulten'
import Coupon from '../screens/coupon/Coupon'
import Ratio from '../screens/ratio/Ratio'
import HomeIcon from '../assets/icons/home.png'
import SocialIcon from '../assets/icons/social.png'
import Ticket from '../assets/icons/ticket.png'
import Finger from '../assets/icons/little_finger.png'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={HomeIcon}
                        style={{ height: '50%', width: '30%', tintColor: focused ? 'blue' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Social" component={Social} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={SocialIcon}
                        style={{ height: '65%', width: '30%', tintColor: focused ? 'blue' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Bulten" component={Bulten} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Finger}
                        style={{ height: '60%', width: '30%', tintColor: focused ? 'blue' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Ratio" component={Ratio} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={HomeIcon}
                        style={{ height: '50%', width: '30%', tintColor: focused ? 'blue' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Coupon" component={Coupon} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Ticket}
                        style={{ height: '70%', width: '30%', tintColor: focused ? 'blue' : 'grey' }}
                    />
                )
            }} />
        </Tab.Navigator>
    );
}

export default MyTabs;