// ./screens/Home.js

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
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import SwiperFlatList from "react-native-swiper-flatlist";
import Colors from "../config/Colors";
import { CustomPagination } from "../components/CustomPagination";
import { useState, useEffect } from "react";
//import StarRating from '../components/StarRating';

import HomeDeals from "./HomeDeals";
import HomeMenu from "./HomeMenu";
import { getBannerImages, getCitydata } from "../api/Functions";

const Deals = [
  {
    id: "1",
    imageUrl:
      "https://www.simplysufi.com/assets/media/mobile%20header%20copy.jpg",
  },
  {
    id: "2",
    imageUrl:
      "https://www.simplysufi.com/assets/media/mobile%20header%20copy.jpg",
  },
  {
    id: "3",
    imageUrl:
      "https://www.simplysufi.com/assets/media/mobile%20header%20copy.jpg",
  },
  {
    id: "4",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
  },
];

const DUMMY_CATEGORIES = [
  {
    id: "1",
    title: "Italian",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "2",
    title: "Quick & Easy",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "3",
    title: "Hamburgers",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "4",
    title: "German",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "5",
    title: "Light & Lovely and menu salat",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "6",
    title: "Exotic",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "7",
    title: "Breakfast",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "8",
    title: "Asian",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "9",
    title: "French",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
  {
    id: "10",
    title: "Summer",
    img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
    products: [
      {
        id: "1",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "2",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "3",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "4",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "5",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
      {
        id: "6",
        name: "HamBurger",
        price: "400",
        img: "https://www.simplysufixprs.net/assets/media/products/xprscrispychickenburger.jpg",
        discription: "This is sufi burger made by Awais Gujjar",
      },
    ],
  },
];

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

const renderDeals = ({ item }) => {
  return <HomeDeals {...item} />;
};

const renderItem = ({ item }) => {
  return <HomeMenu {...item} />;
};
const Home = ({ navigation }) => {

  const [slider, SetSlider] = useState([]);
  const [menu,SetMenu]=useState([]);
  useEffect(() => {
    


    const LoadConnection = async () => {
      const sliderResponse= await getBannerImages();
      const MenuResponse = await getCitydata();
      if(MenuResponse.ok){
          SetMenu(MenuResponse.data.cities[0].categories)
      }
            if(sliderResponse.ok){
              SetSlider(sliderResponse.data.banner)
             // console.log(sliderResponse.data.banner)

            }
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
                  resizeMode="cover"
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

      <View style={styles.dealsContainer}>
        <View style={styles.dealImgContainer}>
          <Image
            source={{
              uri: "https://www.simplysufixprs.net/assets/media/products/deal_4_xprs_mayo_chicken_burger_4_sufi_cola_cans.jpeg",
            }}
            style={styles.dealImage}
          ></Image>
        </View>
        <View style={styles.dealDetailContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Deal For 4</Text>
          <Text>4 XPRS Mayo Chicken Burgers, 4 Sufi Cola Cans </Text>
        </View>
      </View>

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
          data={DUMMY_Deals}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexDirection: "row", flexWrap: "nowrap" }}
          //columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderDeals}
        />
      </ScrollView>
    </ScrollView>
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
