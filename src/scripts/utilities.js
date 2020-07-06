// BACKGROUND COLOR SETTER FUNCTION
const bgColorSetter = color => document.body.style.backgroundColor = color;

// COLOR SET
const colors = ['brand_accent_bg', 'brand_primary_bg', 'brand_navy_bg', 'brand_red_bg', 'brand_green_bg', 'color_ash_bg', 'brand_tonic_bg', 'brand_inverse_bg', 'bg-danger', 'orange', 'teal', 'blue'];

// GET RANDOM NUMBER WITHIN A RANGE
const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

// SORT A LIST OF VALUES
const shuffle = list => list.sort(() => 0.5 - Math.random());

// GET THE INITIALS OF A NAME
const setInitial = fullname => {
    let name_list = fullname.split(" ");

    if (name_list.length === 1) {
        return name_list[0].slice(0, 1).toUpperCase();
    } else {
        let first = name_list[0].slice(0, 1).toUpperCase();
        let last = name_list[1].slice(0, 1).toUpperCase();
        let initial = first + last;
        return initial;
    }
}

// CAPITALIZE FIRST LETTER
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
    bgColorSetter,
    colors,
    random,
    shuffle,
    setInitial,
    capitalizeFirstLetter
}