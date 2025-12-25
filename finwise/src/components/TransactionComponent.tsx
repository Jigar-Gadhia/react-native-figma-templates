import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {transactionData} from '../utils/transactionData';
import TransactionItemComponent from './TransactionItemComponent';
import {scale, verticalScale} from 'react-native-size-matters';

const TransactionComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      {transactionData.map(item => {
        return <TransactionItemComponent item={item} key={item.id} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(20),
  },
});

export default TransactionComponent;
