const Black = '#2B2D32';
const SoftGrey = '#E2E7E9';
const SoftGrey15 = '#F8F9F9';
const SoftGrey25 = '#F0F3F4';
const White = '#FFFFFF';

interface PrimaryColor {
  White: typeof White;
}

const Primary: PrimaryColor = {
  White
};

interface BackgroundColor {
  SoftGrey50: typeof SoftGrey15;
  SoftGrey25: typeof SoftGrey25;
}

const Background: BackgroundColor = {
  SoftGrey50,
  SoftGrey25
};

interface NeutralColor {
  Black: typeof Black;
  SoftGrey: typeof SoftGrey;
}

const Neutral: NeutralColor = {
  Black,
  SoftGrey
};

/**
 * colour definitions.
 */
export type PrimaryColorType = typeof White;

export type BackgroundColorType = typeof SoftGrey25;

export type NeutralColorType = typeof Black | typeof SoftGrey;

export type ColorType = PrimaryColorType | BackgroundColorType | NeutralColorType;

export default Object.freeze({
  Primary,
  Background,
  Neutral
});
