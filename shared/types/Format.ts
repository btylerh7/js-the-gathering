export const Formats = {
    Standard: 'Standard',
    Legacy: 'Legacy',
    Modern: 'Modern',
    Commander: 'Commander',
    Pauper: 'Pauper',
    CanadianHighlander: 'Canadian Highlander',
    Custom: 'Custom',
} as const;
export type Format = (typeof Formats)[keyof typeof Formats];
export const FormatList = Object.entries(Formats).map((value) => {
    return { title: value[0], value: value[1] };
});
