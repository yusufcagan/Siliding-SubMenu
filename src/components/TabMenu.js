import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import * as Animatable from 'react-native-animatable';


const TabMenu = ({ index, item, selected, setSelected }) => {

    const viewRef = useRef(null);

    useEffect(() => {
        if (selected === index) {
            viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
        } else {
            viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
        }
    }, [selected, viewRef]);

    return (
        <View style={{ flex: selected === index ? 1 : null }} >
            <Animatable.View
                ref={viewRef}
                style={[StyleSheet.absoluteFillObject, { backgroundColor: '#637aff', borderRadius: 16 }]} />
            {selected === index ?
                <View></View>
                : <TouchableOpacity onPress={() => setSelected(index)} style={styles.buttons}>
                    <View style={[styles.btn, { backgroundColor: selected === index ? null : "white" }]}>
                        <Image style={styles.icon} source={item.src} />
                        <Text style={{ color: "black", paddingHorizontal: 8 }}>{item.label}</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    btn: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
    }
});
export default TabMenu