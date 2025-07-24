import React, { useState } from 'react';
import {
  Code,
  Languages,
  FileBadge,
  GitBranch,
  BrainCircuit,
  Boxes,
  Layers,
  ScrollText,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Wrench,
  Bug,
  Palette,
  MonitorSmartphone,
  BarChart3,
  FlaskConical,
  BookOpen,
  Command,
} from 'lucide-react';
import SearchBar from '../components/quiz/SearchBar.jsx'
import { SubjectCard } from '../components/quiz/SubjectCard.jsx';
import './HomePage.css'

function Home() {
  const allSubjects = [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: <Code size={24} />,
      description: 'Sharpen your skills in JS syntax, ES6 tricks, and real-world programming logic.',
      questionsCount: 10,
    },
    {
      id: 'python',
      name: 'Python',
      icon: <Languages size={24} />,
      description: 'Dive into clean syntax, advanced Pythonic patterns, and data manipulation.',
      questionsCount: 10,
    },
    {
      id: 'html-css',
      name: 'HTML & CSS',
      icon: <FileBadge size={24} />,
      description: 'Build a strong base in layouts, responsive design, and modern styling.',
      questionsCount: 10,
    },
    {
      id: 'git',
      name: 'Git',
      icon: <GitBranch size={24} />,
      description: 'Master version control workflows, branching, and collaboration techniques.',
      questionsCount: 10,
    },
    {
      id: 'react',
      name: 'React',
      icon: <BrainCircuit size={24} />,
      description: 'Test your grip on components, hooks, rendering logic, and state patterns.',
      questionsCount: 10,
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: <Boxes size={24} />,
      description: 'Level up your backend game with Express, APIs, and asynchronous patterns.',
      questionsCount: 10,
    },
    {
      id: 'data-structures',
      name: 'Data Structures',
      icon: <Layers size={24} />,
      description: 'Crack DSA with questions on arrays, trees, graphs, stacks, and queues.',
      questionsCount: 10,
    },
    {
      id: 'algorithms',
      name: 'Algorithms',
      icon: <ScrollText size={24} />,
      description: 'Solve logic-heavy challenges involving recursion, sorting, and complexity.',
      questionsCount: 10,
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database size={24} />,
      description: 'Test SQL queries, joins, indexes, and NoSQL concepts with clarity.',
      questionsCount: 10,
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      icon: <Cloud size={24} />,
      description: 'Navigate cloud services, models, and scalable infrastructure logic.',
      questionsCount: 10,
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: <ShieldCheck size={24} />,
      description: 'Explore key principles of secure coding, auth layers, and encryption.',
      questionsCount: 10,
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: <Cpu size={24} />,
      description: 'Core CS insights including OS, memory, compilation, and theory.',
      questionsCount: 10,
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: <Wrench size={24} />,
      description: 'Assess your CI/CD, automation pipelines, containers, and IaaC knowledge.',
      questionsCount: 10,
    },
    {
      id: 'debugging',
      name: 'Debugging',
      icon: <Bug size={24} />,
      description: 'Tackle logical errors, edge cases, and runtime surprises like a pro.',
      questionsCount: 10,
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      icon: <Palette size={24} />,
      description: 'Understand user behavior, interface harmony, and design empathy.',
      questionsCount: 10,
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      icon: <MonitorSmartphone size={24} />,
      description: 'Create smart, snappy mobile apps for cross-platform ecosystems.',
      questionsCount: 10,
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      icon: <BarChart3 size={24} />,
      description: 'Decode trends, visualize insights, and communicate with data.',
      questionsCount: 10,
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      icon: <FlaskConical size={24} />,
      description: 'Test understanding of models, training pipelines, and overfitting.',
      questionsCount: 10,
    },
    {
      id: 'software-engineering',
      name: 'Software Engineering',
      icon: <BookOpen size={24} />,
      description: 'Understand patterns, system design, SDLC, and clean code culture.',
      questionsCount: 10,
    },
    {
      id: 'command-line',
      name: 'Command Line',
      icon: <Command size={24} />,
      description: 'Get hands-on with bash commands, scripting, and terminal power.',
      questionsCount: 10,
    }
  ];

  const [SearchQuery, Setsearchquery] = useState('');
  const [subjects, Setsubjects] = useState(allSubjects);

  const handleSearch = (query) => {
    Setsearchquery(query);

    if (!query.trim()) {
      Setsubjects(allSubjects);
      return;
    }

    const filteredSubjects = allSubjects
      .map(subject => {
        const name = subject.name.toLowerCase();
        const description = subject.description.toLowerCase();
        const searchTerm = query.toLowerCase();

        let score = 0;

        if (name === searchTerm) score += 3;
        else if (name.startsWith(searchTerm)) score += 2;
        else if (name.includes(searchTerm)) score += 1;

        if (description.includes(searchTerm)) score += 0.5;

        return { ...subject, score };
      })
      .filter(subject => subject.score > 0)
      .sort((a, b) => b.score - a.score);

    Setsubjects(filteredSubjects);
  };

  return (
    <div>
      <div className="LandingPage">
        <div className="LandingContainer">
          <div className="LandingHeader">
            <div className="LandingLogo">
              <h1><BrainCircuit size={'5rem'} color='purple' />Quizmify</h1>
            </div>

            {/* Updated heading and tagline */}
            <p className="LandingTagline">Fuel your curiosity. Level up with quick, fun tech quizzes. 🚀</p>

            <SearchBar onSearch={handleSearch} />

            {SearchQuery && (
              <div className="SearchResultsInfo">
                Showing {subjects.length} results for "{SearchQuery}"
                {subjects.length === 0 && (
                  <p>Sorry we couldn't find the subject you searched for. Try another keyword?</p>
                )}
              </div>
            )}

            <div className="SubjectCardsGrid">
              {
                subjects.map((subject, index) => (
                  <div
                    key={subject.id}
                    className="MainSubject"
                    style={{ animationDelay: `${index * 1}s` }}>
                    <SubjectCard subject={subject} />
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


