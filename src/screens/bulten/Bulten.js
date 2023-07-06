import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import TabMenu from '../../components/TabMenu';
import { TABS, Match } from '../../data/DATA'
import { SafeAreaView } from 'react-native';


const Bulten = () => {
  const [selected, setSelected] = useState(null)
  const [querySec, setQuerySec] = useState(null);

  const MatchComponent = ({ item }) => (
    <TouchableOpacity style={styles.matchStyle} >
      <Text style={{ padding: 5, textAlign: 'center' }}>{item.name1}  -  {item.name2}</Text>
    </TouchableOpacity >
  );

  const selectedQuery = (query) => {
    if (querySec == 0)
      return query.filter((data) => data.section == 'fut')
    if (querySec == 1)
      return query.filter((data) => data.section == 'bas')
    if (querySec == 2)
      return query.filter((data) => data.section == 'vol')
    if (querySec == 4)
      return query.filter((data) => data.section == 'mma')
    else
      return query
  }

  const queryData = () => {
    if (selected == 1) {
      var filter = Match.filter((data) => data.online == true)
      return selectedQuery(filter)
    }
    if (selected == 2) {
      var filter = Match.filter((data) => data.online == false && data.finish == false)
      return selectedQuery(filter)
    }
    if (selected == 0) {
      var filter = Match.filter((data) => data.fav == true)
      return selectedQuery(filter)
    }
    else
      return Match
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={queryData()}
          renderItem={({ item }) => <MatchComponent item={item} selected={selected} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        {TABS.map((item, index) => {
          return (
            <TabMenu
              key={index}
              item={item}
              index={index}
              selected={selected}
              setSelected={setSelected}
              setQuerySec={setQuerySec}
              querySec={querySec} />
          );
        })}
      </View >
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  matchStyle: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

  },
  footer: {
    backgroundColor: "#303144",
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '8.1%',
    alignItems: 'center',
    borderBottomWidth: 1
  },
});
export default Bulten