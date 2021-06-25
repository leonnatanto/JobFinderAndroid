import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
// import { globalStyle } from '../styles/global';



export default function detailCard( {route,navigation} ){
    const [data, setData] = useState([]);
    const { userId } = route.params;

    useEffect(() => {
        fetch("http://dev3.dansmultipro.co.id/api/recruitment/positions/" + userId )
            .then(response => response.json())
            .then((responseJson) => {
                setData(responseJson)
                console.log(responseJson)

            })
            .catch(error => console.log(error))
      }, []);

    const goForFetch = userId => {
        
    }
      
return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Company</Text>
        <View  style={styles.card}>
            <View>
                <Image style={styles.cardImage} source={{uri: data.company_logo}}/>
            </View>
                
            <View style={styles.innerCard}>
                <Text style={styles.textCard}>{data.title}</Text>
                <Text style={styles.textCard}>{data.company}</Text>
                <Text style={styles.linkText}>Website</Text>
            </View>
        </View>

        <View>
            <Text  style={styles.titleText}>Job Specification</Text>

            <View>
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.descText} >{data.title}</Text>

                <Text style= {styles.titleText}>Full Time</Text>
                <Text style={styles.descText}>{data.type !== 'fulltime' ? 'YES' : 'NO'}</Text>

                <Text  style={styles.titleText}>Description</Text>
                <Text>{data.description}</Text>
            </View>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
   container: {
        padding: 10
    },
   linkText: {
    color: '#045fdb'
    },
   card: {
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#333'
   },
   innerCard: {
    flexDirection: 'column',
    justifyContent: 'space-around'
   },
   cardImage: {
    marginRight: 30,
    height: 50,
    width: 50
   },
   textCard: {
       marginBottom: 10
   },
   titleText: {
       marginTop: 20,
       marginBottom: 10,
       fontWeight: 'bold'
   }
})