import { ParsedChannel } from '../types/ParsedChannel';
import { SearchFilters } from '../types/SearchFilters';
import { ALL_COUNTRIES } from '../config';

/**
 * Filters the given channels using the given criteria (ignoring text case).
 *
 * @param {ParsedChannel[]} channels - List of channels to be filtered.
 * @param {SearchFilters} filters - Filters object to use as criteria.
 *
 * @returns {ParsedChannel[]} - Filtered list of channels.
 */
const filterChannels = (
  channels: ParsedChannel[],
  filters: SearchFilters
): ParsedChannel[] => (
  channels.filter((channel): boolean => {
    const { country } = filters;
    const termRegex = new RegExp(filters.term, 'i');
    const termMatch = !!channel.label.match(termRegex)
    const countryMatch = country === ALL_COUNTRIES || country === channel.country;

    return termMatch && countryMatch;
  })
);

export default filterChannels;
