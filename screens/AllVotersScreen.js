import React, { useEffect, useState, useRef } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Share,
    TextInput,
    Button,
    ActivityIndicator, 
    SafeAreaView
} from 'react-native';
import { db } from "../firebase";
import { captureScreen } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';


const ContactDetail = ({ contact }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [values, setValue] = useState("")

    const toggleDetail = () => setShowDetail((show) => !show);


    const updateValue = () => {
        db.collection("FinalData")
            .doc(contact.id)
            .update({
                ...contact,
                mobile_no: values
            })
            .then(function () {
                alert("Mobile Number Updated Successfully")
            })
    }

    const captureScreenFunction = () => {

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
SERIAL N0 : 7 \n
ZUBEDA BEE
VOTE FOR AUTO RIKSHAW
----------------------->\n
Name : ${contact.name}
S/W/D/G :  ${contact.relation}
Gender :  ${contact.gender}
Age :   ${contact.age}
House : ${contact.house_no}
Epic No : ${contact.epic_no}
Booth No : ${contact.booth_no}
Serial No : ${contact.sn_no}
Ward No : ${contact.ward_no}
Mobile No : ${contact.mobile_no}\n
----------------------->
    Thank you.`,
        });
    }

    
    async function captureViewShotPattern() {
        Share.share({
            title: 'Image',
            url: 'https://graph.facebook.com/10153288016584540/picture?type=large',
            message: `
Name : ${contact.name}
S/W/D/G :  ${contact.relation}
Gender :  ${contact.gender}
Age :   ${contact.age}
House No : ${contact.house_no}
Epic No : ${contact.epic_no}
Booth No : ${contact.booth_no}
Serial No : ${contact.sn_no}
Ward No : ${contact.ward_no}
Mobile No : ${contact.mobile_no}\n
    Thank you.`,
        });
    }

    return (
        <View style = {{flex:1}}>
        <TouchableHighlight onPress={toggleDetail} underlayColor = "none">
            <Text style={styles.text} numberOfLines={30}>
                Name : {contact.name}
                {"\n"}
                Epic.No : {contact.epic_no}
                {showDetail && (
                    <Text style={styles.text2} numberOfLines={30}>
                        {"\n"}
                        S/W/D : {contact.relation}
                        {"\n"}
                        Gender : {contact.gender} Age : {contact.age}
                        {"\n"}
                        House No : {contact.house_no}
                        {"\n"}
                        S.No : {contact.sn_no}
                        {"\n"}
                        Booth No : {contact.booth_no}
                        {"\n"}
                        Ward No: {contact.ward_no}
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
                                    {contact.mobile_no}
                                </TextInput>
                            </TouchableHighlight>
                                <Button onPress = {updateValue}  title = "Update" 
                                style={{borderRadius: 20}} color = "#38B6FF"/>
                        <View style={{ flex: 1, flexDirection: 'column', 
                        justifyContent:'center'}}>
                             <View style={{ flex: 1, flexDirection: 'column', 
                        justifyContent:'center',paddingTop:20, paddingLeft:70}}>
                            <Button onPress={captureViewShot} style={{
                                borderRadius:20}}color = "#38B6FF"
                                title="Print Full"/></View>
                                <View style={{ flex: 1, flexDirection: 'column', 
                        justifyContent:'center',paddingTop:20, paddingLeft:70}}>
                            <Button onPress={captureViewShotPattern} style={{
                                borderRadius: 20}} color = "#38B6FF" title = "Print"/></View>
                                <View style={{ flex: 1, flexDirection: 'column', 
                        justifyContent:'center',paddingTop:20, paddingLeft:70}}>
                            <Button onPress={captureScreenFunction} style={{
                                borderRadius:20}} color = "#38B6FF"
                                title="Download Image"/></View>
                              <View style={{ flex: 1, flexDirection: 'column', 
                        justifyContent:'center',paddingTop:20, paddingLeft:70}}>
                            <Button onPress={captureViewShot} style={{
                              borderRadius: 20}} color = "#38B6FF" title = "Share"/>
                              </View>
                        </View>
                    </Text>
                )}
            </Text>
        </TouchableHighlight>
        </View>
    );
};

function AllVotersScreen() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await db
                .collection('FinalData')
                .get();
            setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    setTimeout(() => {
        setLoading(false)
    }, 5000);
        
    return (
        <SafeAreaView style = {styles.container}>
            { loading ?
            <ActivityIndicator size ={50} color = "black"/> :
        <FlatList
            style={styles.list}
            data={contacts}
            renderItem={({ item }) => (
                <ContactDetail contact={item} />
            )}
        />
            }
        </SafeAreaView>
    ) 
}

export default AllVotersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        paddingLeft: 15,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    list: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    text1: {
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        flex:1,
        paddingTop: 10,
    },
    image: {
        flex: 1,
        width: 60,
        height: 70,
    }
});
