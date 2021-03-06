import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

import SwiperFlatList from "react-native-swiper-flatlist";
import Colors from "../config/Colors";
import { CustomPagination } from "../components/CustomPagination";
import { useState, useEffect } from "react";
import HomeDeals from "./HomeDeals";
import HomeMenu from "./HomeMenu";
import { getBannerImages, getCitydata, getDeals } from "../api/Functions";
import ActivityIndicator from "../components/ActivityIndicator";
const renderDeals = ({ item }) => {
  return <HomeDeals {...item} />;
};

const renderItem = ({ item }) => {
  return <HomeMenu {...item} />;
};
const Home = ({ navigation }) => {
  const [slider, SetSlider] = useState([]);

  const [menu, SetMenu] = useState([]);
  const [deals, SetDeals] = useState([]);
  const [dealBanner,SetDealsBanner]=useState([]);
  const [loading,SetLoading]=useState(false);
  useEffect(() => {
    const LoadConnection = async () => {
      SetLoading(true)
      const sliderResponse = await getBannerImages();
      const MenuResponse = await getCitydata();
      const DealsResponse = await getDeals();
     
      if (DealsResponse.ok && MenuResponse.ok && sliderResponse.ok ){

        SetDeals(DealsResponse.data.cities[0].categories[0].products);
        SetDealsBanner(DealsResponse.data.cities[0].categories[0].products[0])
        SetMenu(MenuResponse.data.cities[0].categories);
        SetSlider(sliderResponse.data.banner);
        SetLoading(false)
      }
      // if () {
        
      // }
      // if () {
        
      //   // console.log(sliderResponse.data.banner)
      // }
      //   const response1 = await getXPressItems();
      //  const response2 = await getFrozenItems();
      //   if (response1.ok && response2.ok) {
      //     SetXpressdata(response1.data.items);
      //     SetFrozendata(response2.data.items);
      //     setIsLoaded(true);

      //   }
    };

    LoadConnection();
  }, []);
 

  return (
    <>
    <ActivityIndicator visible={loading}></ActivityIndicator>
    <ScrollView style={styles.container}>
      <View style={styles.sliderContainer}>
        {
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            index={0}
            autoplayLoop
            data={slider}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <ImageBackground
                  source={require("../assets/xprsimg.jpg")}
                  resizeMode="contain"
                  style={styles.sliderImage}
                >
                  <Image
                    source={{ uri: item.img }}
                    resizeMode="cover"
                    style={styles.sliderImage}
                  />
                </ImageBackground>
              </View>
            )}
            showPagination
            PaginationComponent={CustomPagination}
          />
        }
      </View>

      <View style={styles.breaker}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Menu</Text>
      </View>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderItem}
      />
      <TouchableWithoutFeedback  onPress={() => {
        navigation.navigate("Product", {
          item: dealBanner,
        });
      }}>
      <View style={styles.dealsContainer}>
        <View style={styles.dealImgContainer}>
          <Image
            source={{
              uri: dealBanner.img 
            }}
            style={styles.dealImage}
          ></Image>
        </View>
        <View style={styles.dealDetailContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{dealBanner.name}</Text>
          <Text>{dealBanner.desc} </Text>
          <View>
        <View
          style={{
            height: 40,
            marginTop: 10,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
          }}
        >
          <Text style={{ color: "white" }}>Add To cart</Text>
        </View>
      </View> 
        </View>
      </View>
      </TouchableWithoutFeedback>
      <View style={styles.breaker}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Deals</Text>
      </View>
      <ScrollView
        style={{ marginBottom: 10 }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <FlatList
          data={deals}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexDirection: "row", flexWrap: "nowrap" }}
          //columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderDeals}
        />
      </ScrollView>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flex: 1,
    height: 200,
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.primary,
  },

  wrapper: {},
  columnWrapperStyle: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 13,
    backgroundColor: Colors.primary,
    width: Dimensions.get("window").width - 20,
  },
  sliderImage: {
    flex: 1,
    width: null,
    borderRadius: 8,
    height: null,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  breaker: {
    marginLeft: 10,
    //marginBottom:10,
  },

  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
  dealsContainer: {
    flex: 1,
    flexDirection: "row",
    height: 200,
    backgroundColor: "white",
    borderWidth: 20,
    borderColor: "white",
  },
  dealImgContainer: {
    flex: 0.6,
    flexDirection: "column",
  },
  dealDetailContainer: {
    paddingLeft: 20,

    flex: 1 / 2,
    flexDirection: "column",
  },
  dealImage: {
    width: "100%",
    height: "100%",
  },
});

export default Home;
