import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const imagensClima: Record<number, { uri: string }> = {
  0: { uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png' },
  1: { uri: 'https://cdn-icons-png.flaticon.com/512/414/414927.png' },
  2: { uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png' },
  3: { uri: 'https://cdn-icons-png.flaticon.com/512/414/414825.png' },
};

export default function Clima() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-27.597&longitude=-48.5494&current=temperature_2m,weather_code'
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator />;

  const weatherCode: number = data?.current?.weather_code ?? 0;
  const imagem = imagensClima[weatherCode] ?? imagensClima[0];

  return (
    <View style={styles.container}>
      <Image style={styles.icone} source={imagem} />
      <Text style={styles.temperatura}>{Math.ceil(data?.current?.temperature_2m)}º</Text>
      <Text>{weatherCode}</Text>
      <Text>Florianópolis, SC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icone: {
    width: 64,
    height: 64,
  },
  temperatura: {
    fontSize: 52,
  },
});