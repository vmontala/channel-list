import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import ChannelList from './components/ChannelList';
import Pagination from './components/Pagination';
import './App.css';
import { ParsedChannel } from './types/ParsedChannel';
import { SearchFilters } from './types/SearchFilters';
import getChannelList from './utils/channels';
import filterChannels from './utils/filters';
import { generatePages, getChannelsByPage } from './utils/pagination';

const allChannels = getChannelList();

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [channels, setChannels] = useState<ParsedChannel[]>([]);
  const [pageList, setPageList] = useState<number[]>([]);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    term: '',
    country: 'All Countries',
  });

  useEffect(
    () => {
      const filteredChannels = filterChannels(allChannels, searchFilters);

      setCurrentPage(1);
      setChannels(getChannelsByPage(filteredChannels, 1));
      setPageList(generatePages(filteredChannels));
    },
    [searchFilters],
  );

  useEffect(
    () => setChannels(getChannelsByPage(allChannels, currentPage)),
    [currentPage],
  );

  const onClickPage = (page: number) => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    setCurrentPage(page);
  };

  const onFilter = (filter: object) => {
    setSearchFilters({
      ...searchFilters,
      ...filter,
    });
  };

  return (
    <main className="app">
      <SearchForm onFilter={onFilter} />
      <ChannelList channels={channels} />
      <Pagination current={currentPage} pages={pageList} onClickPage={onClickPage} />
    </main>
  );
};

export default App;
