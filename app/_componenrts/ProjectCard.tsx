import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  image: string;
  github: string;
  live: string;
  description?: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
  showInfo: number | null;
  onHoverStart: (id: number) => void;
  onHoverEnd: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onHoverStart,
  onHoverEnd,
}) => {
  const containerVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className='relative w-96 group'
      variants={containerVariants}
      whileHover='hover'
      onHoverStart={() => onHoverStart(project.id)}
      onHoverEnd={onHoverEnd}
    >
      {/* Card Container */}
      <div className='bg-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300'>
        {/* Image Container */}
        <div className='relative h-48'>
          <Image
            src={project.image}
            alt={project.title}
            width={256}
            height={192}
            className='object-cover w-full h-full'
          />
          <motion.div
            variants={overlayVariants}
            className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent'
            initial='initial'
          />
        </div>

        {/* Content Container */}
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-white mb-2'>
            {project.title}
          </h3>

          {/* Tags */}
          {project.tags && (
            <div className='flex flex-wrap gap-2 mb-3'>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {project.description && (
            <p className='text-sm text-gray-400 mb-4 line-clamp-2'>
              {project.description}
            </p>
          )}

          {/* Actions */}
          <div className='flex justify-center space-x-8 items-center'>
            <motion.a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span className='text-sm'>Github</span>
            </motion.a>

            <motion.a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span className='text-sm'>Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
