import Clima from "@/components/clima";
import EventoItem from "@/components/evento-item";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();

  const onPress = () => {
    router.navigate("/modal");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.fab} activeOpacity={0.7} onPress={onPress}>
        <Plus size={24} color="white" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Clima />

        <Image
          source={require("@/assets/images/download.jpg")}
          style={styles.imagemPesca}
          resizeMode="cover"
        />
        <EventoItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingHorizontal: 8,
    paddingBottom: 100,
  },
  titulo: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: "700",
  },
  imagemPesca: {
    width: width - 16,
    height: 250,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 6,
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF",
    borderRadius: 28,
    elevation: 10,
    zIndex: 10,
  },
});