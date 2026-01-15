function ThemeToggle() {
  const toggleTheme = () => {
    const current = document.body.getAttribute('data-theme')
    document.body.setAttribute(
      'data-theme',
      current === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <button
      className="btn btn-outline-primary btn-sm"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      🌙
    </button>
  )
}

export default ThemeToggle
