import { CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Senior Front-End Engineer',
      description: 'Leading front-end development for enterprise applications, mentoring junior developers.'
    },
    {
      year: '2023',
      title: 'Front-End Engineer',
      description: 'Built responsive web applications using React and modern JavaScript frameworks.'
    },
    {
      year: '2022',
      title: 'Self-Taught Developer',
      description: 'Completed multiple online courses and built personal projects to master front-end development.'
    },
    {
      year: '2021',
      title: 'Started Coding Journey',
      description: 'Discovered passion for web development and committed to learning front-end technologies.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Self-taught Front-End Engineer passionate about creating exceptional web experiences
            </p>
          </div>

          {/* Bio */}
          <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Stephen James, a self-taught Front-End Engineer specializing in React, JavaScript, and modern web technologies. 
                My journey into web development began with curiosity and evolved into a passion for crafting beautiful, performant user interfaces.
              </p>
              <p>
                What started as building simple websites quickly transformed into mastering complex state management, 
                responsive design systems, and modern front-end architectures. I believe that great code is not just functional—it's 
                clean, maintainable, and built with the end user in mind.
              </p>
              <p>
                Today, I focus on building scalable React applications, implementing pixel-perfect designs, and optimizing 
                web performance. I'm constantly learning new technologies and best practices to stay at the forefront of 
                front-end development.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-6">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Write clean, maintainable code',
                'Prioritize user experience',
                'Stay curious and keep learning',
                'Collaborate and communicate effectively',
                'Build accessible applications',
                'Optimize for performance'
              ].map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold mb-8">Milestones</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-1/2"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="inline-block bg-card p-6 rounded-lg border border-border hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)] transition-shadow">
                        <div className="text-primary font-bold mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] md:-translate-x-1/2"></div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quote */}
          <section className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <blockquote className="text-2xl font-medium italic text-muted-foreground max-w-2xl mx-auto">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— Cory House</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
