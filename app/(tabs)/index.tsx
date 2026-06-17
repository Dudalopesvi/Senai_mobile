import Clima from "@/components/clima";
import EventoLista from "@/components/evento-lista";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const onPress = () => {
    router.navigate("/modal");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Plus size={24} color="white" />
      </TouchableOpacity>
      <Clima />
      <Text style={styles.titulo}>Próximos eventos</Text>
      <EventoLista />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  }
});