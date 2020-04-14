import { RawChannel } from '../types/RawChannel';
import { ParsedChannel } from '../types/ParsedChannel';
import getRandomColor from './colors';
import channelList from '../data/channel-list';

const parseChannel = (channel: RawChannel, index: number) => ({
  ...channel,
  key: `${channel.key}-${index}`,
  color: getRandomColor(),
  active: false,
});

const parseChannels = (channels: RawChannel[]) => (
  channels.map(parseChannel).sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }

    return 1;
  })
);

const loadChannels = () => window.sessionStorage.getItem('channelList');

export const storeChannels = (channels: ParsedChannel[]) => (
  window.sessionStorage.setItem('channelList', JSON.stringify(channels))
);

export const getChannelList = () => {
  const storedChannels = loadChannels();
  let channels = null;

  if (storedChannels) {
    channels = JSON.parse(storedChannels);
  } else {
    channels = parseChannels(channelList);

    storeChannels(channels);
  }

  return channels;
};
