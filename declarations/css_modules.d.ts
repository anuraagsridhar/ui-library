
declare module '*.css' {
  import { HtmlEncodedAttributeValue } from 'ui/html/encode';

  const styles: { [className: string]: HtmlEncodedAttributeValue };
  export default styles;
  export function getStyle(style: string): HtmlEncodedAttributeValue;
}