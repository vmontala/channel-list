import { ParsedChannel } from '../types/ParsedChannel';

const channelsPerPage = 15;

export const generatePages = (channels: ParsedChannel[]) => {
  const pages = [];
  const pageAmount = Math.ceil(channels.length / channelsPerPage);

  for(let page = 1; page <= pageAmount; page += 1) {
    pages.push(page);
  }

  return pages;
};

export const getChannelsByPage = (channels: ParsedChannel[], page: number) => (
  channels.slice(channelsPerPage * (page - 1), channelsPerPage * page)
);
