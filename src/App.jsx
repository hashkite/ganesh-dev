import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import ProjectsPage from "./pages/projects"
import BlogPage from "./pages/blog"
import ContactPage from "./pages/contact"
import LandingPage from "./pages/homePage"
import "./index.css"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="theme-preference">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
