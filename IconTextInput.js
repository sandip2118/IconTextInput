import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class IconTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: '',
    }
  }

  render() {
    const {
      iconClass,
    } = this.props;
    return (
      <View style={[styles.container, this.props.viewStyle]}>
        <View style={[styles.center, this.props.iconStyle]}>
          <this.props.iconClass name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} />
        </View>
        <View style={[this.props.indicatorStyle]} />
        <View style={styles.flex}>
          <TextInput
            value={this.props.value}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            style={[this.props.style]}
            autoCorrect={this.props.autoCorrect}
            autoFocus={this.props.autoFocus}
            editable={this.props.editable}
            textAlign={this.props.textAlign}
            multiline={this.props.multiline}
            keyboardType={this.props.keyboardType}
            returnKeyType={this.props.returnKeyType}
            secureTextEntry={this.props.secureTextEntry}
            onSubmitEditing={() => { this.props.onSubmitEditing() }}
            ref={(ref) => this.props.getRef ? this.props.getRef(ref) : null}
            onChangeText={(change) => this.props.onChangeText(change)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'green'
  },
  flex: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
