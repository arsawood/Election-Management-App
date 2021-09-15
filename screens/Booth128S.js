import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { db } from '../firebase';

function Booth128S({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await db
                .collection('BOOTH128')
                .where('r', '==', 'S')
                .get();
            setFilteredDataSource(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMasterDataSource(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    const searchFilterFunction = (text) => {

        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.name + item.epic_no + item.sn_no + item.house_no
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    const ItemView = ({ item }) => {
        return (
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                Name: {item.name}
                {'\n'}
                Epic no: {item.epic_no}
                {'\n'}
                Serial no :{item.sn_no}
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

    const getItem = item => {
        navigation.navigate('ItemDetails128', { item });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search with Name / Epic No / Serial No / H.no"
                />
                {loading ?
                    <ActivityIndicator size={50} color="black" /> :
                    <FlatList
                        data={filteredDataSource}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
        fontSize: 18
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#38B6FF',
        backgroundColor: '#FFFFFF',
    },
});

export default Booth128S;