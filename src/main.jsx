import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check,
  ChevronDown, Clock3, Flower2, Gift, Headphones, Instagram, MapPin, Menu, MessageCircle,
  Minus, PenLine, Plus, Send, Sparkles, Star, Tag, Truck, UserRound, X
} from 'lucide-react'
import './styles.css'

const images = {
  hero: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=85',
  bouquet: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85',
  wedding: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
  vase: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85',
  studio: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85',
  detail: 'https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&w=900&q=85',
  portrait: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=85',
  tulips: 'https://i.pinimg.com/736x/1a/fe/b0/1afeb0e747b344ea03b749e439cbaf5c.jpg',
  peonies: 'https://i.pinimg.com/736x/e1/22/27/e12227b2eb24e7468287d57c59fa3cab.jpg',
  roses: 'https://i.pinimg.com/736x/3d/e5/76/3de57636a02643db0f0ccfafe3863334.jpg',
  chamomile: 'https://i.pinimg.com/1200x/d2/f6/db/d2f6db310243c853d2280c8103ace6f2.jpg',
  eucalyptus: 'https://i.pinimg.com/736x/56/54/eb/5654ebfc0fdbc4b27b175418bbf1d5ff.jpg',
  ranunculus: 'https://i.pinimg.com/736x/1c/79/e9/1c79e96941f92d362c94ca0b5d1f01da.jpg',
  sunflower: 'https://i.pinimg.com/736x/02/a6/bd/02a6bd25e1f827317f76f23100233b26.jpg',
  lavender: 'https://i.pinimg.com/736x/3c/3f/f9/3c3ff937e7c2943da0b9046373e12298.jpg',
  hydrangea: 'https://i.pinimg.com/1200x/8e/05/34/8e0534e8dd2b4b09314fdae56e20c140.jpg',
  orchid: 'https://i.pinimg.com/736x/19/57/ac/1957acc7bbda61731a51966528a96560.jpg',
  dianthus: 'https://i.pinimg.com/1200x/2f/02/9c/2f029c1743ab64714e9d1b9e8941dac8.jpg',
  alstroemeria: 'https://i.pinimg.com/736x/80/72/b5/8072b534e87630159e72798b252e8be5.jpg',
  eventTable: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
  ceremony: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85',
  tablescape: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
  colorful: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=85',
  ribbon: 'https://i.pinimg.com/1200x/4a/c8/db/4ac8dbe9b6beb5f0f57f5c91e1f74b6b.jpg',
}

const services = [
  { id: 'bouquet', number: '01', title: 'Букет дня', description: 'Свежая сезонная композиция, собранная сегодня и перевязанная лентой.', price: 'от 3 900 ₸', priceValue: 3900, time: '30–45 мин', image: images.bouquet, tag: 'Любимый' },
  { id: 'subscription', number: '02', title: 'Цветочная подписка', description: 'Цветы, которые приходят в жизнь вовремя. Раз в неделю или месяц.', price: 'от 6 500 ₸', priceValue: 6500, time: 'от 1 месяца', image: images.vase, tag: 'Для дома' },
  { id: 'event', number: '03', title: 'Оформление событий', description: 'Свадьбы, камерные ужины и большие истории — создаём атмосферу целиком.', price: 'от 25 000 ₸', priceValue: 25000, time: 'обсудим вместе', image: images.wedding, tag: 'Особенный день' },
]

const florists = [
  { id: 'liza', name: 'Лиза', role: 'Основательница и арт-директор', image: images.portrait },
  { id: 'masha', name: 'Маша', role: 'Флорист-композитор', image: images.studio },
  { id: 'anya', name: 'Аня', role: 'Флорист и стилист', image: images.detail },
]

const reviews = [
  { quote: 'В LUNARIA умеют слышать. Я просто сказала «хочу как в июньском саду» — и получила именно это.', name: 'Наташа К.', meta: 'заказала «Букет дня»' },
  { quote: 'Оформление нашей маленькой свадьбы было очень про нас: живое, немного дикое и совсем не скучное.', name: 'Ира и Дима', meta: 'оформление события' },
  { quote: 'Подписка — моя лучшая находка для дома. Каждую неделю будто маленький праздник у порога.', name: 'Полина В.', meta: 'цветочная подписка' },
]

const flowers = [
  { id: 'tulip', name: 'Тюльпан', tone: 'мятный', price: 650, image: images.tulips, stock: '12 оттенков' },
  { id: 'peony', name: 'Пион', tone: 'розовый', price: 1200, image: images.peonies, stock: 'сезонный' },
  { id: 'rose', name: 'Роза', tone: 'клубничный', price: 850, image: images.roses, stock: '7 оттенков' },
  { id: 'chamomile', name: 'Ромашка', tone: 'солнечный', price: 420, image: images.chamomile, stock: 'в наличии' },
  { id: 'eucalyptus', name: 'Эвкалипт', tone: 'зелёный', price: 500, image: images.eucalyptus, stock: 'в наличии' },
  { id: 'ranunculus', name: 'Ранункулюс', tone: 'персиковый', price: 950, image: images.ranunculus, stock: 'сезонный' },
  { id: 'sunflower', name: 'Подсолнух', tone: 'жёлтый', price: 700, image: images.sunflower, stock: 'в наличии' },
  { id: 'lavender', name: 'Лаванда', tone: 'сиреневый', price: 560, image: images.lavender, stock: 'в наличии' },
  { id: 'hydrangea', name: 'Гортензия', tone: 'голубой', price: 1400, image: images.hydrangea, stock: '5 оттенков' },
  { id: 'orchid', name: 'Орхидея', tone: 'лиловый', price: 1100, image: images.orchid, stock: 'в наличии' },
  { id: 'dianthus', name: 'Диантус', tone: 'малиновый', price: 600, image: images.dianthus, stock: 'в наличии' },
  { id: 'alstroemeria', name: 'Альстромерия', tone: 'персиковый', price: 800, image: images.alstroemeria, stock: 'в наличии' },
]

const packaging = [
  { id: 'paper', name: 'Молочный крафт', price: 0, image: 'https://i.pinimg.com/1200x/78/5c/be/785cbe8c6e97418030f83913a6ead14e.jpg', colors: [] },
  { id: 'color', name: 'Цветной тишью', price: 450, image: 'https://i.pinimg.com/1200x/fb/96/ff/fb96fffd65c661f946bfc3c3bae1c7aa.jpg', colors: [{ id: 'pink', name: 'Розовый', hex: '#ff8eb6' }, { id: 'lilac', name: 'Сиреневый', hex: '#b49bff' }, { id: 'yellow', name: 'Лимонный', hex: '#ffe36e' }, { id: 'blue', name: 'Голубой', hex: '#8fdcff' }] },
  { id: 'box', name: 'Коробка LUNARIA', price: 900, image: 'https://i.pinimg.com/1200x/cf/5b/e0/cf5be0d8f8906ece2b10bb34be941422.jpg', colors: [{ id: 'cream', name: 'Молочный', hex: '#f6eee2' }, { id: 'berry', name: 'Ягодный', hex: '#9d3d63' }, { id: 'green', name: 'Фисташковый', hex: '#bada86' }, { id: 'black', name: 'Чёрный', hex: '#24242b' }] },
  { id: 'ribbon', name: 'Лента', price: 350, image: images.ribbon, colors: [{ id: 'pink', name: 'Розовая', hex: '#ff8eb6' }, { id: 'berry', name: 'Вишнёвая', hex: '#9d3d63' }, { id: 'yellow', name: 'Жёлтая', hex: '#ffe36e' }, { id: 'green', name: 'Мятная', hex: '#bada86' }, { id: 'blue', name: 'Голубая', hex: '#8fdcff' }] },
]

const articles = [
  { id: 'pets', category: 'ПОЛЕЗНОЕ', read: '4 мин', title: 'В доме кот? Не проблема! Безопасные цветы для дома с питомцем', image: images.chamomile, body: 'Красивый дом и пушистый сосед вполне могут уживаться. Розы, герберы, подсолнухи, орхидеи и львиный зев считаются дружелюбными к кошкам и собакам. А вот лилии, диффенбахия и алоэ лучше оставить в магазине — даже маленький кусочек может навредить питомцу. Ставьте вазу повыше, меняйте воду каждые два дня и выбирайте устойчивые композиции.' },
  { id: 'allergy', category: 'ЗДОРОВЬЕ', read: '5 мин', title: 'Список цветов для аллергиков: как выбрать букет без чихания', image: images.roses, body: 'Для чувствительных людей важны цветы с минимальным количеством пыльцы. Розы, орхидеи, тюльпаны и гортензии — удачная база для букета. Избегайте сильно пахнущих лилий, фрезий и полевых трав. Мы также можем промыть стебли, убрать лишнюю листву и собрать композицию без резких ароматов — просто напишите нам об этом.' },
  { id: 'care', category: 'УХОД', read: '3 мин', title: 'Букет на 7 дней дольше: простой ритуал ухода', image: images.peonies, body: 'Подрежьте стебли наискосок острым ножом и поставьте букет в чистую прохладную воду. Уберите листья ниже уровня воды, не ставьте цветы рядом с фруктами и прямым солнцем. Меняйте воду через день, а стебли слегка подрезайте заново. И главное — не бойтесь любоваться ими каждый день.' },
]

const gallery = [
  'https://i.pinimg.com/1200x/73/4e/1e/734e1ee1ea4bdf915b2dab0961b45b6c.jpg',
  'https://i.pinimg.com/1200x/db/0e/05/db0e05321685f10a98318e151dcdce45.jpg',
  'https://i.pinimg.com/736x/e8/f9/ea/e8f9eacf1534aa1aad4da29aa85c9201.jpg',
  'https://i.pinimg.com/736x/2e/78/f8/2e78f89828780103609ef435d4748bc7.jpg',
  'https://i.pinimg.com/736x/a3/92/94/a3929447ab23ccfdb649878dbd5e6864.jpg',
  'https://i.pinimg.com/1200x/34/2e/3c/342e3c45405c357d5c5fea8e5e414523.jpg',
  'https://i.pinimg.com/736x/22/ac/4b/22ac4bd84a1f00c9421c008e9550baa9.jpg',
  'https://i.pinimg.com/736x/51/f8/eb/51f8eb68249f2fac9d5d7173756cb58f.jpg',
  'https://i.pinimg.com/1200x/99/f4/d2/99f4d237c36d4fbc56381beb2001991e.jpg',
]

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const timeSlots = Array.from({ length: 48 }, (_, index) => `${String(Math.floor(index / 2)).padStart(2, '0')}:${index % 2 ? '30' : '00'}`)
const addOnOptions = [
  { id: 'note', label: 'Записка', price: 0, icon: PenLine },
  { id: 'card', label: 'Открытка', price: 700, icon: Gift },
  { id: 'chocolate', label: 'Шоколадка', price: 1200, icon: Gift },
  { id: 'toy', label: 'Мягкая игрушка', price: 4500, icon: Gift },
  { id: 'candle', label: 'Аромасвеча', price: 3500, icon: Gift },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [order, setOrder] = useState({ service: services[0], florist: florists[0], date: null, time: null, name: '', phone: '', address: '', note: '', extras: [], noteText: '', cardText: '', bouquetNumber: 1 })
  const [notice, setNotice] = useState('')
  const [articleOpen, setArticleOpen] = useState(null)
  const [builder, setBuilder] = useState({ flowers: {}, packaging: packaging[0], packagingColor: null })
  const [bouquetsOrdered, setBouquetsOrdered] = useState(0)

  const openOrder = (service = services[0]) => {
    setOrder((current) => ({ ...current, service, date: null, time: null, extras: [], noteText: '', cardText: '', bouquetNumber: bouquetsOrdered + 1 }))
    setStep(1)
    setOrderOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeOrder = () => {
    setOrderOpen(false)
    document.body.style.overflow = ''
  }

  const updateOrder = (updates) => setOrder((current) => ({ ...current, ...updates }))

  const showNotice = (text) => {
    setNotice(text)
    window.setTimeout(() => setNotice(''), 3200)
  }

  const navigate = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const builderCount = Object.values(builder.flowers).reduce((sum, count) => sum + count, 0)
  const builderTotal = Object.entries(builder.flowers).reduce((sum, [id, count]) => sum + (flowers.find((flower) => flower.id === id)?.price || 0) * count, builder.packaging.price)
  const changeFlower = (flower) => setBuilder((current) => ({ ...current, flowers: { ...current.flowers, [flower.id]: current.flowers[flower.id] ? 0 : 1 } }))
  const changeFlowerQty = (flower, delta) => setBuilder((current) => {
    const next = Math.max(0, Math.min(9, (current.flowers[flower.id] || 0) + delta))
    return { ...current, flowers: { ...current.flowers, [flower.id]: next } }
  })
  const orderCustomBouquet = () => {
    if (!builderCount) { showNotice('Добавьте хотя бы один цветок в букет'); return }
    const flowerNames = Object.entries(builder.flowers).filter(([, count]) => count > 0).map(([id, count]) => `${flowers.find((flower) => flower.id === id).name} ×${count}`).join(', ')
    const packagingLabel = builder.packagingColor ? `${builder.packaging.name} · ${builder.packagingColor.name}` : builder.packaging.name
    openOrder({ id: 'custom', number: '★', title: 'Букет, собранный вами', description: flowerNames, price: `от ${builderTotal.toLocaleString('ru-RU')} ₸`, priceValue: builderTotal, time: '30–45 мин', image: images.peonies, tag: packagingLabel })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={() => navigate('top')}><span className="brand-mark"><Flower2 size={17} strokeWidth={1.7} /></span><span>LUNARIA</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <button onClick={() => navigate('services')}>Букеты</button>
          <button className="nav-highlight" onClick={() => navigate('builder')}>Собери свой <Sparkles size={13} /></button>
          <button onClick={() => navigate('about')}>О студии</button>
          <button onClick={() => navigate('journal')}>Журнал</button>
          <button onClick={() => navigate('contacts')}>Контакты</button>
          <button className="nav-order mobile-only" onClick={() => openOrder()}>Заказать <ArrowUpRight size={16} /></button>
        </nav>
        <div className="header-actions"><span className="header-city"><MapPin size={15} /> Алматы</span><button className="nav-order desktop-only" onClick={() => openOrder()}>Заказать <ArrowUpRight size={16} /></button><button className="menu-toggle" aria-label="Открыть меню" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> ЦВЕТЫ С ХАРАКТЕРОМ</div>
            <h1>Больше, чем<br /><em>букет.</em></h1>
            <p className="hero-text">Собираем живые истории из цветов — для важных «люблю», тихих «скучаю» и красивых «просто так».</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => openOrder()}>Заказать онлайн <ArrowUpRight size={18} /></button><button className="text-link" onClick={() => navigate('builder')}>Собрать свой <Sparkles size={16} /></button></div>
            <div className="hero-note"><div className="avatar-stack"><span style={{ backgroundImage: `url(${images.portrait})` }} /><span style={{ backgroundImage: `url(${images.detail})` }} /><span style={{ backgroundImage: `url(${images.studio})` }} /></div><span>Более 2 000 счастливых получателей</span></div>
          </div>
          <div className="hero-visual"><div className="hero-image-wrap"><img src={images.hero} alt="Букет в руках флориста" /><div className="hero-image-label"><span>01</span><span>Искусство<br />быть живым</span></div></div><div className="hero-sticker"><span>сделано<br />с любовью</span><Sparkles size={20} /></div><div className="hero-side-note">Сезонные цветы<br /><span>каждую неделю</span></div></div>
        </section>

        <section className="ticker"><div className="ticker-inner"><span>Доставка день в день</span><i>✳</i><span>Цветы от локальных фермеров</span><i>✳</i><span>Собираем с душой</span><i>✳</i><span>Доставка день в день</span><i>✳</i></div></section>

        <section className="services section-pad" id="services">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> НАШИ БУКЕТЫ</div><h2>Выберите повод.<br /><em>Или не выбирайте.</em></h2></div><p className="section-intro">Каждая композиция — маленькое исследование цвета, формы и настроения. Никаких двух одинаковых.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.id}><div className="service-image"><img src={service.image} alt={service.title} /><span className="service-tag">{service.tag}</span><span className="service-number">{service.number}</span></div><div className="service-content"><div><h3>{service.title}</h3><p>{service.description}</p></div><div className="service-bottom"><div><strong>{service.price}</strong><span><Clock3 size={13} /> {service.time}</span></div><button className="round-arrow" aria-label={`Заказать: ${service.title}`} onClick={() => openOrder(service)}><ArrowUpRight size={19} /></button></div></div></article>)}</div>
          <div className="services-footer"><span>Не нашли подходящий формат?</span><button className="text-link" onClick={() => { showNotice('Мы напишем вам в WhatsApp'); }}>Расскажите нам о задаче <ArrowUpRight size={16} /></button></div>
        </section>

        <section className="gallery-section section-pad" id="inspiration"><div className="gallery-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> ЛЕНТА ВДОХНОВЕНИЯ</div><h2>Сохрани,<br /><em>если красиво.</em></h2></div><span className="swipe-note">листай глазами ↓</span></div><div className="gallery-grid">{gallery.map((image, index) => <button className={`gallery-item gallery-item-${index + 1}`} key={image} onClick={() => showNotice('Эта композиция уже в нашей ленте вдохновения')}><img src={image} alt={`Пример цветочной композиции ${index + 1}`} /><span>0{index + 1} / LUNARIA</span></button>)}</div></section>

        <section className="builder section-pad" id="builder"><div className="builder-intro"><div className="eyebrow light"><span className="eyebrow-line" /> КОНСТРУКТОР БУКЕТА</div><h2>Собери<br /><em>свой.</em></h2><p>Выбери цветы, настрой количество веточек и упаковку — мы соберём именно твою комбинацию.</p><div className="builder-total"><span><strong>{builderCount}</strong> веточек · <strong>{builder.packaging.name}{builder.packagingColor ? ` · ${builder.packagingColor.name}` : ''}</strong></span><b>от {builderTotal.toLocaleString('ru-RU')} ₸</b></div><button className="button button-cream" onClick={orderCustomBouquet}>Заказать свой букет <ArrowUpRight size={18} /></button></div><div className="builder-board"><div className="builder-board-top"><span>Цветы в наличии</span><span>{builderCount ? `${builderCount} шт.` : 'пока пусто'}</span></div><div className="flower-options">{flowers.map((flower) => { const count = builder.flowers[flower.id] || 0; return <div className={count ? 'flower-option selected' : 'flower-option'} key={flower.id}><button onClick={() => changeFlower(flower)}><img src={flower.image} alt={flower.name} /><span className="flower-color">{flower.tone}</span><strong>{flower.name}</strong><small>{flower.stock} · {flower.price} ₸ / ветка</small></button>{count > 0 && <div className="qty-control"><button aria-label={`Уменьшить ${flower.name}`} onClick={() => changeFlowerQty(flower, -1)}><Minus size={12} /></button><b>{count}</b><button aria-label={`Добавить ${flower.name}`} onClick={() => changeFlowerQty(flower, 1)}><Plus size={12} /></button></div>}</div> })}</div><PackagingPicker builder={builder} setBuilder={setBuilder} /></div></section>

        <section className="manifesto section-pad"><div className="manifesto-ornament">✳</div><div className="eyebrow light"><span className="eyebrow-line" /> ПОЧЕМУ LUNARIA</div><h2>Цветы, которые<br /><em>чувствуются.</em></h2><div className="manifesto-points"><div><span>01</span><p>Работаем с сезонными цветами и знаем, где у каждого свой лучший день.</p></div><div><span>02</span><p>Собираем букеты, которые хочется рассматривать, трогать и дарить.</p></div><div><span>03</span><p>Привозим вовремя — по Алматы и в самые важные моменты.</p></div></div></section>

        <section className="about section-pad" id="about"><div className="about-image"><img src={images.studio} alt="Флористическая мастерская LUNARIA" /><span className="image-caption">Наша мастерская<br /><b>Алматы, 2024</b></span></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> О СТУДИИ</div><h2>Создаём красоту,<br /><em>которая остаётся.</em></h2><p>Мы открыли LUNARIA, чтобы у цветов снова появился голос. Здесь мы смешиваем садовую небрежность с чистой графикой, любим странные сочетания и верим, что идеальный букет не обязан быть идеальным.</p><p>В нашей команде — три флориста, один очень заботливый курьер и бесконечная любовь к тому, что растёт.</p><button className="text-link" onClick={() => showNotice('Познакомимся в нашей мастерской — ждём вас ежедневно')}>Заглянуть в мастерскую <ArrowUpRight size={17} /></button><div className="signature">L<span>♥</span></div></div></section>

        <section className="journal section-pad" id="journal"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> ЖУРНАЛ LUNARIA</div><h2>Цветочный<br /><em>ликбез.</em></h2></div><p className="section-intro">Заметки, подсказки и маленькие открытия для тех, кто любит, когда дома красиво и спокойно.</p></div><div className="article-grid">{articles.map((article) => <button className="article-card" key={article.id} onClick={() => setArticleOpen(article)}><div className="article-image"><img src={article.image} alt="" /><span>{article.category}</span></div><div className="article-copy"><small>{article.read} чтения</small><h3>{article.title}</h3><span className="read-more">Читать <ArrowUpRight size={15} /></span></div></button>)}</div></section>

        <section className="reviews section-pad" id="reviews"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> ТЁПЛЫЕ СЛОВА</div><h2>Нас выбирают<br /><em>сердцем.</em></h2></div><div className="review-rating"><div><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div><strong>4.9</strong><span>средняя оценка</span></div></div><div className="reviews-grid">{reviews.map((review, index) => <article className={`review-card review-${index + 1}`} key={review.name}><div className="quote-mark">“</div><p>{review.quote}</p><div className="review-author"><span className="review-dot">{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>{review.meta}</small></div><div className="stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div></div></article>)}</div></section>

        <section className="contact section-pad" id="contacts"><div className="contact-info"><div className="eyebrow light"><span className="eyebrow-line" /> БУДЕМ НА СВЯЗИ</div><h2>Зайдите<br /><em>на цветы.</em></h2><div className="contact-details"><div><span className="detail-icon"><MapPin size={18} /></span><p><strong>Алматы, ул. Жарокова, 78</strong><small>Пн–Вс, 09:00–21:00</small></p></div><div><span className="detail-icon"><MessageCircle size={18} /></span><p><strong>+7 777 123 45 67</strong><small>Ответим в WhatsApp за 5 минут</small></p></div><div><span className="detail-icon"><Instagram size={18} /></span><p><strong>@lunaria.flowers</strong><small>Мы показываем больше в Instagram</small></p></div></div><button className="button button-cream" onClick={() => showNotice('Открываем WhatsApp — скоро будем на связи')}>Написать в WhatsApp <ArrowUpRight size={18} /></button></div><div className="contact-image"><img src={images.detail} alt="Цветочная композиция в вазе" /><div className="contact-stamp"><Flower2 size={23} /><span>LUNARIA<br /><small>flower studio</small></span></div></div></section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark"><Flower2 size={17} strokeWidth={1.7} /></span><span>LUNARIA</span></a><span>Цветы с характером © 2024</span><a href="#top" className="footer-top">Наверх <ArrowUpRight size={15} /></a></footer>
      {notice && <div className="toast"><Check size={17} /> {notice}</div>}
      {articleOpen && <ArticleModal article={articleOpen} close={() => setArticleOpen(null)} />}
      {orderOpen && <OrderModal order={order} step={step} setStep={setStep} updateOrder={updateOrder} closeOrder={closeOrder} showNotice={showNotice} bouquetsOrdered={bouquetsOrdered} onOrderComplete={() => setBouquetsOrdered((count) => count + 1)} />}
    </div>
  )
}

function ArticleModal({ article, close }) {
  return <div className="article-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close() }}><article className="article-modal"><button className="close-modal article-close" onClick={close}><X size={20} /></button><img src={article.image} alt="" /><div className="article-modal-copy"><span className="article-category">{article.category} · {article.read} чтения</span><h2>{article.title}</h2><p>{article.body}</p><div className="article-signoff">С любовью, команда LUNARIA <Flower2 size={16} /></div></div></article></div>
}

function PackagingPicker({ builder, setBuilder }) {
  const activeColors = builder.packaging.colors || []
  return <div className="packaging-picker"><span>Упаковка</span><div className="packaging-options">{packaging.map((pack) => <button className={builder.packaging.id === pack.id ? 'packaging-choice selected' : 'packaging-choice'} key={pack.id} onClick={() => setBuilder((current) => ({ ...current, packaging: pack, packagingColor: pack.colors?.[0] || null }))}><img src={pack.image} alt="" /><span>{pack.name}</span>{pack.price > 0 && <small>+{pack.price} ₸</small>}</button>)}</div>{activeColors.length > 0 && <div className="packaging-colors"><span>Цвет: <b>{builder.packagingColor?.name || activeColors[0].name}</b></span><div>{activeColors.map((color) => <button type="button" aria-label={`Выбрать цвет ${color.name}`} className={builder.packagingColor?.id === color.id ? 'color-swatch selected' : 'color-swatch'} key={color.id} style={{ backgroundColor: color.hex }} onClick={() => setBuilder((current) => ({ ...current, packagingColor: color }))} />)}</div></div>}</div>
}

function OrderModal({ order, step, setStep, updateOrder, closeOrder, showNotice, bouquetsOrdered, onOrderComplete }) {
  const [calendarDate, setCalendarDate] = useState(new Date())
  const [helpOpen, setHelpOpen] = useState(false)
  const [helpSent, setHelpSent] = useState(false)
  const [helpForm, setHelpForm] = useState({ name: '', contact: '', question: '' })
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const calendarDays = useMemo(() => {
    const year = calendarDate.getFullYear(); const month = calendarDate.getMonth()
    const firstDay = new Date(year, month, 1); let offset = firstDay.getDay() - 1; if (offset < 0) offset = 6
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return [...Array(offset).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))]
  }, [calendarDate])
  const minDate = new Date(today); minDate.setDate(today.getDate() + 1)
  const isPast = (date) => date < minDate
  const dateLabel = order.date ? order.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }) : ''
  const currentBouquetNumber = order.bouquetNumber || bouquetsOrdered + 1
  const discountRate = currentBouquetNumber === 1 ? 5 : currentBouquetNumber % 5 === 0 ? 20 : 0
  const basePrice = order.service.priceValue || 3900
  const extrasTotal = order.extras.reduce((sum, id) => sum + (addOnOptions.find((item) => item.id === id)?.price || 0), 0)
  const discountValue = Math.round(basePrice * discountRate / 100)
  const totalPrice = basePrice - discountValue + extrasTotal
  const canNext = (step === 1 && order.service) || (step === 2 && order.florist) || (step === 3 && order.date && order.time) || (step === 4 && order.name.trim() && order.phone.trim() && order.address.trim())
  const next = () => { if (canNext) setStep((current) => current + 1) }
  const submit = () => { onOrderComplete(); setStep(5); showNotice('Заказ оформлен — мы уже собираем детали') }
  const helpReady = helpForm.name.trim() && helpForm.contact.trim()
  const submitHelp = () => { if (!helpReady) return; setHelpSent(true); showNotice('Заявка на консультацию отправлена') }
  return <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeOrder() }}><div className="order-modal"><div className="modal-top"><div><span className="modal-kicker">LUNARIA / ОНЛАЙН-ЗАКАЗ</span><h2>{helpOpen ? 'Поможем выбрать' : step === 5 ? 'Всё получилось!' : 'Соберём ваш букет'}</h2></div><button className="close-modal" onClick={closeOrder}><X size={20} /></button></div>{!helpOpen && step < 5 && <div className="stepper">{['Букет', 'Флорист', 'Дата', 'Данные'].map((label, index) => <div className={step >= index + 1 ? 'step is-active' : 'step'} key={label}><span>{index + 1}</span>{label}</div>)}</div>}
    <div className="modal-body">
      {helpOpen ? <div className="help-panel">{helpSent ? <div className="help-success"><div className="success-icon"><Check size={25} /></div><h3>Флорист уже в пути</h3><p>Мы свяжемся с вами по указанному контакту в ближайшие 15 минут.</p><button className="text-link" onClick={() => { setHelpOpen(false); setHelpSent(false) }}>Вернуться к заказу <ArrowLeft size={15} /></button></div> : <><div className="help-hero"><div className="help-icon"><Headphones size={24} /></div><div><p className="step-title">Нужна помощь специалиста?</p><span>Расскажите, что хочется — подберём цветы, бюджет и настроение.</span></div></div><div className="form-grid"><label>Как к вам обращаться<input value={helpForm.name} onChange={(e) => setHelpForm((current) => ({ ...current, name: e.target.value }))} placeholder="Ваше имя" /></label><label>Телефон или Telegram<input value={helpForm.contact} onChange={(e) => setHelpForm((current) => ({ ...current, contact: e.target.value }))} placeholder="+7 или @username" /></label><label className="full-field">Что подсказать? <span className="optional">необязательно</span><textarea value={helpForm.question} onChange={(e) => setHelpForm((current) => ({ ...current, question: e.target.value }))} placeholder="Например, нужен букет для человека, который любит яркие цвета" rows="4" /></label></div></>}</div> : <>{step === 1 && <div className="modal-step"><p className="step-title">Что создаём сегодня?</p><div className="loyalty-banner"><div className="loyalty-icon"><Tag size={18} /></div><div><strong>{discountRate ? `Скидка ${discountRate}% применится к этому заказу` : 'Бонусная карта LUNARIA'}</strong><span>{currentBouquetNumber === 1 ? 'Это ваш первый букет — добро пожаловать!' : currentBouquetNumber % 5 === 0 ? 'Пятый букет — ваш бонус уже активирован.' : `До скидки 20% осталось ${5 - (currentBouquetNumber % 5)} заказа.`}</span></div></div><div className="modal-service-list">{services.concat(order.service.id === 'custom' ? [order.service] : []).map((service) => <button className={order.service.id === service.id ? 'modal-service selected' : 'modal-service'} key={service.id} onClick={() => updateOrder({ service })}><img src={service.image} alt="" /><span><strong>{service.title}</strong><small>{service.price}</small></span>{order.service.id === service.id && <span className="selected-check"><Check size={15} /></span>}</button>)}</div></div>}
      {step === 2 && <div className="modal-step"><p className="step-title">Кто соберёт композицию?</p><div className="florist-list">{florists.map((florist) => <button className={order.florist.id === florist.id ? 'florist-card selected' : 'florist-card'} key={florist.id} onClick={() => updateOrder({ florist })}><img src={florist.image} alt={florist.name} /><strong>{florist.name}</strong><small>{florist.role}</small>{order.florist.id === florist.id && <span className="selected-check"><Check size={15} /></span>}</button>)}</div><div className="tiny-note"><Sparkles size={15} /> Можно довериться нам — мы выберем флориста по настроению букета.</div></div>}
      {step === 3 && <div className="modal-step"><p className="step-title">Когда доставить цветы?</p><div className="calendar-layout"><div className="calendar"><div className="calendar-head"><button onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1))}><ArrowLeft size={17} /></button><strong>{monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}</strong><button onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1))}><ArrowRight size={17} /></button></div><div className="calendar-week">{weekDays.map((day) => <span key={day}>{day}</span>)}</div><div className="calendar-grid">{calendarDays.map((date, i) => date ? <button key={i} disabled={isPast(date)} className={order.date?.toDateString() === date.toDateString() ? 'date selected' : 'date'} onClick={() => updateOrder({ date, time: null })}>{date.getDate()}</button> : <span key={i} />)}</div></div><div className="time-picker"><span className="picker-label">Доступное время · каждые 30 минут</span>{order.date ? <div className="time-grid">{timeSlots.map((time) => <button key={time} className={order.time === time ? 'time selected' : 'time'} onClick={() => updateOrder({ time })}>{time}</button>)}</div> : <div className="empty-picker"><CalendarDays size={18} />Сначала выберите<br />дату</div>}</div></div><div className="delivery-note"><Truck size={17} /><span>Доставим по Алматы в любое время с 00:00 до 23:30. Стоимость доставки — от 1 500 ₸.</span></div></div>}
      {step === 4 && <div className="modal-step"><p className="step-title">Куда и кому доставить?</p><div className="form-grid"><label>Ваше имя<input value={order.name} onChange={(e) => updateOrder({ name: e.target.value })} placeholder="Например, Алина" /></label><label>Номер телефона<input value={order.phone} onChange={(e) => updateOrder({ phone: e.target.value })} placeholder="+7 (___) ___-__-__" /></label><label className="full-field">Адрес доставки<input value={order.address} onChange={(e) => updateOrder({ address: e.target.value })} placeholder="Улица, дом, квартира" /></label><label className="full-field">Комментарий <span className="optional">необязательно</span><textarea value={order.note} onChange={(e) => updateOrder({ note: e.target.value })} placeholder="Например, позвонить за час до доставки" rows="3" /></label><div className="extras-block full-field"><div className="extras-heading"><span><Gift size={17} /> Что положить к заказу?</span><small>по желанию</small></div><div className="extras-grid">{addOnOptions.map((item) => { const Icon = item.icon; const selected = order.extras.includes(item.id); return <button type="button" className={selected ? 'extra-choice selected' : 'extra-choice'} key={item.id} onClick={() => updateOrder({ extras: selected ? order.extras.filter((id) => id !== item.id) : [...order.extras, item.id] })}><Icon size={17} /><span>{item.label}</span>{item.price > 0 && <small>+{item.price.toLocaleString('ru-RU')} ₸</small>}{selected && <Check size={14} />}</button>})}</div>{order.extras.includes('note') && <label className="extra-text-field">Текст записки<textarea value={order.noteText} onChange={(e) => updateOrder({ noteText: e.target.value })} placeholder="Например: Люблю тебя до луны и обратно" rows="2" /></label>}{order.extras.includes('card') && <label className="extra-text-field">Текст открытки<textarea value={order.cardText} onChange={(e) => updateOrder({ cardText: e.target.value })} placeholder="Напишите поздравление или пожелание" rows="2" /></label>}</div></div></div>}
      {step === 5 && <div className="success-step"><div className="success-icon"><Check size={28} /></div><p>Спасибо, {order.name || 'что выбрали нас'}!</p><span>Мы свяжемся с вами в течение 15 минут, чтобы подтвердить детали.</span><div className="order-summary"><div><span>Букет</span><strong>{order.service.title}</strong></div><div><span>Дата и время</span><strong>{dateLabel}, {order.time}</strong></div><div><span>Адрес</span><strong>{order.address}</strong></div><div><span>Скидка</span><strong>{discountRate ? `−${discountRate}% · −${discountValue.toLocaleString('ru-RU')} ₸` : 'нет'}</strong></div><div><span>Дополнительно</span><strong>{order.extras.length ? order.extras.map((id) => addOnOptions.find((item) => item.id === id)?.label).join(', ') : 'без дополнений'}</strong></div><div><span>Итого</span><strong>{totalPrice.toLocaleString('ru-RU')} ₸</strong></div></div><button className="button button-dark" onClick={closeOrder}>Вернуться на главную <ArrowUpRight size={18} /></button></div>}</>}
    </div>
    {helpOpen ? <div className="modal-footer"><button className="back-button" onClick={() => setHelpOpen(false)}><ArrowLeft size={16} /> Назад к заказу</button><button className="button button-dark next-button" disabled={!helpReady || helpSent} onClick={submitHelp}>{helpSent ? 'Заявка отправлена' : 'Позвоните мне'} <Headphones size={17} /></button></div> : step < 5 && <div className="modal-footer"><button className="help-link" onClick={() => setHelpOpen(true)}><Headphones size={15} /> Нужна помощь специалиста?</button>{step > 1 ? <button className="back-button" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={16} /> Назад</button> : <span className="secure-note"><Sparkles size={14} /> Всё просто и безопасно</span>}<button className="button button-dark next-button" disabled={!canNext} onClick={step === 4 ? submit : next}>{step === 4 ? 'Подтвердить заказ' : 'Продолжить'} <ArrowRight size={17} /></button></div>}
  </div></div>
}

createRoot(document.getElementById('root')).render(<App />)
