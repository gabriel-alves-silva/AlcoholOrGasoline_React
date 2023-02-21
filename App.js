import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import Result from "./src/Components/Result";
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gasoline: 0.0,
      alcohol: 0.0,
      theBestOption: '',
      modalVisible: false
    }

    this.calculate = this.calculate.bind(this);
    this.changeModalVisible = this.changeModalVisible.bind(this);
    this.execute = this.execute.bind(this);
  }

  calculate() {

    let alcohol = this.state.alcohol;
    let gasoline = this.state.gasoline;
    if ((alcohol / gasoline) <= 0.7) {
      this.setState({ theBestOption: 'Álcool' })
    } else {
      this.setState({ theBestOption: 'Gasolina' })
    }
  }

  changeModalVisible() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }
  execute() {
    this.calculate();
    this.changeModalVisible();
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.img_text_center}>
          <Image
            source={require('./src/img/logo.png')}
          />
          <Text style={styles.question}>Qual é a melhor opção?</Text>
        </View>

        <View style={styles.areaInput}>

          <Text style={styles.textInput}>Gasolina(Preço por litro):</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            value={this.state.gasoline}
            onChangeText={(newInput) => this.setState({ gasoline: newInput })}
          />

          <Text style={styles.textInput}>Álcool(Preço por litro):</Text>
          <TextInput
            style={styles.input}
            value={this.state.alcohol}
            onChangeText={(newInput) => this.setState({ alcohol: newInput })}
          />

          <View style={styles.areaBtn}>
            <TouchableOpacity
              onPress={this.execute}

              style={styles.btn}
            >
              <Text style={styles.textBtn}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={this.state.modalVisible}
          animationType="fade"
        >
          <Result alcohol={this.state.alcohol}
            gasoline={this.state.gasoline}
            theBestOption={this.state.theBestOption}
            changeModalVisible={() => this.changeModalVisible}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#ff0000'
  },
  img_text_center: {
    justifyContent: "center",
    alignItems: 'center',
    height: '50%'
  },
  question: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25
  },
  areaInput: {
    flex: 1,
    margin: 20,

  },
  textInput: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  areaBtn: {
    alignItems: 'center'
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: '#000',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  textBtn: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});