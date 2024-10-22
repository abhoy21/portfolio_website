// Section.tsx

import { motion } from "framer-motion";
import { skillsData } from "./PortfolioData"; // Importing skillsData
import { ProjectsSection } from "./ProjectSection";

interface SectionProps {
  section: {
    id: string;
    title: string;
    content: string | JSX.Element;
  };
  projects: Project[];
  showProjectInfo: number | null;
  setShowProjectInfo: (id: number | null) => void;
}

interface Project {
  id: number;
  title: string;
  image: string;
  github: string;
  live: string;
}

export const Section: React.FC<SectionProps> = ({
  section,
  projects,
  showProjectInfo,
  setShowProjectInfo,
}) => (
  <div className='w-full flex-shrink-0 px-12'>
    <motion.h2
      className='text-6xl font-bold mb-6 mt-48'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {section.title}
    </motion.h2>
    <motion.p
      className='text-xl mb-8'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {section.content}
    </motion.p>

    {section.id === "projects" && (
      <ProjectsSection
        projects={projects}
        showProjectInfo={showProjectInfo}
        setShowProjectInfo={setShowProjectInfo}
      />
    )}

    {section.id === "skills" && (
      <div className='grid grid-cols-2 gap-4 mt-8'>
        <div>
          <h3 className='text-2xl font-bold mb-2'>Languages</h3>
          <ul className='list-disc pl-5'>
            {skillsData.languages.map((language) => (
              <li key={language} className='text-xl'>
                {language}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-2'>Frameworks</h3>
          <ul className='list-disc pl-5'>
            {skillsData.frameworks.map((framework) => (
              <li key={framework} className='text-xl'>
                {framework}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-2'>Databases</h3>
          <ul className='list-disc pl-5'>
            {skillsData.databases.map((database) => (
              <li key={database} className='text-xl'>
                {database}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-2'>Developer Tools</h3>
          <ul className='list-disc pl-5'>
            {skillsData.developerTools.map((tool) => (
              <li key={tool} className='text-xl'>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
);
