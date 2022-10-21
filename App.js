import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Platform } from 'react-native';
import Navigation from './components/Navigation';
import MTL from './components/MTL';
import Audio from './components/Audio'
import Footer from './components/Footer';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */


  return (
    <SafeAreaView style={styles.container}>
  
      <Navigation/>
      <View style={styles.body}>
        <MTL />
        <Audio />
      </View>
      <Footer></Footer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Themes.light.bg,
    paddingTop: '5%',
    flexDirection: "column",
    flex: 1,
  },
  body: {
    flex: 2,
    alignItems:'center',
    width: '100%'
  },
  navbar: {
    flex: 1, 
  }, 
  profiilepic: {
    flex: 1, 
  }, 
  audioclip: {
    flex: 1,

  }, 
});
