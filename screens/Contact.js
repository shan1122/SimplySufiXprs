// ./screens/Contact.js

import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { getDeals } from "../api/Functions";
import ActivityIndicator from "../components/ActivityIndicator";
import ListItemSeparator from "../components/ListItemSeparator";
import Deals from "./Deals";

const renderItem = ({ item }) => {
  return <Deals {...item} />;
};
const Contact = () => {
  const [loading, SetLoading] = useState(false);
  const [deals, SetDeals] = useState([]);
  useEffect(() => {
    const LoadConnection = async () => {
      SetLoading(true);
      const DealsResponse = await getDeals();
   
      if (DealsResponse.ok) {
        SetDeals(DealsResponse.data.cities[0].categories[0].products);
        SetLoading(false)
      }
    };

    LoadConnection();
  }, []);

  return (
    <View style={{flex:1}}>
      <ActivityIndicator visible={loading}></ActivityIndicator>
    <FlatList
      data={deals}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={ListItemSeparator}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;
