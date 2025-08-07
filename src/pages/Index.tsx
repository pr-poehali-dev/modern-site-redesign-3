import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      title: "Социальные выплаты и пособия",
      description: "Назначение и выплата федеральных и региональных пособий, компенсаций, единого пособия на детей",
      icon: "CreditCard",
      category: "Выплаты",
      details: [
        "Пособие по уходу за ребенком до 1.5 лет",
        "Единое пособие на детей от 0 до 17 лет", 
        "Пособие по беременности и родам",
        "Материнский капитал"
      ]
    },
    {
      title: "Социальное обслуживание",
      description: "Предоставление социальных услуг на дому, в полустационарной и стационарной формах обслуживания",
      icon: "Heart",
      category: "Обслуживание",
      details: [
        "Социальное обслуживание на дому",
        "Социально-медицинские услуги",
        "Социально-психологические услуги",
        "Социально-педагогические услуги"
      ]
    },
    {
      title: "Льготы и субсидии ЖКХ",
      description: "Предоставление субсидий на оплату жилищно-коммунальных услуг, льгот по оплате ЖКУ",
      icon: "Home",
      category: "Льготы",
      details: [
        "Субсидии на оплату ЖКУ",
        "Льготы по оплате коммунальных услуг",
        "Компенсации расходов на ЖКУ",
        "Помощь в оформлении льгот"
      ]
    },
    {
      title: "Реабилитация инвалидов",
      description: "Техническая реабилитация, обеспечение техническими средствами реабилитации и протезно-ортопедическими изделиями",
      icon: "Accessibility",
      category: "Реабилитация",
      details: [
        "Технические средства реабилитации",
        "Протезно-ортопедические изделия",
        "Социально-трудовая реабилитация",
        "Социально-бытовая адаптация"
      ]
    },
    {
      title: "Поддержка семей с детьми",
      description: "Социальная поддержка многодетных семей, семей в трудной жизненной ситуации, семей с детьми-инвалидами",
      icon: "Users",
      category: "Семья",
      details: [
        "Поддержка многодетных семей",
        "Помощь семьям в ТЖС",
        "Работа с семьями группы риска",
        "Социальное сопровождение семей"
      ]
    },
    {
      title: "Консультационные услуги",
      description: "Юридические консультации, информирование граждан о мерах социальной поддержки",
      icon: "MessageSquare",
      category: "Консультации",
      details: [
        "Правовые консультации",
        "Информирование о льготах",
        "Социальное консультирование",
        "Психологическая поддержка"
      ]
    }
  ];

  const news = [
    {
      date: "15 декабря 2024",
      title: "Индексация социальных выплат с 2025 года",
      summary: "С 1 января 2025 года размеры социальных пособий увеличены на 7,3%. Повышение коснется всех федеральных выплат.",
      category: "Выплаты"
    },
    {
      date: "12 декабря 2024", 
      title: "Расширение мер поддержки семей с детьми",
      summary: "Увеличен размер регионального материнского капитала, расширены критерии назначения единого пособия на детей.",
      category: "Семья"
    },
    {
      date: "08 декабря 2024",
      title: "Новый порядок предоставления социальных услуг",
      summary: "Утвержден обновленный административный регламент предоставления социальных услуг на дому.",
      category: "Обслуживание"
    },
    {
      date: "05 декабря 2024",
      title: "График работы в праздничные дни",
      summary: "Информируем о режиме работы учреждения в период новогодних и рождественских праздников 2025 года.",
      category: "Информация"
    }
  ];

  const documents = [
    { 
      name: "Административный регламент предоставления государственных услуг", 
      type: "PDF", 
      size: "2.1 МБ",
      category: "Регламенты"
    },
    { 
      name: "Перечень документов для назначения пособий и выплат", 
      type: "PDF", 
      size: "456 КБ",
      category: "Пособия"
    },
    { 
      name: "Формы заявлений (единое пособие, субсидии, льготы)", 
      type: "ZIP", 
      size: "1.2 МБ",
      category: "Заявления"
    },
    { 
      name: "Справка о составе семьи (образец заполнения)", 
      type: "PDF", 
      size: "234 КБ",
      category: "Справки"
    },
    { 
      name: "Порядок предоставления социальных услуг", 
      type: "PDF", 
      size: "1.8 МБ",
      category: "Услуги"
    },
    { 
      name: "Тарифы на социальные услуги 2024-2025", 
      type: "PDF", 
      size: "318 КБ",
      category: "Тарифы"
    }
  ];

  const stats = [
    { number: "15,200+", label: "Получателей услуг", icon: "Users" },
    { number: "28", label: "Лет работы", icon: "Award" },
    { number: "60+", label: "Видов услуг", icon: "Settings" },
    { number: "97%", label: "Довольных клиентов", icon: "Heart" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top bar with contacts */}
          <div className="border-b border-gray-100 py-2 text-sm text-gray-600">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (3846) 61-23-45</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>kszn.prokopyevsk@mail.ru</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span>Пн-Пт: 8:00-17:00</span>
                <Button variant="ghost" size="sm" className="text-sm">
                  <Icon name="Eye" className="h-4 w-4 mr-1" />
                  Версия для слабовидящих
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main header */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Shield" className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">КЦСОН</h1>
                <p className="text-sm text-blue-600 font-medium">г. Прокопьевск</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Новости</a>
              <a href="#documents" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Документы</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex">
                <Icon name="Calendar" className="h-4 w-4 mr-2" />
                Записаться на прием
              </Button>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Комитет социальной защиты населения
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Социальная поддержка
            <br />
            <span className="text-blue-200">жителей Прокопьевска</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Администрации города Прокопьевска
          </p>
          <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
            Обеспечиваем социальную защиту и поддержку всех категорий граждан. 
            Профессиональная помощь в получении социальных услуг, выплат и льгот.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 shadow-xl">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800 shadow-xl">
              <Icon name="FileText" className="h-5 w-5 mr-2" />
              Подать заявление
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Быстрый поиск</h2>
            <p className="text-lg text-gray-600 mb-8">Найдите нужную услугу или информацию</p>
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск услуг, документов, льгот..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-24 py-4 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-xl shadow-sm"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6">
                Найти
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              {["Единое пособие", "Субсидии ЖКХ", "Материнский капитал", "Льготы", "Инвалидность", "Многодетные семьи"].map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-blue-100 px-3 py-1 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши достижения</h2>
            <p className="text-blue-200 text-lg">Мы гордимся результатами нашей работы</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг социальной защиты населения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon name={service.icon as any} className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-blue-100">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    Подробнее об услуге
                    <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Новости и объявления</h2>
              <p className="text-xl text-gray-600">Актуальная информация и важные изменения</p>
            </div>
            <Button variant="outline" className="w-fit">
              Все новости
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{item.date}</Badge>
                    <Badge variant="outline" className="text-xs">{item.category}</Badge>
                  </div>
                  <CardTitle className="hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {item.summary}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 hover:text-blue-600">
                    Читать полностью →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Документы</h2>
            <p className="text-xl text-gray-600">Необходимые документы, регламенты и бланки для скачивания</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="Регламенты">Регламенты</TabsTrigger>
                <TabsTrigger value="Заявления">Заявления</TabsTrigger>
                <TabsTrigger value="Пособия">Пособия</TabsTrigger>
                <TabsTrigger value="Услуги">Услуги</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{doc.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Badge variant="outline" className="text-xs">{doc.category}</Badge>
                          <span>•</span>
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-blue-600 hover:text-white">
                      <Icon name="Download" className="h-4 w-4 mr-2" />
                      Скачать
                    </Button>
                  </div>
                ))}
              </TabsContent>
              
              {["Регламенты", "Заявления", "Пособия", "Услуги"].map((category) => (
                <TabsContent key={category} value={category} className="space-y-4">
                  {documents.filter(doc => doc.category === category).map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Icon name="FileText" className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{doc.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" className="h-4 w-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Адрес</h3>
                    <p className="text-gray-600 leading-relaxed">653039, Кемеровская область - Кузбасс,<br />г. Прокопьевск, ул. Шахтёров, 25</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Телефоны</h3>
                    <p className="text-gray-600">+7 (3846) 61-23-45 (приемная)</p>
                    <p className="text-gray-600">+7 (3846) 61-23-46 (отдел выплат)</p>
                    <p className="text-gray-600">+7 (3846) 61-23-47 (отдел обслуживания)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
                    <p className="text-gray-600">kszn.prokopyevsk@mail.ru</p>
                    <p className="text-gray-600">info@kszn-prokop.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Режим работы</h3>
                    <p className="text-gray-600">Понедельник-четверг: 8:00 - 17:00</p>
                    <p className="text-gray-600">Пятница: 8:00 - 16:00</p>
                    <p className="text-gray-600">Суббота, воскресенье: выходные</p>
                    <p className="text-gray-500 text-sm mt-1">Обеденный перерыв: 12:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Задать вопрос</CardTitle>
                <CardDescription className="text-base">
                  Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ваше полное имя"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Подробно опишите ваш вопрос или ситуацию..."
                      className="border-gray-300 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full py-3 text-lg">
                    <Icon name="Send" className="h-5 w-5 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Icon name="Shield" className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">КЦСОН</h3>
                  <p className="text-gray-400 text-sm">г. Прокопьевск</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Комитет социальной защиты населения администрации города Прокопьевска - 
                ваш надежный помощник в вопросах социальной поддержки.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Социальные выплаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Льготы и субсидии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Материнский капитал</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реабилитация инвалидов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка семей</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Информация</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О комитете</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Противодействие коррупции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обращения граждан</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>ул. Шахтёров, 25<br />Прокопьевск, 653039</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-5 w-5 flex-shrink-0" />
                  <span>+7 (3846) 61-23-45</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-5 w-5 flex-shrink-0" />
                  <span>kszn.prokopyevsk@mail.ru</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Комитет социальной защиты населения г. Прокопьевска. Все права защищены.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Карта сайта
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Обратная связь
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;