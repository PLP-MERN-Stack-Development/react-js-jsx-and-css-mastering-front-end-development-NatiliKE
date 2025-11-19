import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home Page Component
 * Landing page showcasing the application features
 */
const HomePage = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and manage your tasks efficiently with our intuitive interface.',
      icon: '✅',
      link: '/tasks',
    },
    {
      title: 'API Integration',
      description: 'Explore real-time data from external APIs with built-in search and pagination.',
      icon: '🌐',
      link: '/api-data',
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for optimal viewing experience.',
      icon: '🌙',
      link: '#',
    },
    {
      title: 'Responsive Design',
      description: 'Seamlessly works across all devices - mobile, tablet, and desktop.',
      icon: '📱',
      link: '#',
    },
  ];

  const stats = [
    { label: 'Components', value: '15+' },
    { label: 'API Endpoints', value: '10+' },
    { label: 'Custom Hooks', value: '8+' },
    { label: 'Utilities', value: '20+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Modern React
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Task Manager
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive React application showcasing modern development practices with 
              Tailwind CSS, API integration, and responsive design. Built for PLP Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tasks">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/api-data">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View API Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover what makes our task manager stand out with modern React development practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                variant="elevated"
                interactive={feature.link !== '#'}
                className="h-full animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card.Content className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <Card.Title className="mb-3 text-lg">
                    {feature.title}
                  </Card.Title>
                  <Card.Description className="mb-4">
                    {feature.description}
                  </Card.Description>
                  {feature.link !== '#' ? (
                    <Link to={feature.link}>
                      <Button variant="primary" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="secondary" size="sm" className="w-full" disabled>
                      Available Now
                    </Button>
                  )}
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built With Modern Tech
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leveraging the latest technologies and best practices in React development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'text-blue-500' },
              { name: 'Vite', color: 'text-purple-500' },
              { name: 'Tailwind CSS', color: 'text-cyan-500' },
              { name: 'Axios', color: 'text-green-500' },
              { name: 'React Router', color: 'text-red-500' },
              { name: 'ESLint', color: 'text-indigo-500' },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className="text-center p-4 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                  ⚡
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {tech.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card variant="elevated" className="p-12">
            <Card.Content>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h2>
              <Card.Description className="text-lg mb-8 max-w-2xl mx-auto">
                Explore the full potential of our task management system. 
                Create tasks, fetch data from APIs, and experience modern React development.
              </Card.Description>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tasks">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Start Managing Tasks
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;