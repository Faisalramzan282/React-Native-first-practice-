import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react,{useState,useEffect} from 'react'
import Home from './Home';

export default function App(props) {
const [name,setName]=useState("Faisal Ramzan")
const [email,setEmail]=useState("faisal@gmail.com")
  //const [arr,setArr]=useState(["car"])
 // const [email,setEmail]=useState("faisal@gmail.com")
//  const [obj,setObj] = useState({
//    name:"Faisal Ramzan",
//    School:"Government School",
//    RegNo:"666"
//  })
//   const handleClick=()=>{
//     //setArr([...arr,"Bike","MotorCAr"])
//     setObj({...obj,
//       Admission:"FSC in Punjab college"
//     })
//     console.log(obj)
//   }

 useEffect(()=>{
  console.log("I will runn on every time when render update")
 })
 useEffect(()=>{
  console.log("I will runn on first render")
 },[])
 useEffect(()=>{
  console.log("I will runn on when name is updated")
 },[name,email])

 useEffect(()=>{
   return(()=>{
     console.log("Unmount condition is fulfilled ")
   })
 })
 return (
    <View style={styles.container}>
      <h1>React Hooks</h1>
      {/* <Text>Now i am start working with App Developer AS {name}</Text>
      <Text>{email}</Text>
      <button onClick={()=>handleClick()}>Update</button> */}
      {/* {arr.map((v,i)=>{
        return <li key={i}>{v}</li>
      }


      )} */}
      {<h1><Home name="Faisal" Qualification="BSCS"/></h1>}
      {/* <h2>{obj.name}</h2>
      <button onClick={()=>handleClick()}>Update</button>  */}
      <button onClick={()=>setName("Ahsan")}>USeEffect</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
