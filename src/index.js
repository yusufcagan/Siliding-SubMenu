import { View, Text } from 'react-native'
import React from 'react'
import MyTabs from './helpers/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
