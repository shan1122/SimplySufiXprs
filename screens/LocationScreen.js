import React from 'react';
import {StyleSheet, View,Text} from 'react-native';

function LocationScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.OpeningTimings}>
                <Text>Open From 12 Pm to 6Pm</Text>
            </View>
            <View style={styles.PhoneNumber}>
            <Text>042-83483949384</Text>
            </View>
            <View style={styles.Address}><Text>Food Court,Pakages Mall LAHORE</Text></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
    
})
export default LocationScreen;