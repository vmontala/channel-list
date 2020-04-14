import React, { useState, useEffect } from 'react';
import './App.css';
import { ParsedChannel } from './types/ParsedChannel';
import { SearchFilters } from './types/SearchFilters';
import SearchForm from './components/SearchForm';
import ChannelList from './components/ChannelList';
import EmptyList from './components/EmptyList';
import Pagination from './components/Pagination';
import { getChannelList, storeChannels } from './utils/channels';
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

  /**
   * When the search filters change all channels get filtered, pagination is regenerated and page
   * is set back to the default.
   */
  useEffect(
    () => {
      const filteredChannels = filterChannels(allChannels, searchFilters);

      setCurrentPage(1);
      setPageList(generatePages(filteredChannels));
      setChannels(getChannelsByPage(filteredChannels, 1));
    },
    [searchFilters],
  );

  // When the current page changes the visible channels change accordingly.
  useEffect(
    () => setChannels(getChannelsByPage(allChannels, currentPage)),
    [currentPage],
  );

  /**
   * Triggered when a channel is toggled, it updates the list of all channels and re-renders it.
   *
   * @param {string} key - Channel key.
   *
   * @returns {undefined}
   */
  const toggleChannel = (key: string) => {
    const channel = allChannels.find((item: ParsedChannel) => item.key === key);

    if (channel) {
      channel.active = !channel.active;
      storeChannels(allChannels);
    }

    const filteredChannels = filterChannels(allChannels, searchFilters);

    setChannels(getChannelsByPage(filteredChannels, currentPage));
  };

  /**
   * Triggered when a page changes, it sets it on the component state.
   * Also scrolls to the top of the page (necessary on smaller devices with forced scroll).
   *
   * @param {number} page - Page to change to.
   *
   * @returns {undefined}
   */
  const changePage = (page: number) => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    setCurrentPage(page);
  };

  /**
   * Triggered when a filter changes, it overrides it on the component state.
   *
   * @param {object} filter - Filter object to spread into the previous set ones.
   *
   * @returns {undefined}
   */
  const onFilter = (filter: object) => {
    setSearchFilters({
      ...searchFilters,
      ...filter,
    });
  };

  /**
   * Renders either an empty list component or the channel list and pagination.
   *
   * @returns {ReactElement} - Empty list or channel list and pagination.
   */
  const renderList = () => {
    if (!channels.length) {
      return <EmptyList />;
    }

    return (
      <>
        <ChannelList
          channels={channels}
          toggleChannel={toggleChannel}
        />
        <Pagination
          current={currentPage}
          pages={pageList}
          changePage={changePage}
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
