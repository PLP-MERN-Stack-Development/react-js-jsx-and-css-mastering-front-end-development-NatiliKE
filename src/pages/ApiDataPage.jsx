import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { jsonPlaceholderAPI, dummyJsonAPI } from '../api';
import { useDebounce } from '../hooks';
import { formatDate, truncateText, paginate } from '../utils';

/**
 * API Data Page Component
 * Demonstrates API integration with loading states, search, and pagination
 */
const ApiDataPage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize] = useState(12);

  // Debounce search term to avoid too many API calls
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Available API endpoints
  const apiTabs = [
    { id: 'posts', label: 'Posts', icon: '📝' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'quotes', label: 'Quotes', icon: '💬' },
  ];

  // Fetch data based on active tab
  const fetchData = async (tab = activeTab, page = 1, search = '') => {
    try {
      setLoading(true);
      setError(null);
      
      let result;
      const params = {
        limit: pageSize,
        skip: (page - 1) * pageSize,
        search: search,
      };

      switch (tab) {
        case 'posts':
          if (search) {
            // For posts, we'll search in the title and body client-side
            const allPosts = await jsonPlaceholderAPI.getPosts();
            const filteredPosts = allPosts.filter(post =>
              post.title.toLowerCase().includes(search.toLowerCase()) ||
              post.body.toLowerCase().includes(search.toLowerCase())
            );
            const paginated = paginate(filteredPosts, page, pageSize);
            result = {
              items: paginated.items,
              total: filteredPosts.length,
            };
          } else {
            const posts = await jsonPlaceholderAPI.getPosts();
            const paginated = paginate(posts, page, pageSize);
            result = {
              items: paginated.items,
              total: posts.length,
            };
          }
          break;

        case 'users':
          const users = await jsonPlaceholderAPI.getUsers();
          const filteredUsers = search
            ? users.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.company.name.toLowerCase().includes(search.toLowerCase())
              )
            : users;
          const paginatedUsers = paginate(filteredUsers, page, pageSize);
          result = {
            items: paginatedUsers.items,
            total: filteredUsers.length,
          };
          break;

        case 'products':
          if (search) {
            result = await dummyJsonAPI.getProducts({ ...params, search });
            result = {
              items: result.products || [],
              total: result.total || 0,
            };
          } else {
            result = await dummyJsonAPI.getProducts(params);
            result = {
              items: result.products || [],
              total: result.total || 0,
            };
          }
          break;

        case 'quotes':
          result = await dummyJsonAPI.getQuotes(params);
          let quotes = result.quotes || [];
          
          if (search) {
            quotes = quotes.filter(quote =>
              quote.quote.toLowerCase().includes(search.toLowerCase()) ||
              quote.author.toLowerCase().includes(search.toLowerCase())
            );
          }
          
          result = {
            items: quotes,
            total: search ? quotes.length : result.total || 0,
          };
          break;

        default:
          result = { items: [], total: 0 };
      }

      setData(result.items);
      setTotalItems(result.total);
      
    } catch (err) {
      console.error('API Error:', err);
      setError(err.message || 'Failed to fetch data');
      setData([]);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  // Effect for tab changes
  useEffect(() => {
    setCurrentPage(1);
    setSearchTerm('');
    fetchData(activeTab, 1, '');
  }, [activeTab]);

  // Effect for search changes
  useEffect(() => {
    if (debouncedSearchTerm !== searchTerm) return;
    setCurrentPage(1);
    fetchData(activeTab, 1, debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  // Effect for page changes
  useEffect(() => {
    if (currentPage === 1) return;
    fetchData(activeTab, currentPage, debouncedSearchTerm);
  }, [currentPage]);

  // Handle refresh
  const handleRefresh = () => {
    setSearchTerm('');
    setCurrentPage(1);
    fetchData(activeTab, 1, '');
  };

  // Calculate pagination
  const totalPages = Math.ceil(totalItems / pageSize);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // Render different card types based on data type
  const renderCard = (item, index) => {
    switch (activeTab) {
      case 'posts':
        return (
          <Card key={item.id} variant="elevated" className="h-full">
            <Card.Header>
              <Card.Title className="text-base">
                {truncateText(item.title, 60)}
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description>
                {truncateText(item.body, 120)}
              </Card.Description>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>Post #{item.id}</span>
                <span>User {item.userId}</span>
              </div>
            </Card.Content>
          </Card>
        );

      case 'users':
        return (
          <Card key={item.id} variant="elevated" className="h-full">
            <Card.Content>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <Card.Title className="text-base">{item.name}</Card.Title>
                  <Card.Description>{item.email}</Card.Description>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Phone:</strong> {item.phone}</div>
                <div><strong>Company:</strong> {item.company.name}</div>
                <div><strong>Website:</strong> {item.website}</div>
                <div><strong>City:</strong> {item.address.city}</div>
              </div>
            </Card.Content>
          </Card>
        );

      case 'products':
        return (
          <Card key={item.id} variant="elevated" className="h-full">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(item.title)}`;
                }}
              />
            </div>
            <Card.Content>
              <Card.Title className="text-base mb-2">
                {truncateText(item.title, 50)}
              </Card.Title>
              <Card.Description className="mb-3">
                {truncateText(item.description, 80)}
              </Card.Description>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">${item.price}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm">{item.rating?.toFixed(1)}</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </Card.Content>
          </Card>
        );

      case 'quotes':
        return (
          <Card key={item.id} variant="elevated" className="h-full">
            <Card.Content>
              <div className="text-2xl text-blue-500 mb-3">"</div>
              <Card.Description className="italic mb-4 text-base">
                {item.quote}
              </Card.Description>
              <div className="text-right">
                <Card.Title className="text-sm">
                  — {item.author}
                </Card.Title>
              </div>
            </Card.Content>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            API Data Explorer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Explore data from various APIs with real-time search, pagination, and loading states. 
            This demonstrates proper API integration practices in React applications.
          </p>
        </div>

        {/* API Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {apiTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'primary' : 'secondary'}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center space-x-2"
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <Card.Content>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder={`Search ${apiTabs.find(t => t.id === activeTab)?.label.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              {/* Refresh Button */}
              <Button
                variant="secondary"
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center space-x-2"
              >
                <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh</span>
              </Button>
              
              {/* Results Count */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {loading ? 'Loading...' : `${totalItems} results`}
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Content */}
        {loading ? (
          <Loading.CardSkeleton count={pageSize} />
        ) : error ? (
          <Card className="text-center p-12">
            <Card.Content>
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <Card.Title className="text-xl mb-2">Error Loading Data</Card.Title>
              <Card.Description className="mb-4">{error}</Card.Description>
              <Button variant="primary" onClick={handleRefresh}>
                Try Again
              </Button>
            </Card.Content>
          </Card>
        ) : data.length === 0 ? (
          <Card className="text-center p-12">
            <Card.Content>
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <Card.Title className="text-xl mb-2">No Results Found</Card.Title>
              <Card.Description className="mb-4">
                {searchTerm 
                  ? `No ${apiTabs.find(t => t.id === activeTab)?.label.toLowerCase()} found matching "${searchTerm}"`
                  : `No ${apiTabs.find(t => t.id === activeTab)?.label.toLowerCase()} available`
                }
              </Card.Description>
              {searchTerm && (
                <Button variant="secondary" onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              )}
            </Card.Content>
          </Card>
        ) : (
          <>
            {/* Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {data.map((item, index) => renderCard(item, index))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Card>
                <Card.Content>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, totalItems)} of {totalItems} results
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={!hasPrevPage || loading}
                      >
                        Previous
                      </Button>
                      
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          
                          return (
                            <Button
                              key={pageNum}
                              variant={currentPage === pageNum ? 'primary' : 'secondary'}
                              size="sm"
                              onClick={() => setCurrentPage(pageNum)}
                              disabled={loading}
                              className="w-10 h-10 p-0"
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                      </div>
                      
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={!hasNextPage || loading}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ApiDataPage;