import { FlatList, Image, StyleSheet, View } from 'react-native';
import { ListHeaderComponent } from './ListHeaderComponent';
import { userAvatars } from '../constants';

export default function ListOfAvatars() {

    const renderItem = ({ item }) => (
        <Image
            style={{ height: 66, width: 66, borderRadius: 32, marginRight: 25 }}
            source={{ uri: item.url }}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={userAvatars}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={renderItem}
                ListHeaderComponent={<ListHeaderComponent />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    },
});

