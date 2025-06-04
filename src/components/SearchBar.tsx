
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { cities, states } from '@/data/mockData';
import { SearchFilters } from '@/types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('all-cities');
  const [state, setState] = useState('all-states');

  const handleSearch = () => {
    onSearch({
      query: query || undefined,
      city: city === 'all-cities' ? undefined : city || undefined,
      state: state === 'all-states' ? undefined : state || undefined,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Buscar por cargo ou setor..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="h-12"
            />
          </div>

          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Selecione a cidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-cities">Todas as cidades</SelectItem>
              {cities.map((cityName) => (
                <SelectItem key={cityName} value={cityName}>
                  {cityName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={state} onValueChange={setState}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-states">Todos os estados</SelectItem>
              {states.map((stateName) => (
                <SelectItem key={stateName} value={stateName}>
                  {stateName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleSearch} 
          className="w-full h-12 text-lg"
          size="lg"
        >
          <Search className="w-5 h-5 mr-2" />
          Buscar Vagas
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
