
const code = localStorage.getItem("zoom-code") || 12
const url = "https://groups.google.com/a/digitalcareerinstitute.org/g/zoom-pm-"


const text = document.getElementById("zoom-code")

text.value = code
text.focus()
text.select()
text.addEventListener("keydown", checkForEnter)

function checkForEnter(event) {
  const key = event.key
  if (key === "Enter") {
    event.preventDefault((
      openGmail()
    ))
  }
}


const button = document.getElementById("open-gmail")
button.addEventListener("click", openGmail, false)

function openGmail () {
  const code = text.value
  window.location.href = `${url}${code}`
  localStorage.setItem("zoom-code", code)
}