import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import Ingredients from '../components/Ingredients';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../static/styles';
import utils from '../static/utils';

export default function Details({ navigation, route }) {

    const { name, image } = route.params;

    return (
        <View>
            <View style={utils('row jcBetween p1')}>
                <TouchableOpacity style={utils('b2 bSecondary rounded0 jcCenter aiCenter p2')} onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name="chevron-left" color="black" size={14} />
                </TouchableOpacity>
                <View style={utils('rounded0 bgWarning jcCenter aiCenter p2')}>
                    <FontAwesome name="star" color="white" size={14} />
                </View>
            </View>

            <View style={utils('pl2 mt3')}>
                <View>
                    <Text style={utils('fs5 fwBold')}>{ name }</Text>
                </View>
                <View>
                    <Text style={utils('fs5 fwBold')}>Pizza</Text>
                </View>

                <Text style={utils('fs4 mv3 tWarning')}>$5.99</Text>
            </View>

            <View style={utils('row pl2')}>
                <View>
                    <View>
                        <Text style={utils('tSecondary')}>Size</Text>
                        <Text style={utils('fs1 fwBold mb1')}>Medium 14"</Text>
                    </View>
                    <View>
                        <Text style={utils('tSecondary')}>Crust</Text>
                        <Text style={utils('fs1 fwBold mb1')}>Thin Crust</Text>
                    </View>
                    <View>
                        <Text style={utils('tSecondary')}>Delivery in</Text>
                        <Text style={utils('fs1 fwBold mb1')}>30 min</Text>
                    </View>
                </View>
                <View>
                    <Image source={image} />
                </View>
            </View>

        <View style={utils('pl2 overflowVisible')}>
            <Ingredients />
        </View>

            <TouchableOpacity style={[styles.orderButton, utils('pv3 ph5 m4 bgWarning')]} onPress={() => console.log('Oreder...')}>
                <Text style={utils('fwBold fs1 tCenter')}>
                    Place an order   <FontAwesome name="chevron-right" color="black" size={12} />
                </Text>
            </TouchableOpacity>

        </View>
    );
}
