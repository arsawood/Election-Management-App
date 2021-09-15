import React from 'react';
import {View, Text,TouchableOpacity, ScrollView} from 'react-native';

function Booth125Multi({navigation}){
    return(
        <ScrollView style={{flex:1, }}>
        <View style= {{flex:0.5, alignItems:'center',paddingTop:30}}>
            <TouchableOpacity style = {{backgroundColor:'#38B6FF',borderRadius:20,
            width:200,alignItems:'center',height:50}} 
            onPress = {() => navigation.navigate('Search 125')}>
                <Text style = {{fontSize:25,color:'#FFF',paddingTop:5}}>
                    All Voters
                </Text>
            </TouchableOpacity>
        </View>


        <View style= {{flex:0.5, alignItems:'center', flexDirection:'row', 
        justifyContent:'space-around',paddingTop:10}}>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20}}
            onPress = {() => navigation.navigate('125 Male')}>
                <Text style = {{fontSize:25,textAlign:'center',color:'#FFF',paddingTop:10}}>
                    Male Voters
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20,}}
            onPress = {() => navigation.navigate('125 Female')}>
                <Text style = {{fontSize:25, textAlign:'center',color:'#FFF',paddingTop:10}}>
                    Female Voters
                </Text>
            </TouchableOpacity>
        </View>


        <View style= {{flex:0.5, alignItems:'center', flexDirection:'row', 
        justifyContent:'space-around',marginBottom:370,paddingTop:10}}>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20}}
            onPress = {() => navigation.navigate('125Muslims')}>
                <Text style = {{fontSize:25,textAlign:'center',color:'#FFF',paddingTop:10}}>
                    Muslim Voters
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#38B6FF',height:60,width:170,
            borderRadius:20,}}
            onPress = {() => navigation.navigate('125NonMuslim')}>
                <Text style = {{fontSize:25, textAlign:'center',color:'#FFF'}}>
                Non-Muslim Voters
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default Booth125Multi;
