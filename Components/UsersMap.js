import React from 'react';
import {StyleSheet,View} from 'react-native'
import MapView from 'react-native-maps';
const usersMap =props => {
    return(
        <View style={styles.mapConatiner}>
            <MapView style={styles.map}></MapView>
        </View>
    );
}

const styles= StyleSheet.create({
    mapConatiner :{
        width:'100%',
        height:400
    },
    map:{
        width:'100%',
        height:'100%'
    }
})

export default usersMap;