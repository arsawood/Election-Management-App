import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

function Booth127Analysis({navigation}) {
    return(
        <View style ={{flex:1,alignItems:'center', marginBottom:20, paddingTop:40}}>
            <View style= {{flex:0.2}}>
            <TouchableOpacity style = {{backgroundColor:'#38B6FF', 
            height:60,width:250, borderRadius:20}}
            onPress = {() => navigation.navigate('Booth 127 religion')}>
                <Text style = {{fontSize:20, fontWeight:'bold', textAlign:'center', paddingTop:15}}>
                    Religionwise Voters
                </Text>
            </TouchableOpacity>
            </View>
            <View style = {{flex:0.2}}>
            <TouchableOpacity style = {{backgroundColor:'#38B6FF', 
            height:60,width:250, borderRadius:20}}
            onPress = {() => navigation.navigate('Booth 127 gender')}>
                <Text style = {{fontSize:20, fontWeight:'bold', textAlign:'center', paddingTop:15}}>
                    Genderwise Voters
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Booth127Analysis;