import React from 'react';
import SearchFilters from './components/SearchFilters';
import ChannelList from './components/ChannelList';
import Pagination from './components/Pagination';
import './App.css';
import channelList from './data/channel-list';
import parseChannels from './utils/channels';
import { generatePages, getChannelsByPage } from './utils/pagination';

const App = () => {
  const channels = parseChannels(channelList);

  return (
    <main className="app">
      <SearchFilters />
      <ChannelList channels={channels} />
      <Pagination />
    </main>
  );
};

export default App;
