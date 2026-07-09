import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

interface ClimaData {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}

// Códigos WMO (weather_code) da Open-Meteo agrupados por condição.
// Referência: https://open-meteo.com/en/docs (campo "WMO Weather interpretation codes")
const imagensClima: { codigos: number[]; uri: string; descricao: string }[] = [
  { codigos: [0, 1], uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png', descricao: 'Céu limpo' },
  { codigos: [2], uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png', descricao: 'Parcialmente nublado' },
  { codigos: [3], uri: 'https://cdn-icons-png.flaticon.com/512/414/414927.png', descricao: 'Nublado' },
  { codigos: [45, 48], uri: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png', descricao: 'Neblina' },
  { codigos: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], uri: 'https://cdn-icons-png.flaticon.com/512/414/414825.png', descricao: 'Chuva' },
  { codigos: [71, 73, 75, 77, 85, 86], uri: 'https://cdn-icons-png.flaticon.com/512/642/642102.png', descricao: 'Neve' },
  { codigos: [95, 96, 99], uri: 'https://cdn-icons-png.flaticon.com/512/1959/1959241.png', descricao: 'Tempestade' },
];

function obterImagemClima(weatherCode: number) {
  const encontrado = imagensClima.find((item) => item.codigos.includes(weatherCode));
  return encontrado ?? imagensClima[0];
}

export default function Clima() {
  const [data, setData] = useState<ClimaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-27.597&longitude=-48.5494&current=temperature_2m,weather_code'
        );

        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
        setErro(false);
      } catch (error) {
        console.error(error);
        setErro(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator />;

  if (erro || !data) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>Não foi possível carregar o clima agora.</Text>
        <Text>Florianópolis, SC</Text>
      </View>
    );
  }

  const weatherCode = data.current.weather_code;
  const imagem = obterImagemClima(weatherCode);

  return (
    <View style={styles.container}>
      <Image style={styles.icone} source={{ uri: imagem.uri }} />
      <Text style={styles.temperatura}>{Math.round(data.current.temperature_2m)}º</Text>
      <Text style={styles.condicao}>{imagem.descricao}</Text>
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
  condicao: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  erro: {
    color: 'red',
    marginBottom: 4,
    textAlign: 'center',
  },
});