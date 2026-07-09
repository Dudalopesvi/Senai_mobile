import { Calendar, MapPin, Ticket } from 'lucide-react-native';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

const QUANTIDADE_MINIMA = 1;
const QUANTIDADE_MAXIMA = 10;

interface EventoItemProps {
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
  local: string;
  valor: number;
}

export default function EventoItem({
  titulo,
  descricao,
  imagem,
  data,
  local,
  valor
}: EventoItemProps) {
  const [quantidade, setQuantidade] = useState(QUANTIDADE_MINIMA);

  const aumentar = () => {
    setQuantidade((atual) => Math.min(atual + 1, QUANTIDADE_MAXIMA));
  };

  const diminuir = () => {
    setQuantidade((atual) => Math.max(atual - 1, QUANTIDADE_MINIMA));
  };

  const formatarValor = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <View style={styles.container}>
      <View style={styles.evento}>
        <Image style={styles.imagem} source={{ uri: imagem }} />
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <View style={styles.icone}>
          <Calendar size={14} color="gray" />
          <Text style={styles.texto}>{data}</Text>
        </View>
        <View style={styles.icone}>
          <MapPin size={14} color="gray" />
          <Text style={styles.texto}>{local}</Text>
        </View>
        <View style={styles.icone}>
          <Ticket size={14} color="gray" />
          <Text style={styles.texto}>{formatarValor(valor)}</Text>
        </View>
      </View>
      <View style={styles.reserva}>
        <View style={styles.contador}>
          <Button
            title="-"
            onPress={diminuir}
            disabled={quantidade <= QUANTIDADE_MINIMA}
          />
          <Text style={styles.quantidade}>{quantidade}</Text>
          <Button
            title="+"
            onPress={aumentar}
            disabled={quantidade >= QUANTIDADE_MAXIMA}
          />
        </View>
        <View>
          <Button
            title="reservar"
            onPress={() =>
              Alert.alert(
                'Reserva efetuada',
                `${quantidade} ingresso(s) para "${titulo}" reservado(s) com sucesso.`
              )
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },
  evento: {
    padding: 12
  },
  imagem: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 8
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  descricao: {
    fontSize: 13,
    color: '#444',
    marginBottom: 8
  },
  icone: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 6
  },
  texto: {
    fontSize: 13,
    color: 'gray'
  },
  reserva: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 12
  },
  contador: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  quantidade: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});