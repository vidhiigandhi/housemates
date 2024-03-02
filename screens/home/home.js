import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Home = () => {
	const [count, setCount] = useState(0)
	const countEvery3 = Math.floor(count / 3)
  
	useEffect(() => {
	  console.log(countEvery3)
	}, [countEvery3])

	return (
		<ScrollView>
		<View>
			<Text>Your {} Tasks</Text>
		</View>
		<TextInput
			style={{
			height: 40,
			borderColor: 'gray',
			borderWidth: 1
			}}
			defaultValue="You can type in me"
		/>
		</ScrollView>
	);
};

export default Home;
