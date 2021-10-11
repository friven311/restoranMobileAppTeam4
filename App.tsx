import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'
import { BotMenu } from './src/navigation/Botmenu'
import {ProfileComponent} from './src/profileComponents/ProfileComponent'
import { Menu } from './src/menu/Menu';
import { MarketMain } from './src/marketComponents/MarketMain';
import { Navigate } from './src/navigation/nav';

export const App = () => {
  return (
    <View style={styles.Wrapper}>
      <Navigate/>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width:'100%',
    height:'100%',
  },

});

export default App;
