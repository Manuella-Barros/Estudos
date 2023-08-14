import { ligthTheme } from "./lightTheme";

type currentTheme = typeof ligthTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends currentTheme{}
}