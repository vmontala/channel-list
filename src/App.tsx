import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import ChannelList from './components/ChannelList';
import Pagination from './components/Pagination';
import './App.css';
import channelList from './data/channel-list';
import parseChannels from './utils/channels';
import { generatePages, getChannelsByPage } from './utils/pagination';

const App = () => {
  const channels = parseChannels(channelList);
  const pageList = generatePages(channels);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const onClickPage = (page: number) => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    setCurrentPage(page);
  };

  return (
    <main className="app">
      <SearchForm />
      <ChannelList channels={getChannelsByPage(channels, currentPage)} />
      <Pagination current={currentPage} pages={pageList} onClickPage={onClickPage} />
    </main>
  );
};

export default App;
