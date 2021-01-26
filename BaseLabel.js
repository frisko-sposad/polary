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
    description: '<p>Город в Герцогстве Ориджин.<br>Имеется епископство</p><p>Владелец: Флеминги</>',
    coordinates: [74.7165, -31.333],
    ico: 'castle',
  },
  {
    name: 'Уайтшед',
    description: '<p>Город в Герцогстве Ориджин.</p><p>Владелец: Уайты</>',
    coordinates: [75.1280, -41.4404],
    ico: 'castle',
  },
  {
    name: 'Лид',
    description: '<p>Город в Герцогстве Ориджин. Лиллидей - владеет холмистыми предгорьями на западе герцогства и получает прибыли с овечьей шерсти.</p><p>Владелец: Лиллидеи</p>',
    coordinates: [69.471, -36.958],
    ico: 'castle',
  },
  {
    name: 'Майн',
    description: '<p>Город в Герцогстве Ориджин. Богатство Майна Молота проистекало из серебряных рудников у Верхней Близняшки. Пра-прадед Майна был обычным шахтным бригадиром. Тогдашний барон Верхней Близняшки предал герцога и попытался разрушить Первую Зиму. Пра-прадед Майна с компанией шахтеров неожиданно для всех поддержал Ориджинов: захватил замок барона-мятежника. Мятеж провалился, барон был казнен, а его владения герцог отдал шахтному бригадиру. Тот стал единственным северным феодалом, происходящим из трудяг, а не военных. Своим исключительным положением новоиспеченный граф, как ни странно, гордился и всячески его подчеркивал. Поместил на свой герб кирку и камень, а родовое имя взял – Молот.</p><p>Владелец: Майны</p>',
    coordinates: [65.1991, -34.2773],
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
    description: 'Столица в герцогстве Нортвуд.<p>Владелец: Нортвуды</p>',
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
    description: '<p>Город, столица герцогства Фарвей. Герцогство Надежда</p><p>Владелец: Лайтхарты, Фарвеи</p>',
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
    description: '<p>Леонгард — морские ворота Надежды — встречал путешественников гранитными клыками пирсов, вонзившихся в бухту, и величавой колоннадой храма Елены-На-Волнах, и звездными огнями Трехглазого Маяка.</p><p>Владелец: Лайтхарты</p>',
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
    description: '<p>По вершине плотины тянулась гряда невысоких строений, а к обеим ее концам примыкали массивные квадратные башни, стоящие на берегах. От башен разлетались в разные стороны нити проводов. Все это вместе и был замок Эрроубэк: фортифицированный искродельный цех.</p>',
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
    name: 'Острова Смайл',
    description:
      '<p>В самой середке Восточного моря находится подходящая перевалочная точка: Веселые острова. Два верхних, напоминающие глаза, скалисты и неприветливы, но нижний – изогнутый, как улыбка великана, остров Смайл – изобилует бухтами. Остров Смайл, надо полагать, находится в ленном владении барона Смайла. Остров Смайл – часть земель Короны, им владеет прямой вассал императора.<br>Герб: две лисицы. </p><p>Владелец: Смайлы</p>',
    coordinates: [45.2671, -34.1894],
    ico: 'castle',
  },
  {
    name: 'Ниар',
    description:
      'Город в Землях Короны<br>в 1774 пережил эпидемию Сизого мора. Погибло около 2 300 человек, еще пятьсот в окрестных селах и четыреста – в Излучине',
    coordinates: [44.2097, -51.8115],
    ico: 'castle',
  },
  {
    name: 'Хемптон',
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
    description: '<p>Город в Землях Короны<br>Руайльд — вторая после Маренго гавань Земель Короны.</p>',
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
    description: '<p>Город Арден отстоит от Фаунтерры на шестьдесят миль, или четыре часа поездом, или день кораблем. Основанный в первом веке от Сошествия, он стал одним из старейших городов Полариса. На Сладкие Века пришелся расцвет Ардена: мириамские короли перенесли туда свой двор. Арден сделался малой столицей Полариса.<br>Однако слава города померкла с Багряной Смутой: мириамцы были сокрушены, а практичные янмэйцы перенесли летнюю резиденцию в Маренго. Арден застыл в развитии.<br>Этот живой памятник истории простоял почти пять веков и переродился заново с открытием искры. В окрестностях Ардена Ханай была построена плотина на исходе прошлого века. Город расцвел, наполнился искровыми огнями, монетами, высокими домами.<br>Главной достопримечательностью является храм Прощание — усыпальница Прародителей и королей.<br></p>',
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
    description: '<p>Город в герцогстве Шиммери<br>Сюрлион, что стоит на краю дельты Холливела, одною ногой в Литленде, другой — в королевстве Шиммери. Пророк увидел забавные дома, торчащие на сваях, как голубятни; увидел странные улицы, по которым осенью ездят экипажи, а весною плавают лодки; увидел дворцы, выстроенные на кораблях, что заплывают на главные площади при разливе реки и уходят на глубокое русло в месяцы засухи. Пророк встретил чванливых шиммерийцев в белых чалмах и шустрых босоногих литлендцев, и жилистых матросов из центральных земель.</p><p>Владелец: Пятый из Пяти</p>',
    coordinates: [-40.1494, -47.5488],
    ico: 'castle',
  },
  {
    name: 'Лаэм',
    description: '<p>Столица в герцогстве Шиммери.</p><p>Владелец: Первый из Пяти - Принц Гектор</p>',
    coordinates: [-51.2928, -49.0429],
    ico: 'castle',
  },
  {
    name: 'Пентаго',
    description: '<p>Город в герцогстве Шиммери<br>Пентаго — маленький город, там все вельможи отлично знакомы меж собою!<br>Лежащий в чаше между пяти скал, обнесенный пятью белыми стенами и увенчанный пятью башнями город.<br>Охраняется отрядом наёмников Златые Мечи</p><p>Владелец: Второй из Пяти - Граф Куиндар </p>',
    coordinates: [-41.7861, -77.0465],
    ico: 'castle',
  },
  {
    name: 'Изерин',
    description: '<p>Город в Шиммери.<Br>Находится под охраной наёмников Бригады Святого Страуса.</p><p>Владелец: Четвертый из Пяти</p>',
    coordinates: [-43.1370, -59.0625],
    ico: 'castle',
  },
  {
    name: 'Оркада',
    description: '<p>Город в герцогстве Шиммери. <br>Оркада — один из крупнейших портов Шиммери<br> Орхраняется наёмниками из полка Пасынков</p>',
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
    description: '<p>Город в герцогстве Шиммери</p><p>Владелец: Третий из Пяти - граф Огюст-Римара</p>',
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
    name: 'Сайленс',
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
    name: 'Максимиановский монастырь',
    description: '<p>Расположен на краю Бездонного Провала.</p><p>Владелец: Второй из Пяти</p>',
    coordinates: [-42.5967, -76.0412],
    ico: 'monastery',
  },
  {
    name: 'Вильгельмов монастырь',
    description: 'Сир Сандерс Салли и Форлемеей выжили при кружении поезда, были спасёны лодочником и отправлен на лечение в Вильгельмов  монастырь.',
    coordinates: [33.2800, -79.1894],
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
    description: '<p>В подземном святилище храма три века почивал малый Мерцающий Предмет — похожий на короткий металлический прут, источающий прохладное голубое сияние. Никто не смел приблизиться к нему, ведь известно, что Мерцающие Предметы несут страшную гибель всякому, кто недостаточно чист душою. Ни один священник Леонгарда не смел похвастаться абсолютной чистотой — и избегал подземелья. Но пророк спустился туда, взял в руку Предмет, подставив лицо смертоносному голубому свету — и остался невредим.</p>',
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
    coordinates: [-42.0174, -74.5353],
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
  //Местность
  {
    name: 'Долина Слепых Дев',
    description:
      '<p>Граф Флеминг и Барон Уайт встали лагерем Долине Слепых Дев, и не спешили на сбор войск в Первую Зиму.</p>',
    coordinates: [71.9091, -26.3671],
    ico: 'question',
  },
  {
    name: 'Подол Служанки',
    description:
      '<p>Едва ли не всю ширину плоскогорья заполнял ледник – именно он окрашивал Подол в белый цвет. Край ледника был неровен, причудливо изгибался и оползал языками, издали похожими на оборку передника. Проходимой была лишь самая кромка плоскогорья, ограниченная слева глыбами льда, а справа – глубокой пропастью. На этой полоске камня, испещренной снежными пятнами, отряд вынужден был остановиться на ночлег: до восточного края Подола оставалось еще полмили, когда солнце стремительно закатилось и упала тьма.</p>',
    coordinates: [72.2472, -11.0302],
    ico: 'question',
  },
  {
    name: 'Львиные горы',
    description:
      '<p>Горы в Шиммери.</p>',
    coordinates: [-38.4128, -76.6415],
    ico: 'question',
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
    description: '<p>Найденные известные предметы:<br>- Святая Сфера<br>- Роса Счастья<br>- Капля Солнца - кулон владычицы Ингрид.<br>- Предмет в форме цветка клевера.<br>- Чрево  - самый крупный изо всех Священных Предметов. </p>',
    coordinates: [57.0347, -97.2949],
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
    coordinates: [58.9018, -35.1562],
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
      '<p>После отказа Шиммерийцев продать очи, Магда Лабелин решила напасть на корабли и силой завладеть ими.</p>',
    coordinates: [-50.2647, -45.6152],
    ico: 'battle',
  },
  {
    name: 'Магда Лабелин в Изерине',
    description:
      '<p>Магда со своими войсками высадилась на берег между Лаэмом и Сюрлионом. Оттуда двинулась на северо-восток к Изерину. Небольшой отряд заранее проник в город и устроил пожар в городе. Это позволило застать врасплох охраняющий отряд наёмников Святого Страуса. После непродолжительного боя, город был сдан войскам Магды. Страусы перешли к ней на службу. </p>',
    coordinates: [-43.1691, -58.0517],
    ico: 'battle',
  },
  {
    name: 'Нападение на один из судов Лабелинов',
    description:
      '<p>Могер Бакли разочаровался службой у Леди Магды Лабелин. С помощью Ассасина Родриго, он нанял корабль и 70 головрезов из разных шимерийских банд с целью ограбить один из кораблей Лабелинов, тайно перевозивший золото.</p>',
    coordinates: [-49.6427, -47.2412],
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
    description: '<p>Вместо крепостной стены город окружен земляным валом с частоколом поверху – скорее для порядка, чем ради защиты. Надвратная башня срублена из бревен – добротная, широкая, приземистая, похожа на хряка, сидящего на заднице. Ворота распахнуты настежь, двое копейщиков точат лясы в теньке, миролюбиво поглядывают на путников. В Смолдене рады приезжим, особенно в базарные дни.</p><p>От Привратной площади начинается мостовая. Звякая подковами и погромыхивая ободами, она ведет в глубь городка, постепенно взбирается на центральный холм. Глинобитные и деревянные домики стоят неплотно, хватает места для двориков и переулков. Сохнет на веревках белье, шествуют вдоль обочины гуси; здесь на приступке у входа сидит серьезный чумазый мальчишка, там – рыжий кот. Люди стекаются в центр, к Рыночной площади, по дороге сбиваясь в кучки, шумно переговариваясь. Ближе к собору и выше по холму дома становятся каменными, вырастают до двух этажей. Над входом одного покачивается медный кувшин, подальше – жестяной крендель, напротив – башмак. </p><p>Здесь, после потешного турнира, торговец Хармон нанимает Джоакина в охранники</p>',
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
    coordinates: [-40.4125, -75.2074],
    ico: 'roadpost',
  },
];
