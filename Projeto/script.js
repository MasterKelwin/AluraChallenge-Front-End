const colorSelector = document.querySelector('input[type="color"]');
const editorCodigo = document.querySelector('.editor_codigo');
let inputColor;

colorSelector.addEventListener('change', function(e) {
    inputColor = e.target.value;
    editorCodigo.style.borderColor = inputColor;
})