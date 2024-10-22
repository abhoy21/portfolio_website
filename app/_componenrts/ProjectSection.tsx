import { ProjectCard } from "./ProjectCard"; // Ensure correct import path

interface Project {
  id: number;
  title: string;
  image: string;
  github: string;
  live: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  showProjectInfo: number | null;
  setShowProjectInfo: (id: number | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  showProjectInfo,
  setShowProjectInfo,
}) => (
  <div className='flex space-x-4 overflow-x-auto pb-4'>
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        showInfo={showProjectInfo}
        onHoverStart={setShowProjectInfo}
        onHoverEnd={() => setShowProjectInfo(null)}
      />
    ))}
  </div>
);
