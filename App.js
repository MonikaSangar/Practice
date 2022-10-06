// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Routes from './src/Navigation/Routes';
// import FlashMessage from 'react-native-flash-message';


// // create a component
// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       <Routes/>
//       <FlashMessage
//       position='bottom'
//       />
//     </View>
//   );
// };



// // //make this component available to the app
// export default App;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const App = () => {
    return (
        <View style={styles.container}>
            <Text>App</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default App;



