import axios from 'axios';

const baseURL = 'http://localhost:8000/api/'; // Замените на URL вашего Django-бэкенда

const api = axios.create({
  baseURL,
});

export const fetchKubList = async () => {
  try {
    const response = await api.get('kub/');
    return response.data;
  } catch (error) {
    console.error('Error fetching kub list:', error);
    throw error;
  }
};

export const fetchKubDetail = async (id) => {
  try {
    const response = await api.get(`kub/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching kub with ID ${id}:`, error);
    throw error;
  }
};

// Другие функции для отправки запросов к вашему API, если это необходимо