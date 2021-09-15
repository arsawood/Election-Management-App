import React from 'react';
import {Image, TouchableOpacity, View,Text} from 'react-native';
// import background from '../assets/background.png'

function candidate({navigation}) {
    return(
        <View style={{flex:1}}>
        <View style = {{flex:6,paddingLeft:20}}>
        <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
            <Image source ={require('../assets/candidate.jpeg')} style = {{width:'95%', height:'100%'}}/>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
            <TouchableOpacity style = {{backgroundColor:'#38B6FF', borderRadius:20,height:40, width:100}} onPress = {()=> navigation.navigate('Home')}>
                <Text style = {{fontSize:20,color:"white", textAlign:'center',paddingTop:5}}> Next </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default candidate;