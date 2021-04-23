document.addEventListener("DOMContentLoaded", function() {
  // Default ID name
  const theme_button_name = "change-theme"

  // Create a floating button
  const button = document.createElement("button")
  button.id = theme_button_name
  button.innerText = "dark-theme"
  button.style = "position: fixed; left: 1.5em; bottom: 1.5em;"

  const button_style = document.createElement("style")
  button_style.innerHTML = `
    .light-theme #${theme_button_name} {color:#000;background:#fff}
    .dark-theme #${theme_button_name} {color:#fff;background:#000}
  `

  // Append the button and style to HTML.body
  document.body.appendChild(button)
  document.body.appendChild(button_style)

  // Listen to button clicks and change theme
  document.getElementById(theme_button_name).addEventListener("click", function() {
    const body_class = document.body.className
    const button_prop = document.getElementById(theme_button_name)
    if (body_class.includes("dark-theme")) {
      document.body.className = body_class.replace("dark-theme", "light-theme")
      button_prop.innerHTML = "light-theme"
    } else {
      document.body.className = body_class.replace("light-theme", "dark-theme")
      button_prop.innerHTML = "dark-theme"
    }
  })
})

