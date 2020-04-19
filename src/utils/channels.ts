import { RawChannel } from '../types/RawChannel';
import { ParsedChannel } from '../types/ParsedChannel';
import { CHANNEL_STORAGE_KEY } from '../config'
import generateColor from './colors';
import channelList from '../data/channel-list';

/**
 * Parses a channel data to fit the project needs.
 *
 * @param {RawChannel} channel - Original channel object as imported from disk.
 * @param {number} index - Channel index number from the channel list.
 *
 * @returns {ParsedChannel} - Parsed channel object.
 */
const parseChannel = (channel: RawChannel, index: number) => ({
  ...channel,
  key: `${channel.key}-${index}`,
  color: generateColor(),
  active: false,
});

/**
 * Parses and sorts the whole list of channels to fit the project needs.
 *
 * @param {RawChannel[]} channels - Original channel objects list as imported from disk.
 *
 * @returns {ParsedChannel[]} - Parsed and sorted channel objects list.
 */
const parseChannels = (channels: RawChannel[]) => (
  channels.map(parseChannel).sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }

    return 1;
  })
);

/**
 * Loads the parsed and sorted channel objects list (if available) from the session storage.
 *
 * @returns {ParsedChannel[]} - Stored channel objects list.
 */
const loadChannels = () => window.sessionStorage.getItem(CHANNEL_STORAGE_KEY);

/**
 * Stores the parsed and sorted channel objects list to the session storage.
 *
 * @param {ParsedChannel[]} channels - Parsed and sorted channel objects list.
 *
 * @returns {void}
 */
export const storeChannels = (channels: ParsedChannel[]) => (
  window.sessionStorage.setItem(CHANNEL_STORAGE_KEY, JSON.stringify(channels))
);

/**
 * Gets the parsed and sorted channel objects list ready for the project (either from storage or freshly generated).
 *
 * @returns {ParsedChannel[]} - Parsed and sorted channel objects list.
 */
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
