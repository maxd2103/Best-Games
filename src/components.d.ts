/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnleitungenComponent {
        "appearance": string;
        "header": string;
        "isopen": boolean;
    }
    interface ButtonsComponent {
        "aussehen": string;
        "text": string;
    }
    interface ContactForm {
    }
    interface CookieBanner {
    }
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface FooterBar {
    }
    interface KeyVisual {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NavBar {
    }
    interface SlideshowComponent {
    }
    interface StarRating {
        "maxValue": number;
        "value": number;
    }
}
declare global {
    interface HTMLAnleitungenComponentElement extends Components.AnleitungenComponent, HTMLStencilElement {
    }
    var HTMLAnleitungenComponentElement: {
        prototype: HTMLAnleitungenComponentElement;
        new (): HTMLAnleitungenComponentElement;
    };
    interface HTMLButtonsComponentElement extends Components.ButtonsComponent, HTMLStencilElement {
    }
    var HTMLButtonsComponentElement: {
        prototype: HTMLButtonsComponentElement;
        new (): HTMLButtonsComponentElement;
    };
    interface HTMLContactFormElement extends Components.ContactForm, HTMLStencilElement {
    }
    var HTMLContactFormElement: {
        prototype: HTMLContactFormElement;
        new (): HTMLContactFormElement;
    };
    interface HTMLCookieBannerElement extends Components.CookieBanner, HTMLStencilElement {
    }
    var HTMLCookieBannerElement: {
        prototype: HTMLCookieBannerElement;
        new (): HTMLCookieBannerElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLFooterBarElement extends Components.FooterBar, HTMLStencilElement {
    }
    var HTMLFooterBarElement: {
        prototype: HTMLFooterBarElement;
        new (): HTMLFooterBarElement;
    };
    interface HTMLKeyVisualElement extends Components.KeyVisual, HTMLStencilElement {
    }
    var HTMLKeyVisualElement: {
        prototype: HTMLKeyVisualElement;
        new (): HTMLKeyVisualElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLSlideshowComponentElement extends Components.SlideshowComponent, HTMLStencilElement {
    }
    var HTMLSlideshowComponentElement: {
        prototype: HTMLSlideshowComponentElement;
        new (): HTMLSlideshowComponentElement;
    };
    interface HTMLStarRatingElement extends Components.StarRating, HTMLStencilElement {
    }
    var HTMLStarRatingElement: {
        prototype: HTMLStarRatingElement;
        new (): HTMLStarRatingElement;
    };
    interface HTMLElementTagNameMap {
        "anleitungen-component": HTMLAnleitungenComponentElement;
        "buttons-component": HTMLButtonsComponentElement;
        "contact-form": HTMLContactFormElement;
        "cookie-banner": HTMLCookieBannerElement;
        "example-component": HTMLExampleComponentElement;
        "footer-bar": HTMLFooterBarElement;
        "key-visual": HTMLKeyVisualElement;
        "my-component": HTMLMyComponentElement;
        "nav-bar": HTMLNavBarElement;
        "slideshow-component": HTMLSlideshowComponentElement;
        "star-rating": HTMLStarRatingElement;
    }
}
declare namespace LocalJSX {
    interface AnleitungenComponent {
        "appearance"?: string;
        "header"?: string;
        "isopen"?: boolean;
    }
    interface ButtonsComponent {
        "aussehen"?: string;
        "text"?: string;
    }
    interface ContactForm {
    }
    interface CookieBanner {
    }
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface FooterBar {
    }
    interface KeyVisual {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NavBar {
    }
    interface SlideshowComponent {
    }
    interface StarRating {
        "maxValue"?: number;
        "onRatingUpdated"?: (event: CustomEvent<any>) => void;
        "value"?: number;
    }
    interface IntrinsicElements {
        "anleitungen-component": AnleitungenComponent;
        "buttons-component": ButtonsComponent;
        "contact-form": ContactForm;
        "cookie-banner": CookieBanner;
        "example-component": ExampleComponent;
        "footer-bar": FooterBar;
        "key-visual": KeyVisual;
        "my-component": MyComponent;
        "nav-bar": NavBar;
        "slideshow-component": SlideshowComponent;
        "star-rating": StarRating;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anleitungen-component": LocalJSX.AnleitungenComponent & JSXBase.HTMLAttributes<HTMLAnleitungenComponentElement>;
            "buttons-component": LocalJSX.ButtonsComponent & JSXBase.HTMLAttributes<HTMLButtonsComponentElement>;
            "contact-form": LocalJSX.ContactForm & JSXBase.HTMLAttributes<HTMLContactFormElement>;
            "cookie-banner": LocalJSX.CookieBanner & JSXBase.HTMLAttributes<HTMLCookieBannerElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "footer-bar": LocalJSX.FooterBar & JSXBase.HTMLAttributes<HTMLFooterBarElement>;
            "key-visual": LocalJSX.KeyVisual & JSXBase.HTMLAttributes<HTMLKeyVisualElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "slideshow-component": LocalJSX.SlideshowComponent & JSXBase.HTMLAttributes<HTMLSlideshowComponentElement>;
            "star-rating": LocalJSX.StarRating & JSXBase.HTMLAttributes<HTMLStarRatingElement>;
        }
    }
}
