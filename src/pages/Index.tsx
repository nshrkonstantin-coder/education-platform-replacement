import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B4C8F] via-[#264283] to-[#1E3A6F] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-3xl shadow-2xl mb-6">
            <Icon name="ShieldCheck" size={64} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            АО "ГРК "Западная"""
          </h1>
          
          <p className="text-blue-200 text-lg">
            Система управления охраной труда и пожарной безопасностью
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl text-primary font-bold">
              Вход для специалистов
            </CardTitle>
            <CardDescription className="text-base">
              Охрана труда и пожарная безопасность
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="text-base py-3">
                  <Icon name="LogIn" className="mr-2" size={18} />
                  Вход
                </TabsTrigger>
                <TabsTrigger value="register" className="text-base py-3">
                  <Icon name="UserPlus" className="mr-2" size={18} />
                  Регистрация
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email адрес</Label>
                    <div className="relative">
                      <Icon name="Mail" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        id="email"
                        type="email"
                        placeholder="nshrkonstantin@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 py-6 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-base">Пароль</Label>
                    <div className="relative">
                      <Icon name="Lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 py-6 text-base"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <Icon name={showPassword ? "EyeOff" : "Eye"} size={20} />
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full py-6 text-lg font-semibold" size="lg">
                    <Icon name="LogIn" className="mr-2" size={20} />
                    Войти в систему
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <div className="text-center py-8 text-gray-500">
                  <Icon name="UserPlus" className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-lg mb-2">Регистрация временно недоступна</p>
                  <p>Для создания аккаунта свяжитесь с администратором</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="max-w-2xl mx-auto mt-6 bg-blue-900/30 border-blue-700/50 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-full flex-shrink-0">
                <Icon name="ShieldAlert" className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Безопасность прежде всего
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Система соответствует требованиям информационной безопасности и стандартам защиты персональных данных
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-blue-200">
            Возникли вопросы?{' '}
            <a href="#" className="text-white font-semibold underline hover:text-blue-100 transition-colors">
              Свяжитесь с поддержкой
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;