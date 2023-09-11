import { FlatList, Text, View } from 'react-native';
import PizzaCard from './PizzaCard';
import utils from '../static/utils';


export default function PopularSection({ navigation }) {

    const pizza = [
        {id: 1, name: 'Pepperoni', image: require('../static/pizza1.png')},
        {id: 2, name: 'Cheese Mix', image: require('../static/pizza2.png')},
        {id: 3, name: 'Vegetarian', image: require('../static/pizza3.png')},
    ]

    return (
        <View>

            <Text style={utils('fwBold fs2 pt2 pl2')}>Popular</Text>

            { pizza.map( item => (
                <PizzaCard key={item.id} name={item.name} image={item.image} navigation={navigation} />
            )) }

        </View>
    );
}
