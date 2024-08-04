const API_URL = 'http://localhost:10000/api/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
