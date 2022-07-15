import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import {FC} from 'react'

type ICustomIcon = FC<{
    name: string 
    size?: number
    color?: string
}>

const Icon = createIconSetFromIcoMoon(
    require('./selection.json'),
    'IcoMoon',
    'icomoon.ttf'
  );

const CustomIcon: ICustomIcon = ({name, size = 24, color}) => {
    return (
        <Icon name={name} size={size} color={color} />
    )
}


export default CustomIcon