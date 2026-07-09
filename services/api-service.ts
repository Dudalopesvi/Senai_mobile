import axios from "axios";

const BASE_URL = "https://senai-evento.onrender.com/meu_app/eventos";

export async function criarEvento(evento: any) {
  /* Criar um novo evento na plataforma */

  const response = await axios.post(BASE_URL, evento);

  return response.data;
}

export async function atualizarEvento(eventoId: string, evento: any) {
  /* Atualizar informações do evento na plataforma */

  const response = await axios.put(`${BASE_URL}/${eventoId}`, evento);

  return response.data;
}

export async function excluirEvento(eventoId: string) {
  /* Excluir evento na plataforma */

  await axios.delete(`${BASE_URL}/${eventoId}`);
}

export async function consultarEventos() {
  /* Consultar eventos na plataforma */

  const response = await axios.get(`${BASE_URL}/`);

  return response.data;
}