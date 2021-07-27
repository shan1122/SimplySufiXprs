import React from 'react';
import { View ,Text,StyleSheet,FlatList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DealDetailsCard from './DealDetailsCard';


const renderItem=({item})=>{
  return <DealDetailsCard {...item} />;


}

const  DealDetails=(props)=> {
  
   
    return (
   <View style={styles.container}> 

<FlatList
        data={props.route.params.item}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderItem}
      />
   </View>
    );
}
const styles = StyleSheet.create({

    container:{

        flex: 1,
        backgroundColor:Colors.white
    },
    wrapper: {},
  columnWrapperStyle: {
    display: "flex",
    flexDirection: "row",

    // justifyContent: "space-between",
    paddingHorizontal: 20,
  },
})
export default DealDetails;