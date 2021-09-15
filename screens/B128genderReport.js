import React from 'react';
import {View, Image} from 'react-native';

function B128gendRep(){
    return(
          <View style ={{flex:1,marginBottom:20}}>
          <Image source = {require('../assets/128mm.png')}
           style ={{width:'105%', height:'110%',marginBottom:10}}/>
           </View>
    )
}

export default B128gendRep;