/**
 *  .d = Somente códigos de definição de tipos TS (somente tipagem)
 * */

import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

/**
 * Cria uma tipagem para o módulo "styled"
 * - Quando o módulo é importado em algum arquivo,
 * será puxado essa tipagem.
 * - Como queremos sobrescrever algo e não criar algo do zero,
 * precisamos primeiramente importar o componente e declará-lo.
 * - Logo, iremos extender a interface DefaultTheme dentro
 * do Styled para receber os valores definidos no defaultTheme e, assim, aparecer as variáveis em props.theme.
 *  */
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
