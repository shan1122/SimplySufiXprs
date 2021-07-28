// ./screens/Contact.js

import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Card from "../components/Card";
const Complexity = {
  Simple: 1,
  Challenging: 2,
  Hard: 3,
};
const Affordability = {
  Affordable: 1,
  Pricey: 2,
  Luxurious: 3,
};

const Colors = {
  purple: "#800080",
  red: "#FF0000",
  orange: "#FFA500",
  amber: "#ffbf00",
  blue: "#0000FF",
  green: "#008000",
  lightBlue: "#add8e6",
  lightGreen: "#90ee90",
  pink: "#FFC0CB",
  teal: "#008080",
};

const DUMMY_CATEGORIES = [
  {
    id: "c1",
    title: "Italian",
    color: Colors.purple,
  },
  {
    id: "c2",
    title: "Quick & Easy",
    color: Colors.red,
  },
  {
    id: "c3",
    title: "Hamburgers",
    color: Colors.orange,
  },
  {
    id: "c4",
    title: "German",
    color: Colors.amber,
  },
  {
    id: "c5",
    title: "Light & Lovely",
    color: Colors.blue,
  },
  {
    id: "c6",
    title: "Exotic",
    color: Colors.green,
  },
  {
    id: "c7",
    title: "Breakfast",
    color: Colors.lightBlue,
  },
  {
    id: "c8",
    title: "Asian",
    color: Colors.lightGreen,
  },
  {
    id: "c9",
    title: "French",
    color: Colors.pink,
  },
  {
    id: "c10",
    title: "Summer",
    color: Colors.teal,
  },
];

const ViewDeals = ({ route, navigation }) => {
  const CheckDeal = (item) => {
    DUMMY_MEALS.forEach((element) => {
      if (element.id == item.id) {
        console.log(element.title);
      }
    });
  };

  const item = route.params.item;
  console.log(item);

  CheckDeal(item);

  return (
    <View style={styles.center}>
      <FlatList
        data={DUMMY_MEALS}
        keyExtractor={(DUMMY_MEALS) => DUMMY_MEALS.id.toString() == item.id}
        renderItem={({ item }) => (
          <Card
            image={item.imageUrl}
            title={item.title}
            onPress={() =>
              navigation.navigate("ListingDetails", {
                item: item,
              })
            }
          />
        )}
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

export default ViewDeals;
