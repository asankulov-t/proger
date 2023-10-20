import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {API} from "./Api/API";
import StackManager from "./Components/StackManager";

export default function App() {
  let [data, setData]=useState();

  useEffect(()=>{
    API.getArticles(1,'react').then(r=>setData(r.data))

  },[])
  console.log(data)
  return (
    <View style={styles.container}>
      <StackManager/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
