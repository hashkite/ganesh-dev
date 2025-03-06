export function Toaster() {
  // This is a simplified toaster component
  // In a real implementation, this would subscribe to a toast state
  return (
    <div
      id="toast-container"
      className="fixed top-0 z-[100] flex flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    />
  )
}

