import { FlatList, View, Image } from 'react-native'
import { arrayOfImages } from '../constants';
import { userAvatars } from '../constants';

export const ListOfCards = () => {
    const renderItem = ({ item }) => {
        return (
            <Image
                style={{
                    width: "100%",
                    height: 350,
                    borderRadius: 20,
                    marginBottom: 32,
                }}
                source={{
                    uri: item.url,
                }}
            />
        );
    };
    return (
        <View style={{ paddingVertical: 10 }}>
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

