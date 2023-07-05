import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TabMenu from '../../components/TabMenu';
import { TABS } from '../../data/DATA'

const Match = [
  { name: 'Samsunspor-Pendikspor', section: 'fut', online: true, finish: false },
  { name: 'Galatasayar-Fenerbahçe', section: 'fut', online: true , finish: false },
  { name: 'Beşiktaş-Başakşehir', section: 'fut', online: false , finish: true },
  { name: 'Anadoluefes-Tofaş', section: 'bas', online: true , finish: false },
  { name: 'Türktelekom-Darüşşafaka', section: 'bas', online: false, finish: true  },
  { name: 'Vakıfbankspor-Fenerbahçe Kadın Voleybol', section: 'vol', online: true, finish: false  },
  { name: 'Eczacıbaşı-Sarıyerbelediyespor', section: 'vol', online: false, finish: true  },
  { name: 'Çanakkake-MMA Ankara', section: 'mma', online: false , finish: true },
  { name: 'Denizkoçspor-SimurgFight', section: 'mma', online: true , finish: false },
  { name: 'TED Ankara-İlbanks', section: 'vol', online: false , finish: true },
  { name: 'Pınarkarşıkaya-Bahçeşehir Koleji', section: 'bas', online: true, finish: false  },

]
const Bulten = () => {
  const [selected, setSelected] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        {TABS.map((item, index) => {
          return (
            <TabMenu key={index} item={item} index={index} selected={selected} setSelected={setSelected} />
          );
        })}
      </View >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "grey"
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