import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function EventoItem() {
  const evento = {
    titulo: "Pesca da Tainha",
    imagem: "https://oatlantico.com.br/wp-content/uploads/2023/08/Com-257-mil-tainhas-capturadas-em-Florianopolis-veja-pr",
    descricao: "A pesca da tainha será intensa no Pântano do Sul",
    data: "30/Maio",
    valor: 100
  }

  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.evento}>
        <Image style={styles.imagem} source={{ uri: evento.imagem }} />
        <Text style={styles.titulo}>{evento.titulo}</Text>
        <Text style={styles.descricao}>{evento.descricao}</Text>
        <Text style={styles.texto}>Quando: {evento.data}</Text>
        <Text style={styles.texto}>Valor: R$ {evento.valor}</Text>
      </View>
      <View style={styles.reserva}>
        <View style={styles.contador}>
          <Button title="+" onPress={() => setQuantidade(quantidade + 1)} />
          <Text style={styles.quantidade}>{quantidade}</Text>
          <Button title="-" onPress={() => setQuantidade(quantidade - 1)} />
        </View>
        <View>
          <Button title="reservar" onPress={() => Alert.alert("Reservar efetuada com sucesso")} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column'
    },
    evento: {
      flexDirection: 'column',
      marginTop: 20,
    },
    reserva: {
      flexDirection: 'row',
      gap: 8,
      marginTop: 20,
    },
    contador: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    },
    imagem: {
      width: 500,
      height: 200,
    },
    titulo: {
      fontSize: 28,
    },
    texto: {
      fontSize: 18,
    },
    valor: {
      fontSize: 18,
    },
    quantidade: {
      fontSize: 16,
    }
  });
  