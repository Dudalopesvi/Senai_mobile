import React from 'react';
import { FlatList } from 'react-native';
import EventoItem from './evento-item';

const eventos = [
    {
        id: '1',
        titulo: 'Pesca da Tainha',
        imagem:
            'https://luxuryhomefloripa.com/wp-content/uploads/2024/05/pexels-cassiano-psomas-4091901-scaled.webp',
        descricao: 'A pesca da tainha será intensa no Pântano do Sul',
        local: 'Pântano do Sul, Florianópolis/SC',
        data: '30/Maio',
        valor: 99.99
    },
    {
        id: '2',
        titulo: 'Arrial do Senai',
        imagem: 'https://www.uema.br/wp-content/uploads/2017/07/arraial.jpg',
        descricao: 'Muita festa, quentão e pipoca',
        local: 'Distrito Industrial, São José/SC',
        data: '25/Junho',
        valor: 25.50
    },
    {
        id: '3',
        titulo: 'Arrial do Sesi',
        imagem:
            'https://www.blocosderua.com/belo-horizonte/wp-content/uploads/sites/7/2025/06/3-1024x576.png',
        descricao: 'Muitos prêmios e diversão',
        local: 'Pagani, Palhoça/SC',
        data: '12/Junho',
        valor: 49.90
    }
];

export default function EventoLista() {
    return (
        <FlatList
            data={eventos}
            renderItem={({ item }) => (
                <EventoItem
                    titulo={item.titulo}
                    descricao={item.descricao}
                    imagem={item.imagem}
                    local={item.local}
                    data={item.data}
                    valor={item.valor}
                />
            )}
            keyExtractor={(item) => item.id}
        />
    );
}