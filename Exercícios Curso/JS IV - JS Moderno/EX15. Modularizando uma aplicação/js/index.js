import calculate from "./calculate.js"
import copyToClipboard from "./copytoclipboard.js"
import switchTheme from "./switchtheme.js"
import { handleButtonPress, handleClear, handleTyping } from "./keyHandlers.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.querySelector('#clear').addEventListener('click', handleClear)
document.querySelector("#input").addEventListener('keydown', handleTyping)
document.querySelector('#equal').addEventListener('click', calculate) // quando clicado o botão de igual, chama a função calculate()
document.querySelector('#copyToClipboard').addEventListener('click', copyToClipboard)
document.querySelector('#themeSwitcher').addEventListener('click', switchTheme)