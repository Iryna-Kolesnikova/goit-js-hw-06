const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
}