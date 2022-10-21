import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Themes } from '../assets/Themes';


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width);
const imageWidth = dimensions.width*.8;

const MTL = () => {
  console.log(imageHeight);
    return (
      <View style={styles.container}>
            <ImageBackground 
              source={require('../assets/Profiles/mtl.jpg')}
          style={styles.profile}
          imageStyle={{borderRadius:16}}
        >
          <Text style={styles.mtl}>MTL</Text>
          <Text style = {styles.distance}>2 miles away</Text>
            </ImageBackground>
      </View>
    );
};


export default MTL
  
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column', 
    height: dimensions.height * 0.45,
    marginBottom: 20, 
    }, 
    profile: {
        bottom: 0,
      width: imageWidth,
      height: '100%',
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity, 
        shadowRadius: Themes.light.shadows.shadowRadius, 
      shadowOffset: Themes.light.shadows.shadowOffset,
      padding: 10
        
    },
  mtl: {
    fontFamily: 'Sydney',
    fontSize: 32,
    color: 'white', 
    marginBottom: '95%'
  },
  distance: {
    fontFamily: 'Sydney',
    fontSize: 20,
    color: 'white', 
    }

  });
