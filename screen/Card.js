import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import payment from './Payment';
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
const CartScreen = () => {

  return (
    <View >
        <TouchableOpacity onPress={() => { }} style={styles.backButton}>
        <Icon2 name="chevron-back" size={40} color="blue" />
        </TouchableOpacity>
        <View style={{marginTop: 150, marginLeft: 20}}>
               <Text  style={{fontSize: 20, fontWeight:'bold'}}> Your Cart <Icon name='thumbs-up' color={'#e6cdae'} size={20}/></Text>
        </View>
        <View>
            <View style={styles.productBar}>
            <View style={{ flexDirection: 'row'}}>
              <Image source={require('../assets/anh3.png')} style={{margin: 10}}/>
                <View  style={{margin: 10, marginLeft: 30}}>
                    <Text style={{color: 'gray', fontSize:12}}>Lauren's</Text>
                    <Text style={{marginVertical:4}}>Orange Juice </Text>
                    <Text style={{color: 'orange'}}><Icon name='dollar'/> 149                                    <Icon name='minus' style={{marginLeft: 100}}/><Text style={{color:'black'}}>  2  </Text><Icon name='plus'/></Text>
                </View>
              </View>
            </View>
        </View>

        <View>
        <View style={styles.productBar}>
            <View style={{ flexDirection: 'row'}}>
              <Image source={require('../assets/anh4.png')} style={{margin: 10}}/>
                <View  style={{margin: 10, marginLeft: 30}}>
                    <Text style={{color: 'gray', fontSize:12}}>Baskin's</Text>
                    <Text style={{marginVertical:4}}>Skimmed Milk </Text>
                    <Text style={{color: 'orange'}}><Icon name='dollar'/> 129                                    <Icon name='minus' style={{marginLeft: 100}}/><Text style={{color:'black'}}>  2  </Text><Icon name='plus'/></Text>
                </View>
              </View>
            </View>
        </View>

        <View>
          <View style={styles.productBar}>
            <View style={{ flexDirection: 'row'}}>
              <Image source={require('../assets/anh5.png')} style={{margin: 10}}/>
                <View  style={{margin: 10, marginLeft: 30}}>
                    <Text style={{color: 'gray', fontSize:12}}>Marley's</Text>
                    <Text style={{marginVertical:4}}>Aloe Vera Lotion</Text>
                    <Text style={{color: 'orange'}}><Icon name='dollar'/> 1249                                    <Icon name='minus' style={{marginLeft: 100}}/><Text style={{color:'black'}}>  2  </Text><Icon name='plus'/></Text>
                </View>
              </View>
            </View>
        </View>
        <View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 20, fontWeight:'bold', margin: 20}}>Total</Text>
              <Text style={{marginLeft: 220,marginTop: 20, fontSize: 20, fontWeight: 'bold', color:'orange'}}><Icon name='dollar'size={20}/>1,527</Text>
            </View>
            <TouchableOpacity onPress={payment} style={styles.payButton}>
                <Text style={{color:'white',fontSize:18, fontWeight:'bold', alignSelf:'center', paddingTop: 25 }}> Procced to checkout</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    productBar:{
        alignSelf:'center',
        marginBottom: 20, 
        width:'90%', 
        height: 80, 
        borderRadius: 20,
        backgroundColor:'#e0e0e0'
    },
    payButton:{
        marginHorizontal: 30, 
        marginTop: 50, 
        width:'80%', 
        height: 80, 
        borderRadius: 20,
        backgroundColor:'#FF7043'
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
    
});


export default CartScreen;
