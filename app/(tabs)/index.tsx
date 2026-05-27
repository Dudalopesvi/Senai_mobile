import { StyleSheet, View } from 'react-native';
import EventoItem from '../../components/evento-item';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <EventoItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 8,
    marginRight: 8
  }
});
