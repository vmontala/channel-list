import { ParsedChannel } from '../types/ParsedChannel';
import { CHANNELS_PER_PAGE, VISIBLE_PAGE_OFFSET } from '../config';

/**
 * Generates a list of pages based on the amount of channels to display.
 *
 * @param {ParsedChannel[]} channels - List of all channels to display.
 *
 * @returns {number[]} - List of page numbers.
 */
export const generatePages = (channels: ParsedChannel[]): number[] => {
  const pages = [];
  const pageAmount = Math.ceil(channels.length / CHANNELS_PER_PAGE);

  for(let page = 1; page <= pageAmount; page += 1) {
    pages.push(page);
  }

  return pages;
};

/**
 * Gets the channels to be displayed on a certain page.
 *
 * @param {ParsedChannel[]} channels - List of all channels that can be displayed.
 * @param {number} current - Current page number.
 *
 * @returns {ParsedChannel[]} - Subset of channels corresponding to the current page.
 */
export const getChannelsByPage = (channels: ParsedChannel[], current: number): ParsedChannel[] => (
  channels.slice(CHANNELS_PER_PAGE * (current - 1), CHANNELS_PER_PAGE * current)
);

/**
 * Generates a list of the pages that will always be visible (on all devices), based on the
 * current page and the configured page offset).
 *
 * @param {number[]} pages - List of all available pages.
 * @param {number} current - Current page number.
 *
 * @returns {number[]} - List of pages to be always displayed.
 */
export const getAlwaysDisplayedPages = (pages: number[], current: number): number[] => {
  const minPage = current - VISIBLE_PAGE_OFFSET;
  const maxPage = current + VISIBLE_PAGE_OFFSET;
  const displayFrom = minPage > 0 ? minPage : 1;
  const displayTo = maxPage < pages.length ? maxPage : pages.length;
  const alwaysDisplayedPages = [];

  for (let page = displayFrom; page <= displayTo; page += 1) {
    alwaysDisplayedPages.push(page);
  }

  return alwaysDisplayedPages;
};
