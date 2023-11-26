import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const YourScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/anh1.png')} 
        style={styles.backgroundImage}
      />
    <Image source={require('../assets/anh2.png')} />
      <TouchableOpacity onPress={() => { }} style={styles.backButton}>
        <Icon name="chevron-back" size={40} color="blue" />
      </TouchableOpacity>

      <View style={styles.productBar}>
        <View style={styles.productInfo}>
            <TouchableOpacity style={{ position:'absolute',right:5,backgroundColor: 'blue', borderRadius: 15, width:40,height:40 }}>
                <Icon name="add" size={40} color="white" style={styles.productIcon} />
            </TouchableOpacity>
          <Text style={styles.productTitle}>Orange juice</Text>
          <Image source={require('../assets/anh3.png')} style={styles.additionalImage} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backButton: {
    width: 40,
    height:40,
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor:'white',
    borderRadius: 10, 
  },

  productBar: {
    width:350,
    height:90,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productIcon: {
    marginRight: 10,
  },
  productTitle: {
    marginLeft: 70,
    color: 'black',
    fontSize: 20,
  },
  additionalImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    position:'absolute',
  },
});

export default YourScreen;
