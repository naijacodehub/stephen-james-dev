import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden bg-card hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)] transition-all duration-300 h-full flex flex-col">
        <div className="aspect-video overflow-hidden bg-muted">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {liveUrl && (
              <Button asChild size="sm" className="flex-1">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Live
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button asChild size="sm" variant="secondary" className="flex-1">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
