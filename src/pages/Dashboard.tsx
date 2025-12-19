import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState('Шнюков Константин Анатольевич');
  const [userRole] = useState('Главный администратор');

  const handleLogout = () => {
    navigate('/');
  };

  const modules = [
    {
      icon: 'BookOpen',
      title: 'Каталог инструкций',
      description: 'База знаний по охране труда и пожарной безопасности',
      count: '0 инструкций',
      color: 'bg-blue-500',
      link: '/instructions'
    },
    {
      icon: 'GraduationCap',
      title: 'Программы обучения',
      description: 'Готовые курсы по различным направлениям',
      count: '0 программ',
      color: 'bg-green-500',
      link: '/programs'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Тестирование',
      description: 'Создание и проведение тестов и экзаменов',
      count: '0 тестов',
      color: 'bg-purple-500',
      link: '/testing'
    },
    {
      icon: 'FileText',
      title: 'Каталог тестов',
      description: 'Разработка и управление тестами по направлениям',
      count: '0 тестов',
      color: 'bg-pink-500',
      link: '/test-catalog'
    },
    {
      icon: 'FileCheck',
      title: 'Реестр протоколов',
      description: 'Учет всех проведенных тестирований и результатов',
      count: '0 протоколов',
      color: 'bg-blue-600',
      link: '/protocols'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Выдача удостоверений и сертификатов',
      count: '0 выдано',
      color: 'bg-orange-500',
      link: '/certificates'
    },
    {
      icon: 'FileText',
      title: 'Документы',
      description: 'Создание инструкций и программ с помощью ИИ',
      count: 'ИИ генератор',
      color: 'bg-purple-600',
      link: '/documents'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Отчёты и статистика по обучению',
      count: '0 отчётов',
      color: 'bg-indigo-500',
      link: '/analytics'
    },
    {
      icon: 'Users',
      title: 'Управление слушателями',
      description: 'Регистрация и настройка программ для слушателей',
      count: '0 слушателей',
      color: 'bg-red-500',
      link: '/students'
    },
    {
      icon: 'Video',
      title: 'Видеоматериалы',
      description: 'Загрузка и управление учебными видео',
      count: '0 видео',
      color: 'bg-pink-600',
      link: '/videos'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-3 rounded-xl">
                <Icon name="ShieldCheck" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">АО "ГРК "Западная""</h1>
                <p className="text-xs text-gray-500">Главная панель управления</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm">
                  ШК
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{userName}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-medium">SUPER</span>
                    <span className="text-xs text-gray-500">{userRole}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <Icon name="LogOut" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Добро пожаловать, Константин!
          </h2>
          <p className="text-gray-600 text-lg">
            Выберите раздел для работы
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white"
              onClick={() => navigate(module.link)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`${module.color} p-5 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={module.icon as any} size={36} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold mb-2 text-gray-900">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {module.description}
                  </CardDescription>
                  <div className="flex items-center justify-between w-full pt-3 border-t">
                    <span className="text-sm text-gray-500">{module.count}</span>
                    <Icon name="ArrowRight" className="text-gray-400" size={18} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Panel */}
        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="bg-purple-500 p-4 rounded-2xl">
                <Icon name="Shield" size={36} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Панель главного администратора
                </h3>
                <p className="text-gray-600 mb-6">
                  Управление администраторами ОТ и ПБ, настройка системы и полный контроль веб-приложения
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Icon name="Settings" className="mr-2" size={20} />
                  Управление администраторами
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;