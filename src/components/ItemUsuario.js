import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Linking } from 'react-native';


export default function App(props) {
    const estilos = StyleSheet.create({

        viewItem: {
            margin: 5,
            marginBottom: 30,
            marginTop: 60,
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
            backgroundColor: '#22269E',
        },

        viewImg: {
            marginTop: -40,
            alignItems: 'center',
            justifyContent: 'center',
        },

        imgItem: {
            width: 150,
            height: 150,
        },


        viewTitulo: {
            justifyContent: 'center',
            alignItems: 'center',
        },

        textTitulo: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#FFF',
        },

        textBio: {
            marginTop: 5,
            fontSize: 20,
            color: '#CCC',
        },

        viewConteudo: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
        },

        textConteudo: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFF',
        },

        textConteudo2: {
            fontSize: 16,
            color: '#FFF',
        },

        viewRodape: {
            alignItems: 'flex-end',
        },

        botao: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            width: 200,
            marginRight: 15,
            marginLeft: 15,
            marginTop: 15,
            backgroundColor: '#5E9CFE',
        },

        textBotao: {
            color: '#FFF',
            fontSize: 15,
        },

    });

    const { viewItem, viewImg, imgItem, textTitulo, textBotao, botao, viewRodape,
        viewTitulo, textBio, viewConteudo, textConteudo, textConteudo2 } = estilos;

    const { id, idUsuario, nome, bio, avatar_url,
        html_url, public_repos, followers, following } = props.data.item;

    return (
        <View style={viewItem}>
            <View style={viewImg}>
                <Image source={{ uri: avatar_url }} style={imgItem} />
            </View>
            <View style={viewTitulo}>
                <Text style={textTitulo}>{nome}</Text>
                <Text style={textBio}>{bio}</Text>
            </View>
            <View style={viewConteudo}>
                <Text style={textConteudo}>Seguidores</Text>
                <Text style={textConteudo}>Seguindo</Text>
                <Text style={textConteudo}>Repositorios</Text>
            </View>
            <View style={viewConteudo}>
                <Text style={textConteudo2}>{followers}</Text>
                <Text style={textConteudo2}>{following}</Text>
                <Text style={textConteudo2}>{public_repos}</Text>
            </View>
            <View style={viewRodape}>
                <TouchableOpacity style={botao} onPress={() => Linking.openURL(`${html_url}`)}>
                    <Text style={textBotao}> Acessar perfil no GitHub </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}