import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Feed = () => {
    const data = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
        // Add more posts here
    ];

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Feed;
