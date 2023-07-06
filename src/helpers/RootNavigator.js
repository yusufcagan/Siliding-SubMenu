import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import Home from '../screens/home/Home'
import Social from '../screens/social/Social'
import Bulten from '../screens/bulten/Bulten'
import Coupon from '../screens/coupon/Coupon'
import Ratio from '../screens/ratio/Ratio'
import HomeIcon from '../assets/icons/home.png'
import SocialIcon from '../assets/icons/social.png'
import Ticket from '../assets/icons/ticket.png'
import Finger from '../assets/icons/little_finger.png'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const BottomArr =
    [
        { route: 'Home', label: 'Home', src: HomeIcon, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Home },
        { route: 'Social', label: 'Social', src: SocialIcon, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Social },
        { route: 'Bulten', label: 'Bulten', src: Finger, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Bulten },
        { route: 'Ratio', label: '2.4', src: HomeIcon, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Coupon },
        { route: 'Coupon', label: 'Coupon', src: Ticket, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Ratio },
    ]

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } });
        } else {
            viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={styles.container}>
                <Image
                    source={item.src}
                    name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? 'blue' : 'grey'}
                    style={{ height: 25, width: 25, tintColor: focused ? 'blue' : 'grey' }} />
            </Animatable.View>
        </TouchableOpacity>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#303144'
                }
            })}>
            {BottomArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
            {/* <Tab.Screen name="Home" component={Home} options={{
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
            <Tab.Screen name="2.45" component={Ratio} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ height: 25, width: 25, borderRadius: 50, backgroundColor: focused ? 'blue' : 'grey', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>1</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Coupon" component={Coupon} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Ticket}
                        style={{ height: '70%', width: '30%', tintColor: focused ? 'blue' : 'grey' }}
                    />
                )
            }} /> */}
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MyTabs;