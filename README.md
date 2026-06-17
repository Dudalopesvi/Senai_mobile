<div align="center">

# 📱 Senai Mobile

### Eventos da região + previsão do tempo, na palma da mão

App mobile feito em **React Native + Expo** para divulgar e gerenciar eventos do SENAI, SESI e da Grande Florianópolis, com previsão do tempo em tempo real direto na tela inicial.

[![Expo](https://img.shields.io/badge/Expo-~54-000020?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=black)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo Router](https://img.shields.io/badge/Expo%20Router-file--based-4630EB)](https://docs.expo.dev/router/introduction)
[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey)](#)

</div>

---

## ✨ Visão geral

A tela inicial reúne, de forma simples, tudo que o usuário precisa saber antes de sair de casa: **a temperatura do dia** e **os próximos eventos** da região. Quer divulgar um evento novo? Um toque no botão flutuante abre um formulário completo, com validação de dados em tempo real.

## 🚀 Funcionalidades

| | |
|---|---|
| 🌤️ **Clima em tempo real** | Temperatura e condição do tempo de Florianópolis/SC, via API Open-Meteo |
| 📅 **Próximos eventos** | Cards com imagem, título, descrição, data, local e valor do ingresso |
| 🎟️ **Reserva de ingressos** | Contador de quantidade + botão de reserva em cada card |
| ➕ **Cadastro de evento** | Modal com formulário validado (título, descrição, local, data e valor) |
| 🌗 **Tema claro/escuro** | Se adapta automaticamente ao esquema de cores do sistema |
| 🧭 **Navegação por abas** | Home e Explore, com roteamento baseado em arquivos (Expo Router) |

## 📸 Preview

> *Adicione aqui screenshots ou um GIF do app em ação — facilita muito a vida de quem está conhecendo o projeto pela primeira vez.*

<div align="center">
<table>
<tr>
<td align="center">🏠 <br><b>Home</b></td>
<td align="center">🎫 <br><b>Detalhe do evento</b></td>
<td align="center">➕ <br><b>Novo evento</b></td>
</tr>
<tr>
<td><img src="docs/screenshot-home.png" width="220"/></td>
<td><img src="docs/screenshot-evento.png" width="220"/></td>
<td><img src="docs/screenshot-modal.png" width="220"/></td>
</tr>
</table>
</div>

## 🛠️ Tecnologias

- [Expo](https://expo.dev) `~54`
- [Expo Router](https://docs.expo.dev/router/introduction) — navegação por arquivos
- React Native `0.81` + React `19`
- TypeScript
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) — animações
- [lucide-react-native](https://lucide.dev) — ícones
- [Open-Meteo API](https://open-meteo.com) — dados climáticos

## 📂 Estrutura do projeto

```
app/
├─ (tabs)/
│  ├─ index.tsx        # 🏠 Home: clima + lista de eventos
│  ├─ explore.tsx       # 🧭 Tela de exemplos do template Expo
│  └─ _layout.tsx        # Navegação por abas
├─ modal.tsx              # 📝 Formulário de cadastro de evento
└─ _layout.tsx             # Layout raiz (tema, stack de navegação)

components/
├─ clima.tsx               # 🌤️ Widget de previsão do tempo
├─ evento-lista.tsx          # 📋 Lista de eventos (mock de dados)
├─ evento-item.tsx           # 🎟️ Card individual de evento
└─ ...                        # Componentes de UI do template

constants/theme.ts             # 🎨 Cores e fontes do app
hooks/use-color-scheme.ts       # 🌗 Hook de tema claro/escuro
assets/images/                   # 🖼️ Ícones e imagens estáticas
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- npm (ou yarn/pnpm)
- [Expo Go](https://expo.dev/go) no celular, **ou** um emulador Android/iOS configurado

## 📦 Instalação

```bash
git clone <url-do-repositorio>
cd Senai_mobile
npm install
```

## ▶️ Executando o projeto

```bash
npx expo start
```

No terminal, escolha como abrir o app:

- 🏗️ [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- 🤖 emulador Android
- 🍎 simulador iOS
- 📱 [Expo Go](https://expo.dev/go) — testa rapidinho no próprio celular
- 🌐 navegador web (pressione `w` no terminal)

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento do Expo |
| `npm run android` | Abre o app no emulador/dispositivo Android |
| `npm run ios` | Abre o app no simulador iOS |
| `npm run web` | Abre o app no navegador |
| `npm run lint` | Executa o ESLint no projeto |
| `npm run reset-project` | Reseta o projeto para o estado inicial do template Expo |

## 🗺️ Roadmap

- [ ] Conectar a lista de eventos a uma API/backend real (hoje os dados são mockados em `evento-lista.tsx`)
- [ ] Persistir os eventos cadastrados pelo modal
- [ ] Permitir busca por cidade na tela de clima
- [ ] Tela de detalhes do evento
- [ ] Autenticação de usuário

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 📚 Aprenda mais

- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do Expo Router](https://docs.expo.dev/router/introduction)

---

<div align="center">
Feito com 💙 usando React Native + Expo
</div>
