import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import * as Animatable from 'react-native-animatable'
import SilidingMenu from '../components/SilidingMenu'
import { SilidingData } from '../data/DATA'

const { width, height } = Dimensions.get('window');

const TabMenu = ({ index, item, selected, setSelected, setQuerySec }) => {

    const viewRef = useRef(null);

    useEffect(() => {
        if (selected === index) {
            viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
        } else {
            //.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
        }
    }, [selected, viewRef]);

    return (
        <View style={[{ flex: selected === index ? 1 : null }, styles.container]} >
            {selected === index ?
                <Animatable.View
                    ref={viewRef}
                    style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color }]} >
                    <View style={{ flexDirection: 'row', height: width / 8 }}>
                        <View style={{ flexDirection: 'row', flex: 1.2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.roteText}>{item.label.toUpperCase()}</Text>
                        </View>
                        <View style={{ flex: 15, flexDirection: 'row', backgroundColor: 'white', margin: 3, borderRadius: 5, justifyContent: 'space-between' }}>
                            {SilidingData.map((data, index) => {
                                return (
                                    <SilidingMenu key={index} data={data} setQuerySec={setQuerySec} index={index} />
                                )
                            })}
                        </View>
                    </View>
                </Animatable.View>
                : <TouchableOpacity onPress={() => setSelected(index)} style={styles.buttons}>
                    <View style={[styles.btn, { backgroundColor: selected === index ? null : "white" }]}>
                        <Image style={[styles.icon, { tintColor: item.color }]} source={item.src} />
                        <Text style={{ color: "black", fontSize: width / 40 }}>{item.label}</Text>
                    </View>
                </TouchableOpacity>
            }

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 7,
        height: width / 8,
    },
    sidingContainer: {
        width: width / 8,
        height: width / 9,
    },
    icon: {
        width: width / 13,
        height: width / 13,
    },
    btn: {
        alignItems: 'center',
    },
    roteText: {
        transform: [{ rotate: '-90deg' }],
        fontSize: width / 45,
        color: 'black',
        width: width / 8,
        textAlign: 'center'
    },
    buttons: {
        marginLeft: 10,
    }
});
export default TabMenu