import { FlatList, Image, Text, View } from 'react-native';
import utils from '../static/utils';

export default function Ingredients() {

    const INGREDIENTS = [
        {id: 1, image: require('../static/ham.png')},
        {id: 2, image: require('../static/tomato.png')},
        {id: 3, image: require('../static/garlic.png')},
        {id: 4, image: require('../static/cheese.png')},
    ]

    function renderIngredient({ item }) {
        return (
            <View style={utils('p2 m1 bgWhite shadowDark2 rounded2 jcCenter aiCenter')}>
                <Image source={item.image} />
            </View>
        );
    }

    return (
        <>

            <Text style={utils('fs2 fwBold')}>Ingredients</Text>
            <FlatList horizontal
                data={INGREDIENTS}
                renderItem={ renderIngredient }
                keyExtructor={ item => item.id }
            />

        </>
    );
}
