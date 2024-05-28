import styled from 'styled-components/native';
import theme from './theme';

declare module 'style-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends Theme {}
}