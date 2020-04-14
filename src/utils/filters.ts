import { ParsedChannel } from '../types/ParsedChannel';
import { SearchFilters } from '../types/SearchFilters';

const filterChannels = (channels: ParsedChannel[], filters: SearchFilters) => (
  channels.filter((channel) => {
    const { country } = filters;
    const termMatch = channel.label.indexOf(filters.term) !== -1;

    return termMatch && (country === 'All Countries' || channel.country === country);
  })
)

export default filterChannels;
