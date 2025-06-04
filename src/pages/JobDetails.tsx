
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockJobs } from '@/data/mockData';
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Star,
  Building2 
} from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Vaga não encontrada</h1>
            <Link to="/">
              <Button>Voltar para início</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CLT':
        return 'bg-green-100 text-green-800';
      case 'PJ':
        return 'bg-blue-100 text-blue-800';
      case 'Estágio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Freelancer':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para busca
        </Link>

        <div className="space-y-6">
          {/* Header da vaga */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{job.city}, {job.state}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Publicado em {new Date(job.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getTypeColor(job.type)}>
                  {job.type}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-green-600 font-semibold text-xl">
                  <DollarSign className="w-5 h-5 mr-1" />
                  <span>{job.salary}</span>
                </div>
                <Button size="lg" className="px-8">
                  Candidatar-se
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Descrição */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Sobre a vaga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </CardContent>
          </Card>

          {/* Requisitos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Requisitos Obrigatórios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Restrições */}
          {job.restrictions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <XCircle className="w-5 h-5 mr-2 text-red-600" />
                  Restrições e Observações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.restrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{restriction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Especializações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-600" />
                Tecnologias e Especializações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {job.specializations.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interessado nesta oportunidade?
              </h3>
              <p className="text-gray-600 mb-6">
                Não perca tempo! Candidate-se agora e dê o próximo passo na sua carreira.
              </p>
              <Button size="lg" className="px-12">
                Candidatar-se Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
