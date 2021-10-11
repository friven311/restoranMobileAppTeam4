import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {RootStackParamList} from './nav';

type menuScreenProp = StackNavigationProp<RootStackParamList, 'Menu'>;

export const BotMenu = () => {
    const navigation = useNavigation<menuScreenProp>();

    return (
    
    <View style={styles.MainWrapper}>
        <View style={styles.Line}/>
        <View style={styles.Wrapper}>
            <TouchableOpacity style={styles.SmWrapper} onPress={() => navigation.navigate('Menu')}>
                <Image style={styles.PictStyle}  source={require('../../img/dish.png')}/>
                <Text>Блюда</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SmWrapper} onPress={() => navigation.navigate('Menu')}>
                <Image style={styles.PictStyle} source={require('../../img/marketPhoto.png')}/>
                <Text>Корзина</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SmWrapper} onPress={() => navigation.navigate('Menu')}>
                <Image style={styles.PictStyle} source={require('../../img/profPhoto.png')}/>
                <Text>Профиль</Text>
            </TouchableOpacity>
            
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
