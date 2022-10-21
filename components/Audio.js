import { View, Text, StyleSheet, Image } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Themes } from "../assets/Themes";

const Audio = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>My hottest take</Text>
      </View>
      <View style={styles.icons}>
        <Image
          source={require("../assets/Icons/player_light.png")}
          style={styles.player}
        />
        <Image
          source={require("../assets/Icons/audio_waveform_light.png")}
          style={styles.audio}
        />
      </View>
    </View>
  );
};

export default Audio;

const styles = StyleSheet.create({
    container: {
      width: '80%',
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
        flexDirection: "column",
    
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  player: {
    height: 50,
    width: 50,
    alignItems: "center",
  },
  audio: {
    width: '80%',
    height: '60%',
    marginLeft: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: Themes.light.text,
    flexDirection: "row",
    fontFamily: "Sydney",
  },
});
