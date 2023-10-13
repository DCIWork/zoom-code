/**
 * openGmail.js
 */


let codes = localStorage.getItem("zoom-codes") || "[]"
codes = JSON.parse(codes)

const url = "https://groups.google.com/a/digitalcareerinstitute.org/g/zoom-pm-"



const recent = document.getElementById("recent")
const select = document.getElementById("select")
const button = document.getElementById("open-gmail")
const text = document.getElementById("zoom-code")



select.addEventListener("change", selectRecent, false)
button.addEventListener("click", openGmail, false)



// Ensure that pressing the Enter key activates the button
// regardless of which element has focus
document.body.addEventListener("keydown", checkForEnter)

function checkForEnter(event) {
  const key = event.key
  if (key === "Enter") {
    event.preventDefault((
      openGmail()
    ))
  }
}



// Update the select element with the most recently used numbers
function showRecentCodes() {
  const innerHTML = codes.reduce(( html, code ) => {
    return html + `<option value="${code}">${code}</option>`
  }, "")

  const action = innerHTML ? "remove" : "add"
  recent.classList[action]("hidden")

  select.innerHTML = innerHTML // may be empty
  text.value = codes[0] || 12
}

showRecentCodes()



// Allow user to start typing a number immediately
text.focus()
text.select()



// Update the text input when a selection is made
function selectRecent (event) {
  text.value = event.target.value
}



function openGmail () {
  const code = text.value

  // Remember the most recently used class code
  const index = codes.indexOf(code)
  if (index >= 0) {
    codes.splice(index, 1)
  }
  codes.unshift(code)
  codes.length = Math.min(5, codes.length)

  showRecentCodes()
  localStorage.setItem("zoom-codes", JSON.stringify(codes))

  // Go to the appropiate Gmail account
  window.location.href = `${url}${code}`
}