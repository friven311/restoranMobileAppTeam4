import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { BotMenu } from './src/profileComponents/Botmenu';
import {ProfileComponent} from './src/profileComponents/index'

const App = () => {
  return (
    <View style={styles.Wrapper}>
      <ProfileComponent/>
      <BotMenu/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  AppHeader: {
    position: 'relative',
    display: 'flex',
    left: '35%',
    top: 30,
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 33,
    color: 'black',
  },
  Wrapper: {
    position:'relative',
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100%',
  }
});

export default App;
