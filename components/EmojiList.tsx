import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

interface Props {
  onCloseModal: () => void;
  onSelect: (image: ImageSourcePropType) => void;
}

export default function EmojiList({ onCloseModal, onSelect }: Props) {
  const [emoji] = React.useState([
    require("@/assets/images/emoji1.png"),
    require("@/assets/images/emoji2.png"),
    require("@/assets/images/emoji3.png"),
    require("@/assets/images/emoji4.png"),
    require("@/assets/images/emoji5.png"),
  ]);

  return (
    <FlatList
      horizontal
      data={emoji}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
