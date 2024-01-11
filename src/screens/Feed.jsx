import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import  { useHeaderHeight } from '@react-navigation/elements'

export default function Feed() {
    const height = useHeaderHeight()

    const data = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
        // Add more posts here
    ];

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'UrbanistSemiBold', fontSize: 23 }}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: height }}>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>


        </SafeAreaView>
    );
};


