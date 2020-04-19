import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center'
      },
      list:{    
        position: 'absolute', 
        top: 0,  
        right:20,
        height: 50, 
        width: 150 
      },      
      topView:{              
        position: 'absolute', 
        left: 20,
        top: 100, 
        fontSize:16,
        color:"purple"
      },    
      topView2:{              
        position: 'absolute', 
        left: 20,
        top: 50, 
        fontSize:16,
        color:"purple"
      },     
      bottomView: {
        width:"100%",
        backgroundColor:"#8d59a5",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        position: 'absolute', 
        bottom: 0,
      },
     
      

})