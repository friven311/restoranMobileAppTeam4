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
import Profile from './Profile';
import { Links } from './Links';
import { BotMenu } from './Botmenu';
export const ProfileComponent = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.AppHeader}>
        Профиль
      </Text>
      <Profile/>
      <Links/>
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
