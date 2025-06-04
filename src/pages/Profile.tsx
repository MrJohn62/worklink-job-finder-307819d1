
import Header from '@/components/Header';
import HighTechScore from '@/components/HighTechScore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockUser, mockHighTechScores } from '@/data/mockData';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit,
  Award,
  TrendingUp 
} from 'lucide-react';

const Profile = () => {
  const user = mockUser;
  const scores = mockHighTechScores;

  const averageScore = scores.reduce((acc, score) => acc + score.score, 0) / scores.length;
  const greenScores = scores.filter(s => s.statusColor === 'green').length;
  const yellowScores = scores.filter(s => s.statusColor === 'yellow').length;
  const redScores = scores.filter(s => s.statusColor === 'red').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Perfil Principal */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Informações Pessoais */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Perfil Profissional
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                      <p className="text-gray-600">Desenvolvedora Full Stack</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{user.email}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{user.phone}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 md:col-span-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{user.address}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Membro desde {new Date(user.createdAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High-Tech Score */}
            <HighTechScore scores={scores} />
          </div>

          {/* Sidebar com Resumo */}
          <div className="space-y-6">
            
            {/* Score Resumo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Resumo Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {averageScore.toFixed(0)}/100
                  </div>
                  <p className="text-gray-600">Score Médio Geral</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-medium">Alta Performance</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {greenScores} área(s)
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600 font-medium">Evoluindo</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                      {yellowScores} área(s)
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-medium">Precisa Melhorar</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                      {redScores} área(s)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ações Rápidas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Melhore seu Perfil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Edit className="w-4 h-4 mr-2" />
                  Atualizar Currículo
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Adicionar Certificações
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Fazer Teste de Skills
                </Button>
              </CardContent>
            </Card>

            {/* Dicas de Melhoria */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">💡 Dica de Carreira</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-sm">
                  Para aumentar seu score em DevOps, considere fazer um curso de Docker e Kubernetes. 
                  Essas tecnologias estão em alta demanda!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
