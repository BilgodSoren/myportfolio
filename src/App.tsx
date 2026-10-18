import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/portfolioData';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`${label} copied to clipboard!`);
      
      try {
        confetti({
          particleCount: 40,
          spread: 45,
          origin: { y: 0.85 }
        });
      } catch {
        // Safe fallback
      }

      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }).catch(() => {
      setToastMessage(`Selected: ${text}`);
      setTimeout(() => setToastMessage(null), 3000);
    });
  };

  return (
    <div className="portfolio-app">
      {/* Ambient background glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
          onCopyText={handleCopyText} 
        />

        <StatsStrip />

        <SkillsSection />

        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        <ExperienceTimeline />

        <EducationSection />

        <ContactSection onCopyText={handleCopyText} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Modals */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <Check size={16} style={{ color: '#10B981' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
