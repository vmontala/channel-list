import React from 'react';
import SearchFilters from './components/SearchFilters';
import ChannelList from './components/ChannelList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <main className="app">
      <SearchFilters />
      <ChannelList />
      <Pagination />
    </main>
  );
}

export default App;
