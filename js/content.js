// Todo el contenido del sitio. Editá acá sin tocar el HTML.
// Imágenes: poné solo el nombre base; el sitio busca assets/img/<nombre>-1600.webp / -800.webp / -1600.jpg
window.CONTENT = {
  sitio: {
    serie: "Patagonia bajo fuego",
    tema: "Incendios forestales en la zona de San Carlos de Bariloche",
    materia: "Investigación Periodística",
    universidad: "UADE",
    catedra: "", // pendiente: completar cuando esté el dato
    anio: 2026,
  },

  // ---------------- NOTA PRINCIPAL ----------------
  // publicada:false muestra la portada con aviso "en edición".
  // cuerpo: lista de bloques {t:"p"|"h2"|"cita"|"img", ...}
  //   {t:"p", texto:"..."}  {t:"h2", texto:"..."}  {t:"cita", texto:"...", autor:"..."}
  //   {t:"img", img:"cerro-epuyen", alt:"...", pie:"...", credito:"..."}
  // nota: "..." (opcional) = anotación a mano al margen (solo en la versión 2).
  // En los textos, **así** se marca negrita. {t:"destacado"} = párrafo entero resaltado.
  nota: {
    publicada: true,
    volanta: "Incendios forestales",
    titulo: "Patagonia bajo fuego: los incendios que exponen las dificultades de prevenir antes de la emergencia",
    bajada: "Los incendios forestales de la temporada 2025-2026 volvieron a poner en discusión la capacidad de prevención y respuesta en la Patagonia. Los testimonios de especialistas y vecinos afectados revelan una problemática que no termina cuando se apagan las llamas y que involucra recursos, planificación territorial y asistencia estatal.",
    autores: ["Matías Cervetti", "Santino Mastronardi"],
    fecha: "",
    // cierre: frase grande antes de Equipo (solo versión 2). Sale del último párrafo de la nota.
    cierre: "La eficacia de las políticas de manejo del fuego no debería evaluarse únicamente por la capacidad de **apagar las llamas**.",
    portada: { img: "cerro-epuyen", alt: "Columna de humo sobre el cerro Epuyén durante el incendio de enero de 2026", credito: "Foto: CatrielGB / Wikimedia Commons (CC BY-SA 4.0)" },
    cuerpo: [
      { t: "p", nota: "8 de enero de 2026 · Arroyo Mina", texto: "El 8 de enero de 2026, cuando el fuego avanzó sobre el paraje Arroyo Mina, en Chubut, Claudia Sastre vio cómo las llamas se acercaban a su chacra. El incendio amenazaba con cruzar el arroyo que dividía el terreno y alcanzar su vivienda. La intervención de otros vecinos, que llegaron con motosierras y derribaron un pino encendido, fue fundamental para evitar que el fuego continuara propagándose hacia su propiedad." },
      { t: "p", texto: "Su casa sobrevivió, pero las consecuencias no desaparecieron con las llamas. Los daños materiales, las pérdidas económicas y las dificultades para recibir asistencia continuaron después de la emergencia." },
      { t: "destacado", texto: "Lo ocurrido en Arroyo Mina permite observar una contradicción que atraviesa la problemática de los incendios forestales: mientras los esfuerzos se concentran en detener el fuego, la prevención y la recuperación de las comunidades representan desafíos que requieren atención durante todo el año." },
      { t: "p", texto: "Los incendios que afectaron distintos sectores de la Patagonia durante la temporada 2025-2026 no pueden explicarse únicamente por las altas temperaturas o la falta de precipitaciones. Si bien las condiciones climáticas favorecen su propagación, las actividades humanas, la expansión de viviendas hacia zonas boscosas y la preparación del territorio también influyen en la magnitud de sus consecuencias." },
      { t: "p", nota: "99,5% → acción humana", texto: "Claudio Brockerhof, referente regional en manejo del fuego, explicó que el comportamiento de estos fenómenos cambió durante los últimos años. Según señaló, el 99,5% de los incendios está relacionado con la acción humana, ya sea por intencionalidad, negligencia o descuido." },
      { t: "p", texto: "Este dato permite distinguir dos problemas que suelen confundirse: **evitar que se inicie un incendio y reducir los daños que puede provocar una vez iniciado**. Aunque no siempre sea posible impedir la aparición de un foco, las condiciones del territorio y las medidas preventivas pueden influir en su evolución." },
      // mosaico: grilla 5x3 en blanco y negro; las fotos van rotando
      // las primeras 15 arrancan visibles (sin repetir); el resto entra al rotar
      { t: "mosaico", fotos: ["brigadistas-humo", "cerro-epuyen", "brigadista-mochila", "foco-los-alerces", "alerces-noche", "futalaufquen-humo", "brigadista-1", "brigadista-2", "brigadista-cenizas", "color-incendio", "foco-1", "avion-hidrante", "incendios-no-paran", "se-quema", "suelo-activo", "restos-incendio", "monte-quemado", "brigadistas-fila", "brigadistas-ladera", "foco-2", "defensa-casa", "alerces-arrasado"], alt: "Mosaico de fotos de los incendios en la Patagonia", pie: "Temporadas de incendios en la Comarca Andina y el Parque Nacional Los Alerces.", credito: "Fotos: CatrielGB, NicolásPalacios.ph y Ucriesidelplata / Wikimedia Commons (CC BY-SA 4.0)" },
      { t: "h2", texto: "Una prevención que compite con la emergencia" },
      { t: "p", nota: "Orlando Báez · SPLIF Río Negro", texto: "Uno de los aspectos más relevantes de la investigación aparece en las declaraciones de Orlando Báez, director del Servicio de Prevención y Lucha contra Incendios Forestales (SPLIF) de Río Negro." },
      { t: "p", nota: "prevenir ≠ combatir", texto: "El funcionario explicó que las tareas preventivas incluyen la reducción de vegetación combustible, las podas, el control de quemas y el mantenimiento de espacios que permitan intervenir ante una emergencia. Sin embargo, reconoció que históricamente una parte importante de los recursos humanos y presupuestarios de estos organismos se concentró en combatir incendios una vez iniciados." },
      { t: "p", texto: "Esta situación plantea un problema de prioridades. El despliegue de brigadistas, vehículos y medios aéreos constituye la respuesta más visible frente al fuego, pero su efectividad también depende de trabajos menos visibles realizados durante los meses anteriores." },
      { t: "p", nota: "Marcos Barría · SPLIF El Bolsón", texto: "Marcos Barría, jefe de la central del SPLIF en El Bolsón, reforzó esta perspectiva al destacar la importancia de preparar el territorio durante el invierno. La apertura de caminos, la disponibilidad de fuentes de agua y la creación de espacios defendibles alrededor de las viviendas pueden facilitar el trabajo de los combatientes cuando comienza la temporada de mayor riesgo." },
      { t: "p", texto: "Las declaraciones de ambos responsables permiten identificar necesidades de mejora dentro del sistema de prevención, aunque no significan que exista una ausencia total de recursos o de políticas públicas. De hecho, también describieron inversiones en equipamiento, tecnología y personal." },
      { t: "p", texto: "Además, sus experiencias corresponden a Río Negro y no permiten establecer por sí solas qué medidas se adoptaron en Chubut antes del incendio de Arroyo Mina." },
      { t: "p", texto: "Sin embargo, sus testimonios dejan planteada una cuestión central: **¿qué lugar ocupa la prevención dentro de un sistema que debe destinar tantos esfuerzos a responder a las emergencias?**" },
      { t: "h2", texto: "Cuando el bosque y las viviendas comparten el riesgo" },
      { t: "p", nota: "interfase: casas + bosque", texto: "El crecimiento de los asentamientos en zonas boscosas agrega otra dimensión al problema. En las denominadas áreas de interfase, donde conviven construcciones humanas y vegetación, el avance de las llamas puede comprometer simultáneamente los ecosistemas, las viviendas y la seguridad de sus habitantes." },
      { t: "p", texto: "Brockerhof vinculó el aumento del riesgo con la combinación del cambio climático y la expansión demográfica hacia estos territorios. En la misma línea, Barría advirtió sobre las dificultades de planificación en poblaciones rurales y boscosas, especialmente respecto del acceso al agua, las vías de evacuación y la preparación de las construcciones." },
      // tira: fotos en fila que se desplazan con el scroll y toman color al pasar por el centro
      { t: "tira", fotos: [
        { img: "brigadistas-fila", alt: "Dos brigadistas con una manguera frente a una llamarada", pie: "Brigadistas frente al fuego en la Comarca Andina, enero de 2026." },
        { img: "foco-2", alt: "Llamas altas consumiendo vegetación junto a un camino", pie: "Foco de incendio, Comarca Andina, enero de 2026." },
        { img: "brigadistas-ladera", alt: "Brigadistas con mangueras entre el humo de una ladera", pie: "Combate en una ladera cubierta de humo, enero de 2026." },
        { img: "defensa-casa", alt: "Persona arrojando agua con mangueras para defender una casa", pie: "Defensa de una casa ante el avance del fuego, febrero de 2026." },
        { img: "alerces-noche", alt: "Fuego nocturno en el Alto río Percy", pie: "Fuego de noche en el Alto río Percy, Los Alerces." },
        { img: "se-quema", alt: "Dos personas avanzan con una motosierra entre árboles quemados", pie: "Trabajo con motosierra entre los árboles quemados, enero de 2026." },
        { img: "monte-quemado", alt: "Hombre de pie en un bosque de troncos calcinados", pie: "Monte quemado en la Comarca Andina, enero de 2026." },
        { img: "restos-incendio", alt: "Camino de tierra entre árboles secos y quemados", pie: "Lo que queda después del fuego, enero de 2026." },
      ], credito: "Fotos: CatrielGB y NicolásPalacios.ph / Wikimedia Commons (CC BY-SA 4.0)" },
      { t: "p", texto: "Desde esta perspectiva, los incendios dejan de ser exclusivamente una cuestión ambiental o de respuesta operativa. También se relacionan con las decisiones sobre cómo se ocupa el territorio y qué medidas de seguridad acompañan ese crecimiento." },
      { t: "p", nota: "cañadón + viento", texto: "La experiencia de Claudia permite dimensionar esta vulnerabilidad. Su chacra está ubicada en un cañadón donde el viento puede circular con intensidad, una condición que favoreció el avance del fuego durante la emergencia." },
      { t: "p", texto: "El problema, entonces, no se limita a la presencia de vegetación seca o temperaturas elevadas. También involucra **qué tan preparadas están las comunidades para convivir con un riesgo que forma parte de las características del territorio**." },
      { t: "h2", texto: "Las consecuencias que permanecen después del fuego" },
      { t: "p", texto: "Mientras la atención pública suele concentrarse en las imágenes de los incendios activos, las consecuencias para los habitantes pueden prolongarse mucho más allá de su extinción." },
      { t: "p", nota: "47 viviendas destruidas", texto: "En Epuyén y El Hoyo, un relevamiento oficial de enero de 2026 confirmó 47 viviendas con destrucción total, una cifra que permite dimensionar parte del impacto social de la emergencia." },
      { t: "p", texto: "Sin embargo, las pérdidas no se reducen a las viviendas destruidas. También incluyen alambrados, instalaciones productivas, recursos económicos y condiciones básicas para continuar habitando los terrenos afectados." },
      { t: "p", nota: "alambrado · agua potable", texto: "Claudia relató que su familia tuvo que evacuar y que recibió colaboración de vecinos y amigos para proteger su propiedad. Pero también denunció dificultades posteriores relacionadas con la asistencia estatal, la reposición del alambrado y el acceso al agua potable." },
      { t: "p", texto: "**“No nos trajeron ni agua potable”**, aseguró al describir la situación que atravesó después del incendio." },
      { t: "p", texto: "Su testimonio expone una dimensión menos visible de estas emergencias: la diferencia entre controlar el fuego y garantizar que los damnificados puedan recuperar sus condiciones de vida." },
      { t: "p", texto: "Aunque su experiencia no permite afirmar que todas las familias afectadas hayan atravesado las mismas dificultades, sí plantea interrogantes sobre el alcance de los relevamientos, la distribución de la ayuda y el seguimiento posterior de las comunidades." },
      { t: "p", texto: "La asistencia, en este sentido, no representa únicamente una respuesta inmediata. También forma parte del proceso de recuperación económica y social que comienza cuando termina la emergencia." },
      { t: "img", img: "alerces-arrasado", alt: "Bosque arrasado por el fuego", pie: "Cientos de hectáreas arrasadas por el fuego en el Parque Nacional Los Alerces, Chubut.", credito: "Foto: NicolásPalacios.ph / Wikimedia Commons (CC BY-SA 4.0)" },
      { t: "h2", texto: "Las responsabilidades detrás de las llamas" },
      { t: "p", nota: "Ley 26.815", texto: "El manejo del fuego en Argentina involucra distintos niveles del Estado. La Ley Nacional 26.815 establece un marco para la prevención y el combate de incendios, mientras que las provincias y los municipios intervienen según sus competencias y normativas." },
      { t: "p", texto: "La existencia de esta estructura institucional plantea una pregunta que atraviesa la investigación: si existen organismos especializados, mecanismos de coordinación y responsabilidades establecidas, ¿cómo se traducen esas herramientas en acciones preventivas y asistencia concreta para las comunidades?" },
      { t: "p", texto: "Las entrevistas realizadas muestran que existen inversiones, trabajos preventivos y cooperación entre instituciones. Al mismo tiempo, identifican necesidades operativas, dificultades de planificación y aspectos de la asistencia que merecen mayor investigación." },
      { t: "p", texto: "Por eso, los testimonios no alcanzan para atribuir las consecuencias de los incendios a un recorte presupuestario determinado o a un incumplimiento estatal específico. Para establecer esas responsabilidades sería necesario contrastar los presupuestos ejecutados, las tareas preventivas realizadas y los recursos efectivamente desplegados en cada emergencia." },
      { t: "p", texto: "No obstante, la falta de una comprobación concluyente sobre esas responsabilidades no elimina la importancia del problema." },
      { t: "destacado", texto: "La investigación permite interpretar que el desafío de los incendios forestales no consiste solamente en mejorar la capacidad de respuesta, sino también en fortalecer las condiciones que podrían reducir sus consecuencias antes de que el fuego aparezca." },
      { t: "p", nota: "meses después…", texto: "En Arroyo Mina, la intervención de los vecinos ayudó a evitar que las llamas alcanzaran la vivienda de Claudia. Meses después, las pérdidas y las necesidades de su familia seguían presentes." },
      { t: "p", texto: "Su experiencia deja expuesta una cuestión que va más allá de una temporada de incendios: la eficacia de las políticas de manejo del fuego no debería evaluarse únicamente por la capacidad de apagar las llamas, sino también por la preparación previa del territorio y las condiciones en las que quedan las comunidades cuando la emergencia termina." },
    ],
  },

  // ---------------- SHORTS ----------------
  shorts: [
    { id: "short-triangulo", cap: "Introducción", titulo: "El triángulo del fuego", desc: "Combustible, oxígeno y calor: los tres elementos que hacen falta para que haya fuego, y por qué alcanza con sacar uno para combatirlo.", dur: "0:43" },
    { id: "short-1", cap: "Capítulo 1", titulo: "Cuando el fuego llegó a casa", desc: "Enero de 2026: el incendio que empezó en Puerto Patriada dejó 47 viviendas con destrucción total en Epuyén y El Hoyo.", dur: "0:53" },
    { id: "short-2", cap: "Capítulo 2", titulo: "Sobrevivir al fuego", desc: "Claudia, vecina del paraje Arroyo Mina, cuenta cómo los vecinos salvaron su chacra y la ayuda que nunca llegó.", dur: "1:56" },
    { id: "short-3", cap: "Capítulo 3", titulo: "¿Por qué el fuego se vuelve incontrolable?", desc: "Clima seco, viento, acción humana y viviendas cada vez más cerca del bosque.", dur: "0:56" },
    { id: "short-4", cap: "Capítulo 4", titulo: "La prevención empieza antes del incendio", desc: "Cortafuegos, fuentes de agua y trabajo con la comunidad: lo que se hace antes de que aparezcan las llamas.", dur: "0:48" },
    { id: "short-5", cap: "Capítulo 5", titulo: "¿Alcanzan los recursos para combatir el fuego?", desc: "Brigadistas, aviones hidrantes y coordinación entre organismos frente a incendios de gran magnitud.", dur: "1:05" },
    { id: "short-6", cap: "Capítulo 6", titulo: "Después del fuego", desc: "Alambrados, animales y trabajo perdidos: las consecuencias que siguen cuando las llamas se apagan.", dur: "1:04" },
  ],

  // Podcast: se muestra debajo del carrusel de shorts
  podcast: { titulo: "Patagonia bajo fuego", kicker: "Podcast documental", desc: "Incendios forestales. Periodismo de investigación.", video: "podcast", poster: "podcast-portada", dur: "6:36" },

  // ---------------- ENTREVISTAS ----------------
  // tipo: "texto" | "video" | "pendiente"
  entrevistas: [
    {
      id: "brockerhof",
      tipo: "texto",
      nombre: "Claudio Brockerhof",
      cargo: "Coordinador Regional",
      institucion: "SPLIF",
      entrevistador: "Santino Nicolás Mastronardi",
      foto: "brockerhof-brigada",
      fotoAlt: "Claudio Brockerhof con casco y equipo de brigadista",
      volanta: "Incendios forestales",
      titulo: "“Sabemos que el 99,5% de los incendios está en la mano del hombre”",
      pdf: "assets/docs/entrevista-brockerhof.pdf",
      intro: [
        "En la Patagonia, la temporada de incendios forestales se extiende desde noviembre hasta abril, pero en la última década esto cambió. En marzo de 2021, el incendio de Las Golondrinas, en Bariloche y la Comarca Andina, en Chubut, destruyó alrededor de 500 viviendas. La temporada 2025-2026 volvió a mostrar la magnitud del problema, en el Parque Nacional Los Alerces, un rayo originó un incendio que tardó más de tres meses en ser controlado, mientras que en El Hoyo la fiscalía confirmó que el fuego había sido provocado de manera intencional.",
        "Para explicar este escenario, Claudio Brockerhof recurre a lo que define como “triángulo del fuego”, combustible, oxígeno e ignición son los elementos que forman un fuego.",
        "Además, los inviernos más suaves, las menores precipitaciones y las altas temperaturas secan la vegetación y aumentan su inflamabilidad. A esto se suma el crecimiento demográfico y turístico de la región.",
        "Brockerhof trabaja desde el año 2000 en el Servicio Nacional de Manejo del Fuego, con sede en San Carlos de Bariloche, donde fue coordinador regional y jefe de dirección de aeronaves. Es técnico universitario en Gestión Integral de Incendios Forestales y cuenta con casi 27 años de experiencia, además de haber trabajado y realizado capacitaciones en Estados Unidos, Chile, España y Portugal.",
        "En esta entrevista analiza cómo responden los distintos organismos ante los incendios en Bariloche, con qué recursos cuentan las brigadas, cuál es el verdadero alcance de los aviones hidrantes y por qué la prevención, el control de las quemas y la comunicación requieren cada vez más del compromiso de toda la comunidad.",
      ],
      foto2: { img: "brockerhof-helicoptero", alt: "Claudio Brockerhof en la cabina de un helicóptero" },
      qa: [
        { q: "¿Qué cambió en los incendios forestales de la Patagonia en los últimos años?", a: [
          "Cambió, principalmente, el comportamiento del fuego, y por dos motivos. Uno es el cambio climático, que es notorio. El otro es la expansión demográfica: vino a vivir mucha gente a lugares donde es probable que haya fuego, y no siempre es consciente de eso. Hace unos diez años, para explicar en un curso qué es un incendio de interfase,(incedio en el que conviven una causa humana y una causa natural), teníamos que buscar fotos de España, Australia, Canadá, Estados Unidos o Chile para ejemplificar.",
          "Hoy en día ,tenemos muchos casos propios. El incendio de Las Golondrinas, en 2021, quemó alrededor de 500 casas en Chubut y fue uno de los más catastróficos del país. Estaban dados todos los condimentos para que una sola chispa terminara en un incendio enorme. Antiguamente en esas zonas no había nadie. Hoy hay mucha gente, y el riesgo, el peligro y la vulnerabilidad son mucho mayores." ] },
        { q: "¿Cómo funciona el triángulo del fuego y por qué hoy se cierra con más facilidad?", a: [
          "Nosotros trabajamos sobre el triángulo del fuego. De un lado está el combustible, que es la vegetación. Del otro, el oxígeno. Y del tercero, la ignición: la chispa, el pequeño fuego que arranca todo. Si están los tres, el fuego se produce. Si se trabaja para contrarrestar alguno de esos lados, el triángulo nunca se cierra. El oxígeno siempre va a estar, y el combustible también; lo que cambió es el estado de ese combustible y la posibilidad de la creación de ignición, por causa huamanas.",
          "Tuvimos inviernos más suaves y con menos precipitaciones, y veranos con temperaturas más altas y días largos, así que la vegetación se seca más rápido y queda muy susceptible a prenderse. Si además hay viento, que aporta mucho más oxígeno, el comportamiento es cada vez más extremo. La chispa, casi siempre, la pone una persona. Sabemos que el 99,5% de los fuegos está en la mano del hombre, ya sea por intencionalidad, negligencia, descuido o una quema que se escapó.",
          "Alguien que durante años paró en el mismo lugar a calentar agua y nunca tuvo problemas, hoy hace lo mismo y provoca un incendio con caracteristicas de extremo, porque, las condiciones no son las de hace diez o veinte años. Por eso siempre digo que podemos tener los veranos más calientes y más secos, pero si nadie enciende, no vamos a tener fuegos. La excepción a esto son los rayos, los únicos incendios naturales comprobados, que además son cada vez más frecuentes, son a través de tormentas electricas." ],
          cita: "Podemos tener los veranos más calientes y más secos, pero si nadie enciende, no vamos a tener fuegos." },
        { q: "Una vez iniciado, ¿qué hace que un incendio se vuelva incontrolable?", a: [
          "Ahí entra en juego el comportamiento del fuego, que suma otras variables como la topografía y la meteorología. Si un bosque no tiene ningún trabajo silvícola y hay continuidad de vegetación desde el suelo hacia arriba, el fuego tiene caminos perfectos para trasladarse. Las especies exóticas como el pino o el eucalipto lo agravan. Sus resinas y componentes químicos las vuelven muy inflamables, queman rápido, fuerte y con muchas calorías.",
          "En los grandes incendios se forman columnas convectivas, nubes que genera el propio fuego, que crea su propia meteorología. Incluso un año lluvioso tiene su riesgo. El combustible grueso guarda más humedad, pero crece mucho pasto, que es combustible fino: el que prende y se propaga más rápido.",
          "Cuando llegan los calores fuertes, se seca. Hay autores que dicen que entramos en la era del piroceno y que vamos a tener que aprender a convivir con el fuego. El fuego natural es parte del ecosistema; el grave problema es la negligencia y la intencionalidad." ] },
        { q: "En Bariloche y sus alrededores, ¿qué organismos tienen la responsabilidad principal sobre la prevención, la fiscalización y el combate de incendios?", a: [
          "Por el artículo 41 de la Constitución Nacional, el cuidado de los recursos naturales corresponde a cada jurisdicción. Cada provincia cuenta con uno y cada parque nacional tambien. En Bariloche, eso significa el Servicio de Prevención y Lucha contra Incendios Forestales de Río Negro, el SPLIF, y el Parque Nacional Nahuel Huapi. El parque tiene su propio sistema de Incendios, Comunicaciones y Emergencias, el ICE, con personal propio, y trabaja en conjunto con el servicio provincial. Río Negro cuenta con casi 180 combatientes, Neuquén con unos 220 y Chubut con alrededor de 200.",
          "La provincia habilita las quemas durante el invierno y las corta cuando los índices de peligro empiezan a subir. En la última temporada, con el decreto de emergencia ígnea, también participaron de los controles el municipio, Protección Civil, la policía y guardafauna. El Servicio Nacional de Manejo del Fuego está en todo el país, pero no tiene la responsabilidad primaria. Brinda apoyo y coordinación, estandariza la capacitación, tiene brigadas nacionales y contrata los medios aéreos.",
          "Nació en 1996 como Plan Nacional, a raíz de los grandes incendios en la zona de Bariloche. En 2012, la Ley 26.815 creó el Sistema Federal de Manejo del Fuego, que integran todas las provincias y Parques Nacionales. Hoy dependemos de la Agencia Federal de Emergencias, dentro del Ministerio de Seguridad Nacional." ] },
        { q: "Ante un incendio de gran magnitud, ¿cuándo interviene Nación y qué tiene que ocurrir para que una provincia solicite recursos nacionales?", a: [
          "Nosotros siempre estamos, pero todo depende de la necesidad y de la solicitud de la jurisdicción, es decir, de la provincia o de Parques Nacionales. Ante un evento, la coordinación regional se comunica con el responsable para saber cómo está el fuego y qué necesita. Durante la temporada tenemos medios aéreos desplegados desde San Martín de los Andes hasta Esquel, pasando por Bariloche y El Bolsón, así que lo más probable es que el primer pedido sea un avión o un helicóptero.",
          "A partir de ahí nos ponemos a disposición del responsable. Si hace falta más, el Servicio Nacional puede movilizar recursos de otras regiones. Se ha traído gente de todo el país a trabajar a la Patagonia, y también se ha enviado personal a Chile, Bolivia y Brasil.",
          "Además, Argentina tiene fuego todo el año. En invierno la estación seca está de Córdoba hacia el norte, y en verano se traslada al sur. Por eso los medios aéreos se contratan para todo el año y se refuerzan en temporada: si una región tiene cinco aeronaves desplegadas, en verano puede pasar a quince." ] },
        { q: "¿La coordinación entre Nación, el SPLIF, los municipios, Parques Nacionales, los bomberos y otros organismos funciona adecuadamente? ¿Dónde aparecen las dificultades?", a: [
          "El fuego no tiene límites y tiene la llave de todas las tranqueras y de todas las casas. Si no trabajamos en forma conjunta, poco vamos a lograr. Los sistemas se han ido aceitando. Cuando la gente llama a los bomberos por un incendio de interfase, ellos van, pero ya avisan automáticamente al servicio.",
          "Llega el responsable, se hace cargo y los bomberos se ponen a su disposición. Trabajamos como una pirámide, con una cabeza y una sola persona que toma la decisión, porque no podemos ir diez a apagar un fuego y que cada uno haga lo que quiera. Es una cuestión de seguridad. La temporada pasada, con la emergencia ígnea, la provincia, el municipio, Protección Civil, Parques, la policía y guardafauna trabajaron muy bien en conjunto.",
          "Las dificultades aparecen en otros lugares. Todas las jurisdicciones hacen campañas de prevención, pero falta trabajar más en campañas conjuntas. Las provincias empezaron a contratar sus propios medios aéreos, y esa estrategia también hay que pensarla en conjunto. Y la investigación de causas depende de que haya una denuncia y una actuación judicial, lo que deja muchos incendios sin investigar." ],
          cita: "El fuego no tiene límites y tiene la llave de todas las tranqueras y de todas las casas." },
        { q: "¿Las provincias patagónicas cuentan con los recursos humanos, el equipamiento y la infraestructura necesarios? ¿Hay un impacto concreto de la falta de presupuesto?", a: [
          "En mi opinión, los recursos siempre van a ser escasos. En Estados Unidos hay una enorme cantidad de combatientes, herramientas y medios, y nunca alcanzan, porque los fuegos se hacen muy grandes. Por supuesto que hacen falta más recursos, principalmente el humano, trabajamos todo el día frente a la llama y en algún momento hay que descansar. Quizás también haga falta tener dos medios aéreos por base en lugar de uno, o sumar más helicópteros donde hay muchos espejos de agua.",
          "Las provincias se están fortaleciendo, se contrata más personal y sus propios medios aéreos, y capacitan a su gente. En el Servicio Nacional no hubo recortes. No se echó gente, y se mantienen las brigadas, los vehículos, las autobombas y los medios aéreos. Lo que no se compró es nada nuevo, quizás, haría falta tener dos mudas de ropa y tenemos una. La gestión anterior estableció por ley que el tres por mil de todos los seguros, salvo los de vida, se destine al Servicio Nacional.",
          "El actual gobierno eliminó el fideicomiso, pero lo que se rompió fue la forma de administrar ese dinero. Por lo que tengo entendido, ahora lo maneja directamente el Ministerio de Seguridad, y una gran parte se destina a contratar medios aéreos. Donde sí hay un impacto es en los sueldos: los aumentos son muy bajos y el salario no alcanza." ] },
        { q: "El debate público suele concentrarse en los aviones hidrantes. Desde una mirada técnica, ¿qué importancia tienen los medios aéreos y qué recursos son más determinantes?", a: [
          "Somos como un reloj de engranajes, si falta uno, no da la hora. El avión, el helicóptero, la topadora y la autobomba son herramientas, igual que la pala, y su eficacia depende de cómo y cuándo se usen. Yo estuve en incendios en Estados Unidos con 50 medios aéreos y 2.000 personas, y los fuegos se hacían grandes igual. Todos piden los Canadair, que son anfibios, cargan cerca de 6.000 litros y cuestan unos 25 millones de dólares. Los Air Tractor con los que trabajamos cargan 3.000 litros y cuestan entre 4,5 y 5 millones.",
          "Con lo que vale un avión grande se pueden tener cinco chicos y lanzar 15.000 litros. Además, muchos lugares no tienen la infraestructura, el combustible ni el agua que requieren las aeronaves grandes. Santiago del Estero tiene un avión que lanza 15.000 litros y este año se trajo a la zona, pero por nuestra topografía hay lugares donde no puede entrar. Lo que sí falta es empezar a usar retardantes, con mucho calor, de 3.000 litros de agua pueden llegar al suelo 2.000 con suerte. Y hay que entender que arriba del avión va una persona." ],
          cita: "Somos como un reloj de engranajes, si falta uno, no da la hora." },
        { q: "Respecto de las quemas que realizan los particulares, ¿cómo debería funcionar el sistema de permisos, controles y fiscalización?", a: [
          "Hoy, durante el invierno, la jurisdicción habilita a las quemas. Cada uno puede podar, cortar los cercos, sacar árboles y quemar esos residuos dentro de su predio, porque es la forma más barata de reducir el combustible. Cuando los índices meteorológicos empiezan a subir, se cortan.",
          "Hay zonas ganaderas donde históricamente se quemó para renovar el pasto, pero las condiciones atmosféricas ya no son las de antes, hay que estudiar cada caso y pedir permiso. Lo que falta es una política pública, de Nación, provincias y municipios, que busque alternativas y le dé valor agregado al combustible que se saca. Así, un productor o un privado podría obtener un rédito por invertir en bajar el riesgo. Y si alguien prende fuego cuando está vedado y se le escapa, hay que caer con el peso de la ley, porque las leyes existen. Una chispa puede prender la vegetación, pasar a una casa y, si no se la controla, quemar un barrio." ] },
        { q: "¿Existen mecanismos suficientes para controlar las quemas y detectar las negligentes o intencionales?", a: [
          "Durante la emergencia ígnea, si había una denuncia se hacía una recorrida, se apagaba el fuego y se labraba un acta de infracción. Técnicamente, además, se puede determinar la causa de un incendio. Un rayo deja evidencia en el árbol, y hay sistemas que registran dónde cayeron las descargas. Para la negligencia o la intencionalidad hay especialistas en investigación de causas, que incluso trabajan con perros para detectar si se usó algún combustible.",
          "El problema es que, para investigar, tiene que haber una denuncia formal hecha y una actuación judicial, y la gente, no suele denunciar. Aun con evidencia, la justicia exige pruebas muy contundentes. Por eso, en los informes de fin de temporada, un gran porcentaje de los incendios figura con causa desconocida. No se investiga el 100% de los fuegos, y ese es un punto débil.",
          "En Río Negro se está trabajando con el Ministerio Público Fiscal y la policía para empezar a investigar de oficio. Con esos datos sabríamos si predomina la negligencia o la intencionalidad, y podríamos orientar las campañas. Sobre las versiones de quemas con fines inmobiliarios, yo siempre pregunto lo mismo: díganme un lugar donde se haya hecho un desarrollo después de un incendio. ¿Qué vale más, algo quemado o algo verde?" ] },
        { q: "Con viviendas cada vez más cerca del bosque, ¿qué deberían hacer quienes viven en la interfase y qué medidas hacen falta alrededor de los barrios?", a: [
          "La comunidad tiene que ser consciente de dónde vive y de los resguardos que debe tener, porque dentro del lote la responsabilidad es de cada propietario, afuera trabajamos nosotros.",
          "El trabajo fuerte se hace en invierno, bajar el combustible, cortar pasto, podar, limpiar el terreno y tener todo en condiciones. Alrededor de los barrios hay que definir cómo se gestiona el combustible y con qué especies. El pino y el eucalipto son muy inflamables, y un bosque sin manejo, con vegetación continua desde el suelo hacia arriba, es un camino perfecto para el fuego. Eso hay que trabajarlo fuertemente con los municipios." ] },
        { q: "¿Qué papel cumplen la prevención y la comunicación?", a: [
          "Es donde más tenemos que trabajar como país, las provincias e incluso las municipalidades. Usamos el Índice Meteorológico de Peligro de Incendios, de origen canadiense, que combina temperatura, humedad, viento, precipitaciones y días sin lluvia. Conjunto con esto, la provincia de Río Negro, realizo una campaña para que lo entienda cualquier persona, se comunicaba con carteles en forma de reloj de colores, del verde al rojo, ubicados en distintos puntos de la ciudad y hasta en pantallas en los semáforos, con el índice en extremo, estaba prohibido hacer fuego en todos lados, incluso un asado en un chulengo dentro de una casa y a medida que ese color bajaba, aumentaban un poco las posibilidades de donde y como realizar fuego.",
          "La gente se quejó, pero funcionó. En educación, algunas provincias ya incluyen los incendios forestales en la currícula, y tengo compañeras que trabajan con escuelas primarias, pero falta darle más impronta. También hay que revisar los mensajes. Nunca se comprobó que una botella de vidrio pueda iniciar un fuego; un cigarrillo, sí. Y el foco tiene que estar en el habitante local más que en el turista. Las redes sociales pueden ser buenas o muy malas. Cuando se habla por hablar o se cree todo lo que se ve, se desinforma y se perjudica a los propios combatientes." ] },
        { q: "¿Qué cambios concretos deberían hacer Nación, la provincia y los municipios para reducir el riesgo en Bariloche en los próximos años?", a: [
          "Primero, centrase más en la planificación. En Argentina planificamos a cuatro años, y deberíamos pensar a veinte, con etapas para ir cumpliendo, porque vamos a tener cada vez más fuego. Segundo, investigar las causas de oficio, para saber qué está pasando y orientar las campañas con esos datos.",
          "Tercero, crear políticas públicas que incentiven a los privados a reducir la carga de combustible. Cuarto, darle más peso a la educación formal y trabajar las campañas en conjunto. En lo operativo, hay que definir la cantidad y el tipo de medios aéreos según cada zona, y empezar a usar retardantes. También hace falta que se reconozca el trabajo del combatiente como un trabajo de riesgo. Pero, sobre todo, hay que entender que esto ya no es solo tarea de los servicios. Antes era de los servicios; hoy es de todos, incluida de la comunidad." ],
          cita: "Antes era de los servicios; hoy es de todos, incluida de la comunidad." },
      ],
    },
    {
      id: "baez",
      tipo: "video",
      nombre: "Orlando Isaías Báez",
      cargo: "Director",
      institucion: "SPLIF Río Negro",
      entrevistador: "Santino Mastronardi",
      foto: "baez-retrato",
      fotoAlt: "Orlando Báez durante la entrevista por videollamada",
      volanta: "Entrevista en video",
      titulo: "Orlando Báez, director del SPLIF de Río Negro",
      video: "entrevista-baez",
      dur: "15:17",
      // síntesis tomada de la matriz de investigación (no es transcripción)
      intro: [
        "Coordinador del SPLIF y director del Servicio de Prevención y Lucha contra Incendios Forestales de Río Negro. Referente institucional en materia de prevención, coordinación operativa y combate de incendios forestales.",
        "Hizo hincapié en la necesidad de fortalecer la prevención, mediante tareas como la reducción de vegetación combustible, las podas y el control de quemas. Además, describió la coordinación entre centrales y organismos de emergencia, y planteó la importancia de mejorar la capacitación y la investigación de las causas de los incendios.",
      ],
    },
    {
      id: "claudia",
      tipo: "texto",
      nombre: "Claudia Elisabet Sastre",
      cargo: "Comunicadora en la Radio Asamblea Epuyén",
      institucion: "Sobreviviente del incendio del paraje Arroyo Mina, Chubut",
      entrevistador: "Matías Cervetti",
      fecha: "16/09/26",
      foto: "claudia-retrato",
      fotoPos: "center 30%",
      fotoAlt: "Claudia Sastre sonriendo frente a una cortina de pompones de colores",
      volanta: "Entrevista",
      titulo: "“Nosotros acá estamos abandonados de la mano de Dios”",
      pdf: "assets/docs/entrevista-sastre.pdf",
      intro: [
        "Los incendios forestales representan una amenaza para los ecosistemas y las comunidades rurales y de interfase urbano-forestal. En la Patagonia, las sequías, altas temperaturas, fuertes vientos y vegetación seca favorecen la rápida propagación del fuego y dificultan su prevención y combate. En los últimos años, distintos focos afectaron a localidades de Río Negro, Chubut y otras provincias de la región.",
        "La Ley 26.815, que creó el Sistema Federal de Manejo del Fuego, establece responsabilidades para los distintos niveles del Estado en materia de prevención, asistencia y combate de incendios. En Chubut, el Servicio Provincial de Manejo del Fuego, junto con otros organismos, tiene funciones de prevención, detección, extinción y coordinación de acciones. La Ley Provincial 5840 también contempla tareas de capacitación, educación ambiental y colaboración durante emergencias.",
        "El incendio de Puerto Patriada comenzó el 4 de enero de 2026 y avanzó sobre distintas zonas rurales de Chubut. En el caso de Claudia Elisabet Sastre, vecina del paraje Arroyo Mina, el fuego llegó el 8 de enero y afectó una parte importante de su chacra. Aunque las viviendas no fueron alcanzadas, las llamas llegaron a pocos metros y obligaron a la familia a evacuar.",
        "Claudia tiene 60 años y vive junto a su marido, de 72. Durante el incendio, ambos enfrentaron el fuego con recursos propios y la ayuda de vecinos, mientras mantenían comunicación con Defensa Civil, bomberos y brigadistas. En esta entrevista, reconstruye cómo se desarrolló el incendio, las medidas de prevención que tenían y la respuesta estatal antes, durante y después de la emergencia.",
      ],
      qa: [
        { q: "¿Cómo comenzó el incendio y qué ocurrió cuando llegó a la zona donde vivís?", a: [
          "El incendio comenzó el 4 de enero de 2026 y tuvo una virulencia muy grande. El año anterior también había habido incendios, pero no habían afectado directamente la zona donde estamos nosotros, en el paraje Arroyo Mina. Esta vez el fuego rodeó a Epuyén y alcanzó sectores poblados y distintos parajes rurales.",
          "A nuestra zona llegó el 8 de enero. Me acuerdo perfectamente de esa fecha porque ese día también falleció mi papá y no pude ir a su velorio. No podía dejar la chacra sola. El fuego había bajado del cerro Pirque, cruzó el río de Epuyén y atravesó la Ruta 70, que va hacia El Maitén. Después avanzó hacia el Coihue y llegó hasta nuestro paraje, que está ubicado al pie del cerro." ] },
        { q: "¿Qué parte de la chacra se quemó y qué consecuencias tuvo para ustedes?", a: [
          "El fuego entró varias veces. La última vez fue la que generó más daño. Nuestra chacra está prácticamente cortada al medio por el arroyo del Coihue. Por suerte, el fuego no llegó a cruzarlo, pero quemó toda la parte del fondo, desde el arroyo hacia la entrada y casi hasta la casa.",
          "La vivienda no sufrió daños, pero el fuego estuvo a pocos metros. Tenemos dos casas grandes y otra más chica, donde funciona el estudio de radio. La zona alrededor estaba bastante limpia, lo que ayudó a protegerlas. Aun así, fue una situación muy peligrosa y tuvimos que evacuar. Nadie podía garantizarnos que las casas fueran a quedar a salvo." ] },
        { q: "¿Qué medidas de prevención tenían antes de que llegara el fuego?", a: [
          "Nosotros vivimos en el campo y siempre tuvimos bombas de agua. Tenemos una franja importante de bosque nativo, por lo que sabemos que estamos rodeados de vegetación y que el riesgo existe. Contábamos con un reservorio de agua ubicado en la ladera de la montaña, una bomba de presión, una bomba de caudal y motosierras.",
          "También teníamos una bomba instalada junto al arroyo. El jefe de Defensa Civil sabía dónde estaban las motobombas y que dejábamos herramientas cargadas de combustible para que pudieran utilizarlas quienes fueran a combatir el fuego. Manteníamos contacto permanente con Bosques y Bomberos a través de la radio.",
          "Sin embargo, durante el incendio la manguera que llevaba agua desde el arroyo se quemó. El fuego llegó a penetrar casi un metro debajo de la tierra por el calor. La bomba estuvo a punto de perderse y tuvimos que tirarla al arroyo para salvarla." ] },
        { q: "¿Considerás que los recursos disponibles fueron suficientes para enfrentar un incendio de esa magnitud?", a: [
          "Los recursos siempre son pocos. Una cosa es un incendio común y otra muy distinta es un incendio que llega a quemar casi el 80% de un ejido. En ese contexto no alcanza nada. El día en que se quemó parte de nuestra chacra hablé con una operadora de Bosques que conozco por charlas y capacitaciones. Ella me dijo que no tenía a nadie para mandarnos porque todo el personal estaba ocupado combatiendo el fuego.",
          "Los bomberos y los brigadistas llevaban días sin dormir, igual que muchos pobladores. En nuestra zona, por suerte, había vecinos con mucha experiencia y conocimientos para trabajar con motosierras. Vinieron amigos y vecinos a ayudarnos. Algunos cortaron árboles encendidos para evitar que el fuego saltara hacia el otro lado del arroyo.",
          "No creo que haya sido una cuestión de mala voluntad por parte de quienes trabajaban en la emergencia. El problema es que los incendios avanzan a una velocidad enorme y los recursos disponibles no alcanzan para cubrir todos los lugares al mismo tiempo." ],
          cita: "Una cosa es un incendio común y otra muy distinta es un incendio que llega a quemar casi el 80% de un ejido." },
        { q: "¿Qué ocurrió con los aviones hidrantes y el resto de los recursos aéreos?", a: [
          "Durante el incendio trabajó un avión Boeing que había llegado desde Santiago del Estero. Al principio teníamos mucha esperanza de que pudiera ayudar, pero después, hablando con bomberos, entendimos que no era el avión adecuado para esa zona. Está preparado para incendios en campos planos, mientras que nosotros estamos en una zona montañosa, con quebradas y vientos cruzados.",
          "En este caso, el avión no resultó efectivo y, según lo que nos contaron, terminó desparramando el fuego en lugar de controlarlo. Los aviones hidrantes son importantes, pero no siempre pueden trabajar. Cuando hay mucho humo, el riesgo para los pilotos es enorme y se vuelve muy difícil atacar el fuego desde el aire." ] },
        { q: "¿Había antecedentes de quemas o fogones que pudieran generar incendios en la zona?", a: [
          "Quemas y fogones mal apagados hay siempre. La gente de la zona tiene la costumbre de limpiar los terrenos y quemar los residuos, y eso muchas veces se hace de manera imprudente. En el caso del incendio de enero, aparentemente se trató de un foco intencional, pero hasta ahora no se sabe quién lo inició.",
          "Las condiciones climáticas también fueron determinantes. Fue un verano muy seco, con temperaturas altas y mucho viento. En la Patagonia, cuando cambian la humedad, el viento y la temperatura, el fuego puede dispararse rápidamente. Los brigadistas utilizan la llamada regla de los 30: 30 grados de temperatura, 30 kilómetros por hora de viento y 30% de humedad. Cuando se dan esas condiciones, el riesgo aumenta mucho." ] },
        { q: "¿Se realizaron obras o medidas para reducir el riesgo en los alrededores de tu chacra?", a: [
          "Por parte de la Municipalidad de Epuyén, no. Nosotros acá estamos abandonados de la mano de Dios. Las medidas que tuvimos fueron las que organizamos entre vecinos. Cuando todavía estábamos apagando focos, vino gente de la provincia y realizó un relevamiento. Nos identificaron como damnificados, pero después no figuramos en ningún lado como tales.",
          "Sabemos que a algunos vecinos que tienen animales les llevaron pasto, pero a nosotros no nos dieron ayuda para reconstruir los alambrados. Tenemos todos los postes quemados y perdimos trabajo y dinero. Tampoco nos llevaron agua potable." ] },
        { q: "¿Qué asistencia recibieron después del incendio y qué reclamos siguen pendientes?", a: [
          "No recibimos prácticamente nada. La sensación fue de una indiferencia total. Muchas veces parece que se considera damnificada solamente a la persona que perdió su vivienda, pero también hay quienes perdieron animales, alambrados, producción y trabajo.",
          "Vimos vacas, ovejas y otros animales quemados. También hubo gallineros y pollitos que murieron. Un vecino tuvo que vender sus vacas a un precio muy bajo porque se le quemó todo el pasto y no tenía cómo alimentarlas. Otro vecino tuvo que meter las ovejas al agua para salvarlas.",
          "Los pequeños productores también sufrimos muchísimo. No estamos hablando de grandes campos, sino de personas que viven de lo que tienen. Cuando se queman los alambrados, los animales se escapan; cuando se pierde el pasto, hay que comprar alimento; y cuando se destruye parte de la chacra, hay que gastar dinero para recuperarla.." ],
          cita: "Muchas veces parece que se considera damnificada solamente a la persona que perdió su vivienda." },
        { q: "¿Qué es lo que más te preocupa de la forma en que se manejaron las ayudas y las donaciones después del incendio?", a: [
          "Me preocupa que hay mucho vivo dando vueltas. Muchos autoconvocados, capaz que no suena simpático, pero yo lo veo. Sabemos de gente que ha recibido motobombas de presión y elementos donados y después los ha rifado. También hemos visto que han recibido ayuda personas a las que no se les quemó nada, mientras que otra gente a la que se le quemó no recibió.",
          "Y eso genera mucha desconfianza. Porque además sabemos que ha entrado dinero para atender la emergencia y nadie sabe bien a dónde fue. A mí me preocupa también eso. Yo tiendo a ser malpensada porque soy comunicadora. Trabajo sobre la sospecha." ] },
        { q: "¿Qué medidas podrían ayudar a reducir el riesgo de nuevos incendios en la zona?", a: [
          "Creo que hay que hacer más trabajos de prevención. Los cortafuegos, el mantenimiento y todo eso está bien, pero después, cuando tenés un incendio de estas características, hay que hacer énfasis en el ataque y en el combate del fuego.",
          "Acá tenemos una cantidad enorme de bosque y de pinos. Cuando se prende uno, puede ser un factor de dispersión muy grande. Nosotros mismos vimos a vecinos agarrar pinos encendidos con la motosierra y tirarlos al hoyo para que se apagaran y no saltaran al otro lado del arroyo.",
          "Por eso también habría que pensar en cortar preventivamente determinados pinos y aprovechar esa madera, en lugar de esperar a que se quemen. Eso permitiría reducir parte del material que puede alimentar el fuego y, al mismo tiempo, darle un uso a esa madera." ] },
      ],
    },
    {
      id: "barria",
      tipo: "video",
      nombre: "Marcos Barría",
      cargo: "Jefe de Central El Bolsón",
      institucion: "SPLIF",
      entrevistador: "Matías Cervetti",
      foto: "barria-retrato",
      fotoPos: "80% center",
      fotoAlt: "Marcos Barría frente a una autobomba de la central de El Bolsón",
      volanta: "Entrevista en video",
      titulo: "Marcos Barría, jefe de la Central El Bolsón",
      video: "entrevista-barria",
      dur: "13:17",
      intro: [
        "Jefe de Central El Bolsón. Su función está vinculada con la organización de brigadistas, tareas preventivas y respuesta ante emergencias forestales.",
        "Destacó la importancia de las tareas preventivas durante el invierno, la preparación del territorio y la planificación de las zonas de interfase entre viviendas y bosque. También señaló dificultades vinculadas con los recursos operativos y la necesidad de mejorar las condiciones de seguridad y evacuación.",
      ],
    },
  ],

  // ---------------- MATERIAL ADICIONAL ----------------
  // Contenido del documento "CONTENIDO ADICIONAL": infografías y enlaces.
  material: {
    infografias: [
      { img: "infografia-sierra-nevada", alt: "Infografía Incendios en la Sierra Nevada: antecedentes, proceso de intervención, hectáreas afectadas y línea de tiempo", titulo: "Incendios en la Sierra Nevada" },
      { img: "infografia-conafor", alt: "Infografía Incendios forestales: cómo prevenirlos y clasificación en superficiales, aéreos y subterráneos", titulo: "Incendios forestales: identifícalos y repórtalos", credito: "CONAFOR" },
      { img: "infografia-causas-noaa", alt: "Infografía ¿Qué causa los incendios forestales?: chispa, combustible y oxígeno, y condiciones del tiempo", titulo: "¿Qué causa los incendios forestales?", credito: "NOAA / weather.gov" },
    ],
    enlaces: [
      { titulo: "Cinco recomendaciones para evitar incendios forestales", sitio: "gob.mx — CENAPRED", href: "https://www.gob.mx/cenapred/articulos/cinco-recomendaciones-para-evitar-incendios-forestales" },
      { titulo: "Restauración activa: técnica para recuperar bosques de la Patagonia tras los incendios", sitio: "ciudadano.news", href: "https://ciudadano.news/sociedad/restauracion-activa-tecnica-recuperar-bosques-patagonia-incendios-n115855" },
      { titulo: "La lluvia, un incendio aún más trágico en la Comarca Andina", sitio: "La Capital", href: "https://www.lacapital.com.ar/informacion-general/la-lluvia-un-incendio-aun-mas-tragico-la-comarca-andina-n2647001.html" },
      { titulo: "Publicación del Parque Nacional Los Alerces", sitio: "LinkedIn", href: "https://www.linkedin.com/posts/parque-nacional-los-alerces-chubut-share-7419760223650951169-ucHM/" },
      { titulo: "Espacio defendible", sitio: "nachi.org", href: "https://www.nachi.org/defensible-space-spanish.htm" },
      { titulo: "Infografía ilustrada", sitio: "Behance", href: "https://www.behance.net/gallery/158664365/Infografia-ilustrada" },
      { titulo: "Mapa conceptual: diligencias preliminares", sitio: "Scribd", href: "https://es.scribd.com/document/803205423/MAPA-CONCEPTUAL-DILIGENCIAS-PRELIMINARES-KEVIN-MUNOZ-GARCIA" },
      { titulo: "Al rescate del patrimonio arquitectónico y agroecológico de Providencia", sitio: "Agencia de Noticias UNAL", href: "https://agenciadenoticias.unal.edu.co/detalle/al-rescate-del-patrimonio-arquitectonico-y-agroecologico-de-providencia" },
    ],
  },

  // ---------------- EQUIPO ----------------
  equipo: {
    foto: "equipo",
    fotoAlt: "Matías Cervetti y Santino Mastronardi, de traje, en una oficina",
    integrantes: ["Matías Cervetti", "Santino Mastronardi"],
    hipotesis: "La insuficiencia presupuestaria, la precariedad en la fiscalización de quemas y la falta de actualización del ordenamiento territorial por parte del Servicio de Prevención y Lucha contra Incendios Forestales (SPLIF) y los municipios de San Carlos de Bariloche y alrededores, durante el período de 2023-2026, explican la recurrencia anual de más de 70.000 hectáreas quemadas en focos ígnicos intencionales o por negligencia y la vulneración directa de la seguridad de los ecosistemas y pobladores locales, evidenciando una omisión en las obligaciones de control y respuesta que el Estado provincial y municipal están legalmente compelidos a garantizar.",
    ejes: ["La prevención de los incendios forestales", "Los recursos disponibles y el financiamiento estatal", "La coordinación entre los organismos responsables", "La planificación territorial y las condiciones ambientales", "Las consecuencias sociales y la asistencia a los damnificados", "La responsabilidad estatal y el cumplimiento del marco legal"],
  },
};
