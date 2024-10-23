// prettier-ignore
export type PredefinedSizes = 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
export type SizeAbsoluteUnits = 'px' | 'pt' | 'cm' | 'mm' | 'in' | 'pc' | 'Q'
// prettier-ignore
export type SizeRelativeUnits = 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'vw' | 'vh' | 'vmin' | 'vmax'
export type SizeUnits = SizeAbsoluteUnits | SizeRelativeUnits | '%' | ''

export type SizeProp = number | `${number}${SizeUnits}` | PredefinedSizes
