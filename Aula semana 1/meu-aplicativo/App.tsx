import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import Home from './src/screens/Home';
import theme from './src/theme'

export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_700Bold, Roboto_500Medium, Roboto_400Regular }) 

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Home/> : <ActivityIndicator/> }
    </ThemeProvider>
    

  );
}