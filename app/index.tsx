  import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

  export default function index() {
    
    // Arrow Function: revisar em minhas anotações do curso Udemy.
    const cell = () => {
      return(
        <TouchableOpacity style={style.square}>
          <Text style={style.symbol}>X</Text>
        </TouchableOpacity> 
      );
    };

    return (
      <View style={style.container}>
        <Text style={style.title}>Jogo da Velha</Text>
        <Text style={style.status}>Vencedor</Text>

        <View style={style.board}>
          <View style={style.row}>
            {cell()}
            {cell()}
            {cell()}
          </View>
          <View style={style.row}>
            {cell()}
            {cell()}
            {cell()}
          </View>
          <View style={style.row}>
            {cell()}
            {cell()}
            {cell()}
          </View>
        </View>
      </View>
    )
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgb(194, 255, 252)"
    },

    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },

    status: {
      fontSize: 18,
      marginBottom: 20,
    },

    board: {
      marginBottom: 20,
    },

    row: {
      flexDirection: "row",
    },

    square: {
      width: 80,
      height: 80,
      borderWidth: 2,
      borderColor: "#333333",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "FFFFFF",
    },

    symbol: {
      fontSize: 26,
      fontWeight: "bold",
    },
  })