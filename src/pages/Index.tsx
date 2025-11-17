import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const audienceSegments = [
    {
      id: 'moms',
      title: '👶 Мамы с детьми',
      age: '25-40 лет',
      needs: 'Украшения для детской комнаты, безопасные декоративные элементы',
      goals: 'Создать уютную и стильную детскую комнату',
      pain: 'Сложно найти уникальные и безопасные украшения',
      buying: 'Покупают для детской, ищут практичность и безопасность',
      color: 'bg-secondary',
      icon: 'Baby'
    },
    {
      id: 'girls',
      title: '💝 Молодые девушки',
      age: '18-30 лет',
      needs: 'Подарки для друзей, украшения для своего пространства',
      goals: 'Найти оригинальный подарок или украсить свою комнату',
      pain: 'Банальные подарки в магазинах, хочется что-то уникальное',
      buying: 'Импульсивные покупки, важна эстетика и Instagram-worthy',
      color: 'bg-accent',
      icon: 'Sparkles'
    },
    {
      id: 'gift',
      title: '🎁 Покупатели подарков',
      age: '25-50 лет',
      needs: 'Уникальные подарки на праздники и особые случаи',
      goals: 'Удивить и порадовать близких необычным подарком',
      pain: 'Не знают что подарить, хотят что-то особенное',
      buying: 'Покупают перед событиями, ценят индивидуальность',
      color: 'bg-muted',
      icon: 'Gift'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Ночник "Звёздное небо"',
      category: 'Детская комната',
      price: '2 500 ₽',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Подставка под украшения',
      category: 'Декор',
      price: '1 800 ₽',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Брелок с цветами',
      category: 'Подарки',
      price: '800 ₽',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Магнит на холодильник',
      category: 'Мелочи для дизайна',
      price: '600 ₽',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">ResinArt</h1>
            <div className="flex gap-6">
              <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors">Каталог</a>
              <a href="#audience" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Уникальные изделия из эпоксидной смолы
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Украшения для детских комнат, оригинальные подарки и стильные мелочи для дизайна интерьера
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Оформить индивидуальный заказ
            </Button>
          </div>
        </div>
      </section>

      <section id="audience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Целевая аудитория</Badge>
            <h3 className="text-4xl font-bold mb-4">Для кого мы создаём</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы знаем наших клиентов и создаём изделия специально для них
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {audienceSegments.map((segment, index) => (
              <Card 
                key={segment.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 animate-scale-in ${
                  activeSegment === segment.id ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveSegment(activeSegment === segment.id ? null : segment.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${segment.color} flex items-center justify-center mb-4`}>
                    <Icon name={segment.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{segment.title}</CardTitle>
                  <CardDescription className="text-base">{segment.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm text-primary mb-1">Потребности:</p>
                      <p className="text-sm">{segment.needs}</p>
                    </div>
                    {activeSegment === segment.id && (
                      <div className="space-y-3 animate-accordion-down">
                        <div>
                          <p className="font-semibold text-sm text-primary mb-1">Цели:</p>
                          <p className="text-sm">{segment.goals}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-primary mb-1">Боли:</p>
                          <p className="text-sm">{segment.pain}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-primary mb-1">Покупательское поведение:</p>
                          <p className="text-sm">{segment.buying}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4"
                  >
                    {activeSegment === segment.id ? 'Свернуть' : 'Узнать больше'}
                    <Icon name={activeSegment === segment.id ? 'ChevronUp' : 'ChevronDown'} size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 animate-fade-in">
            <h4 className="text-2xl font-bold mb-4 text-center">Ключевые инсайты аудитории</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Эмоциональная покупка</p>
                  <p className="text-sm text-muted-foreground">Клиенты покупают не просто вещь, а эмоции, воспоминания и уникальность</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Сарафанное радио</p>
                  <p className="text-sm text-muted-foreground">85% покупателей приходят по рекомендациям друзей и через соцсети</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Индивидуальность важна</p>
                  <p className="text-sm text-muted-foreground">70% клиентов интересуются возможностью индивидуального заказа</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted/40 flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Сезонность</p>
                  <p className="text-sm text-muted-foreground">Пики продаж перед праздниками: Новый год, 8 марта, дни рождения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-foreground">Каталог</Badge>
            <h3 className="text-4xl font-bold mb-4">Наши изделия</h3>
            <p className="text-muted-foreground text-lg">Каждая работа создана с любовью и вниманием к деталям</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="room">Детская</TabsTrigger>
              <TabsTrigger value="gifts">Подарки</TabsTrigger>
              <TabsTrigger value="decor">Декор</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon name="Image" size={64} className="text-primary/40" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h3 className="text-4xl font-bold mb-6">Готовы сделать заказ?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами для индивидуального заказа или консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Instagram" size={20} className="mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 ResinArt. Изделия из эпоксидной смолы ручной работы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
