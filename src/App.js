import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />; //daha kullanışlı performans açısından #1
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <Banner />}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews} //böyle kullanmak performans açısından #1
      />
    </View>
  );
}
//leptop güncellenmiş hali
//masaüstü güncellenmiş hali
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 50,
  },
});
