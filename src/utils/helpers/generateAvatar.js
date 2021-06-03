import tinycolor from 'tinycolor2'

const getCorrectIndex = n => {
    return n > 255 ? 255 : n < 0 ? 0 : n;
}

export default (hash) => {
    const [r, g, b] = hash
                    .substr(0, 3)
                    .split("")
                    .map(char => getCorrectIndex(char.charCodeAt(0)));
    return {
        color: tinycolor({r, g, b}).lighten(15).toHexString(),
        colorLighten: tinycolor({r, g, b}).lighten(40).toHexString()
    };
}