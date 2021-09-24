import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Entypo } from '@expo/vector-icons'; 

import { MaterialIcons,FontAwesome5 ,FontAwesome  } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../config/Colors";
import { useDispatch } from "react-redux";
import { SignoutUser } from "../store/actions/UserAction";

export function DrawerContent(props) {
  const disptach=useDispatch();
 

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View> */}

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={Colors.white} size={size} />
              )}
              label="Home"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="restaurant-menu" size={24} color="white" />
              )}
              label="Menu"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            /> */}
            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="fastfood" size={24} color="white" />
              )}
              labelStyle={styles.label}
              label="Deals"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="fastfood" size={24} color="white" />
              )}
              labelStyle={styles.label}
              label="Promotions"
              onPress={() => {
                props.navigation.navigate("Contact");
              }}
              
            />
           
            


            
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="location-pin" size={24} color="white" />
              )}
              labelStyle={styles.label}
              label="Locations"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="info-circle" size={size} color={Colors.white} />
              )}
              labelStyle={styles.label}
              label="About Us"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <SimpleLineIcons name="book-open" size={size} color={Colors.white} />
              )}
              labelStyle={styles.label}
              label="Terms and Condition"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="user-friends" size={size} color="white" />
              )}
              labelStyle={styles.label}
              label="Share With Friends"
              onPress={() => {
                props.navigation.navigate("Contact");
              }}
            />
            {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={Colors.white}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                         //   onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        /> */}
            {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={Colors.white}
                                size={size}
                                />
                            )}
                            label="Settings"
                           // onPress={() => {props.navigation.navigate('SettingScreen')}}
                        /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="chat" size={24} color="white" />
              )}
              label="Live Chat"
              labelStyle={styles.label}
              onPress={() => {
                console.log("pressed"),
                props.navigation.navigate("Support");
              }}
            />
          </Drawer.Section>
           {/* <Drawer.Section title="Preferences">
                      
                    </Drawer.Section>  */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="logout" size={24} color="white" />
              )}
              labelStyle={styles.label}
              label="LogOut"
              onPress={() => {
                disptach(
                  SignoutUser()
                  //reduceCartItem(item)
                );
              }}
              
            />
            </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  label: {
    color: Colors.white,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
