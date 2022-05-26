/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnleitungenComponent {
        "anleitung": string;
        "spielname": string;
    }
    interface ButtonGenerate {
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
}
declare global {
    interface HTMLAnleitungenComponentElement extends Components.AnleitungenComponent, HTMLStencilElement {
    }
    var HTMLAnleitungenComponentElement: {
        prototype: HTMLAnleitungenComponentElement;
        new (): HTMLAnleitungenComponentElement;
    };
    interface HTMLButtonGenerateElement extends Components.ButtonGenerate, HTMLStencilElement {
    }
    var HTMLButtonGenerateElement: {
        prototype: HTMLButtonGenerateElement;
        new (): HTMLButtonGenerateElement;
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
    interface HTMLElementTagNameMap {
        "anleitungen-component": HTMLAnleitungenComponentElement;
        "button-generate": HTMLButtonGenerateElement;
        "example-component": HTMLExampleComponentElement;
        "footer-bar": HTMLFooterBarElement;
        "key-visual": HTMLKeyVisualElement;
        "my-component": HTMLMyComponentElement;
        "nav-bar": HTMLNavBarElement;
    }
}
declare namespace LocalJSX {
    interface AnleitungenComponent {
        "anleitung"?: string;
        "spielname"?: string;
    }
    interface ButtonGenerate {
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
    interface IntrinsicElements {
        "anleitungen-component": AnleitungenComponent;
        "button-generate": ButtonGenerate;
        "example-component": ExampleComponent;
        "footer-bar": FooterBar;
        "key-visual": KeyVisual;
        "my-component": MyComponent;
        "nav-bar": NavBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anleitungen-component": LocalJSX.AnleitungenComponent & JSXBase.HTMLAttributes<HTMLAnleitungenComponentElement>;
            "button-generate": LocalJSX.ButtonGenerate & JSXBase.HTMLAttributes<HTMLButtonGenerateElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "footer-bar": LocalJSX.FooterBar & JSXBase.HTMLAttributes<HTMLFooterBarElement>;
            "key-visual": LocalJSX.KeyVisual & JSXBase.HTMLAttributes<HTMLKeyVisualElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
        }
    }
}
