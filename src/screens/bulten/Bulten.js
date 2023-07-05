import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import TabMenu from '../../components/TabMenu';
import { TABS } from '../../data/DATA'
import { SafeAreaView } from 'react-native';
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';

const Match = [
  { id: 0, name1: 'Samsunspor', name2: 'Pendikspor', section: 'fut', online: true, finish: false, fav: false },
  { id: 1, name1: 'Galatasayar', name2: 'Fenerbahçe', section: 'fut', online: true, finish: false, fav: true },
  { id: 2, name1: 'Beşiktaş', name2: 'Başakşehir', section: 'fut', online: false, finish: true, fav: false },
  { id: 3, name1: 'Anadoluefes', name2: 'Tofaş', section: 'bas', online: true, finish: false, fav: true },
  { id: 4, name1: 'Türktelekom', name2: 'Darüşşafaka', section: 'bas', online: false, finish: true, fav: false },
  { id: 5, name1: 'Vakıfbankspor', name2: 'Fenerbahçe Kadın Voleybol', section: 'vol', online: true, finish: false, fav: false },
  { id: 6, name1: 'Eczacıbaşı', name2: 'Sarıyerbelediyespor', section: 'vol', online: false, finish: true, fav: true },
  { id: 7, name1: 'Çanakkake', name2: 'MMA Ankara', section: 'mma', online: false, finish: true, fav: false },
  { id: 8, name1: 'Denizkoçspor', name2: 'SimurgFight', section: 'mma', online: true, finish: false, fav: false },
  { id: 9, name1: 'TED Ankara', name2: 'İlbanks', section: 'vol', online: false, finish: false, fav: true },
  { id: 10, name1: 'Pınarkarşıkaya', name2: 'Bahçeşehir Koleji', section: 'bas', online: true, finish: false, fav: false },
  { id: 11, name1: 'Gaziantep', name2: 'Sivasspor', section: 'fut', online: false, finish: false, fav: false },

]



const Bulten = () => {
  const [selected, setSelected] = useState(null)
  const [querySec, setQuerySec] = useState(null);

  const MatchComponent = ({ item }) => (
    <TouchableOpacity style={styles.matchStyle} >
      <Text style={{ padding: 5, textAlign: 'center' }}>{item.name1}  -  {item.name2}</Text>
    </TouchableOpacity >
  );

  const selectedQuer = (quer) => {
    if (querySec == 0)
      return quer.filter((data) => data.section == 'fut')
    if (querySec == 1)
      return quer.filter((data) => data.section == 'bas')
    if (querySec == 2)
      return quer.filter((data) => data.section == 'vol')
    if (querySec == 4)
      return quer.filter((data) => data.section == 'mma')
    else
      return quer
  }

  const queryData = () => {
    if (selected == 1) {
      var filter = Match.filter((data) => data.online == true)
      return selectedQuer(filter)
    }
    if (selected == 2)
      return Match.filter((data) => data.online == false && data.finish == false)
    if (selected == 0)
      return Match.filter((data) => data.fav == true)
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
            <TabMenu key={index} item={item} index={index} selected={selected} setSelected={setSelected} setQuerySec={setQuerySec} />
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
    backgroundColor: "white",
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '8.1%',
    alignItems: 'center'
  },
});
export default Bulten