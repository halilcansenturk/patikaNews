import { FlatList, StyleSheet, Text, View } from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />; //daha kullanışlı performans açısından #1
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews} //böyle kullanmak performans açısından #1
      />
    </View>
  );
}
//leptop güncellenmiş hali
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
});
