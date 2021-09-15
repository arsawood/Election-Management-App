import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';

function B128relRep(){
    return(
          <View style ={{flex:1,marginBottom:20}}>
          <Image source = {require('../assets/128r.png')}
           style ={{width:'105%', height:'110%',marginBottom:10}}/>
           </View>
    )
}

export default B128relRep;