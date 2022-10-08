import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfos: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})
 
const App = () => {
  const char = '-'

  return(
    <ScrollView>
      <View style={styles.containerLogo}>
        <View style={styles.frame}>
          <Image 
            source={{ uri: 'https://entirelyextreme.com/wp-content/uploads/2018/08/foundation-logo.png?ezimgfmt=rs:362x362/rscb1/ng:webp/ngcb1' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Marcos Henrique da </Text>
        <Text style={styles.text}>{char} 22 anos</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} FATEC - interrompido </Text>
        <Text style={styles.text}>{char} FIAP </Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Operador de Caixa</Text>
        <Text style={styles.text}>{char} Auxiliar de Produção - atual</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Atribuições</Text>
        <Text style={styles.text}>{char} Responsavel pelo setor de nhoque</Text>
      </View>
    </ScrollView>
  )
}
 
export default App;