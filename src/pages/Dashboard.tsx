import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState('Специалист по ОТ');

  const handleLogout = () => {
    navigate('/');
  };

  const modules = [
    {
      icon: 'FileText',
      title: 'Инструктажи',
      description: 'Просмотр и прохождение инструктажей по охране труда',
      color: 'bg-blue-500',
      link: '/instructions'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Проверки знаний',
      description: 'Тестирование и проверка знаний по ОТ и ПБ',
      color: 'bg-green-500',
      link: '/tests'
    },
    {
      icon: 'Shield',
      title: 'Пожарная безопасность',
      description: 'Материалы и инструкции по пожарной безопасности',
      color: 'bg-orange-500',
      link: '/fire-safety'
    },
    {
      icon: 'BookOpen',
      title: 'Документация',
      description: 'Нормативные документы и методические материалы',
      color: 'bg-purple-500',
      link: '/documents'
    },
    {
      icon: 'Calendar',
      title: 'График обучения',
      description: 'Расписание инструктажей и проверок',
      color: 'bg-indigo-500',
      link: '/schedule'
    },
    {
      icon: 'BarChart3',
      title: 'Статистика',
      description: 'Результаты тестирований и прогресс обучения',
      color: 'bg-cyan-500',
      link: '/statistics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl">
                <Icon name="ShieldCheck" size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">АО "ГРК "Западная""</h1>
                <p className="text-sm text-gray-500">Система управления охраной труда</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500">Личный кабинет</p>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <Icon name="LogOut" className="mr-2" size={18} />
                Выход
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать, {userName}!
          </h2>
          <p className="text-gray-600">
            Выберите раздел для работы с системой охраны труда и пожарной безопасности
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Пройдено тестов</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon name="CheckCircle" className="text-green-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Ожидают проверки</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Icon name="Clock" className="text-orange-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Инструктажи</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="FileText" className="text-blue-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Средний балл</p>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon name="Award" className="text-purple-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-200 cursor-pointer group"
              onClick={() => navigate(module.link)}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`${module.color} p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                    <Icon name={module.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {module.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Открыть
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Activity" size={24} />
              Последняя активность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="CheckCircle" className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Тест "Пожарная безопасность" пройден</p>
                  <p className="text-sm text-gray-500">Результат: 95% • 2 часа назад</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Icon name="FileText" className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Инструктаж по ОТ просмотрен</p>
                  <p className="text-sm text-gray-500">Вчера, 14:30</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Icon name="AlertCircle" className="text-orange-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Новое требование по промбезопасности</p>
                  <p className="text-sm text-gray-500">3 дня назад</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
