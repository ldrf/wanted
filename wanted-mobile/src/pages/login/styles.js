import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#8d59a5",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginText:{        
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        color:"purple"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#E6DFFE",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:5
      },
      forgot:{
        color:"#8d59a5",
        fontSize:12
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

})