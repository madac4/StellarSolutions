import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import Home from './components/Pages/Home';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="service" element={<ServicesPage />} />
                    <Route path="service/:serviceDetailsId" element={<ServiceDetailsPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                    <Route
                        path="portfolio/:portfolioDetailsId"
                        element={<PortfolioDetailsPage />}
                    />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="team" element={<TeamPage />} />
                    <Route
                        path="/case-study/:caseStudyDetailsId"
                        element={<CaseStudyDetailsPage />}
                    />
                    <Route path="faq" element={<FaqPage />} />
                </Route>
                <Route path="/" element={<Layout headerVariant="cs-site_header_full_width" />}>
                    <Route path="creative-portfolio" element={<CreativePortfolioHome />} />
                    <Route path="showcase-portfolio" element={<ShowcasePortfolioHome />} />
                    <Route path="case-study-showcase" element={<CaseStudyShowcaseHome />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
