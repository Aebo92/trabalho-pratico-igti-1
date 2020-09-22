// Precaução para só começar aplicação após página carregada
window.addEventListener('load', () => {
  var vermelho = null;
  var verde = null;
  var azul = null;

  var vermelho = document.querySelector('#cor-vermelha');
  var verde = document.querySelector('#cor-verde');
  var azul = document.querySelector('#cor-azul');

  var textovermelho = document.querySelector('.indicador-vermelho');
  var textoverde = document.querySelector('.indicador-verde');
  var textoazul = document.querySelector('.indicador-azul');

  var colorBackground = document.querySelector('.card-background-color');
  var textodefundo = document.querySelector('.card-background-text');

  vermelho.addEventListener('change', eventColorChange);
  verde.addEventListener('change', eventColorChange);
  azul.addEventListener('change', eventColorChange);

  function eventColorChange() {
    textovermelho.value = vermelho.value;
    textoverde.value = verde.value;
    textoazul.value = azul.value;

    var rgba = `rgba(${vermelho.value}, ${verde.value}, ${azul.value})`;

    // Changing the background using template literals
    colorBackground.style.backgroundColor = rgba;
  }

  function rgba2hex(orig) {
    // Function to transform RGBA to HEX

    var a,
      isPercent,
      rgb = orig
        .replace(/\s/g, '')
        .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
      alpha = ((rgb && rgb[4]) || '').trim(),
      hex = rgb
        ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
          (rgb[2] | (1 << 8)).toString(16).slice(1) +
          (rgb[3] | (1 << 8)).toString(16).slice(1)
        : orig;

    if (alpha !== '') {
      a = alpha;
    } else {
      a = 01;
    }
    // multiply before convert to HEX
    a = ((a * 255) | (1 << 8)).toString(16).slice(1);
    hex = `#${hex}${a}`;

    return hex;
  }
});
