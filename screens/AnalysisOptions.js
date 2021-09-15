import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function AnalysisOptions({navigation}){
    return(
        <View style = {styles.container}>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth 124 Analysis")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 124</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth 125 Analysis")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 125</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth 126 Analysis")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 126</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth 127 Analysis")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 127</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("Booth 128 Analysis")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Booth 128</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate("All Reports")} style = {styles.Touchables}>
                    <Text style = {styles.text}>Over All</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default AnalysisOptions;

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