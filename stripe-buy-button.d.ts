declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Declare the custom element and its expected properties
          'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // Add other custom elements if needed
      // 'another-custom-element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}