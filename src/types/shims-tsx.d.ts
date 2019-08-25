import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    /* eslint @typescript-eslint/no-unused-vars: 0 */
    interface Element extends VNode {}
    /* eslint @typescript-eslint/no-unused-vars: 0 */
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
