import React from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
    <>
      <View style={styles.container}>{children}</View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
