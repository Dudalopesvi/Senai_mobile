import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

type Props = {
  clima: number;
};

const { width, height } = Dimensions.get('window');

export default function Clima({ clima }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Clima atual</Text>

      <Image
        source={{
          uri:
            clima === 0
              ? 'https://openweathermap.org/img/wn/01d@4x.png'
              : clima === 1
              ? 'https://openweathermap.org/img/wn/02d@4x.png'
              : clima === 2
              ? 'https://openweathermap.org/img/wn/03d@4x.png'
              : 'https://openweathermap.org/img/wn/04d@4x.png',
        }}
        style={styles.imagem}
        resizeMode="contain"
        fadeDuration={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 4,
  },

  texto: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
    
  },

  imagem: {
    width: width * 0.75,
    height: height * 0.28,
    marginTop: 20,
  },
});