const makeFont = ({ textStyle, fontFamily, size }) => {
    var font = "";
    const { bold, italic } = textStyle;
    if (bold) font += "bold "
    if (italic) font += "italic "
    font += size + "% " + fontFamily;
    return font;
}
export const drawText = ({ context, config }) => {
    const { color, textAlign, value, x, y } = config;
    context.fillStyle = color;
    context.font = makeFont(config)
    context.textAlign = textAlign;
    context.fillText(value, x, y);
}
export const drawImage = ({ context, config }) => {
    const { image, x, y, width, height } = config;
    const imageElement = new Image();
    imageElement.src = image;
    imageElement.onload = function () {
        context.drawImage(imageElement, x, y, width, height);
    }
}