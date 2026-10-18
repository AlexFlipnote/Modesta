// Runs inside each example preview: match the docs theme and fit the frame to the example
try {
  document.documentElement.className = parent.document.documentElement.className
} catch (e) {}

function fit() {
  const frame = window.frameElement
  if (!frame || frame.hasAttribute("data-height")) return
  frame.style.height = Math.ceil(document.getElementById("example").getBoundingClientRect().height) + "px"
}

addEventListener("load", fit)
addEventListener("resize", fit)
