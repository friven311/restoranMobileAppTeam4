import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export const BotMenu = () => {

  return (
    
    <View style={styles.MainWrapper}>
        <View style={styles.Line}/>
        <View style={styles.Wrapper}>
            <View style={styles.SmWrapper}>
                <Image style={styles.PictStyle}  source={require('../img/dish.png')}/>
                <Text>Блюда</Text>
            </View>
            <View style={styles.SmWrapper}>
                <Image style={styles.PictStyle} source={require('../img/marketPhoto.png')}/>
                <Text>Корзина</Text>
            </View>
            <View style={styles.SmWrapper}>
                <Image style={styles.PictStyle} source={require('../img/profPhoto.png')}/>
                <Text>Профиль</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    MainWrapper:{
        bottom:10,
  },
    Line:{
        position:'relative',
        display:'flex',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:'100%',
    },
    Wrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    SmWrapper:{
        top:'2%',
        flexDirection:'column',
        alignItems:'center',
    },
    PictStyle:{
        width: 76,
        height: 76,
    }
});
