import React from 'react';
import {StyleSheet, View,Text, StatusBar, Platform} from 'react-native';
import ListItemSeparator from '../components/ListItemSeparator';
import Colors from '../config/Colors';

function LocationScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.OpeningTimings}>
                <Text style={styles.TextHeading}>OpeningTimings: From 12 am to 6Pm</Text>
            </View>
            <View style={styles.PhoneNumber}>
            <Text style={styles.PhoneHeadingText}>042-83483949384</Text>
            </View>
            <View style={styles.Address}><Text style={styles.AddressText}>Food Court,Pakages Mall,LAHORE</Text></View>

        </View>
        <View style={styles.backgroundMapHeader}>
            <View style={styles.grid}></View>
            {/* <View style={{flex: 0.2,}}> <ListItemSeparator/></View> */}
           
            <View style={styles.grid}></View>
           
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        
    },
    innerContainer:{
        marginLeft:10,
    },
    OpeningTimings:{
        
    },
    PhoneNumber:{
        marginTop:4

    },
    Address:{},
    AddressText:{
    color: Colors.grey,
    fontSize: 11,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width:"100%"
    },
    PhoneHeadingText:{
    color: Colors.dark,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width:"100%"
    },
    TextHeading:{
    color: Colors.primary,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width:"100%"
    },
    backgroundMapHeader:{
        width:"100%",
        height:40,
        backgroundColor:Colors.medium,
        flexDirection:"row"

    },
    grid:{
        flex: 0.4,
      //  backgroundColor:"white"
    }



    
})
export default LocationScreen;