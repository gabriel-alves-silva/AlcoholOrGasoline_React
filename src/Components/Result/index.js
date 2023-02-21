import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Result extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>A melhor opção é: {this.props.theBestOption}</Text>

        <Text style={styles.text}>Gasolina: R${parseFloat(this.props.gasoline).toFixed(2)}</Text>
        <Text style={styles.text}>Álcool: R${parseFloat(this.props.alcohol).toFixed(2)}</Text>


        <View style={styles.areaBtn}>
          <TouchableOpacity
            onPress={this.props.changeModalVisible()}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    padding: 20,

  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  },
  areaBtn: {
    alignItems: 'center',
    height: 50,
    marginTop: 100
  },
  btn: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  textBtn: {
    fontSize: 25,
    fontWeight: "bold"
  }
});