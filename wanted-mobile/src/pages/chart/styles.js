import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    
    header: {
        flex: 1,
        backgroundColor: '#8d59a5',
        alignItems: 'center',
        justifyContent: 'center'
      },
      top:{
        position: 'absolute',  
        top:30,
        left:20,               
        fontSize:16,
        color:"white"
      },
      textItem:{
        marginTop:10,
        color:"white"
      },
      bottomView: {
        flex: 1,
        width:"100%",
        backgroundColor:"#8d59a5",
        height:100,
        alignItems:"center",
        justifyContent: 'center',        
        position: 'absolute', 
        bottom: 0,
        fontWeight:"bold",
              
      },
           

})