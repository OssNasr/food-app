import { FlatList, Image, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import utils from '../static/utils';
import { styles } from '../static/styles';


export default function Categories() {

    const CATEGORIES = [
        {id: 1, name: 'Pizza', icon: require('../static/pizza-icon.png')},
        {id: 2, name: 'Seafood', icon: require('../static/shrimp-icon.png')},
        {id: 3, name: 'Soft Drinks', icon: require('../static/soda-icon.png')},
    ]

    function renderCategory({item}) {

        let iconColor = item.id == 1 ? 'black' : 'white';

        return (
                <View style={utils(`m2 p3 rounded2 jcCenter aiCenter shadowDark2 ${item.id == 1 ? 'bgWarning' : 'bgWhite'}`)}>
                    <Image source={item.icon} width={40} height={40} />
                    <Text style={utils('fs2 mv2')}>{ item.name }</Text>
                    <View style={[utils('bgWhite aiCenter jcCenter'), styles.categoryArrow, item.id != 1 ? styles.categoryRedArrow : {}]}>
                        <FontAwesome5 name="chevron-right" size={16} color={iconColor} />
                    </View>
                </View>
        );
    }

    return (
            <>
            <Text style={utils('fwBold fs2 pt2 pl2')}>Categories</Text>

            <FlatList horizontal
                data={CATEGORIES}
                keyExtractor={ item => item.id }
                renderItem={renderCategory} 
            />
            </>

    );
}
