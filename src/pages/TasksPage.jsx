import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

/**
 * Tasks Page Component
 * Dedicated page for task management functionality
 */
const TasksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Task Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Organize your work with our intuitive task manager. Create, complete, and filter tasks 
            with ease. All data is automatically saved to your browser's local storage.
          </p>
        </div>

        {/* Task Manager */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Task Manager */}
          <div className="lg:col-span-2">
            <TaskManager />
          </div>

          {/* Sidebar with Tips */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card>
              <Card.Header>
                <Card.Title>💡 Quick Tips</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Click the checkbox to mark tasks as complete</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use filters to view specific task categories</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Tasks are automatically saved to local storage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Press Enter in the input field to quickly add tasks</span>
                  </li>
                </ul>
              </Card.Content>
            </Card>

            {/* Keyboard Shortcuts */}
            <Card>
              <Card.Header>
                <Card.Title>⌨️ Keyboard Shortcuts</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Add Task</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      Enter
                    </kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Focus Input</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      Ctrl + K
                    </kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Clear All</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      Ctrl + Shift + C
                    </kbd>
                  </div>
                </div>
              </Card.Content>
            </Card>

            {/* Statistics */}
            <Card>
              <Card.Header>
                <Card.Title>📊 Features</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ✅
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Task Creation
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      🔄
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Status Toggle
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      🗂️
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Smart Filtering
                    </div>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      💾
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Auto Save
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>

            {/* Data Storage Info */}
            <Card>
              <Card.Header>
                <Card.Title>🔐 Data Storage</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Your tasks are stored locally in your browser using localStorage. 
                  This means your data:
                </p>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Persists between sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Remains private to your device</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Works offline</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">⚠</span>
                    <span>Limited to this browser</span>
                  </li>
                </ul>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;