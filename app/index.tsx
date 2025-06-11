import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

  export default function index() {
    
    type Player = "X" | "O" | null
    type Board = Player[];

    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
    const [winner, setWinner] = useState<Player | "draw">(null);
    
    const checkWinner = (squares: Board) => {
      const lines = [
        // Horizontal
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        // Vertical 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 7]
      ]

      for (const [a, b, c] of lines) {
        if  (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

          return squares[a];
        }
        return null;
      }
    }

    const checkDraw = (squares: Board) => {
      const check = (squares: Any) => squares !== null; 
      return squares.every(check) && !checkWinner(squares);
    }

    const handlePress = (index: number) => {

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")

      const gameWinner = checkWinner(newBoard);

      if (gameWinner) {
        setWinner(gameWinner);
        alert(`Jogador ${gameWinner} venceu!`)
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
      }
    };

    // Arrow Function: revisar em minhas anotações do curso Udemy.
    const cell = (index: number) => {
      return(
        <TouchableOpacity style={style.square} onPress={() => (handlePress(index))}>
          <Text style={style.symbol}>{board[index]}</Text>
        </TouchableOpacity> 
      );
    };

    return (
      <View style={style.container}>
        <Text style={style.title}>Jogo da Velha</Text>
        <Text style={style.status}>Vencedor</Text>

        <View style={style.board}>
          <View style={style.row}>
            {cell(0)}
            {cell(1)}
            {cell(2)}
          </View>
          <View style={style.row}>
            {cell(3)}
            {cell(4)}
            {cell(5)}
          </View>
          <View style={style.row}>
            {cell(6)}
            {cell(7)}
            {cell(8)}
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={ResetGame}>
        <Text>Reiniciar Jogo</Text>
      </TouchableOpacity>
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
      borderColor:"rgb(51, 51, 51)",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "FFFFFF",
    },

    symbol: {
      fontSize: 26,
      fontWeight: "bold",
    },
    resetButton: {
      padding: 10, 
      backgroundColor:"rgb(87, 180, 186)",
      borderRadius: 5,
      borderWidth: 2,
      borderColor:"rgb(0, 80, 76)",
    },
    resetText: {
        color:"rgb(253, 251, 238)",
        fontSize: 16,
        fontWeight: "bold",
    }
  })