import React, { useState } from 'react';
import { Text, View, Share, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native';
import { captureScreen } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';

const ItemDetails124 = ({ route }) => {
    const[values, setValue] = useState('')
  
    const updateValue = () => {
        alert("Failed to Update")
     }

    const captureScreenFunction = () => {
        MediaLibrary.requestPermissionsAsync()

        captureScreen({
            format: "jpg",
            quality: 1.0
        })
            .then(
                uri => { screenFunction(uri) },
                error => console.error("Oops, Something Went Wrong", error)
            );
            alert("Image Saved to Gallery")
    }

    const screenFunction = async (uri) => {
        console.log(uri)
        MediaLibrary.saveToLibraryAsync(uri)
    }

    async function captureViewShot() {
        Share.share({
            title: 'Image',
            url: 'https://graph.facebook.com/10153288016584540/picture?type=large',
            message: `
  BIDAR CMC ELECTIONS - 2021
    INDEPENDENT CANDIDATE
        WARD NO : 26 \n
------------------------>
        JUBEDA BI
  VOTE FOR AUTO RICKSHAW
        SERIAL NO : 7
-----------------------> \n
Name : ${route.params.item.name}
S/W/D :  ${route.params.item.relation}
Gender & Age :  ${route.params.item.gender} - ${route.params.item.age}
House No: ${route.params.item.house_no}
Epic No : ${route.params.item.epic_no}
Booth No : ${route.params.item.booth_no}
Serial No : ${route.params.item.sn_no}
Ward No : ${route.params.item.ward_no}
Mobile No : ${route.params.item.mobile_no}\n
----------------------->
        THANK YOU.

polling booth no.124 
        
Polling Booth Name: Karnataka 
Rural infrastructure Development 
Corporation,Mailoor,Bidar.`,
        });
    }



    async function captureViewShotPattern() {
        Share.share({
            title: 'Image',
            url: 'https://graph.facebook.com/10153288016584540/picture?type=large',
            message: `
Name : ${route.params.item.name}
S/W/D :  ${route.params.item.relation}
Gender & Age :  ${route.params.item.gender} - ${route.params.item.age}
House No : ${route.params.item.house_no}
Epic No : ${route.params.item.epic_no}
Booth No : ${route.params.item.booth_no}
Serial No : ${route.params.item.sn_no}
Ward No : ${route.params.item.ward_no}
Mobile No : ${route.params.item.mobile_no}\n
----------------------->
    THANK YOU.,

Polling Booth No.124 
        
Polling Booth Name: Karnataka 
Rural infrastructure Development 
Corporation,Mailoor,Bidar.`,

        });
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', borderBottomWidth: 0.8 }}>Voter Details</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start', padding: 10, paddingTop: 20 }}>
                <Text style={{ fontSize: 22 }}>
                    Name : {route.params.item.name}
                    {"\n"}
                    S/W/D : {route.params.item.relation}
                    {"\n"}
                    Gender : {route.params.item.gender}
                    {"\n"}
                    Age : {route.params.item.age}
                    {"\n"}
                    House No : {route.params.item.house_no}
                    {"\n"}
                    Epic No : {route.params.item.epic_no}
                    {"\n"}
                    Booth No : {route.params.item.booth_no}
                    {"\n"}
                    Serial No : {route.params.item.sn_no}
                    {"\n"}
                    Ward No : {route.params.item.ward_no}
                    {"\n"}
                    Mobile No : 
                    <TouchableHighlight>
                                <TextInput placeholder="Mobile number"
                                    onChangeText={values => setValue(values)}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    style={{
                                        fontSize: 20, backgroundColor: '#f0f8ff',
                                        borderRadius: 10, width: '100%', height: 30,
                                    }}>
                                    {route.params.item.mobile_no}
                                </TextInput>
                            </TouchableHighlight>
                                <Button onPress = {updateValue}  title = "Update" 
                                 color = "#38B6FF"/>
                </Text>
            </View>
            <View style={{paddingTop:320, flexDirection:'column', justifyContent: 'space-between' }}>
                <View style= {{padding:10, justifyContent:'center', alignItems:"stretch"}}>
                <Button color = "#38B6FF" onPress={captureViewShot} title = "Print Full"/> 
                </View>
                <View style = {{padding: 10,justifyContent:'center'}}>           
                <Button color = "#38B6FF" onPress={captureViewShotPattern} title = "Print"/>
                </View>
                <View style = {{padding: 10,justifyContent:'center'}}> 
                <Button color = "#38B6FF" onPress={captureScreenFunction} title = "Download Image"/>
                </View>
                <View style = {{padding: 10,justifyContent:'center'}}> 
                <Button color = "#38B6FF" onPress={captureViewShot} title = "Share"/>
                </View>  
            </View>
        </View>
    );
};

export default ItemDetails124;

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinput: {
        width: '90%',
        height: 70,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 23
    },
})