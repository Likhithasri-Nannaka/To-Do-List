const API_URL = 'http://to-do-list-1-i7w0.onrender.com/api/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
