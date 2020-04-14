import { ParsedChannel } from '../types/ParsedChannel';
import { SearchFilters } from '../types/SearchFilters';

/**
 * Filters the given channels using the given criteria.
 *
 * @param {ParsedChannel[]} channels - List of channels to be filtered.
 * @param {SearchFilters} filters - Filters object to use as criteria.
 *
 * @returns {ParsedChannel[]} - Filtered list of channels.
 */
const filterChannels = (
  channels: ParsedChannel[],
  filters: SearchFilters
) => (
  channels.filter((channel) => {
    const { country } = filters;
    const termMatch = channel.label.indexOf(filters.term) !== -1;
    const countryMatch = country === 'All Countries' || country === channel.country;

    return termMatch && countryMatch;
  })
);

export default filterChannels;
