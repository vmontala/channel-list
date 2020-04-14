import { ParsedChannel } from '../types/ParsedChannel';
import { SearchFilters } from '../types/SearchFilters';

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
