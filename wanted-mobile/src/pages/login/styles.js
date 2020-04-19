import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
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
      }

})