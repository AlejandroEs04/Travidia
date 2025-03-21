import { Text, type TextProps, StyleSheet} from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';

export type CustomTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'subtitle'
  };

export default function CustomText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
} : CustomTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                style,
            ]}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    default: {

    }, 
    title: {
        fontSize: 25,
        fontWeight: '800'
    }, 
    subtitle: {
        fontSize: 18, 
        fontWeight: '400',
        color: '#d4d4d8'
    }
})