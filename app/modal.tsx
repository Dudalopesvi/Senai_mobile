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

export default function ModalScreen() {
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");

  const onCancel = () => {
    router.back();
  };

  const onSubmit = () => {
    // Validação Título
    if (titulo.length < 3 || titulo.length > 256) {
      Alert.alert("Erro", "Título deve ter entre 3 e 256 caracteres.");
      return;
    }

    // Validação Descrição
    if (descricao.length < 3 || descricao.length > 256) {
      Alert.alert("Erro", "Descrição deve ter entre 3 e 256 caracteres.");
      return;
    }

    // Validação Local
    if (local.length < 3 || local.length > 256) {
      Alert.alert("Erro", "Local deve ter entre 3 e 256 caracteres.");
      return;
    }

    // Validação Data (maior que hoje e menor que 1 ano)
    const dataEvento = new Date(data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const umAno = new Date();
    umAno.setFullYear(umAno.getFullYear() + 1);

    if (isNaN(dataEvento.getTime())) {
      Alert.alert("Erro", "Data inválida. Use o formato AAAA-MM-DD.");
      return;
    }
    if (dataEvento <= hoje) {
      Alert.alert("Erro", "A data deve ser maior que a data atual.");
      return;
    }
    if (dataEvento > umAno) {
      Alert.alert("Erro", "A data deve ser menor que 1 ano a partir de hoje.");
      return;
    }

    // Validação Valor
    const valorNum = parseFloat(valor.replace(",", "."));
    if (isNaN(valorNum) || valorNum < 1 || valorNum > 1000) {
      Alert.alert("Erro", "Valor deve ser entre R$ 1,00 e R$ 1.000,00.");
      return;
    }

    Alert.alert("Sucesso", "Evento criado com sucesso!");
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do evento"
        value={titulo}
        onChangeText={setTitulo}
        maxLength={256}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe a descrição"
        value={descricao}
        onChangeText={setDescricao}
        maxLength={256}
      />

      <Text style={styles.label}>Local</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o local"
        value={local}
        onChangeText={setLocal}
        maxLength={256}
      />

      <Text style={styles.label}>Data</Text>
      <TextInput
        style={styles.input}
        placeholder="AAAA-MM-DD"
        value={data}
        onChangeText={setData}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

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
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 4,
    color: "#333",
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