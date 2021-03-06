import React, { useState, useEffect, ReactElement } from 'react';
import './App.css';
import { ParsedChannel } from './types/ParsedChannel';
import { SearchFilters } from './types/SearchFilters';
import { DEFAULT_PAGE, DEFAULT_COUNTRY } from './config';
import SearchForm from './components/SearchForm';
import ChannelList from './components/ChannelList';
import EmptyList from './components/EmptyList';
import Pagination from './components/Pagination';
import { getChannelList, storeChannels } from './utils/channels';
import filterChannels from './utils/filters';
import { generatePages, getChannelsByPage } from './utils/pagination';

const allChannels = getChannelList();

const App = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);
  const [channels, setChannels] = useState<ParsedChannel[]>([]);
  const [pageList, setPageList] = useState<number[]>([]);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    term: '',
    country: DEFAULT_COUNTRY,
  });

  /**
   * When the search filters change all channels get filtered, pagination is regenerated and page
   * is set back to the default.
   */
  useEffect(
    (): void => {
      const filteredChannels = filterChannels(allChannels, searchFilters);

      setCurrentPage(DEFAULT_PAGE);
      setPageList(generatePages(filteredChannels));
      setChannels(getChannelsByPage(filteredChannels, DEFAULT_PAGE));
    },
    [searchFilters],
  );

  // When the current page changes the visible channels change accordingly.
  useEffect(
    (): void => {
      const filteredChannels = filterChannels(allChannels, searchFilters);

      setChannels(getChannelsByPage(filteredChannels, currentPage));
    },
    [currentPage, searchFilters],
  );

  /**
   * Triggered when a channel is toggled, it updates the list of all channels and re-renders it.
   *
   * @param {string} key - Channel key.
   *
   * @returns {void}
   */
  const toggleChannel = (key: string): void => {
    const channel = allChannels.find((item: ParsedChannel): boolean => item.key === key);

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
   * @returns {void}
   */
  const changePage = (page: number): void => {
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
   * @returns {void}
   */
  const onFilter = (filter: object): void => {
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
  const renderList = (): ReactElement => {
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
