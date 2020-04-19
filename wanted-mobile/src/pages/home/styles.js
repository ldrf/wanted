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
        height: 50, 
        width: 150 ,
        top:125
      },      
      topView:{                        
        position: 'absolute',         
        top: 100, 
        fontSize:16,
        color:"purple"
      },    
      topLeftView:{              
        position: 'absolute', 
        left: 20,
        top: 50, 
        fontSize:16,
        color:"purple"
      }, 
      topRightView:{              
        position: 'absolute', 
        right: 20,
        top: 30,         
      }, 
      middleLeft:{              
        position: 'absolute', 
        left: 20,
        
        fontSize:16,
        color:"purple"
      },     
      bottomView: {
        flex: 1,
        width:"100%",
        backgroundColor:"#8d59a5",
        height:50,
        alignItems:"center",
        justifyContent: 'center',        
        position: 'absolute', 
        bottom: 0,
        fontWeight:"bold",
              
      },
      mid:{        
        left:20,
        top: '40%'
      }
     
      

})