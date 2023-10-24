import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
        width: "100%",
      },
    secondSection: {
        flex: 2,
        backgroundColor: "white",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between",
    },
    title:{
        fontSize: 48,
        color: "white",
        fontWeight: "bold",
    },
    label: {
        color: "#78828c",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    forgotPassword: {
        color: "#78828c",
        textAlign: "right",
    },
    button: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    }, 
    singup: {
        color: "black",
        paddingLeft: 5,
    },

    ttname: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    }
})
