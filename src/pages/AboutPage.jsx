import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * About Page Component
 * Information about the project, technologies, and features
 */
const AboutPage = () => {
  const technologies = [
    {
      name: 'React 18',
      description: 'Modern React with hooks, context, and concurrent features',
      icon: '⚛️',
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Vite',
      description: 'Fast build tool and development server',
      icon: '⚡',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      icon: '🎨',
      color: 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
    },
    {
      name: 'React Router',
      description: 'Declarative routing for React applications',
      icon: '🛣️',
      color: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    },
    {
      name: 'Axios',
      description: 'Promise-based HTTP client for API requests',
      icon: '📡',
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    },
    {
      name: 'PropTypes',
      description: 'Runtime type checking for React props',
      icon: '🔍',
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    },
  ];

  const features = [
    {
      title: 'Component Architecture',
      description: 'Modular, reusable components with proper prop validation and composition patterns.',
      items: ['Button variants', 'Card compound components', 'Layout components', 'Loading states'],
    },
    {
      title: 'State Management',
      description: 'Comprehensive state management using React hooks and Context API.',
      items: ['React Hooks (useState, useEffect, useContext)', 'Custom hooks', 'Local storage persistence', 'Theme context'],
    },
    {
      title: 'API Integration',
      description: 'Robust API integration with proper error handling and user feedback.',
      items: ['JSONPlaceholder API', 'DummyJSON API', 'Loading & error states', 'Search & pagination'],
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first responsive design with dark mode support.',
      items: ['Mobile, tablet, desktop', 'Dark/light theme toggle', 'Smooth animations', 'Accessibility features'],
    },
  ];

  const projectStats = [
    { label: 'Components', value: '15+', icon: '🧩' },
    { label: 'Pages', value: '4', icon: '📄' },
    { label: 'Custom Hooks', value: '8+', icon: '🪝' },
    { label: 'API Endpoints', value: '10+', icon: '🔌' },
    { label: 'Utility Functions', value: '20+', icon: '🛠️' },
    { label: 'Lines of Code', value: '2000+', icon: '💻' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive React application showcasing modern development practices, 
            built as part of the PLP Academy Full-Stack Development program.
          </p>
        </div>

        {/* Project Overview */}
        <Card className="mb-12">
          <Card.Header>
            <Card.Title className="text-2xl">🎯 Project Overview</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Objective</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This project demonstrates mastery of React.js, JSX, and Tailwind CSS by implementing 
                  a full-featured task management application with API integration, responsive design, 
                  and modern development practices.
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Key Learning Outcomes</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Component-based architecture with React</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>State management with hooks and Context API</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>API integration with proper error handling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Responsive design with Tailwind CSS</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Modern development tooling and practices</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {projectStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            🛠️ Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} variant="elevated" className="h-full">
                <Card.Content className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${tech.color}`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <Card.Title className="mb-3">{tech.name}</Card.Title>
                  <Card.Description>{tech.description}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            ✨ Key Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} variant="elevated">
                <Card.Header>
                  <Card.Title>{feature.title}</Card.Title>
                </Card.Header>
                <Card.Content>
                  <Card.Description className="mb-4">
                    {feature.description}
                  </Card.Description>
                  <ul className="space-y-2">
                    {feature.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <Card className="mb-12">
          <Card.Header>
            <Card.Title className="text-2xl">🏗️ Project Architecture</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Folder Structure</h3>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-600 dark:text-gray-300">
                    src/<br />
                    ├── components/     # Reusable UI components<br />
                    ├── pages/         # Page-level components<br />
                    ├── hooks/         # Custom React hooks<br />
                    ├── context/       # React context providers<br />
                    ├── api/           # API service functions<br />
                    ├── utils/         # Utility functions<br />
                    └── assets/        # Static assets
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Design Principles</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Separation of Concerns:</strong> Clear separation between components, logic, and data
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Reusability:</strong> Components designed for maximum reusability with props
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Performance:</strong> Optimized with debouncing, pagination, and lazy loading
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Accessibility:</strong> ARIA labels, keyboard navigation, and semantic HTML
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Developer Info */}
        <Card className="mb-12">
          <Card.Header>
            <Card.Title className="text-2xl">👨‍💻 Developer Information</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">About the Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This project was built as part of the PLP Academy Full-Stack Development program, 
                  demonstrating proficiency in modern React development and best practices.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Program:</strong> PLP Academy - Full-Stack Development</div>
                  <div><strong>Assignment:</strong> Week 3 - React.js, JSX, and Tailwind CSS</div>
                  <div><strong>Completion Date:</strong> {new Date().getFullYear()}</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Skills Demonstrated</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'React.js', 'JSX', 'Tailwind CSS', 'JavaScript ES6+',
                    'API Integration', 'State Management', 'Responsive Design', 'Git & GitHub'
                  ].map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Call to Action */}
        <Card variant="elevated" className="text-center">
          <Card.Content className="py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Explore the Application
            </h2>
            <Card.Description className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to see the features in action? Explore the task manager or check out 
              the API data integration with real-time search and pagination.
            </Card.Description>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <a href="/tasks" className="flex items-center space-x-2">
                  <span>Try Task Manager</span>
                  <span>→</span>
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/api-data" className="flex items-center space-x-2">
                  <span>View API Demo</span>
                  <span>📊</span>
                </a>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;