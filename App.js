import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import api from './src/Api';
import ItemUsuario from './src/components/ItemUsuario';


export default function App() {
  const [iptNome, setIptNome] = useState('');
  const [usuario, setUsuario] = useState([]);

  async function addUsuario() {
    // Sem axios
    // const response = await fetch(`https://api.github.com/users/${iptNome}`);
    // const responseJson = await response.json();

    if(!iptNome){
      alert('Preencha o campo');
      return;
    }

    try{
      const response = await api.get(`/users/${iptNome}`);

      const n = Math.floor(Math.random() * 900 + 20);
  
      const { id: idUsuario, name: nome, bio, avatar_url, html_url, followers, following, public_repos } = response.data;
  
      if(nome === null){
        alert('Usuário indefinido');
        setIptNome(``);
        return;
      }

      const novoUsuario = [...usuario];
      novoUsuario.push({
        id: n.toString(),
        idUsuario,
        nome: nome,
        bio,
        avatar_url,
        html_url,
        followers,
        following,
        public_repos,
      });
  
      setUsuario(novoUsuario);
      setIptNome(``);
    }catch(e){
      alert('Usuário não existe');
      setIptNome(``);
    }
    

  }


  return (
    <View style={container}>
      <ImageBackground source={require('./src/img/fundo.jpg')} style={bImage}>
        <View>
          <TextInput style={input} placeholder='Digite o login do usuário'
            value={iptNome}
            onChangeText={(value) => { setIptNome(value) }} />
        </View>
        <TouchableOpacity onPress={() => addUsuario()} style={botao}>
          <Text style={textBotao}>Buscar</Text>
        </TouchableOpacity>

        <FlatList data={usuario}
          renderItem={(item, index) => <ItemUsuario data={item} />}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#8849FF',
  },

  bImage: {
    flex: 1,
    width: null,
  },

  input: {
    margin: 10,
    backgroundColor: '#FFF',
    fontSize: 15,
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    borderWidth: 0,
  },

  botao: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    backgroundColor: '#5E9CFE',
    borderRadius: 15,
  },

  textBotao: {
    color: '#FFF',
    fontSize: 15,
  },

});

const { container, bImage, input, botao, textBotao } = estilos;