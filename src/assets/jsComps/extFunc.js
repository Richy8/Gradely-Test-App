// BACKGROUND COLOR SETTER FUNCTION
const bgColorSetter = color => document.body.style.backgroundColor = color;

// COLOR SET
const colors = ['brand_accent_bg', 'brand_primary_bg', 'brand_navy_bg', 'brand_red_bg', 'brand_green_bg', 'color_ash_bg', 'brand_black_bg', 'brand_tonic_bg', 'brand_inverse_bg', 'bg-secondary', 'bg-danger', 'orange', 'amber', 'teal', 'blue', 'purple'];

// GET RANDOM NUMBER WITHIN A RANGE
const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

// SORT A LIST OF VALUES
const shuffle = list => list.sort(() => 0.5 - Math.random());

export {
    bgColorSetter,
    colors,
    random,
    shuffle
}