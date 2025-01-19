import React from 'react';
import { View, FlatList, Text, StyleSheet, ListRenderItemInfo } from 'react-native';

interface Item {
    id: string;
    title: string;
}

interface CustomFlatListProps {
    data: Item[];
}

const CustomFlatList: React.FC<CustomFlatListProps> = ({ data }) => {
    const renderItem = ({ item }: ListRenderItemInfo<Item>) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flex: 1,
    },
    itemText: {
        fontSize: 16,
    },
});

export default CustomFlatList;