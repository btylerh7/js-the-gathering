export const Formats = {
    Standard: 'Standard',
    Legacy: 'Legacy',
    Modern: 'Modern',
    Commander: 'Commander',
    Pauper: 'Pauper',
} as const;
export type Format = (typeof Formats)[keyof typeof Formats];
