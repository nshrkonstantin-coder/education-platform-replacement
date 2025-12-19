import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const TestCatalog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="bg-pink-500 p-3 rounded-xl">
                <Icon name="FileText" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Каталог тестов</h1>
                <p className="text-xs text-gray-500">Разработка и управление тестами по направлениям</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex gap-4">
          <div className="flex-1">
            <Input placeholder="Поиск по каталогу тестов..." />
          </div>
          <Button className="bg-primary">
            <Icon name="Plus" className="mr-2" size={20} />
            Добавить тест
          </Button>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <Icon name="FileText" className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Каталог тестов пуст</h3>
            <p className="text-gray-600 mb-6">Добавьте тесты в каталог для управления базой вопросов</p>
            <Button className="bg-primary">
              <Icon name="Plus" className="mr-2" size={20} />
              Добавить тест в каталог
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TestCatalog;
