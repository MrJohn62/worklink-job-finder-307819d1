
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { HighTechScore as ScoreType } from '@/types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface HighTechScoreProps {
  scores: ScoreType[];
}

const HighTechScore = ({ scores }: HighTechScoreProps) => {
  const getScoreIcon = (color: string) => {
    switch (color) {
      case 'green':
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'yellow':
        return <Minus className="w-5 h-5 text-yellow-600" />;
      case 'red':
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getScoreColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-green-600';
      case 'yellow':
        return 'text-yellow-600';
      case 'red':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (color: string, score: number) => {
    switch (color) {
      case 'green':
        return 'Alta Performance - Pronto para promoção';
      case 'yellow':
        return 'Evoluindo - Continue se desenvolvendo';
      case 'red':
        return 'Baixo desempenho - Foco em melhorias';
      default:
        return 'Status não definido';
    }
  };

  const averageScore = scores.reduce((acc, score) => acc + score.score, 0) / scores.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span>High-Tech Score</span>
        </CardTitle>
        <div className="text-sm text-gray-600">
          Score médio geral: <span className="font-semibold">{averageScore.toFixed(0)}/100</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {scores.map((score) => (
          <div key={score.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getScoreIcon(score.statusColor)}
                <span className="font-medium text-gray-900">{score.area}</span>
              </div>
              <span className={`font-bold text-lg ${getScoreColor(score.statusColor)}`}>
                {score.score}/100
              </span>
            </div>

            <div className="space-y-2">
              <Progress 
                value={score.score} 
                className="h-3"
                style={{
                  background: '#f3f4f6'
                }}
              />
              <div 
                className="h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${score.score}%`,
                  marginTop: '-12px',
                  background: score.statusColor === 'green' 
                    ? 'linear-gradient(90deg, #10b981, #059669)' 
                    : score.statusColor === 'yellow' 
                    ? 'linear-gradient(90deg, #f59e0b, #d97706)' 
                    : 'linear-gradient(90deg, #ef4444, #dc2626)'
                }}
              />
              
              <p className={`text-sm ${getScoreColor(score.statusColor)}`}>
                {getStatusText(score.statusColor, score.score)}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default HighTechScore;
