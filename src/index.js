import './style.css';
import showCities from './cities';

const search = document.querySelector('.search');
const searchTerm = document.querySelector('.search-term');
search.addEventListener('click', (e) => {
  e.preventDefault();
  showCities(searchTerm.value);
  searchTerm.value = '';
});
