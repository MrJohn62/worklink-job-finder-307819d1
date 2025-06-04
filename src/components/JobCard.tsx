
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, DollarSign, Clock } from 'lucide-react';
import { Job } from '@/types';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
            {job.title}
          </CardTitle>
          <Badge className={getTypeColor(job.type)}>
            {job.type}
          </Badge>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.city}, {job.state}</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-green-600 font-medium">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{job.salary}</span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3">
            {job.description}
          </p>

          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            <span>Publicado em {new Date(job.createdAt).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/job/${job.id}`} className="w-full">
          <Button className="w-full">
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
