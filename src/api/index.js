import axios from 'axios';
import { useState } from 'react';

// Create axios instance with default configuration
const api = axios.create({
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging and auth (if needed)
api.interceptors.request.use(
  (config) => {
    // Log requests in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error types
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout. Please try again.';
    } else if (!error.response) {
      error.message = 'Network error. Please check your connection.';
    } else {
      // Server responded with error status
      const status = error.response.status;
      switch (status) {
        case 400:
          error.message = 'Bad request. Please check your input.';
          break;
        case 401:
          error.message = 'Unauthorized. Please login again.';
          break;
        case 403:
          error.message = 'Forbidden. You do not have permission.';
          break;
        case 404:
          error.message = 'Not found. The requested resource does not exist.';
          break;
        case 500:
          error.message = 'Server error. Please try again later.';
          break;
        default:
          error.message = `Request failed with status ${status}`;
      }
    }
    
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

// JSONPlaceholder API functions
export const jsonPlaceholderAPI = {
  // Posts
  getPosts: async (params = {}) => {
    const response = await api.get('https://jsonplaceholder.typicode.com/posts', { params });
    return response.data;
  },
  
  getPost: async (id) => {
    const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  },
  
  createPost: async (post) => {
    const response = await api.post('https://jsonplaceholder.typicode.com/posts', post);
    return response.data;
  },
  
  updatePost: async (id, post) => {
    const response = await api.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post);
    return response.data;
  },
  
  deletePost: async (id) => {
    const response = await api.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  },
  
  // Users
  getUsers: async () => {
    const response = await api.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  },
  
  getUser: async (id) => {
    const response = await api.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  },
  
  // Comments
  getComments: async (postId = null) => {
    const params = postId ? { postId } : {};
    const response = await api.get('https://jsonplaceholder.typicode.com/comments', { params });
    return response.data;
  },
  
  getPostComments: async (postId) => {
    const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response.data;
  },
  
  // Albums
  getAlbums: async (params = {}) => {
    const response = await api.get('https://jsonplaceholder.typicode.com/albums', { params });
    return response.data;
  },
  
  getAlbum: async (id) => {
    const response = await api.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
    return response.data;
  },
  
  // Photos
  getPhotos: async (params = {}) => {
    const response = await api.get('https://jsonplaceholder.typicode.com/photos', { params });
    return response.data;
  },
  
  getPhoto: async (id) => {
    const response = await api.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    return response.data;
  },
  
  getAlbumPhotos: async (albumId) => {
    const response = await api.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    return response.data;
  },
};

// DummyJSON API functions (alternative API)
export const dummyJsonAPI = {
  // Products
  getProducts: async (params = {}) => {
    const { limit = 30, skip = 0, search = '' } = params;
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    
    if (search) {
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`;
    }
    
    const response = await api.get(url);
    return response.data;
  },
  
  getProduct: async (id) => {
    const response = await api.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  },
  
  getCategories: async () => {
    const response = await api.get('https://dummyjson.com/products/categories');
    return response.data;
  },
  
  getProductsByCategory: async (category, params = {}) => {
    const { limit = 30, skip = 0 } = params;
    const response = await api.get(
      `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    );
    return response.data;
  },
  
  // Users
  getUsers: async (params = {}) => {
    const { limit = 30, skip = 0 } = params;
    const response = await api.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
    return response.data;
  },
  
  getUser: async (id) => {
    const response = await api.get(`https://dummyjson.com/users/${id}`);
    return response.data;
  },
  
  // Posts
  getPosts: async (params = {}) => {
    const { limit = 30, skip = 0 } = params;
    const response = await api.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    return response.data;
  },
  
  getPost: async (id) => {
    const response = await api.get(`https://dummyjson.com/posts/${id}`);
    return response.data;
  },
  
  // Quotes
  getQuotes: async (params = {}) => {
    const { limit = 30, skip = 0 } = params;
    const response = await api.get(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`);
    return response.data;
  },
  
  getQuote: async (id) => {
    const response = await api.get(`https://dummyjson.com/quotes/${id}`);
    return response.data;
  },
};

// Custom hook for API calls with loading and error states
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  const execute = async (apiFunction, ...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  const reset = () => {
    setLoading(false);
    setError(null);
    setData(null);
  };
  
  return { loading, error, data, execute, reset };
};

export default api;