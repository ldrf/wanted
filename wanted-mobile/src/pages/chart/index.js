import React, {useState} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import {LineChart,PieChart} from 'react-native-chart-kit'
import styles from '../chart/styles';
import {useNavigation, useRoute } from '@react-navigation/native'
import {FontAwesome, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'


function Chart(){

    const route = useRoute(); 
    const navigation = useNavigation();
    function navigateBack(){
        return navigation.goBack();
    }


    const [project, setProject] = useState("BGBA-RTB")
    const line = {
        labels: ['November', 'Deciembre', 'January', 'February', 'March', 'April'],
        datasets: [
          {
            data: [10, 27, 18, 20, 13, 17],
            strokeWidth: 5, 
          },
        ],
      };

      const data = [
        {
          name: "Resolved",
          population: 50,
          color: "#5FC7ED",
          legendFontColor: "white",
          legendFontSize: 15
        },
        {
          name: "In Progress",
          population: 27,
          color: "#DFFDA3",
          legendFontColor: "white",
          legendFontSize: 15
        },
        {
            name: "Rejected",
            population: 17,
            color: "#FDD0A3",
            legendFontColor: "white",
            legendFontSize: 15
        },
        {
          name: "Open",
          population: 10,
          color: "#FDA3FA",
          legendFontColor: "white",
          legendFontSize: 15
        },
        {
          name: "Feedback",
          population: 5,
          color: "#F5F3F2",
          legendFontColor: "white",
          legendFontSize: 15
        }
        
      ];

    return(
        <View style={{backgroundColor:"#8d59a5"}}>
           
            <View style={styles.top}>
                <Text style={styles.textItem}>Project: {project}</Text>
                <Text style={styles.textItem}>Status: 57%</Text>
                <Text style={styles.textItem}>Start: 01/02/2019</Text>
                <Text style={styles.textItem}>End: 01/05/2021</Text>
                <Text style={styles.textItem}>Manager: Presunto Neto</Text>
            </View>
            
            
            <View style={{marginTop:'50%'}}>
                <Text style={{...styles.textItem,left:10}}>Issues history:</Text>
                <LineChart
                    data={line}
                    width={450}
                    height={220}
                    chartConfig={{
                    backgroundColor: '#8d59a5',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 0, 
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {borderRadius: 16,}}}
                    bezier
                    style={{marginVertical: 8,borderRadius: 16}}
                />
            </View>
            <View>
                <Text style={{...styles.textItem,left:10}}>Issues Totals:</Text>
                <PieChart
                    data={data}
                    width={400}
                    height={150}
                    chartConfig={{                    
                        decimalPlaces: 0, 
                        color: (opacity = 1) => '#5320FF',
                        labelColor: (opacity = 1) => '#5320FF',
                        style: {
                            borderRadius: 18
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "0",
                            stroke: "#white"
                        }
                    }}
                    accessor="population"
                    backgroundColor="transparent"                
                    absolute
                    />
            </View>      
            <View style={{marginTop:100}}>
                <TouchableOpacity onPress={navigateBack} style={{...styles.bottomView,bottom:0}}>
                    <Text style={{color:"#FFFFFF", fontSize:20}}><MaterialIcons name="keyboard-return"/> Return</Text>
                </TouchableOpacity>
            </View>      
        </View>
    )
}

export default Chart