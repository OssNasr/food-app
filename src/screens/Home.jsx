import { FlatList, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Categories from '../components/Categories';
import PopularSection from '../components/PopularSection';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import utils from '../static/utils';
import { styles } from '../static/styles';

export default function({ navigation }) {
        
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%'}}>

            <View style={utils('mh2 mt2 mb3 row jcBetween aiCenter')}>
                <View style={utils('rounded5 overflowHidden')}>
                    <Image source={require('../static/profile.png')} style={styles.profileImage} />
                </View>
                <FontAwesome5 name="bars" color="gray" size={28} />
            </View>

            <View style={utils('mh2')}>
                <Text style={utils('fs1')}>Food</Text>
                <Text style={utils('fs5')}>Delivery</Text>
            </View>

            <View style={utils('row aiEnd mv3 mh2')}>
                <FontAwesome5 name="search" size={24} color="gray" style={utils('f1')} />
                <TextInput placeholder="Search..." style={utils('bb2 bSecondary f11')} onBlur={() => Keyboard.dismiss()} />
            </View>


            <Categories />

            <PopularSection navigation={navigation}/>

        </ScrollView>
            
    );
}


