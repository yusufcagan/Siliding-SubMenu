import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TabMenu from '../../components/TabMenu';
import TABS from '../../components/TabData'

const Bulten = () => {
  const [selected, setSelected] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        {TABS.map((item, index) => {
          return (
            <TabMenu item={item} index={index} selected={selected} setSelected={setSelected} />
          );
        })}
      </View >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  content: {
    flex: 1
  },
  footer: {
    backgroundColor: "white",
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default Bulten