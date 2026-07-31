import { useEffect, useRef } from "react";
import "./App.css";

/* ========================================
   INFORMACIÓN DE LOS SERVICIOS
======================================== */

const services = [
  {
    number: "01",
    title: "Estrategia & Redes",
    shortTitle: "SOCIAL SYSTEM",
    description:
      "Ordenamos tu comunicación y convertimos el contenido en un sistema para atraer, conectar y vender.",
    technologies: ["ESTRATEGIA", "CONTENIDO", "COMUNIDAD"],
  },
  {
    number: "02",
    title: "Contenido & Reels",
    shortTitle: "CONTENT ENGINE",
    description:
      "Ideas, guiones, diseño, grabación y edición con una identidad que no se pierde en el scroll.",
    technologies: ["GUIONES", "DISEÑO", "VIDEO"],
  },
  {
    number: "03",
    title: "Diseño y Desarrollo Web",
    shortTitle: "WEB EXPERIENCE",
    description:
      "Diseñamos y programamos páginas web modernas, rápidas y estratégicas que representan el verdadero nivel de cada marca.",
    technologies: ["DISEÑO UX/UI", "REACT", "SEO"],
  },
  {
    number: "04",
    title: "E-commerce & Tienda Nube",
    shortTitle: "COMMERCE SYSTEM",
    description:
      "Creamos y optimizamos tiendas online para que comprar sea simple, claro y confiable desde cualquier dispositivo.",
    technologies: ["TIENDA NUBE", "CONVERSIÓN", "SEO"],
  },
  {
    number: "05",
    title: "Branding & Diseño",
    shortTitle: "VISUAL IDENTITY",
    description:
      "Construimos identidades con criterio: desde el concepto inicial hasta un sistema visual preparado para crecer.",
    technologies: ["IDENTIDAD", "DISEÑO", "DIRECCIÓN"],
  },
  {
    number: "06",
    title: "Meta Ads",
    shortTitle: "GROWTH SYSTEM",
    description:
      "Creamos campañas con objetivos reales, mensajes claros y seguimiento para convertir atención en oportunidades.",
    technologies: ["CAMPAÑAS", "MÉTRICAS", "CONVERSIÓN"],
  },
  {
    number: "07",
    title: "AI Creative Lab",
    shortTitle: "ARTIFICIAL INTELLIGENCE",
    description:
      "Integramos inteligencia artificial, automatización y nuevas herramientas para desarrollar contenido y experiencias que antes parecían imposibles.",
    technologies: ["IA", "AUTOMATIZACIÓN", "PRODUCCIÓN"],
  },
];

/* ========================================
   INFORMACIÓN DE LOS PROYECTOS
======================================== */

const projects = [
  {
    number: "01",
    code: "210",
    name: "210 Hogar",
    category: "ECOMMERCE · REDES · CONTENIDO",
    description:
      "Desarrollamos un ecosistema digital para ordenar la comunicación, presentar los productos y fortalecer la experiencia de compra.",
    services: [
      "ESTRATEGIA",
      "REDES SOCIALES",
      "CONTENIDO",
      "TIENDA NUBE",
      "SEO",
    ],
    color: "yellow",
    instagram: "https://www.instagram.com/210hogar/",
  },
  {
    number: "02",
    code: "GRX",
    name: "GR-X Repuestos",
    category: "AUTOPARTES · ECOMMERCE · SOCIAL",
    description:
      "Transformamos una marca técnica de repuestos en una comunicación más clara, comercial y preparada para vender online.",
    services: [
      "ESTRATEGIA",
      "CONTENIDO",
      "REELS",
      "TIENDA NUBE",
      "SEO",
    ],
    color: "cyan",
    instagram: "https://www.instagram.com/grx.repuestos/",
  },
  {
    number: "03",
    code: "YB",
    name: "Yanina Baldesari",
    category: "ARTETERAPIA · IDENTIDAD · COMUNIDAD",
    description:
      "Construimos una comunicación artística, cálida y reconocible para acercar los talleres de arteterapia a nuevas familias.",
    services: [
      "IDENTIDAD",
      "DISEÑO",
      "CONTENIDO",
      "ESTRATEGIA",
      "COMUNIDAD",
    ],
    color: "magenta",
    instagram: "https://www.instagram.com/yaninabaldesari/",
  },
  {
    number: "04",
    code: "NK",
    name: "NK Tattoo",
    category: "WEB · PORTFOLIO · EXPERIENCIA",
    description:
      "Diseñamos una landing inmersiva para presentar el trabajo del tatuador, transmitir su identidad y generar nuevos turnos.",
    services: [
      "DISEÑO WEB",
      "DESARROLLO",
      "EXPERIENCIA",
      "RESPONSIVE",
      "CONVERSIÓN",
    ],
    color: "white",
    instagram: "https://www.instagram.com/nnikocaceres/",
  },
];

/* ========================================
   COMPONENTE PRINCIPAL
======================================== */

function App() {
  const heroRef = useRef<HTMLElement>(null);

  /* Movimiento del cubo según el cursor */

  useEffect(() => {
    const movePortal = (event: PointerEvent) => {
      if (!heroRef.current) return;

      const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

      heroRef.current.style.setProperty("--mouse-x", `${mouseX}`);
      heroRef.current.style.setProperty("--mouse-y", `${mouseY}`);
    };

    window.addEventListener("pointermove", movePortal);

    return () => {
      window.removeEventListener("pointermove", movePortal);
    };
  }, []);

  return (
    <main>
      {/* ========================================
          SECCIÓN 01 — ENCABEZADO
      ======================================== */}

      <header className="header">
        <a href="#inicio" className="logo">
          <span className="logo-box">OTB</span>

          <span className="logo-name">
            OUTSIDE
            <br />
            THE BOX
          </span>
        </a>

        <nav className="navigation">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#metodo">Método</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="header-button">
          Iniciar proyecto ↗
        </a>
      </header>

      {/* ========================================
          SECCIÓN 02 — PORTADA PRINCIPAL
      ======================================== */}

      <section className="hero" id="inicio" ref={heroRef}>
        {/* Información técnica izquierda */}

        <div className="hero-system hero-system-left">
          <span>OTB_SYS / 2026</span>
          <span>34°36&apos;S 58°22&apos;W</span>
        </div>

        {/* Información técnica derecha */}

        <div className="hero-system hero-system-right">
          <span>CREATIVE ENGINE</span>
          <span className="system-online">● SYSTEM ONLINE</span>
        </div>

        {/* Contenido principal */}

        <div className="hero-content">
          <p className="hero-label">
            <span className="label-line"></span>
            Agencia creativa + crecimiento digital
          </p>

          <h1>
            NO PENSAMOS
            <br />
            <span className="outline">DENTRO</span> DE LA
            <br />
            <span className="yellow">CAJA.</span>
          </h1>

          <p className="hero-description">
            Transformamos negocios con potencial en marcas que se ven, se
            entienden y venden.
          </p>

          <div className="hero-buttons">
            <a href="#contacto" className="button button-primary">
              Salir de la caja
              <span>↗</span>
            </a>

            <a href="#proyectos" className="button button-secondary">
              Ver proyectos
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Portal tridimensional */}

        <div className="portal">
          <div className="portal-glow"></div>

          <div className="cube">
            <div className="cube-face cube-front">
              <span>OTB</span>
            </div>

            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>

          <div className="portal-orbit portal-orbit-one"></div>
          <div className="portal-orbit portal-orbit-two"></div>
        </div>

        {/* Indicador de scroll */}

        <div className="scroll-indicator">
          <span>
            SCROLL TO
            <br />
            BREAK THE BOX
          </span>

          <strong>↓</strong>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 03 — FRANJA ANIMADA
      ======================================== */}

      <section
        className="services-ticker"
        aria-label="Servicios de Outside the Box"
      >
        <div className="ticker-track">
          <span>ESTRATEGIA</span>
          <b>✦</b>
          <span>CONTENIDO</span>
          <b>✦</b>
          <span>DISEÑO</span>
          <b>✦</b>
          <span>WEB</span>
          <b>✦</b>
          <span>ECOMMERCE</span>
          <b>✦</b>
          <span>META ADS</span>
          <b>✦</b>
          <span>INTELIGENCIA ARTIFICIAL</span>
          <b>✦</b>

          <span>ESTRATEGIA</span>
          <b>✦</b>
          <span>CONTENIDO</span>
          <b>✦</b>
          <span>DISEÑO</span>
          <b>✦</b>
          <span>WEB</span>
          <b>✦</b>
          <span>ECOMMERCE</span>
          <b>✦</b>
          <span>META ADS</span>
          <b>✦</b>
          <span>INTELIGENCIA ARTIFICIAL</span>
          <b>✦</b>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 04 — MANIFIESTO
      ======================================== */}

      <section className="manifesto">
        {/* Texto decorativo de fondo */}

        <div className="manifesto-background-text">
          OUTSIDE THE BOX
        </div>

        {/* Logo oficial */}

        <div className="manifesto-logo">
          <img
            src="/logo-otb.png"
            alt="Logo oficial de Outside the Box"
          />
        </div>

        {/* Contenido */}

        <div className="manifesto-content">
          <p className="section-label">
            [ 00 / MANIFIESTO ]
          </p>

          <p className="manifesto-intro">
            NO VENIMOS A LLENAR
            <br />
            TU FEED DE POSTEOS.
          </p>

          <h2>
            VENIMOS A ENCONTRAR
            <br />
            QUÉ ESTÁ FRENANDO
            <br />
            <span>TU CRECIMIENTO.</span>
          </h2>

          <p className="manifesto-description">
            Primero entendemos el negocio. Después diseñamos la estrategia,
            el contenido y las herramientas que realmente necesita para
            avanzar.
          </p>

          <a href="#servicios" className="manifesto-link">
            DESCUBRIR EL SISTEMA OTB
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 05 — SERVICIOS
      ======================================== */}

      <section className="services-section" id="servicios">
        {/* Encabezado */}

        <div className="services-header">
          <div className="services-title">
            <p className="section-label">
              [ 01 / CAPACIDADES ]
            </p>

            <h2>
              TODO LO QUE TU
              <br />
              MARCA NECESITA.
              <br />
              <span>CONECTADO.</span>
            </h2>
          </div>

          <div className="services-introduction">
            <p>
              No ofrecemos piezas sueltas. Construimos ecosistemas digitales
              donde cada parte trabaja para alcanzar el mismo objetivo.
            </p>

            <div className="services-counter">
              <span>OTB_CAPABILITIES</span>

              <strong>
                {services.length.toString().padStart(2, "0")}
              </strong>
            </div>
          </div>
        </div>

        {/* Grilla de servicios */}

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              {/* Elemento visual de la tarjeta */}

              <div className="service-visual">
                <span>{service.shortTitle}</span>

                <div className="service-visual-box">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              {/* Información del servicio */}

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              {/* Tecnologías y capacidades */}

              <div className="service-technologies">
                {service.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="service-card-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN 06 — PROYECTOS
      ======================================== */}

      <section className="projects-section" id="proyectos">
        {/* Encabezado */}

        <div className="projects-header">
          <div>
            <p className="section-label">
              [ 02 / PROYECTOS REALES ]
            </p>

            <h2>
              NO MOSTRAMOS
              <br />
              PROMESAS.
              <br />
              <span>MOSTRAMOS TRABAJO.</span>
            </h2>
          </div>

          <div className="projects-header-description">
            <p>
              Marcas diferentes. Problemas diferentes. Una misma obsesión:
              encontrar la solución que haga avanzar cada negocio.
            </p>

            <span>SELECTED_WORK / 2026</span>
          </div>
        </div>

        {/* Lista de proyectos */}

        <div className="projects-list">
          {projects.map((project) => (
            <a
              href={project.instagram}
              target="_blank"
              rel="noreferrer"
              className={`project-card project-${project.color}`}
              key={project.number}
            >
              <span className="project-number">
                {project.number}
              </span>

              {/* Visual del proyecto */}

              <div className="project-visual">
                <div className="project-code">
                  {project.code}
                </div>

                <div className="project-shape">
                  <span></span>
                  <span></span>
                </div>

                <small>
                  OTB_PROJECT_{project.number}
                </small>
              </div>

              {/* Información del proyecto */}

              <div className="project-information">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-services">
                  {project.services.map((service) => (
                    <span key={service}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Acción del proyecto */}

              <div className="project-action">
                <span>VER PROYECTO</span>
                <strong>↗</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN 07 — MÉTODO DE TRABAJO
      ======================================== */}

      <section className="method-section" id="metodo">
        {/* Información técnica */}

        <div className="method-system-data">
          <span>OTB_PROCESS</span>
          <span>VERSION 01.2026</span>
          <span>STATUS: ACTIVE</span>
        </div>

        <p className="section-label">
          [ 03 / EL SISTEMA OTB ]
        </p>

        <div className="method-layout">
          {/* Introducción */}

          <div className="method-introduction">
            <h2>
              NO EMPEZAMOS
              <br />
              PUBLICANDO.
              <br />

              <span>
                EMPEZAMOS
                <br />
                ENTENDIENDO.
              </span>
            </h2>

            <p>
              Cada marca tiene su propio contexto, momento y desafío. La
              estrategia aparece cuando dejamos de adivinar y empezamos a
              entender el negocio.
            </p>

            <div className="method-coordinate">
              <span>INPUT</span>
              <div></div>
              <span>EVOLUTION</span>
            </div>
          </div>

          {/* Pasos del método */}

          <div className="method-steps">
            {/* Paso 01 */}

            <article className="method-step">
              <span className="method-number">
                01
              </span>

              <div className="method-step-content">
                <span className="method-step-code">
                  DISCOVERY_PROTOCOL
                </span>

                <h3>Diagnóstico</h3>

                <p>
                  Analizamos el negocio, la audiencia, la comunicación, los
                  canales actuales y las oportunidades.
                </p>
              </div>

              <span className="method-step-arrow">
                ↘
              </span>
            </article>

            {/* Paso 02 */}

            <article className="method-step">
              <span className="method-number">
                02
              </span>

              <div className="method-step-content">
                <span className="method-step-code">
                  DIRECTION_PROTOCOL
                </span>

                <h3>Dirección</h3>

                <p>
                  Definimos el posicionamiento, los objetivos, el mensaje y
                  el sistema visual de la marca.
                </p>
              </div>

              <span className="method-step-arrow">
                ↘
              </span>
            </article>

            {/* Paso 03 */}

            <article className="method-step">
              <span className="method-number">
                03
              </span>

              <div className="method-step-content">
                <span className="method-step-code">
                  CREATION_PROTOCOL
                </span>

                <h3>Creación</h3>

                <p>
                  Diseñamos el contenido, las campañas y las herramientas
                  digitales necesarias para ejecutar la estrategia.
                </p>
              </div>

              <span className="method-step-arrow">
                ↘
              </span>
            </article>

            {/* Paso 04 */}

            <article className="method-step">
              <span className="method-number">
                04
              </span>

              <div className="method-step-content">
                <span className="method-step-code">
                  EVOLUTION_PROTOCOL
                </span>

                <h3>Evolución</h3>

                <p>
                  Medimos, aprendemos y ajustamos el sistema para acompañar
                  el crecimiento real de la marca.
                </p>
              </div>

              <span className="method-step-arrow">
                ↗
              </span>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;