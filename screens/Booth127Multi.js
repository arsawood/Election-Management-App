import React from 'react';
import {View, Text,TouchableOpacity,ScrollView} from 'react-native';

function Booth127Multi({navigation}){
    return(
        <ScrollView style={{flex:1, }}>
        <View style= {{flex:0.5, alignItems:'center',paddingTop:30}}>
            <TouchableOpacity style = {{backgroundColor:'#38B6FF',borderRadius:20,
            width:200,alignItems:'center',height:50}} 
            onPress = {() => navigation.navigate('Search 127')}>
                <Text style = {{fontSize:25,color:'#FFF',paddingTop:5}}>
                    All Voters
                </Text>
            </TouchableOpacity>
        </View>


        <View style= {{flex:0.5, alignItems:'center', flexDirection:'row', 
        justifyContent:'space-around',paddingTop:10}}>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20}}
            onPress = {() => navigation.navigate('127 Male')}>
                <Text style = {{fontSize:25,textAlign:'center',color:'#FFF',paddingTop:10}}>
                    Male Voters
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20,}}
            onPress = {() => navigation.navigate('127 Female')}>
                <Text style = {{fontSize:25, textAlign:'center',color:'#FFF',paddingTop:10}}>
                    Female Voters
                </Text>
            </TouchableOpacity>
        </View>


        <View style= {{flex:0.5, alignItems:'center', flexDirection:'row', 
        justifyContent:'space-around',marginBottom:370, paddingTop:10}}>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20}}
            onPress = {() => navigation.navigate('127Muslims')}>
                <Text style = {{fontSize:25,textAlign:'center',color:'#FFF',paddingTop:10}}>
                    Muslim Voters
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20,}}
            onPress = {() => navigation.navigate('127NonMuslim')}>
                <Text style = {{fontSize:25, textAlign:'center',color:'#FFF'}}>
                Non-Muslim Voters
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default Booth127Multi;
