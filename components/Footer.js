import { View, Text, StyleSheet, Image } from "react-native";
import { SectionList } from "react-native-web";
import { Themes } from "../assets/Themes";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.section}>
          <Image
            source={require("../assets/Icons/discover_light_legacy.png")}
            style={styles.icons}
          />
          <Text style={styles.paragraph}>Discover</Text>
        </View>
        <View style={styles.section}>
          <Image
            source={require("../assets/Icons/heart_light.png")}
            style={styles.icons}
          />
          <Text style={styles.paragraph}>Matches</Text>
        </View>
        <View style={styles.section}>
          <Image
            source={require("../assets/Icons/messages_light.png")}
            style={styles.icons}
          />
          <Text style={styles.paragraph}>DMs</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: "13%",
    width: "100%",
    padding: 20,
    bottom: 0,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icons: {
    // marginLeft: 25,
    // marginRight: 25,
    // aspectRatio: 1,
    height: 30,
    width: 30,
  },
  section: {
    flexDirection: "column",
    alignItems:'center'
  },
  paragraph: {
    marginTop: 15,
    color: "white",
    fontSize: 20,
    fontFamily: "Sydney",
  },
});
