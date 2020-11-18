const BaseLabel = [
  // Земли Ориджин
  {
    name: 'Первая Зима',
    description:
      'Столица герцогства Ориджин.<br>Древний город, полный солдат и нищих; фамильный замок, напряженный и хмурый, как воин на часах.<br>Расположен у восточного края долины, в просвете между озером и скалами.',
    coordinates: [68.7503, -20.5664],
    ico: 'castle',
  },
  {
    name: 'Беломорье',
    description: 'Город в Герцогстве Ориджин.<br>Имеется епископство.<br>Имеется порт.',
    coordinates: [74.7165, -31.333],
    ico: 'castle',
  },
  {
    name: 'Лид',
    description: 'Город в Герцогстве Ориджин.',
    coordinates: [69.471, -36.958],
    ico: 'castle',
  },
  {
    name: 'Спод',
    description: 'Деревня на крайнем севере в Герцогстве Ориджин.',
    coordinates: [73.0978, -11.25],
    ico: 'castle',
  },
  // Южный Путь
  {
    name: 'Лабелин',
    description:
      'Столица Герцогства Лабелин. <p>Второй по населению город мира - 325 тысяч человек на 1774 год.<br>Имеется гостиница "Звезда Империи", в которой останавливалась Минерва Стагфорт (в роли Глории) вместе с Сибил Нортвуд<br>В городском соборе Лабелина выставлен Священный Предмет.<br>Рельсовая дорога связывает Лабелин с Землями Короны, Альмерой, Надеждой и Литлендом</p>',
    coordinates: [52.4794, -53.0859],
    ico: 'castle',
  },
  {
    name: 'Дойл',
    description: 'Город в герцогстве Южный Путь.',
    coordinates: [57.9585, -53.8769],
    ico: 'castle',
  },
  {
    name: 'Лейксити',
    description: 'Город в герцогстве Южный Путь.',
    coordinates: [49.9193, -76.7285],
    ico: 'castle',
  },
  {
    name: 'Барберри',
    description: 'Город в герцогстве Южный Путь.',
    coordinates: [51.7236, -73.6962],
    ico: 'castle',
  },
  {
    name: 'Грейс',
    description: 'Город в герцогстве Южный Путь.',
    coordinates: [48.3671, -41.2207],
    ico: 'castle',
  },
  {
    name: 'Солтаун',
    description:
      'Город - порт на Восточном море в герцогстве Южный Путь. Вольный город (управляется советом купеческих старшин). Место базирования Второй Морской гильдии Южного пути.',
    coordinates: [55.9461, -37.7929],
    ico: 'castle',
  },
  {
    name: 'Уиндли',
    description:
      '<p>Город-порт в предгорье Кристальных Гор, герцогство Южный Путь. Место базирования Первой Морской гильдии Южного Пути.</p><p>Предмет территориальных споров между Ориджинами и Лабелинами.<br>Для Ориджинов является ключевым пунктом на восточном побережье, возможностью вывести флот в Восточное море и сбросить торговую удавку Южного пути. <br>Один из предмет заговора, организованого Эрвином Ориджином.</p>',
    coordinates: [58.5596, -34.2333],
    ico: 'castle',
  },
  // Нордвуд
  {
    name: 'Клык Медведя',
    description: 'Столица в герцогстве Нортвуд.',
    coordinates: [73.3766, -78.8378],
    ico: 'castle',
  },
  {
    name: 'Бирбис',
    description: 'Город в герцогстве Нортвуд.<br>Мать Сибил Нортвуд, баронесса Дорина, родом из Лисьего дола.',
    coordinates: [65.8724, -75.9814],
    ico: 'castle',
  },
  {
    name: 'Лисий Дол',
    description: 'Город в герцогстве Нортвуд.',
    coordinates: [70.2575, -66.1816],
    ico: 'castle',
  },

  // Земли Надежды
  {
    name: 'Сердце Света',
    description: 'Город, столица герцогства Фарвей. Герцогство Надежда',
    coordinates: [1.4445, -83.496],
    ico: 'castle',
  },
  {
    name: 'Фарвей',
    description: 'Город в герцогстве Надежда',
    coordinates: [12.3346, -92.2412],
    ico: 'castle',
  },
  {
    name: 'Леонгард',
    description: 'Город в герцогстве Надежда',
    coordinates: [8.8796, -61.1279],
    ico: 'castle',
  },
  {
    name: 'Оверон',
    description: 'Город в герцогстве Надежда',
    coordinates: [21.6931, -80.1562],
    ico: 'castle',
  },
  // Литленд
  {
    name: 'Мейпл',
    description: 'Город в герцогстве Литленд',
    coordinates: [1.137, -57.3046],
    ico: 'castle',
  },
  {
    name: 'Ливневый Лес',
    description: 'Город в герцогстве Литленд',
    coordinates: [-0.7086, -50.4931],
    ico: 'castle',
  },
  {
    name: 'Мелоранж',
    description: 'Город в герцогстве Литленд',
    coordinates: [-3.2118, -58.8427],
    ico: 'castle',
  },
  {
    name: 'Колмин',
    description: 'Город в герцогстве Литленд',
    coordinates: [-7.6728, -46.3623],
    ico: 'castle',
  },
  // Земли Альмеры
  {
    name: 'Алеридан',
    description:
      '<p>Столица герцогства Альмера.<br>Население на 1774 г. - 306 тыс.<br>Важнейший узел рельсовых дорог.<br>Улицы Алеридана, как и Фаунтерры, освещаются искровым светом.</p><p>Достопримечательности:<br>- Университет<br>- Арена Деймона Великого<br>- "Дом барона Свинтуса" - сгоревший мучной склад на улице Пекарской, стихийная свалка отходов.</p>',
    coordinates: [32.61161640317033, -87.5390625],
    ico: 'castle',
  },
  {
    name: 'Эвергард',
    description:
      '<p>Родовой замок Дома Альмера в окрестностях города Алеридана . Считается самой надежной крепостью Центральных Земель.</p><p>Эвергард — цитадель герцогов Альмера  — лежал на холме, подобно тому, как корона лежит на голове императора. Он не нуждался во рвах — крутые склоны сами по себе защищали крепость от осадных башен. Три кольца стен опоясывали холм: одна — у подножия, вторая — посередке, третья — под самой вершиной. Дорога вилась между стенами, обжатая ими с обеих сторон, и горе вражескому войску, что рискнуло бы вступить на эту дорогу. Подобно зубцам короны, башни усеивали верхушку. Двенадцать остроконечных сторожевых вышек горделиво взирали на склоны с захватывающей дух выси; тринадцатая башня — центральная — была подлинным исполином. Квадратная в сечении, она имела никак не меньше двухсот футов в высоту и пятидесяти — в ширину. Половину башенной стены занимала огромная фреска: рыцарь, преклонивший колени перед святой Агатой. Волосы и плащ Агаты, шлем и меч рыцаря пламенели золотом.</p><p>Эвергард невозможно захватить, — сказал Джоакин. — Он неприступен. Можно лишь увидеть, какие трофеи ждут тебя, рвануться на штурм — и сложить головы под стенами. Эта фреска — насмешка над врагами.</p>',
    coordinates: [32.2453, -88.5937],
    ico: 'castle',
  },
  {
    name: 'Смолден',
    description:
      '<p>Главный город Смолденского баронства, что принадлежит к графству Эрроубэк герцогства Альмера. Смолден находится на крайнем востоке герцогства Альмера, среди рыжих глинистых холмов, у худосочной речушки Змейки, вблизи границы с Землями Короны. Смолден стоит на дороге, соединяющей крупные города Оруэлл (Корона) и Бэк (Альмера), что способствует торговле. Однако большой тракт Маренго-Алеридан проходит южнее Смолдена, а рельсовая дорога Фаунтерра-Алеридан - севернее. Этот факт оставляет смолденцам возможность вести уютную провинциальную жизнь.</p><p>Вместо крепостной стены город окружен земляным валом с частоколом по верху– скорее для порядка, чем ради защиты.<br>Надвратная башня срублена из бревен – добротная, широкая, приземистая, похожа на хряка, сидящего на заднице.<br>В Смолдене имеется собор: огромен, могуч и уродлив.<br>На 23.03.1774 южный фасад собора - в лесах, башня недостроена. Маляр, который расписывал стены собора, получив задаток, сбежал не закончив работы.<br>Имеется рыночная площадь.<br>Имеется гостиница "Желтая гусыня", в которой останавливался караван Хармона Паулы, и в которой Хармон Паула нанял Джоакина Ив Ханну.</p>',
    coordinates: [33.0224, -72.246],
    ico: 'castle',
  },
  {
    name: 'Блэкмор',
    description: 'Город в герцогстве Альмера',
    coordinates: [29.0657, -99.84375],
    ico: 'castle',
  },
  {
    name: 'Пикси',
    description: 'Город в герцогстве Альмера',
    coordinates: [48.6873, -55.2392],
    ico: 'castle',
  },
  {
    name: 'Флисс',
    description: 'Город в герцогстве Альмера',
    coordinates: [43.5127, -88.1982],
    ico: 'castle',
  },
  {
    name: 'Найтрок',
    description: 'Город в герцогстве Альмера',
    coordinates: [25.5969, -81.2988],
    ico: 'castle',
  },
  {
    name: 'Бэк',
    description: 'Город в герцогстве Альмера',
    coordinates: [37.0858, -77.5195],
    ico: 'castle',
  },
  {
    name: 'Флетхилл',
    description: 'Город в герцогстве Альмера',
    coordinates: [33.0961, -95.3173],
    ico: 'castle',
  },
  {
    name: 'Тойстоун',
    description: 'Город в герцогстве Альмера',
    coordinates: [30.4439, -93.8232],
    ico: 'castle',
  },
  {
    name: 'Клерми',
    description: 'Город в герцогстве Альмера',
    coordinates: [26.4263, -95.8007],
    ico: 'castle',
  },
  {
    name: 'Лаксетт',
    description: 'Город в герцогстве Альмера',
    coordinates: [24.9611, -105.6445],
    ico: 'castle',
  },
  // Земли Короны
  {
    name: 'Ниар',
    description:
      'Город в Землях Короны<br>в 1774 пережил эпидемию Сизого мора. Погибло около 2 300 человек, еще пятьсот в окрестных селах и четыреста – в Излучине',
    coordinates: [44.2097, -51.8115],
    ico: 'castle',
  },
  {
    name: 'Хемплтон',
    description: 'Город в Землях Короны',
    coordinates: [39.33, -55.0634],
    ico: 'castle',
  },
  {
    name: 'Кействорт',
    description: 'Город в Землях Короны',
    coordinates: [30.8597, -66.7968],
    ico: 'castle',
  },
  {
    name: 'Руайльд',
    description: 'Город в Землях Короны',
    coordinates: [33.28, -30.7617],
    ico: 'castle',
  },
  {
    name: 'Лоувиль',
    description: 'Город в Землях Короны',
    coordinates: [44.1467, -44.3847],
    ico: 'castle',
  },
  {
    name: 'Маренго',
    description:
      'Второй по величине город в Землях Короны.Расположен на юге Земель Короны, на берегу Крайнего моря (Залива Мейсона). Второй по величине город в Землях Короны и шестой - в Империи (после Фаунтерры, Лабелина, Алеридана, Мелоранжа, Сердца Света).<br>- В Маренго росположена Летняя резиденция Императора (Летний дворец).<br>- Имеется университет.<br>- Проложена рельсовая дорога.<br>- Имеется епископство, собор.',
    coordinates: [25.6365, -58.8427],
    ico: 'castle',
  },
  {
    name: 'Оруэл',
    description: 'Город в Землях Короны',
    coordinates: [31.3114, -60.7763],
    ico: 'castle',
  },
  {
    name: 'Арден',
    description: 'Город в Землях Короны',
    coordinates: [33.1329, -50.4132],
    ico: 'castle',
  },
  {
    name: 'Фаунтера',
    description:
      'Первый город, основанный Прародителями в подлунном мире. На данный момент, крупнейший город в мире (360тыс.). На протяжении всей истории лишь раз был захвачен (Багряная Смута), однако правящая династия менялась тем или иным способом четыре раза. Фаунтерру называют городом двухсот башен, поскольку многие обеспеченные люди пристраивают к своим домам башни, желая сделать их заметными издали, выделиться. Башни приобретают порой очень причудливые формы и расцветки.',
    coordinates: [36, -54.6],
    ico: 'castle',
  },
  {
    name: 'Излучина',
    description:
      'Находится в изгибе реки Ханай. Держит единственную паромную переправу на сотню миль, которая пользуется большим спросом.<br>В Излучине находится одна из четырех излюбленных гостиниц Хармона Паулы, в которых он неизменно останавливался, и которые использовал как пункт обмена корреспонденцией с клиентами.<br>Имеется собор Праматери Леоноры.<br> <p>События:<br></p> В 1774 пережил эпидемию Сизого мора. Погибло около пятисот человек.<br>В Излучине произошла встреча Хармона Паулы и отца Давида.<br>Там же Хармон Паула получил письмо от Гарольда Греты, кастеляна Уэймарского замка, в котором ему предписывалось прибыть у Уэймар для встречи с графом Шейландом.</p>',
    coordinates: [43.129, -59.8095],
    ico: 'castle',
  },
  // Шиммери
  {
    name: 'Сюрлион',
    description: '<p>Город в герцогстве Шиммери</p>',
    coordinates: [-40.1494, -47.5488],
    ico: 'castle',
  },
  {
    name: 'Лаэм',
    description: '<p>Столица в герцогстве Шиммери</p>',
    coordinates: [-51.2928, -49.0429],
    ico: 'castle',
  },
  {
    name: 'Пентаго',
    description: '<p>Столица в герцогстве Шиммери</p>',
    coordinates: [-44.1861, -73.4765],
    ico: 'castle',
  },
  {
    name: 'Оркада',
    description: '<p>Город в герцогстве Шиммери</p>',
    coordinates: [43.129, -59.8095],
    ico: 'castle',
  },
  {
    name: 'Малый Перевал',
    description: '<p>Город в герцогстве Шиммери</p>',
    coordinates: [-50.2366, -58.0078],
    ico: 'castle',
  },
  {
    name: 'Мелисон',
    description: '<p>Город в герцогстве Шиммери</p>',
    coordinates: [-48.316, -59.5898],
    ico: 'castle',
  },
  {
    name: 'Оркада',
    description: '<p>Город в герцогстве Шиммери</p>',
    coordinates: [-52.0288, -76.9921],
    ico: 'castle',
  },
  // Мельницы
  {
    name: 'Фейрис',
    description: '<p>Столица в герцогстве Мельницы</p>',
    coordinates: [39.8043, -143.2617],
    ico: 'castle',
  },
  {
    name: 'Миннис',
    description: '<p>Город в герцогстве Мельницы</p>',
    coordinates: [37.6446, -147.1289],
    ico: 'castle',
  },
  {
    name: 'Оферт',
    description: '<p>Город в герцогстве Мельницы</p>',
    coordinates: [31.5364, -139.2626],
    ico: 'castle',
  },
  // Шейланд
  {
    name: 'Уэймар',
    description: '<p>Столица в герцогстве Шейланд</p>',
    coordinates: [56.7737, -95.2294],
    ico: 'castle',
  },
  {
    name: 'Стагфорт',
    description: '<p>Замок в герцогстве Шейланд</p>',
    coordinates: [72.671, -85.2099],
    ico: 'castle',
  },
  // Закатный Берег
  {
    name: 'Корден',
    description: '<p>Столица в герцогстве Закатный Берег</p>',
    coordinates: [63.4087, -111.665],
    ico: 'castle',
  },
  // Холливел
  {
    name: 'Корден',
    description: '<p>Столица в герцогстве Холливел</p>',
    coordinates: [43.4808, -106.9189],
    ico: 'castle',
  },
  // Дарквотер
  {
    name: 'Нен-Клер',
    description: '<p>Столица в герцогстве Дарквотер</p>',
    coordinates: [-27.1031, -117.9492],
    ico: 'castle',
  },
  // Рейс
  {
    name: 'Рей-Рок',
    description: '<p>Столица в герцогстве Рейс</p>',
    coordinates: [9.9634, -115.7958],
    ico: 'castle',
  },
  // Фольтийские о-ва
  {
    name: 'Фольта',
    description: '<p>Столица Фольтийских островов</p>',
    coordinates: [-36.9893, -138.164],
    ico: 'castle',
  },
  // Синтийские о-ва
  {
    name: 'Мес-Си',
    description: '<p>Столица Синтийских островов</p>',
    coordinates: [9.4002, -153.9404],
    ico: 'castle',
  },
  // Запределье
  {
    name: 'Форт',
    description: '<p></p>',
    coordinates: [76.587, 12.4804],
    ico: 'castle',
  },
  // Святые места и монастыри
  {
    name: 'Пансион Елены у озера',
    description: '',
    coordinates: [63.6633, -33.2226],
    ico: 'hospital',
  },
  {
    name: 'Монастырь Марека и Симеона',
    description: 'Обитель в которую Джоакин привёл Аланис на лечение.',
    coordinates: [38.5, -84.8],
    ico: 'monastery',
  },
  {
    name: 'Лечебница им. Фарадея',
    description:
      '<p>Находится на остров Фарадея-Райли. Основанный известным мореплавателем Георгом Фарадеем, открывшим множество островов в Архипелаге Тысячи Осколков. С целью излечить свою душевно больную жену, он выделил средства магистру Райли на открытие лечебницы. Спустя 9 лет, Георг Фарадей скончался, лечение его супруги так и не принесло результатов. Финансирование прекратилось. С помощью своего помощника, Райли постпенно первратил лечебницу в место, где богатые дома смогли скрыть своих нежелательных родственников. <br>«А за лечебницей утвердилась весьма прагматическая репутация: имеешь проблемы с больным родичем — напиши в заведение Райли.»  <br>Янмэйская охота - Свидетель - 3</p>',
    coordinates: [26.740704807127834, -33.70605468750001],
    ico: 'hospital',
  },
  {
    name: 'Собор Св. Агаты',
    description: '',
    coordinates: [68.3809, -21.665],
    ico: 'monastery',
  },
  {
    name: 'Храма Елены на волнах',
    description: '',
    coordinates: [8.1843, -60.0808],
    ico: 'monastery',
  },
  {
    name: 'Монастырь Ульяны Печальной',
    description: '',
    coordinates: [31.5738, -106.2597],
    ico: 'monastery',
  },
  {
    name: 'Храм Криболы',
    description: '',
    coordinates: [-29.1617, -115.224],
    ico: 'monastery',
  },
  //Творения Праматерей
  {
    name: 'Янмейский мост',
    description: '',
    coordinates: [71.4114, -11.6015],
    ico: 'progenitor',
  },
  {
    name: 'Юлианин мост',
    description: '',
    coordinates: [28.4928, -111.2255],
    ico: 'progenitor',
  },
  {
    name: 'Грот Косули',
    description:
      '"Пещера зовется гротом Косули. В ней Светлая Агата расположилась для ночлега, изнемогая от голода, как вдруг увидела худую белоснежную косулю. Воин, что был с Агатой, схватил копье, желая убить животное, но Праматерь удержала его руку со словами: «Отпусти ее. Она слаба и одинока, будь милосерден». Косуля убежала в глубь грота, Праматерь из любопытства пошла за нею. Пещера пронизывала всю скалу, и вскоре Светлая Агата добралась до выхода на западный склон горы и оттуда увидела цветущую плодородную долину."',
    coordinates: [69.7466, -17.7539],
    ico: 'progenitor',
  },
  {
    name: 'Собор Водных Божеств',
    description: '',
    coordinates: [44.3041, -104.1503],
    ico: 'progenitor',
  },
  {
    name: 'Отречение Праотца Вильгельма',
    description: '',
    coordinates: [24.9163, -54.3164],
    ico: 'progenitor',
  },
  {
    name: 'Святое Поле',
    description: '',
    coordinates: [37.0507, -53.1298],
    ico: 'progenitor',
  },
  {
    name: 'Говорящие мартышки',
    description: '',
    coordinates: [-12.0446, -44.165],
    ico: 'progenitor',
  },
  {
    name: 'Бездонный провал',
    description: '',
    coordinates: [-43.0407, -76.0693],
    ico: 'progenitor',
  },
  {
    name: 'Львиные врата',
    description: '',
    coordinates: [-45.2168, -59.9853],
    ico: 'progenitor',
  },
  {
    name: 'Ловушка ветра',
    description: '',
    coordinates: [-50.6564, -55.9863],
    ico: 'progenitor',
  },
  {
    name: 'Морская трясина',
    description: '',
    coordinates: [-28.0816, -124.8925],
    ico: 'progenitor',
  },
  {
    name: 'Роща брабусов',
    description: '',
    coordinates: [-20.3961, -115.3125],
    ico: 'progenitor',
  },
  {
    name: 'Оазис "Тот Самый"',
    description: '',
    coordinates: [10.871, -79.1894],
    ico: 'progenitor',
  },
  {
    name: 'Память об осаде',
    description: '',
    coordinates: [2.2351, -81.5625],
    ico: 'progenitor',
  },
  {
    name: 'Мать Мельницы',
    description: '',
    coordinates: [41.8981, -140.8886],
    ico: 'progenitor',
  },
  {
    name: 'Кладбище Ржавых Гигантов',
    description: '',
    coordinates: [36.0624, -140.0537],
    ico: 'progenitor',
  },
  // Дары
  {
    name: 'Дар №10',
    description: '',
    coordinates: [37.2609, -100.9863],
    ico: 'spiral',
  },
  {
    name: 'Дар №17',
    description: '',
    coordinates: [60.062, -98.1298],
    ico: 'spiral',
  },
  {
    name: 'Дар №18',
    description: '',
    coordinates: [75.7142, 14.1064],
    ico: 'spiral',
  },
  // Битвы
  {
    name: 'Нападение на форт',
    description: '',
    coordinates: [76.3194, 11.9091],
    ico: 'battle',
  },
  {
    name: 'Мятеж кайров',
    description: '',
    coordinates: [74.9008, 3.5595],
    ico: 'battle',
  },
  {
    name: 'Осада Дойла и Турнир',
    description: '',
    coordinates: [58.1678, -52.5146],
    ico: 'battle',
  },
  {
    name: 'Битва на Мудрой реке',
    description: '',
    coordinates: [57.9352, -43.33],
    ico: 'battle',
  },
  {
    name: 'Битва при Уиндли',
    description: '',
    coordinates: [56.1669, -38.9355],
    ico: 'battle',
  },
  {
    name: 'Нападение на Миру',
    description: '',
    coordinates: [72.7884, -83.496],
    ico: 'battle',
  },
  {
    name: 'Битва за Лабелин',
    description: '',
    coordinates: [52.9055, -51.7675],
    ico: 'battle',
  },
  {
    name: 'Битва при Пикси',
    description: '',
    coordinates: [48.9766, -54.2285],
    ico: 'battle',
  },
  {
    name: 'Финал похода Салема из Саммерсвита',
    description: 'Минерва успела до начала битвы, объвила переговоры и тем самым избежала сражения.',
    coordinates: [39.364, -53.0419],
    ico: 'battle',
  },
  {
    name: 'Катастрофа поезда',
    description: 'Место разрушения моста и падения поезда',
    coordinates: [35.742, -76.833],
    ico: 'battle',
  },
  {
    name: 'Похищение предметов династии',
    description: '',
    coordinates: [30.5953, -61.6552],
    ico: 'battle',
  },
  {
    name: 'Атака на Эвергард',
    description: '',
    coordinates: [32.4309, -89.5166],
    ico: 'battle',
  },
  {
    name: 'Переговоры с послами Орды',
    description: '',
    coordinates: [8.4886, -81.6503],
    ico: 'battle',
  },
  {
    name: 'Битва при Мелоранже',
    description: '',
    coordinates: [-6.6755, -57.7441],
    ico: 'battle',
  },
  {
    name: 'Магда против Солнечного полка',
    description:
      '<p>Могер Бакли разочаровался службой у Леди Магды Лабелин. С помощью Ассасина Родриго, он нанял корабль и 70 головрезов из разных шимерийских банд с целью ограбить один из кораблей Лабелинов, тайно перевозивший золото.</p>',
    coordinates: [-50.2647, -45.6152],
    ico: 'battle',
  },
  // Встречи
  {
    name: 'Встреча Джоакина с Ионой',
    description: '',
    coordinates: [47.6616, -74.5312],
    ico: 'roadpost',
  },
  {
    name: 'Встреча Джоакина с Хармоном в Смолдене',
    description: 'После потешного турнира, торговец Хармон нанимает Джоакина в охранники',
    coordinates: [32.9856, -71.3429],
    ico: 'roadpost',
  },
  {
    name: 'Ночь в таверне Баклеров',
    description: '',
    coordinates: [36.6287, -91.8896],
    ico: 'roadpost',
  },
  {
    name: 'Встреча Хармона с Охотником и шаванами',
    description: '',
    coordinates: [-41.3479, -74.6191],
    ico: 'roadpost',
  },
];
