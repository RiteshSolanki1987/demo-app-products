export class AppConstants {
    public static get baseURL(): string { return `https://codal-dev.getcato.com/api`; }
    public static get httpError(): string { return `There was an HTTP error.`; }
    public static get typeError(): string { return `There was a Type error.`; }
    public static get generalError(): string { return `There was a general error.`; }
    public static get somethingHappened(): string { return `Nobody threw an Error but something happened!`; }
}