export enum LabelVariant {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    Subtitle1 = 'subtitle1',
    Subtitle2 = 'subtitle2',
    Body1 = 'body1',
    Body2 = 'body2',
    Caption = 'caption',
    Button = 'button',
    Overline = 'overline',
    srOnly = 'srOnly',
    Inherit = 'inherit'
}

export function isLabelVariant(value: any): value is LabelVariant {
    return value == 'h1' ||
        value == 'h2' ||
        value == 'h3' ||
        value == 'h4' ||
        value == 'h5' ||
        value == 'h6' ||
        value == 'subtitle1' ||
        value == 'subtitle2' ||
        value == 'body1' ||
        value == 'body2' ||
        value == 'caption' ||
        value == 'button' ||
        value == 'overline' ||
        value == 'srOnly' ||
        value == 'inherit';
}