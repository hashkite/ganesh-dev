// A simplified toast implementation for React
// const TOAST_LIMIT = 1
let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

// This is a simplified version without state management
export function toast({ title, description }) {
  const id = genId()

  // In a real implementation, this would dispatch to a state manager
  // For simplicity, we're just logging to console
  console.log(`Toast ${id}:`, { title, description })

  // Create a toast element
  const toastElement = document.createElement("div")
  toastElement.className = "fixed top-4 right-4 z-50 max-w-md rounded-lg border bg-background p-4 shadow-lg"
  toastElement.innerHTML = `
    <div class="flex justify-between items-center">
      <div>
        ${title ? `<h3 class="font-medium">${title}</h3>` : ""}
        ${description ? `<p class="text-sm text-muted-foreground">${description}</p>` : ""}
      </div>
      <button class="ml-4 text-muted-foreground hover:text-foreground">×</button>
    </div>
  `

  document.body.appendChild(toastElement)

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (document.body.contains(toastElement)) {
      document.body.removeChild(toastElement)
    }
  }, 5000)

  // Add click handler to close button
  const closeButton = toastElement.querySelector("button")
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      if (document.body.contains(toastElement)) {
        document.body.removeChild(toastElement)
      }
    })
  }

  return {
    id,
    dismiss: () => {
      if (document.body.contains(toastElement)) {
        document.body.removeChild(toastElement)
      }
    },
  }
}

