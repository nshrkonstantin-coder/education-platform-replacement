import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const Testing = () => {
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
              <div className="bg-purple-500 p-3 rounded-xl">
                <Icon name="ClipboardCheck" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Тестирование</h1>
                <p className="text-xs text-gray-500">Создание и проведение тестов и экзаменов</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex gap-4">
          <div className="flex-1">
            <Input placeholder="Поиск по тестам..." />
          </div>
          <Button className="bg-primary">
            <Icon name="Plus" className="mr-2" size={20} />
            Создать тест
          </Button>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <Icon name="ClipboardCheck" className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Нет активных тестов</h3>
            <p className="text-gray-600 mb-6">Создайте первый тест для проверки знаний сотрудников</p>
            <Button className="bg-primary">
              <Icon name="Plus" className="mr-2" size={20} />
              Создать тест
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Testing;
