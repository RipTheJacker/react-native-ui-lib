export declare class ThemeManager {
    theme: {
        primaryColor: string;
        CTA: {
            textColor: string;
            disabledColor: string;
            backgroundColor: string;
        };
        titleColor: string;
        subtitleColor: string;
        dividerColor: string;
        components: Extendable;
    };
    setTheme(overrides: Dictionary<string>): void;
    getTheme(): {
        primaryColor: string;
        CTA: {
            textColor: string;
            disabledColor: string;
            backgroundColor: string;
        };
        titleColor: string;
        subtitleColor: string;
        dividerColor: string;
        components: Extendable;
    };
    setItem(key: string, value: string): void;
    getItem(key: string): any;
    setComponentTheme(componentName: string, overrides: Dictionary<string> | Function): void;
    get components(): Extendable;
    get primaryColor(): string;
    get CTATextColor(): string;
    get CTADisabledColor(): string;
    get CTABackgroundColor(): string;
    get titleColor(): string;
    get subtitleColor(): string;
    get dividerColor(): string;
}
declare const _default: ThemeManager;
export default _default;
