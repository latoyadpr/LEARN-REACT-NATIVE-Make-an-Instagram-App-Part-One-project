import React from 'react';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
  </View>
);

export default App;

<View>
  <CustomComponent label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} />
  <CustomComponent label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
  <CustomComponent label="Pet's Name" placeholder="Enter your pet's name" value={petName} onChangeText={setPetName} />
  <CustomComponent label="Pet's Date of Birth" placeholder="Enter your pet's date of birth" value={petDob} onChangeText={setPetDob} />
  <CustomComponent label="Breed" placeholder="Enter your pet's breed" value={breed} onChangeText={setBreed} />
  <CustomComponent label="Favorite Toy" placeholder="Enter your pet's favorite toy" value={favoriteToy} onChangeText={setFavoriteToy} />
</View>

<CustomComponent
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
/>

const CustomComponent = ({ label, placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={{ padding: 16 }}>
    <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
    <TextInput
      style={{ padding: 8, fontSize: 18 }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </View>
);
export default App;