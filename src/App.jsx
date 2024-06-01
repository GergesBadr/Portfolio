import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeContextProvider } from "./contexts/ThemeContext";

const Header = lazy(() => import("./components/layout/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./pages/Post"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Error = lazy(() => import("./components/common/Error"));

function App() {
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <Suspense>
        <MotionConfig reducedMotion="user">
          <ErrorBoundary
            FallbackComponent={Error}
            onReset={() => window.location.replace("/")}
          >
            <Header />

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:urlTitle" element={<Post />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>

            <Footer />
          </ErrorBoundary>
        </MotionConfig>
      </Suspense>
    </ThemeContextProvider>
  );
}

export default App;
