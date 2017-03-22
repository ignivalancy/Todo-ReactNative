import React, { PropTypes } from 'react'
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = (props) => {
  
  const { icon, iconSize, iconColor, onClick } = props

  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name={icon} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  )
}

Button.PropTypes = {
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default Button;