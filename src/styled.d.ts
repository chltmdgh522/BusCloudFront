import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      subText: string;
      info: string;
      disabled: string;
      bgStrong: string;
      bgLight: string;
    };
    text: {
      h1bold: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      body: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  }
}
