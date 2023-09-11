import { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../static/styles';
import utils from '../static/utils';


export default function PizzaCard({ name, image, navigation }) {

    const [addToCartIcon, setAddToCartIcon] = useState('+');
    const addedIcon = <FontAwesome name="check" color="black" size={36} />
    
    function addToCart() {
        if (addToCartIcon == '+')
            setAddToCartIcon( addedIcon );
        else
            setAddToCartIcon('+');
    }
    
return (
	<TouchableOpacity style={utils('m2 row rounded5 bgWhite overflowHidden shadowDark2')} onPress={() => navigation.navigate('Details', {name, image})}>
			<View style={utils('pl3 jcBetween')}>

				<View style={utils('row aiBaseline pt2')}>
					<FontAwesome5 name="crown" color="gold" size={16} />
					<Text style={utils('fwBold ps2 ml1')}>
						top of the week
					</Text>
				</View>

				<View>
					<Text style={utils('fwBold mt1')}>
                        { name }
					</Text>
					<Text style={utils('tSecondary fs0')}>
						Weight 540gr
					</Text>
				</View>

				<View style={utils('row jcBetween aiCenter')}>
					<TouchableOpacity style={[styles.addToCart, utils('bgWarning pv1')]} onPress={addToCart}>
						<Text style={utils('fs4 tCenter')}>
							{ addToCartIcon }
						</Text>
					</TouchableOpacity>

					<Text style={utils('fwBold')}>
						<FontAwesome name="star" color="black" size={12} /> 5.0
					</Text>
				</View>
			</View>

			<View>
				<Image source={image} />
			</View>
		</TouchableOpacity>
	);
}

