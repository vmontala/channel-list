import React, { useState, useEffect } from 'react';
import './App.css';
import { ParsedChannel } from './types/ParsedChannel';
import { SearchFilters } from './types/SearchFilters';
import SearchForm from './components/SearchForm';
import ChannelList from './components/ChannelList';
import EmptyList from './components/EmptyList';
import Pagination from './components/Pagination';
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

  const onSelectChannel = (key: string) => {
    const channel = allChannels.find((item) => item.key === key);

    if (channel) {
      channel.active = !channel.active;
    }

    const filteredChannels = filterChannels(allChannels, searchFilters);

    setChannels(getChannelsByPage(filteredChannels, currentPage));
  };

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

  const renderList = () => {
    if (!channels.length) {
      return <EmptyList />;
    }

    return (
      <>
        <ChannelList
          channels={channels}
          onSelectChannel={onSelectChannel}
        />
        <Pagination
          current={currentPage}
          pages={pageList}
          onClickPage={onClickPage}
        />
      </>
    );
  };

  return (
    <main className="app">
      <SearchForm onFilter={onFilter} />
      {renderList()}
    </main>
  );
};

export default App;
