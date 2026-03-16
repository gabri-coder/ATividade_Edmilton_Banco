import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

        <View style = {styles.header}>
         <Image source={require('./assets/logo_banco_do_brasil.png')}
         style={styles.logo}
         ></Image>
         <Text style={styles.ola}>Olá, Gabriel Marques e Leonardo Marques</Text>
         </View>
         
        <View style ={styles.conteudo}>
         <View style={styles.card}>
            <Text style={styles.titulo}>Cartão de Crédito</Text>
            <Text style={styles.sub}>Fatura</Text>

            <Text style={styles.valor}>R$15.000,00</Text>

            <TouchableOpacity style={styles.botao}>
               <Text style={styles.botaoTexto}>Pagar fatura</Text>
            </TouchableOpacity>
         </View>
 
          <View style={styles.card}>
            <Text style={styles.titulo}>Conta</Text>
            <Text style={styles.sub}>Saldo disponivel</Text>

            <Text style={styles.valor}>R$100.000,00</Text>
            <TouchableOpacity style={styles.botao}>
               <Text style={styles.botaoTexto}>Transferir</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.meuCartao}>
            <Text style={styles.meuCartaoTexto}>Meus Cartões</Text>
</View>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1, 
     backgroundColor:"#FFF200",
  },
  
  header:{
     backgroundColor:"#FFF200",
     padding: 30,
     width: "100%",
  },
  
  logo: {
      width: 350,
      height: 60,
      resizeMode: "contain",
      marginBottom: 10
  },

  ola:{
    color: "black",
  },

  conteudo: {
    flex: 1,
    backgroundColor: "#1e59ae",
    padding: 30,
    borderRadius: 20

  },

  card:{
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30

  },

  titulo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16
  },

  sub:{
    color:  "#1E59AE",
    marginBottom:10
  },

  valor: {
    color:  "#1E59AE",
    fontSize: 24,
    fontWeight:"bold",
    marginBottom: 15
  },

  botao:{
    backgroundColor: "#1E59AE",
    padding: 10,
    borderRadius:10,
    width:120,
    alignItems: "center"
  },

  botaoTexto:{
    color: "#FFF"
  },

  meuCartao:{
    backgroundColor: "#FFF200",
    borderRadius: 20,
    padding:15,
    alignItems: "center"
  },

  meuCartaoTexto:{
    fontWeight: "bold"
  }


});

