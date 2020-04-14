import { RawChannel } from '../types/RawChannel';
import getRandomColor from './colors';
import channelList from '../data/channel-list';

const parseChannel = (channel: RawChannel) => ({
  ...channel,
  color: getRandomColor(),
});

const parseChannels = (channels: RawChannel[]) => (
  channels.map(parseChannel).sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }

    return 1;
  })
);

const getChannelList = () => parseChannels(channelList);

export default getChannelList;
