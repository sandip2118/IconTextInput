
# React Native TextInput With Icon

React Native TextInput styled with Icon.
I just created textinput with icon.

## Installation
```
npm install rn-icon-textinput
```
or if you're using yarn
```
$ yarn add rn-icon-textinput
```
## Dependencies
```
npm install react-native-vector-icons
```
Option: With react-native link
```
$ react-native link react-native-vector-icons
```
## Screenshots
![](https://github.com/sandip2118/IconTextInput/blob/master/Simulator%20Screen%20Shot%20-%20iPhone%207%20-%202019-08-16%20at%2011.07.39.png?raw=true)
## Basic Usage
```jsx
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconTextInputComp from '../../components/IconTextInputComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Example extends Component {
constructor(props) {
super(props);
this.state = {
name: '',
phone: '',
}
}

submit() {

}
render() {
return (
<View style={styles.container}>
<View>
<IconTextInputComp
placeholder='Your Name'
viewStyle={{ backgroundColor: '#13c1b6', borderRadius: 10 }}
indicatorStyle={{ backgroundColor: '#fff', width: 2, height: 30 }}
style={[styles.textInputStyle, { paddingTop: 10 }]}
iconStyle={{ width: 50 }}
iconSize={25}
iconClass={AntDesign}
iconColor={'#fff'}
iconName={'user'}
placeholderTextColor={'#fff'}
getRef={(ref) => { this.phone = ref; }}
onChangeText={(name) => this.setState({ name })}
onSubmitEditing={() => { this.phone.focus(); }}
underlineColorAndroid={'transparent'}
autoCapitalize={"none"}
autoCorrect={false}
returnKeyType={'next'}
/>
</View>
<View style={{ marginTop: 10 }}>
<IconTextInputComp
placeholder='Your Phone Number'
viewStyle={{ backgroundColor: '#42ddf5', borderRadius: 10 }}
indicatorStyle={{ backgroundColor: '#fff', width: 2, height: 30 }}
style={[styles.textInputStyle, { paddingTop: 10 }]}
iconStyle={{ width: 50 }}
iconSize={25}
iconClass={Entypo}
iconColor={'#000'}
iconName={'user'}
placeholderTextColor={'#fff'}
keyboardType={'number-pad'}
getRef={(ref) => { this.phone = ref; }}
onChangeText={(phone) => this.setState({ phone })}
onSubmitEditing={() => { this.passwordInput.focus(); }}
underlineColorAndroid='transparent'
autoCapitalize="none"
autoCorrect={false}
returnKeyType='go'
/>
</View>
</View>Ï
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
paddingTop: 40
},
textInputStyle: {
marginHorizontal: 10,
marginVertical: 5,
paddingVertical: 10,
borderRadius: 20,
fontSize: 16,
color: '#fff',
fontWeight: 'bold'
},
});

AppRegistry.registerComponent('example', () => Example)
```
## Props

| Key               | Type     | Default                                                                                                      | Description                                                                                                                           |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| value       | string    | "" | Provides an initial value that will change when the user starts typing. |
| placeholder       | string    | "" | The string that will be rendered before text input has been entered. |
| style  | object    | {} | Style for inner Text component (see source code).                                                                                |
| viewStyle       | object    | {} | viewStyle for outer component.                                                                                  |
| indicatorStyle       | object    | {} | indicatorStyle for inner Text component (see source code).                                                                                  |
| iconStyle       | object    | {} | iconStyle applied to the icon only (see source code).                                                                                  |
| iconClass       | text    | AntDesign | use font name which make icon (see source code).                                                                                 |
| iconSize       | number    | 25 | Size of the icon.                                                                                  |
| iconColor       | string    | #000 | Color of the icon.                                                                                  |
| iconName       | string    | "" | Name of the default icon.                                                                                  |
| placeholderTextColor       | string    | "" | The text color of the placeholder string.                                                                                  |
| getRef       | function    | - | reference for textinput.                                                                                |
| onChangeText       | function    | - | Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.                                                                                  |
| onSubmitEditing       | function    | - | Callback that is called when the text input's submit button is pressed with the argument.                                                                                   |
| underlineColorAndroid       | string    | transparent | The color of the TextInput underline (only for android).                                                                                  |
| autoCapitalize       | enum('none', 'sentences', 'words', 'characters')    | - | Can tell TextInput to automatically capitalize certain characters. This property is not supported by some keyboard types such as name-phone-pad.                                                                                  |
| autoCorrect       | Boolean    | false | The default value is inherited from autoCorrect false.                                                                                  |
| returnKeyType       | string    | "" | Determines how the return key should look. On Android you can also use returnKeyLabel.                                                                                  |
