import { ParsedChannel } from '../types/ParsedChannel';
import { CHANNELS_PER_PAGE } from '../config'

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
 * @param {number} page - Current page number.
 *
 * @returns {ParsedChannel[]} - Subset of channels corresponding to the current page.
 */
export const getChannelsByPage = (channels: ParsedChannel[], page: number): ParsedChannel[] => (
  channels.slice(CHANNELS_PER_PAGE * (page - 1), CHANNELS_PER_PAGE * page)
);
