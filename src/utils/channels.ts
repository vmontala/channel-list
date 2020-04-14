import { RawChannel } from '../types/RawChannel';
import getRandomColor from './colors';

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

export default parseChannels;
