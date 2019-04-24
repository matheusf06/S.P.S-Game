import * as React from 'react';
import { Text, View, StyleSheet, Imagem, TouchableOpacity, Image, Alert } from 'react-native';

export default class Game extends React.Component {constructor(props) {
    super(props);
    this.state = { escolhaPLAYER: '',
                   escolhaPC: ''};
  }
  
  vitoria = () => {
    Alert.alert(
      'Vitoria',
      'Voce ganhou!',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );  
  }
  
  empate= () => {
    Alert.alert(
      'Empate',
      'Voce empatou com o adversario!',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );  
  }
  
  derrota= () => {
    Alert.alert(
      'Derrota',
      'Voce perdeu!',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );  
  }

  escolher = (escolha) => {
    var random_number = Math.floor(Math.random() * 3);
    var resultado = '';
    var escolhaPC = '';

    if(random_number == 0){
      //this.state.escolhaPc == Pedra
      if(escolha == 'Pedra'){
        escolhaPC = 'Pedra';
        this.empate();
      }
      
      if(escolha == 'Papel'){
        escolhaPC = 'Pedra';
        this.vitoria();
      }
      
      if(escolha == 'Tesoura'){
        escolhaPC = 'Pedra';
        this.derrota();
      }
    }
    
    if(random_number == 1){
      //this.state.escolhaPc == Papel
      if(escolha == 'Papel'){
        escolhaPC = 'Papel';
        this.empate();
      }
      
      if(escolha == 'Tesoura'){
        escolhaPC = 'Papel';
        this.vitoria();
      }
      
      if(escolha == 'Pedra'){
        escolhaPC = 'Papel';
        this.derrota();
      }
    }
    
    if(random_number == 2){
      //this.state.escolhaPc == Tesoura
      if(escolha == 'Tesoura'){
        escolhaPC = 'Tesoura';
        this.empate();
      }
      
      if(escolha == 'Pedra'){
        escolhaPC = 'Tesoura';
        this.vitoria();
      }
      
      if(escolha == 'Papel'){
        escolhaPC = 'Tesoura';
        this.derrota();
      }
    }

    this.setState({escolhaPLAYER: escolha,
                   escolhaPC: escolhaPC});
  }
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.title}> Escolha uma das opções abaixo:</Text>

       <View style={styles.imagesdisplay}>
          <TouchableOpacity onPress={() => this.escolher('Pedra')}>
          <Image
            style={styles.images}
            source={require('./imgs/rock.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.escolher('Papel')}>
          <Image
            style={styles.images}
            source={require('./imgs/paper.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.escolher('Tesoura')}>
          <Image
            style={styles.images}
            source={require('./imgs/scissors.png')}
          />
        </TouchableOpacity>
       </View>
      
        <View style={styles.view}>          
          <View style={styles.resultados}>            
            <Text style={styles.resultadosTitle}>Player:</Text>
            <Text>{this.state.escolhaPLAYER}</Text> 
          </View>
          
          
          <View style={styles.resultados}>
            <Text style={styles.resultadosTitle}>PC:</Text>
            <Text>{this.state.escolhaPC}</Text> 
          </View>       
        </View>
                      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    backgroundColor: `#ffffff`,
    height: 195,
    width: 195,    
  },
  images:{
    width: 130,
    height: 130,
  },
  imagesdisplay: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 55,
    marginBottom: 35,
  },
  title:{
    fontSize: 19,
    fontWeight: 'bold',
  },
  resultados:{
    padding: 15
  },
  resultadosTitle:{
    fontSize: 14,
    fontWeight: 'bold',
  }
});
