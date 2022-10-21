import { View, Text, StyleSheet, Image } from 'react-native';
import { Themes } from '../assets/Themes';

const Navigation = ({ name }) => {


    return (
      <View style={styles.container}>
            <Image 
              source={require('../assets/Icons/menu_light.png')}
              style={styles.nav_logos}
            />
            <Text style = {styles.header}>ensom</Text>
            <Image
              source={require('../assets/Icons/sun.png')}
              style={styles.nav_logos}
            />
      </View>
    );
};


  
export default Navigation
  
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 8,
    height: Platform.OS === 'ios' ? 41 : 54,
      marginBottom: 40
     
        //how do I change this and it doesn't go away?
    }, 
    nav_logos: {
        height: 40,
        color: Themes.light.light,
      width: 40,
        
  } ,
    header: {
      fontSize: 32,
      color: Themes.light.light,
      alignItems: 'center',
      fontFamily: 'SydneyBold'
    }
  });
