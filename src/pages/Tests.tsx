import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Tests = () => {
  const navigate = useNavigate();

  const tests = [
    {
      id: 1,
      title: 'Пожарная безопасность - Базовый уровень',
      description: 'Основные требования пожарной безопасности на производстве',
      questions: 20,
      duration: 30,
      difficulty: 'easy',
      status: 'completed',
      score: 95,
      category: 'ПожБез'
    },
    {
      id: 2,
      title: 'Охрана труда при работе на высоте',
      description: 'Правила безопасности при выполнении работ на высоте более 1,8м',
      questions: 25,
      duration: 40,
      difficulty: 'medium',
      status: 'available',
      category: 'ОТ'
    },
    {
      id: 3,
      title: 'Электробезопасность - 2 группа',
      description: 'Требования электробезопасности для неэлектротехнического персонала',
      questions: 30,
      duration: 45,
      difficulty: 'medium',
      status: 'available',
      category: 'ОТ'
    },
    {
      id: 4,
      title: 'Промышленная безопасность',
      description: 'Общие требования промышленной безопасности опасных производственных объектов',
      questions: 35,
      duration: 50,
      difficulty: 'hard',
      status: 'locked',
      category: 'ПБ'
    },
    {
      id: 5,
      title: 'Первая помощь пострадавшим',
      description: 'Приемы оказания первой помощи при несчастных случаях на производстве',
      questions: 22,
      duration: 35,
      difficulty: 'easy',
      status: 'available',
      category: 'ОТ'
    },
    {
      id: 6,
      title: 'Работа с опасными веществами',
      description: 'Безопасность при работе с химическими и опасными веществами',
      questions: 28,
      duration: 45,
      difficulty: 'hard',
      status: 'available',
      category: 'ПБ'
    }
  ];

  const getDifficultyBadge = (difficulty: string) => {
    const styles = {
      easy: 'bg-green-100 text-green-700',
      medium: 'bg-yellow-100 text-yellow-700',
      hard: 'bg-red-100 text-red-700'
    };
    const labels = {
      easy: 'Легкий',
      medium: 'Средний',
      hard: 'Сложный'
    };
    return <Badge className={styles[difficulty as keyof typeof styles]}>{labels[difficulty as keyof typeof labels]}</Badge>;
  };

  const getStatusBadge = (status: string, score?: number) => {
    if (status === 'completed') {
      return <Badge className="bg-green-500 text-white">Пройден {score}%</Badge>;
    }
    if (status === 'locked') {
      return <Badge variant="secondary">Заблокирован</Badge>;
    }
    return <Badge className="bg-blue-500 text-white">Доступен</Badge>;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'ОТ': 'bg-blue-500',
      'ПБ': 'bg-purple-500',
      'ПожБез': 'bg-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                <Icon name="ClipboardCheck" size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Проверки знаний</h1>
                <p className="text-sm text-gray-500">Тестирование по ОТ, ПБ и ПожБез</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              <Icon name="Home" className="mr-2" size={18} />
              На главную
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Доступно тестов</p>
                  <p className="text-3xl font-bold text-gray-900">4</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="BookOpen" className="text-blue-600" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Пройдено</p>
                  <p className="text-3xl font-bold text-gray-900">1</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon name="CheckCircle" className="text-green-600" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Средний результат</p>
                  <p className="text-3xl font-bold text-gray-900">95%</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon name="Award" className="text-purple-600" size={28} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tests Grid */}
        <div className="space-y-4">
          {tests.map((test) => (
            <Card 
              key={test.id}
              className={`hover:shadow-lg transition-all duration-200 ${test.status !== 'locked' ? 'cursor-pointer' : 'opacity-60'}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`${getCategoryColor(test.category)} p-4 rounded-xl`}>
                      <Icon name="FileQuestion" size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{test.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm mb-3">
                        {test.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {getStatusBadge(test.status, test.score)}
                        {getDifficultyBadge(test.difficulty)}
                        <Badge variant="outline">
                          <Icon name="HelpCircle" className="mr-1" size={14} />
                          {test.questions} вопросов
                        </Badge>
                        <Badge variant="outline">
                          <Icon name="Clock" className="mr-1" size={14} />
                          {test.duration} мин
                        </Badge>
                        <Badge variant="outline" className={getCategoryColor(test.category).replace('bg-', 'text-')}>
                          {test.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    {test.status === 'completed' ? (
                      <Button variant="outline">
                        <Icon name="Eye" className="mr-2" size={18} />
                        Результат
                      </Button>
                    ) : test.status === 'locked' ? (
                      <Button variant="secondary" disabled>
                        <Icon name="Lock" className="mr-2" size={18} />
                        Заблокирован
                      </Button>
                    ) : (
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Icon name="Play" className="mr-2" size={18} />
                        Начать тест
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Icon name="Info" className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Правила прохождения тестирования</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Для успешного прохождения теста необходимо набрать минимум 80%</li>
                  <li>• После начала теста отведенное время начнет отсчет</li>
                  <li>• Результаты сохраняются автоматически</li>
                  <li>• При неудачной попытке тест можно пройти повторно через 24 часа</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Tests;
