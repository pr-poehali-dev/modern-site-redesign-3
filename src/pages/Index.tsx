import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeNews, setActiveNews] = useState(0);

  const services = [
    {
      title: "Социальные выплаты",
      description: "Назначение и выплата пособий, компенсаций и других социальных выплат",
      icon: "CreditCard"
    },
    {
      title: "Социальное обслуживание",
      description: "Предоставление социальных услуг на дому и в стационарных учреждениях",
      icon: "Home"
    },
    {
      title: "Реабилитация",
      description: "Социальная реабилитация и адаптация граждан с ограниченными возможностями",
      icon: "Heart"
    },
    {
      title: "Поддержка семьи",
      description: "Помощь многодетным семьям и семьям в трудной жизненной ситуации",
      icon: "Users"
    },
    {
      title: "Консультации",
      description: "Юридические консультации по вопросам социальной защиты",
      icon: "MessageSquare"
    },
    {
      title: "Льготы и субсидии",
      description: "Предоставление льгот на коммунальные услуги и транспорт",
      icon: "Ticket"
    }
  ];

  const news = [
    {
      date: "15 января 2025",
      title: "Повышение размера социальных выплат",
      description: "С 1 февраля 2025 года увеличиваются размеры пособий для многодетных семей"
    },
    {
      date: "12 января 2025", 
      title: "Новые меры поддержки пенсионеров",
      description: "Введены дополнительные льготы для граждан пенсионного возраста"
    },
    {
      date: "10 января 2025",
      title: "Открытие нового центра социального обслуживания",
      description: "В городе открылся современный центр комплексного социального обслуживания"
    }
  ];

  const documents = [
    { name: "Регламент предоставления услуг", type: "PDF", size: "2.3 МБ" },
    { name: "Перечень необходимых документов", type: "PDF", size: "1.1 МБ" },
    { name: "Административный регламент", type: "PDF", size: "3.7 МБ" },
    { name: "Формы заявлений", type: "ZIP", size: "0.8 МБ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">КЦСОН</h1>
                <p className="text-sm text-gray-500">г. Прокопьевск</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#main" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">Новости</a>
              <a href="#documents" className="text-gray-700 hover:text-blue-600 transition-colors">Документы</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Комплексный центр социального обслуживания населения
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Социальная защита и поддержка
            <span className="text-blue-600 block">населения г. Прокопьевск</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мы обеспечиваем качественное предоставление социальных услуг и поддержку граждан, 
            нуждающихся в социальной защите и помощи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать документы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">О нашей организации</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Комплексный центр социального обслуживания населения города Прокопьевск — 
              ведущее учреждение в сфере социальной защиты граждан
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обеспечение доступности и качества социальных услуг для всех категорий граждан, 
                  нуждающихся в социальной поддержке
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-green-600" size={24} />
                </div>
                <CardTitle>Опыт работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Более 25 лет успешной работы в сфере социального обслуживания 
                  и поддержки населения Прокопьевска
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-purple-600" size={24} />
                </div>
                <CardTitle>Команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Высококвалифицированные специалисты, готовые оказать профессиональную 
                  помощь и поддержку каждому обратившемуся
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600">
              Широкий спектр социальных услуг для различных категорий граждан
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Новости и объявления</h2>
            <p className="text-lg text-gray-600">
              Актуальная информация о работе центра и изменениях в социальной сфере
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {item.date}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button variant="outline" size="sm">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Документы</h2>
            <p className="text-lg text-gray-600">
              Нормативные документы, регламенты и формы заявлений
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{doc.name}</h3>
                      <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Download" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для получения консультации или записи на прием
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-blue-600" size={20} />
                  <span>г. Прокопьевск, ул. Ленина, д. 125</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-600" size={20} />
                  <span>+7 (3846) 69-XX-XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-blue-600" size={20} />
                  <span>info@kszn-prokop.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-blue-600" size={20} />
                  <span>Пн-Пт: 8:00-17:00, Сб: 9:00-13:00</span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mt-8 mb-4">Режим работы отделов</h4>
              <Accordion type="single" collapsible>
                <AccordionItem value="reception">
                  <AccordionTrigger>Отдел приема граждан</AccordionTrigger>
                  <AccordionContent>
                    Понедельник-четверг: 8:00-17:00<br/>
                    Пятница: 8:00-16:00<br/>
                    Суббота: 9:00-13:00
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Отдел назначения выплат</AccordionTrigger>
                  <AccordionContent>
                    Понедельник-четверг: 8:00-17:00<br/>
                    Пятница: 8:00-16:00<br/>
                    Обеденный перерыв: 12:00-13:00
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="services">
                  <AccordionTrigger>Отдел социального обслуживания</AccordionTrigger>
                  <AccordionContent>
                    Понедельник-пятница: 8:00-17:00<br/>
                    Обеденный перерыв: 12:00-13:00
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Обратная связь</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваш email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваше сообщение"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-white" size={20} />
                </div>
                <span className="font-semibold">КЦСОН Прокопьевск</span>
              </div>
              <p className="text-gray-400">
                Комплексный центр социального обслуживания населения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Социальные выплаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Социальное обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реабилитация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка семьи</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О центре</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>г. Прокопьевск, ул. Ленина, 125</p>
                <p>+7 (3846) 69-XX-XX</p>
                <p>info@kszn-prokop.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 КЦСОН Прокопьевск. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;