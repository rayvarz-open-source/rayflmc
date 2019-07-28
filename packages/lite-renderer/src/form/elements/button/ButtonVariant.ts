export enum ButtonVariant {
    Text = 'text',
    Outlined = 'outlined',
    Contained = 'contained',
}

export function isButtonVariant(value: any): value is ButtonVariant {
    return value === "text" ||
        value === 'outlined' ||
        value === 'contained';
}