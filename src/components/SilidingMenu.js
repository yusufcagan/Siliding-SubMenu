import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const SilidingMenu = ({ data, setQuerySec, index }) => {

    return (
        <TouchableOpacity onPress={() => setQuerySec(index)} style={styles.buttons}>
            <View style={[styles.btn]}>
                <Image style={[styles.icon]} source={data.src} />
                <Text style={{ flexWrap: 'nowrap', color: "black", fontSize: width / 40 }}>{data.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: width / 13,
        height: width / 13,
    },
    btn: {
        alignItems: 'center',
    },
    buttons: {
        marginLeft: 10,
    }
})

export default SilidingMenu