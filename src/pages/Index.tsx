
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/data/mockData';
import { Job, SearchFilters } from '@/types';
import { Briefcase, Users, MapPin, TrendingUp } from 'lucide-react';

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs.slice(0, 6));
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});

  useEffect(() => {
    filterJobs();
  }, [searchFilters]);

  const filterJobs = () => {
    let filtered = mockJobs;

    if (searchFilters.query) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchFilters.query!.toLowerCase()) ||
        job.specializations.some(spec => 
          spec.toLowerCase().includes(searchFilters.query!.toLowerCase())
        )
      );
    }

    if (searchFilters.city) {
      filtered = filtered.filter(job => job.city === searchFilters.city);
    }

    if (searchFilters.state) {
      filtered = filtered.filter(job => job.state === searchFilters.state);
    }

    setFilteredJobs(filtered);
  };

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const stats = [
    { icon: Briefcase, label: 'Vagas Ativas', value: '1.2K+' },
    { icon: Users, label: 'Empresas Parceiras', value: '500+' },
    { icon: MapPin, label: 'Cidades Atendidas', value: '150+' },
    { icon: TrendingUp, label: 'Taxa de Sucesso', value: '92%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Encontre sua próxima
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                oportunidade profissional
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Conectamos talentos excepcionais com as melhores empresas do mercado. 
              Descubra vagas que combinam com seu perfil e acelere sua carreira.
            </p>
          </div>

          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {Object.keys(searchFilters).length > 0 ? 'Resultados da Busca' : 'Vagas em Destaque'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {Object.keys(searchFilters).length > 0 
                ? `Encontramos ${filteredJobs.length} vaga(s) que correspondem aos seus critérios`
                : 'Confira algumas das melhores oportunidades disponíveis no momento'
              }
            </p>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma vaga encontrada
              </h3>
              <p className="text-gray-600">
                Tente ajustar seus filtros de busca ou explore outras oportunidades.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para dar o próximo passo na sua carreira?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Cadastre-se gratuitamente e tenha acesso a oportunidades exclusivas.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Criar Conta Gratuita
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
