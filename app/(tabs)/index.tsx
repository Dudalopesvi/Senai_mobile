import Clima from '@/components/clima';
import EventoItem from '@/components/evento-item';

import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Clima clima={0} />

      <View style={styles.bannerContainer}>
        <Image
          source={require('../../assets/images/pesca.png')}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>

      <EventoItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },

  bannerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  banner: {
    width: width * 0.95,
    height: 180,
    borderRadius: 20,
  },
});