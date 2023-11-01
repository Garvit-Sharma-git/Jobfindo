import {useState} from 'react'
import { 
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  TextInput
 } from 'react-native';
 import { useRouter } from 'expo-router';
 import { SIZES,icons  } from '../../../constants';
 
import styles from './welcome.style'

const jobTypes=["Full-time","Part-time","Contractor"];

const Welcome = () => {
  const router=useRouter();
  const[activeJobType,setactiveJobType]=useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello garvit</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text> 
      </View >

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            values=""
            onChange={()=>{}}
            placeholder="What are you looking for?"
          />

        </View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Image
            source={icons.search}
          // style={{width: 45, height: 35}}
            resizeMode='contain'
            style={styles.searchBtnImage}
            />
          </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
         renderItem={({item})=>(
          <TouchableOpacity 
          style={styles.tab(activeJobType,item)}
          onPress={()=>{
            setactiveJobType(item);
            router.push('/search/${item }')
          }}
          >
            <Text style={styles.tabText(activeJobType,item)}>
              {item}
            </Text>
          </TouchableOpacity>
         )}
         keyExtractor={item=>item}
         contentContainerStyle={{columnGap:SIZES.small}}
         horizontal
        />
      </View>
    </View>
  )
}

export default Welcome