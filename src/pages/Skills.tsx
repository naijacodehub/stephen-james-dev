import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End Technologies',
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Redux', level: 'Advanced' },
        { name: 'React Query', level: 'Advanced' }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', level: 'Expert' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Webpack & Vite', level: 'Advanced' },
        { name: 'npm & yarn', level: 'Expert' },
        { name: 'Figma', level: 'Intermediate' },
        { name: 'Chrome DevTools', level: 'Expert' },
        { name: 'Postman', level: 'Advanced' },
        { name: 'Jest & Testing Library', level: 'Advanced' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 'Expert' },
        { name: 'Communication', level: 'Expert' },
        { name: 'Team Collaboration', level: 'Expert' },
        { name: 'Time Management', level: 'Advanced' },
        { name: 'Attention to Detail', level: 'Expert' },
        { name: 'Adaptability', level: 'Expert' },
        { name: 'Self-Motivation', level: 'Expert' },
        { name: 'Mentoring', level: 'Advanced' }
      ]
    }
  ];

  const currentlyLearning = [
    'Three.js for 3D web experiences',
    'Advanced animation with Framer Motion',
    'Web Performance Optimization',
    'Micro-frontend architecture'
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-primary text-primary-foreground';
      case 'Advanced':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and professional competencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <Card 
                      key={skill.name}
                      className="p-4 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)] transition-shadow"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge 
                          className={`${getLevelColor(skill.level)} w-fit text-xs`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
              <h2 className="text-2xl font-bold mb-6">Currently Learning</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {currentlyLearning.map((item) => (
                  <div 
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
