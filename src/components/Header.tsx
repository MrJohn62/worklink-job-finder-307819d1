
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, User, Home } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WorkLink
            </span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant={isActive('/') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Início</span>
              </Button>
            </Link>
            
            <Link to="/profile">
              <Button
                variant={isActive('/profile') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Perfil</span>
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="outline">
                Entrar
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
