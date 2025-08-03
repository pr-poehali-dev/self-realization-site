import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ForumPost {
  id: number;
  author: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  timeAgo: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [forumPosts, setForumPosts] = useState<ForumPost[]>([
    {
      id: 1,
      author: 'Лунная Ведьма',
      title: 'Опыт работы с рунами для защиты дома',
      content: 'Хочу поделиться своим опытом создания рунических оберегов. После изучения северных традиций и работы с руническими формулами...',
      category: 'Руны',
      likes: 34,
      replies: 12,
      timeAgo: '3 часа назад'
    },
    {
      id: 2,
      author: 'Таролог Мария',
      title: 'Влияние Луны на расклады Таро',
      content: 'Заметила интересную закономерность - в новолуние карты дают более глубокие предсказания. Делюсь наблюдениями...',
      category: 'Таро',
      likes: 28,
      replies: 8,
      timeAgo: '1 день назад'
    },
    {
      id: 3,
      author: 'Целитель Андрей',
      title: 'Энергетическая диагностика через медитацию',
      content: 'Рассказываю о методах определения блоков в энергетическом теле человека через глубокую медитативную практику...',
      category: 'Целительство',
      likes: 42,
      replies: 15,
      timeAgo: '2 дня назад'
    }
  ]);

  const services = [
    {
      title: 'Диагностика на картах Таро',
      description: 'Глубокая диагностика жизненной ситуации, выявление скрытых влияний и направлений развития',
      icon: 'Sparkles',
      price: 'от 2500₽',
      duration: '60-90 мин',
      features: ['Анализ текущей ситуации', 'Выявление блоков', 'Прогноз на 3-6 месяцев', 'Рекомендации']
    },
    {
      title: 'Рунная диагностика',
      description: 'Древнескандинавские руны откроют тайны вашего пути и покажут способы гармонизации энергий',
      icon: 'Zap',
      price: 'от 3000₽',
      duration: '90 мин',
      features: ['Рунический расклад', 'Энергетический анализ', 'Защитные формулы', 'Активация талисманов']
    },
    {
      title: 'Диагностика негатива',
      description: 'Проверка на наличие магических воздействий, порчи, сглаза и их нейтрализация',
      icon: 'Shield',
      price: 'от 4000₽',
      duration: '120 мин',
      features: ['Выявление негатива', 'Определение источника', 'Снятие воздействий', 'Постановка защиты']
    },
    {
      title: 'Кармическая диагностика',
      description: 'Исследование кармических задач души, предназначения и жизненной миссии',
      icon: 'Eye',
      price: 'от 5000₽',
      duration: '150 мин',
      features: ['Анализ души', 'Кармические долги', 'Жизненная миссия', 'Пути развития']
    }
  ];

  const articles = [
    {
      title: '7 привычек высокоэффективных людей',
      excerpt: 'Простые действия, которые кардинально изменят вашу продуктивность',
      category: 'Продуктивность',
      readTime: '5 мин',
      image: 'img/8b2357f7-f4be-4936-91d1-efa1b0cda60c.jpg'
    },
    {
      title: 'Как преодолеть страх неудачи',
      excerpt: 'Психологические техники работы с внутренними барьерами',
      category: 'Психология',
      readTime: '8 мин',
      image: 'img/22471504-fd70-4b1b-ba73-647222c5915b.jpg'
    },
    {
      title: 'Финансовая грамотность для начинающих',
      excerpt: 'Основы управления личными финансами и инвестиций',
      category: 'Финансы',
      readTime: '12 мин',
      image: 'img/8b2357f7-f4be-4936-91d1-efa1b0cda60c.jpg'
    }
  ];

  const filteredContent = [...forumPosts, ...articles].filter(item =>
    'title' in item && item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Compass" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                СамоРеализация
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors">Статьи</a>
              <a href="#forum" className="text-foreground hover:text-primary transition-colors">Форум</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="default" className="hidden md:block">
              Начать путь
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Откройте свой потенциал
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Платформа для тех, кто стремится к личностному росту, самопознанию и достижению своих целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать развитие
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="img/8b2357f7-f4be-4936-91d1-efa1b0cda60c.jpg" 
                alt="Путь к самореализации" 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по статьям и форуму..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/80 backdrop-blur-sm"
              />
            </div>
            {searchQuery && (
              <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Найдено результатов: {filteredContent.length}
                </p>
                {filteredContent.slice(0, 3).map((item, index) => (
                  <div key={index} className="py-2 border-b last:border-b-0">
                    <p className="font-medium">{'title' in item ? item.title : ''}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Обо мне</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Я — сертифицированный коуч и практикующий психолог с 10-летним опытом работы. 
                Помогаю людям находить свой путь, преодолевать внутренние барьеры и достигать целей.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">10</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </Card>
              </div>
              <Button variant="outline" className="mr-4">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать резюме
              </Button>
              <Button variant="ghost">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться на встречу
              </Button>
            </div>
            <div className="relative">
              <img 
                src="img/22471504-fd70-4b1b-ba73-647222c5915b.jpg" 
                alt="Развитие и рост" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите формат работы, который подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Статьи</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные материалы для вашего развития
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} className="inline mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section id="forum" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Форум единомышленников</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Общайтесь, делитесь опытом и поддерживайте друг друга на пути к цели
            </p>
          </div>
          
          <Tabs defaultValue="posts" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="posts">Обсуждения</TabsTrigger>
              <TabsTrigger value="create">Создать пост</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="space-y-6 mt-8">
              {forumPosts.map((post) => (
                <Card key={post.id} className="p-6 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">{post.content}</p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Icon name="Heart" size={16} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span>{post.replies}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Icon name="Share2" size={16} />
                      <span>Поделиться</span>
                    </button>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="create" className="mt-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Поделитесь своим опытом</CardTitle>
                  <CardDescription>
                    Расскажите о своих достижениях, вызовах или задайте вопрос сообществу
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input placeholder="Заголовок поста" className="mb-4" />
                    <Textarea 
                      placeholder="Поделитесь своими мыслями..." 
                      className="min-h-32 resize-none"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Карьера
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Отношения
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Здоровье
                      </Badge>
                    </div>
                    <Button>
                      <Icon name="Send" size={16} className="mr-2" />
                      Опубликовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы начать путь к изменениям? Свяжитесь со мной любым удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@samorealizaciya.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium">Офис</p>
                  <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Напишите мне</CardTitle>
                <CardDescription>
                  Расскажите о ваших целях, и я помогу выбрать подходящий формат работы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Email или телефон" />
                <Textarea placeholder="Расскажите о ваших целях и вопросах" className="min-h-24 resize-none" />
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Compass" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">СамоРеализация</h1>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ваш надежный спутник на пути к личностному росту и самопознанию
            </p>
            <Separator className="my-6" />
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Разделы</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>Услуги</p>
                  <p>Статьи</p>
                  <p>Форум</p>
                  <p>Контакты</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Поддержка</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>Часто задаваемые вопросы</p>
                  <p>Правила сайта</p>
                  <p>Политика конфиденциальности</p>
                  <p>Пользовательское соглашение</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Социальные сети</h4>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-muted-foreground">
              © 2024 СамоРеализация. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;