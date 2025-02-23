import React from "react";
import { ScrollView, Image } from "react-native";
import news_banner_data from "../../news_banner_data.json";
import styles from "./Banner.style";

const Banner = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map((bannerNews) => (
        <Image
          key={bannerNews.id}
          style={styles.bannerImage}
          source={{ uri: bannerNews.imageUrl }}
        />
      ))}
    </ScrollView>
  );
};

export default Banner;
