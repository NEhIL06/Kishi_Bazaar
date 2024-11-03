import React, { useEffect,useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from "axios"
const stack = createNativeStackNavigator();



//const [count, setCount] = useState(0);
//const onPress = () => setCount(prevCount => prevCount + 1);

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
        <stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUp} />
        <stack.Screen  name='Home' component={Home} />
        <stack.Screen  name='Vegetables' component={Vegetables} />
        <stack.Screen  name='Farmers' component={Farmers} />
        <stack.Screen  name='Aloo' component={Aloo} />
        <stack.Screen  name='Fruits' component={Fruits} />
        <stack.Screen  name='Mango' component={Mango} />
        <stack.Screen  name='Add' component={Add} />
        <stack.Screen  name='Pulses' component={Pulses} />
      </stack.Navigator>
    </NavigationContainer>
  )
};

const Home = () => {


  const getnews = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=782c8e2683cc41e59256d342f99a2acd',{
      params:{
        category:"general"
      }
    })
    .then( (response)=> {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })
  }
  useEffect( ()=>{
      getnews();
  },[]);

  const [articles,setArticles] = useState([]);
  const navigation=useNavigation();
  return (
    
    <View style={{ flex: 1,backgroundColor:'#faf7f5' }}>
      <Image
        source={require("./applogo.png")}
        style={{
          width: 90,
          height: 90,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 10,
          marginLeft:10,marginBottom:20
        }}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('Add')}} style={{ fontWeight:'600',backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', width: '85%',height:50,borderRadius:10,alignSelf:'center',marginTop:10,marginBottom:20,paddingLeft:10,fontSize:40 }}><Text>Add Crop</Text></TouchableOpacity>
      <ScrollView>
    <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20}}>CROP LISTINGS</Text>
      <ScrollView horizontal={true}>
      <View style={{ marginTop: 20,height:'20',width:'20' }}>
        
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20'
                }}
                onPress={()=>{navigation.navigate('Vegetables')}}
              >
                <Text style={{ color: "#000" }}>Vegetables</Text>
                <Image
              source={require("./vegetable.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
                
              </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 20 }}>
        
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
                onPress={()=>{navigation.navigate('Fruits')}}
              >
                <Text style={{ color: "#000",alignSelf:'center' }}>Fruits</Text>
                <Image
              source={require("./fruits.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            </TouchableOpacity>

              
            
      </View>

      <View style={{ marginTop: 20 }}>
        
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
                onPress={()=>{navigation.navigate('Pulses')}}
              >
                <Text style={{ color: "#000",textAlign:'center',fontSize:16 }}>Pulses</Text>
                <Image
              source={require("./Pulses.jpg")}
              style={{
                width: 100,
                height: 100,
                
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            </TouchableOpacity> 
      </View>
      <View style={{ marginTop: 20 }}>
        
        <TouchableOpacity
          style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
                onPress={()=>{navigation.navigate('Pulses')}}
              >
                <Text style={{ color: "#000",alignSelf:'center' }}>Cereals</Text>
                <Image
              source={require("./Cereal.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
        </TouchableOpacity>
        
              
            
      </View>

      <View style={{ marginTop: 20 }}>
        
        <TouchableOpacity
          style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
                onPress={()=>{navigation.navigate('Pulses')}}
              >
                <Text style={{ color: "#000" }}>Spices</Text>
                <Image
              source={require("./spices.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
        </TouchableOpacity>

              
            
      </View>
      <View style={{ marginTop: 20 }}>
        
        <TouchableOpacity
          style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Pulses')}}
              >
                <Text style={{ color: "#000" }}>grains</Text>
                <Image
              source={require("./grains.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
        </TouchableOpacity>      
      </View>
      </ScrollView>
      
      
    
        
    



      
      </ScrollView>
    </View>
    
  );
}





function Login() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#faf7f5' }}>
       <Image source={require('./applogo.png')} style={{ height: 180, width: 180, alignSelf: 'center', marginTop: 100, backgroundColor: '#faf7f5' }} />
       <Text style={{ marginTop: 40, alignSelf: 'center', fontSize: 28, fontWeight: '600', color: '#000' }}>Login</Text>
       <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Email</Text>
       <TextInput placeholder={'Enter your Email'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20,color:'#000' }} />
       <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Password</Text>
       <TextInput secureTextEntry={true} placeholder={'Enter your password'} style={{color:'#000', marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
       <TouchableOpacity onPress={() => { navigation.navigate('Home'); }} style={{ backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', width: '85%',height:50,borderRadius:10,alignSelf:'center',marginTop:50 }}><Text>Login</Text></TouchableOpacity>
       <Text onPress={() => { navigation.navigate('SignUp'); }} style={{ marginTop: 10, alignSelf: 'center', fontSize: 18, fontWeight: '600', color: '#000',textDecorationLine:'underline' }} >Do not Have an account?</Text>
    </View>
  );
}

const Add = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#faf7f5' }}>
      <Image source={require('./applogo.png')} style={{ height: 180, width: 180, alignSelf: 'center', marginTop: 100, backgroundColor: '#faf7f5' }} />
      <Text style={{ marginTop: 40, alignSelf: 'center', fontSize: 28, fontWeight: '600', color: '#000' }}>Add Crops</Text>
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Crop name</Text>
      <TextInput placeholder={'Enter your Email'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Crop Type</Text>
      <TextInput placeholder={'Enter your PhoneNumber'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Quantity</Text>
      <TextInput  placeholder={'Enter your password'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}></Text>
    
      <TouchableOpacity onPress={() => { navigation.navigate('Home'); }} style={{ backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', width: '85%',height:50,borderRadius:10,alignSelf:'center',marginTop:50,marginBottom:50 }}><Text>Add Product</Text></TouchableOpacity>
    
    </View>
    </ScrollView>
  )
}



const SignUp = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#faf7f5' }}>
      <Image source={require('./applogo.png')} style={{ height: 180, width: 180, alignSelf: 'center', marginTop: 100, backgroundColor: '#faf7f5' }} />
      <Text style={{ marginTop: 40, alignSelf: 'center', fontSize: 28, fontWeight: '600', color: '#000' }}>Create New Account</Text>
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Email</Text>
      <TextInput placeholder={'Enter your Email'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Phone Number</Text>
      <TextInput placeholder={'Enter your PhoneNumber'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>Password</Text>
      <TextInput secureTextEntry={true} placeholder={'Enter your password'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>City</Text>
      <TextInput placeholder={'Enter your City'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>District</Text>
      <TextInput placeholder={'Enter your District'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>State</Text>
      <TextInput placeholder={'Enter your State'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <Text style={{ marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '600', color: '#000' }}>UserType</Text>
      <TextInput placeholder={'Enter your UserType'} style={{ marginTop: 5, alignSelf: 'center', height: 50, width: '85%', borderRadius: 10, borderWidth: 0.5, paddingLeft: 20 }} />
      <TouchableOpacity onPress={() => { navigation.navigate('Login'); }} style={{ backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', width: '85%',height:50,borderRadius:10,alignSelf:'center',marginTop:50,marginBottom:50 }}><Text>SignUp</Text></TouchableOpacity>
    
    </View>
    </ScrollView>
  )
}


const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf7f5' }}>
      <Image source={require('./applogo.png')} style={{ height: 150, width: 150, borderRadius: 50, resizeMode: 'center' }} />
    </View>
  );
};

const Pulses = () => {
  const navigation = useNavigation();
 
  return (
    
    <View style={{ backgroundColor: '#faf7f5' }}>
     <ScrollView>
      <Image
        source={require("./applogo.png")}
        style={{
          width: 50,
          height: 60,
          borderRadius: 10,
          alignSelf: "left",
          marginTop: 10,
          marginLeft:10
        }}
      />
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:20}}>LISTINGS</Text>
      <ScrollView>
        <View style={{flex:1}}>
        <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Mango')}}
              >
                <Text style={{ color: "#000" }}>RED LENTIL</Text>
                <Image
              source={require("./redlentils.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'500',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Apple')}}
              >
                <Text style={{ color: "#000" }}>KIDNEY BEANS</Text>
                <Image
              source={require("./rajma.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Mango')}}
              >
                <Text style={{ color: "#000" }}>TOOR DAAL</Text>
                <Image
              source={require("./toordal.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20,marginBottom:20
                }}
                onPress={()=>{navigation.navigate('Mango')}}
              >
                <Text style={{ color: "#000" ,alignSelf:'left'}}>CHICK PEA</Text>
                <Image
              source={require("./chickpea.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ScrollView> 
    </View>
  );
};

const Fruits = () => {
  const navigation = useNavigation();
 
  return (
    
    <View style={{ backgroundColor: '#faf7f5' }}>
     <ScrollView>
      <Image
        source={require("./applogo.png")}
        style={{
          width: 50,
          height: 60,
          borderRadius: 10,
          alignSelf: "left",
          marginTop: 10,
          marginLeft:10
        }}
      />
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:20}}>LISTINGS</Text>
      <ScrollView>
        <View style={{flex:1}}>
        <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Mango')}}
              >
                <Text style={{ color: "#000" }}>MANGO</Text>
                <Image
              source={require("./mango.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'500',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Apple')}}
              >
                <Text style={{ color: "#000" }}>APPLE</Text>
                <Image
              source={require("./apple.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Mango')}}
              >
                <Text style={{ color: "#000" }}>PINEAPPLE</Text>
                <Image
              source={require("./pineapple.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20,marginBottom:20
                }}
                onPress={()=>{navigation.navigate('Mango')}}
              >
                <Text style={{ color: "#000" ,alignSelf:'Left'}}>GRAPES</Text>
                <Image
              source={require("./grapes.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ScrollView> 
    </View>
  );
};

const Vegetables = () => {
  const navigation = useNavigation();
 
  return (
    
    <View style={{ backgroundColor: '#faf7f5' }}>
     <ScrollView>
      <Image
        source={require("./applogo.png")}
        style={{
          width: 50,
          height: 60,
          borderRadius: 10,
          alignSelf: "left",
          marginTop: 10,
          marginLeft:10
        }}
      />
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:20}}>LISTINGS</Text>
      <ScrollView>
        <View style={{flex:1}}>
        <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Aloo')}}
              >
                <Text style={{ color: "#000" }}>POTATO</Text>
                <Image
              source={require("./Aloo.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'500',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Aloo')}}
              >
                <Text style={{ color: "#000" }}>BEETROOT</Text>
                <Image
              source={require("./beetroot.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Aloo')}}
              >
                <Text style={{ color: "#000" }}>CABBAGE</Text>
                <Image
              source={require("./cabage.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,marginRight:20,marginBottom:20
                }}
                onPress={()=>{navigation.navigate('Aloo')}}
              >
                <Text style={{ color: "#000" ,alignSelf:'left'}}>CAULIFLOWER</Text>
                <Image
              source={require("./cauliflower.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,marginTop:20
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ScrollView> 
    </View>
  );
};



const Aloo = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#faf7f5' }}>
      <Image
        source={require("./applogo.png")}
        style={{
          width: 50,
          height: 60,
          borderRadius: 10,
          alignSelf: "left",
          marginTop: 10,
          marginLeft:10,flex:1
        }}
      />
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:10}}>LISTINGS</Text>
      <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:20,flex:2,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 1</Text>
                <Image
              source={require("./farmer.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:10,flex:3,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 2</Text>
                <Image
              source={require("./farmer3.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
                
          </TouchableOpacity>

          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginTop:10,flex:4,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 3</Text>
                <Image
              source={require("./farmer5.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10
              }}
            />
                
          </TouchableOpacity>

          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:'20',marginBottom:20,marginLeft:20,marginTop:10,marginRight:20
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 4</Text>
                <Image
              source={require("./farmers1.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10
              }}
            />
                
          </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const Mango = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView>
    <View style={{ flex:1, backgroundColor: '#faf7f5' }}>
      <Image
        source={require("./applogo.png")}
        style={{
          width: 50,
          height: 60,
          borderRadius: 10,
          alignSelf: "left",
          marginTop: 10,
          marginLeft:10,flex:1
        }}
      />
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:20}}>LISTINGS</Text>
      <View style={{ flexDirection:'column',alignItems:'flex-start'}}>
      <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:120,marginTop:20,flex:2,marginRight:20,flex:1
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 1</Text>
                <Image
              source={require("./farmer.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:120,marginTop:10,flex:3,marginRight:20,flex:2
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 2</Text>
                <Image
              source={require("./farmer3.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
                
          </TouchableOpacity>

          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:120,marginTop:10,flex:4,marginRight:20,flex:3
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000" }}>Farmer 3</Text>
                <Image
                source={require("./farmer5.jpg")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 10
              }}
            />
                
          </TouchableOpacity>

          <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  height:'20',
                  width:120,marginBottom:20,marginTop:10,marginRight:20,flex:4
                }}
                onPress={()=>{navigation.navigate('Farmers')}}
              >
                <Text style={{ color: "#000"}}>Farmer 4</Text>
                <Image
              source={require("./farmers1.jpg")}
              style={{
                width: 100,
                height: 100,
              
                marginTop: 10
              }}
            />
                
          </TouchableOpacity>
          </View>      
    </View>
    </ScrollView>
  );
};


const Farmers = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'justify', backgroundColor: '#faf7f5' }}>
      <Image source={require('./applogo.png')} style={{ height: 50, width: 60, borderRadius: 20, resizeMode: 'center',marginTop:10,marginLeft:0}} />
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:10}} >FARMERS PROFILE</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate()}}></TouchableOpacity>
      <Image source={require('./farmer.jpg')} style={{ height: 200, marginLeft:90,borderColor:'#000',borderWidth:1,marginTop:20}} />
      <View style={{alignItems:'Left',marginLeft:40}}>
      <Text style={{color:'#000',marginTop:35,fontSize:15}}>NAME : SHASWAT SINGH</Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>PHONE : +9191******** </Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>CITY : TUMAKURU </Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>STATE : KARNATAKA</Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>ADDRESS : SIT,TUMAKURU </Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>PINCODE : 572103 </Text>
      <Text style={{color:'#000',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:10}}>CROP PRODUCED : POTATO</Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>WEIGHT OF PRODUCE AVAILABLE: 500KG </Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>AMOUNT SIP : 1500/BAG </Text>
      <Text style={{color:'#000',marginTop:10,fontSize:15}}>PINCODE : 572103 </Text>
      </View>
    </View>
  );
};



export default App;