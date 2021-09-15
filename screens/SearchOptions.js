import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function SearchOptions({navigation}){
    return(
        <View style = {styles.container}>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth124 Multi")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 124</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth125 Multi")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 125</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth126 Multi")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 126</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth127 Multi")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 127</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth128 Multi")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 128</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Search Screen")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Search All</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default SearchOptions;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding:20,
        alignContent:'center'
    }, 
    Touchables:{
        backgroundColor:'#38B6FF',
        height:70,
        width: 200
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:20
    }
})