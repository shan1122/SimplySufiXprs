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

const DUMMY_Deals = [
  {
    id: "1",
    name: "Italian",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "2",
    name: "Quick & Easy",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "3",
    name: "Hamburgers",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "4",
    name: "German",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "5",
    name: "Light & Lovely and menu salat",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "6",
    name: "Exotic",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "7",
    name: "Breakfast",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "8",
    name: "Asian",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "9",
    name: "French",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
  {
    id: "10",
    name: "Summer",
    img: "https://www.simplysufixprs.net/assets/media/products/deal1_2_xprs_mayo_chicken_burgers_12_pcs_nuggets_2_sufi_cola_cans.jpeg",
  },
];

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
