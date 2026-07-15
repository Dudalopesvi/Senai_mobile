import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { criarEvento } from "../services/api-service";

dayjs.extend(customParseFormat);

export default function ModalScreen() {
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [tituloErro, setTituloErro] = useState("");

  const [descricao, setDescricao] = useState("");
  const [descricaoErro, setDescricaoErro] = useState("");

  const [local, setLocal] = useState("");
  const [localErro, setLocalErro] = useState("");

  const [data, setData] = useState("");
  const [dataErro, setDataErro] = useState("");

  const [valor, setValor] = useState("");
  const [valorErro, setValorErro] = useState("");

  const temErros = () => {
    let isErro = false;

    if (titulo.length < 3 || titulo.length > 64) {
      setTituloErro("Título deve ter entre 3 e 64 caracteres.");
      isErro = true;
    }

    if (descricao.length < 3 || descricao.length > 64) {
      setDescricaoErro("Descrição deve ter entre 3 e 64 caracteres.");
      isErro = true;
    }

    if (local.length < 3 || local.length > 64) {
      setLocalErro("Local deve ter entre 3 e 64 caracteres.");
      isErro = true;
    }

    // A API espera a data no formato DD/MM/AAAA (igual ao exemplo do professor).
    const dataEvento = dayjs(data, "DD/MM/YYYY", true);
    const hoje = dayjs().startOf("day");
    const dataMaxima = dayjs().add(1, "year");

    if (!dataEvento.isValid()) {
      setDataErro("Data inválida. Use o formato DD/MM/AAAA.");
      isErro = true;
    } else if (dataEvento.isBefore(hoje) || dataEvento.isSame(hoje)) {
      setDataErro("A data deve ser maior que a data atual.");
      isErro = true;
    } else if (dataEvento.isAfter(dataMaxima)) {
      setDataErro(
        `A data deve ser menor que ${dataMaxima.format("DD/MM/YYYY")}.`
      );
      isErro = true;
    }

    const valorNum = Number(valor.replace(",", "."));
    if (isNaN(valorNum) || valorNum < 1 || valorNum > 1000) {
      setValorErro("Valor deve ser entre R$ 1,00 e R$ 1.000,00.");
      isErro = true;
    }

    return isErro;
  };

  const clear = () => {
    setTituloErro("");
    setDescricaoErro("");
    setLocalErro("");
    setDataErro("");
    setValorErro("");
  };

  const onCancel = () => {
    router.back();
  };

  const onSubmit = async () => {
    clear();

    if (temErros()) {
      return;
    }

    const valorNum = Number(valor.replace(",", "."));

    // Envia a data exatamente no formato que o usuário digitou (DD/MM/AAAA),
    // sem converter para ISO — é o formato que a API espera.
    const payload = {
      titulo,
      descricao,
      local,
      data,
      valor: valorNum,
    };
    console.log("Payload enviado:", JSON.stringify(payload));

    try {
      await criarEvento(payload);

      Alert.alert("Sucesso", "Evento criado com sucesso!");
      router.back();
    } catch (err: any) {
      const detalhes = err?.response?.data
        ? JSON.stringify(err.response.data)
        : err?.message ?? String(err);
      console.log("Erro ao criar evento:", err?.response?.status, detalhes);
      Alert.alert("Erro", `Erro ao criar evento: ${detalhes}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

      <Text style={styles.formularioRotulo}>Cadastrar novo evento</Text>

      <View style={styles.campoContainer}>
        <Text style={styles.campoRotulo}>Qual o título do evento?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Pesca da Tainha"
          value={titulo}
          onChangeText={setTitulo}
          maxLength={64}
        />
        <Text style={styles.campoErro}>{tituloErro}</Text>
      </View>

      <View style={styles.campoContainer}>
        <Text style={styles.campoRotulo}>Qual a descrição do evento?</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a descrição"
          value={descricao}
          onChangeText={setDescricao}
          maxLength={64}
        />
        <Text style={styles.campoErro}>{descricaoErro}</Text>
      </View>

      <View style={styles.campoContainer}>
        <Text style={styles.campoRotulo}>Qual a data do evento?</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={data}
          onChangeText={setData}
          keyboardType="numbers-and-punctuation"
          maxLength={10}
        />
        <Text style={styles.campoErro}>{dataErro}</Text>
      </View>

      <View style={styles.campoContainer}>
        <Text style={styles.campoRotulo}>Qual o local do evento?</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o local"
          value={local}
          onChangeText={setLocal}
          maxLength={64}
        />
        <Text style={styles.campoErro}>{localErro}</Text>
      </View>

      <View style={styles.campoContainer}>
        <Text style={styles.campoRotulo}>Qual o valor do ingresso?</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <Text style={styles.campoErro}>{valorErro}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoCancelar} onPress={onCancel}>
          <Text style={styles.textoCancelar}>cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoConfirmar} onPress={onSubmit}>
          <Text style={styles.textoConfirmar}>confirmar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  formularioRotulo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  campoContainer: {
    paddingVertical: 8,
  },
  campoRotulo: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  campoErro: {
    fontSize: 12,
    color: "red",
    marginTop: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#fafafa",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 24,
    gap: 12,
  },
  botaoCancelar: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textoCancelar: {
    fontSize: 14,
    color: "#333",
  },
  botaoConfirmar: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#007AFF",
  },
  textoConfirmar: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
});