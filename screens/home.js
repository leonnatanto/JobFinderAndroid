import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput, Switch } from 'react-native';
// import { globalStyle } from '../styles/global';



export default function Home( {navigation} ){
    const [data, setData] = useState([]);

    const onPressCard = id => {
        navigation.navigate('DetailCard', {userId: id})
        console.log(id)
    }


  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [filteredDataSource2, setFilteredDataSource2] = useState([]);
  const [search2, setSearch2] = useState('');
  const [masterDataSource2, setMasterDataSource2] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    fetch("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
            .then(response => response.json())
            .then((responseJson) => {
                setData(responseJson)
                console.log(data)
                setMasterDataSource(responseJson)
                setFilteredDataSource(responseJson)
                setMasterDataSource2(responseJson)
                setFilteredDataSource2(responseJson)

            })
            .catch(error =>  console.log(error))
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const searchFilterFunctionLoc = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource2.filter(
        function (item) {
          const itemData = item.location
            ? item.location.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch2(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource2);
      setSearch2(text);
    }
  };

  const fullTimeFilter = (isEnabled) => {
      if(isEnabled === 'Fulltime'){
        text = 'Fulltime'
      } else {
        text = ''
      }
    // Check if searched text is not blank
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.type
            ? item.type.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);

  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
      

return (
    <View>
        <TextInput
          style={[styles.textInputStyle],{ marginLeft: 5 }}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Description"
        />
        <View style={styles.containerSwitch}>
        <View style={styles.switch}>
        <Text style={[styles.textInputStyle],{ paddingLeft: 5 }}>Fulltime</Text>
        <Switch 
        trackColor="#81b0ff"
        thumbColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
        onSelectionChange={(isEnabled) => fullTimeFilter(isEnabled )}
        />
        </View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunctionLoc(text)}
          value={search2}
          underlineColorAndroid="transparent"
          placeholder="Location"
        />
        </View>
        <FlatList data={filteredDataSource} renderItem={
                ( {item} ) => (
                    <View  style={styles.card}>
                    <TouchableOpacity style={styles.button} onPress={() => onPressCard(item.id)}>
                    <View>
                    <Image style={styles.cardImage} source={{uri: item.company_logo}}/>
                    </View>
                
                    <View style={styles.innerCard}>
                    <Text style={styles.textCard}>{item.title}</Text>
                    <Text style={styles.textCard}>{item.company}</Text>
                    <Text style={styles.textCard}>{item.location}</Text>
                    </View>
                    </TouchableOpacity>
                    </View>
                )}
            />
    </View>
    )
}

const styles = StyleSheet.create({
   card: {
    padding: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: '#333'
   },
   button:{
    flexDirection: 'row',
   },
   innerCard: {
    flexDirection: 'column',
    justifyContent: 'space-around'
   },
   cardImage: {
    marginRight: 30,
    height: 70,
    width: 70
   },
   textCard: {
       marginBottom: 10,
       width: 200
   },
   textInputStyle: {
       fontSize: 15,
       fontWeight: 'bold'
   },
   switch: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
   },
   containerSwitch: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#333'
   }
})