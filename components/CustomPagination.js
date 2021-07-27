import React from 'react';
import { StyleSheet } from 'react-native';
import { Pagination } from 'react-native-swiper-flatlist';
import Colors from '../config/Colors';

const styles = StyleSheet.create({
  paginationContainer: {
    bottom:2,
  },
  pagination: {
    borderRadius: 2,
    width:8,
    height:8,
    
  },
});

export const CustomPagination = (props) => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="white"
      paginationActiveColor={Colors.primary}
    />
  );
};
