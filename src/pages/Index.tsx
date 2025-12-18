import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    
    setDeferredPrompt(null);
  };

  const services = [
    {
      icon: 'Hammer',
      title: 'Строительство',
      description: 'Профессиональное строительство любой сложности'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт',
      description: 'Качественный ремонт квартир и домов под ключ'
    },
    {
      icon: 'HardHat',
      title: 'Отделка',
      description: 'Современная отделка помещений с гарантией'
    },
    {
      icon: 'Ruler',
      title: 'Проектирование',
      description: 'Разработка проектов и дизайн интерьера'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src="https://cdn.poehali.dev/files/3a5f37d89cbf9bf82cc047b482249acb.jpg"
              alt="Строитель"
              className="w-64 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Строй<span className="text-primary">Мастер</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональные строительные услуги высокого качества. 
            Работаем быстро, надёжно и с гарантией!
          </p>

          {isInstallable && (
            <Button 
              onClick={handleInstallClick}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
            >
              <Icon name="Download" className="mr-2" size={24} />
              Установить приложение
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-center text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Почему выбирают нас?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="Check" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">Опыт работы более 10 лет</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">Гарантия на все виды работ</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">Квалифицированные специалисты</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">Современное оборудование</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 text-center">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Свяжитесь с нами</h3>
              <p className="text-gray-600 mb-4">Бесплатная консультация и расчёт стоимости</p>
              <Button size="lg" className="w-full">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-800 text-white rounded-2xl p-8 animate-fade-in">
          <Icon name="Award" className="text-secondary mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-2">Качество, проверенное временем</h3>
          <p className="text-gray-300">
            Более 500 успешно завершённых проектов в нашем портфолио
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
