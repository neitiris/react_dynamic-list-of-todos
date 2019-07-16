const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getTodos = async(urlParams) => {
  const url = '/todos';
  const response = await fetch(`${baseUrl}${url}${urlParams}`);
  const todos = await response.json();
  return todos;
};

export const getUsers = async() => {
  const url = '/users';
  const response = await fetch(`${baseUrl}${url}`);
  const users = await response.json();
  return users;
};