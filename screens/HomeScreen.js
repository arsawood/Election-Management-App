import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
import background from '../assets/background.png'

function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={background} resizeMode='cover'
                style={styles.imageb}  >
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20,
                    margin: 10, borderWidth: 1, borderRadius: 30, borderColor:'#38B6FF'
                }}>
                    <Entypo name="users" size={80} color="skyblue"
                        onPress={() => navigation.navigate("All Voters")} />
                    <Ionicons name="search"
                        size={80} color="blue" onPress={() => navigation.navigate("Search Options")} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 30 }}>All Voters List</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 50 }}>Search Voter</Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20,
                    margin: 5, borderWidth: 1, borderRadius: 30,borderColor:'#38B6FF'
                }}>
                    <MaterialIcons name="analytics" size={80} color="orange" 
                    onPress = {() => navigation.navigate('Analysis Options')} />
                    <FontAwesome5 name="language" size={80} color="maroon" />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60 }}>Analysis</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 70 }}>Language</Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20,
                    margin: 5, borderWidth: 1, borderRadius: 30,borderColor:'#38B6FF'
                }}>
                    <Ionicons name="notifications" size={80} color="#566573" />
                    <MaterialIcons name="qr-code-scanner" size={80} color="black" />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 30 }}>Notifications</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 75 }}>Scanner</Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20,
                    margin: 5, borderWidth: 1, borderRadius: 30,borderColor:'#38B6FF'
                }}>
                    <FontAwesome name="group" size={80} color="#AF7AC5" />
                    <Ionicons name="settings" size={80} color="grey" />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 30 }}>Distributions</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 80 }}>Settings</Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20,
                    margin: 5, borderWidth: 1, borderRadius: 30,borderColor:'#38B6FF'
                }}>
                   <Entypo name="open-book" size={80} color="black" />
                   <MaterialIcons name="admin-panel-settings" size={80} color="black" />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60 }}>Survey</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 100 }}>Alert</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'column',
    },
    imageb: {
        flex: 1,
        justifyContent: 'center'
    }
});
