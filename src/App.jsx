import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrainFront,
  X,
} from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5531989106155?text=Ol%C3%A1%2C%20Dra.%20Luiza!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

const procedures = [
  {
    number: '01',
    title: 'Limpeza e prevenção',
    text: 'Cuidado periódico para preservar a saúde da gengiva, prevenir doenças e manter o sorriso sempre bem cuidado.',
    featured: true,
  },
  {
    number: '02',
    title: 'Clareamento dental',
    text: 'Tratamento planejado individualmente para iluminar o sorriso com segurança, equilíbrio e naturalidade.',
    featured: true,
  },
  {
    number: '03',
    title: 'Restaurações estéticas',
    text: 'Recuperação da forma, função e harmonia dos dentes com materiais que respeitam as características do seu sorriso.',
  },
  {
    number: '04',
    title: 'Saúde gengival',
    text: 'Avaliação, orientação e cuidados para gengivas mais saudáveis e uma rotina de higiene mais eficiente.',
  },
  {
    number: '05',
    title: 'Avaliação preventiva',
    text: 'Um olhar completo para identificar necessidades precocemente e construir um plano de cuidado personalizado.',
  },
  {
    number: '06',
    title: 'Clínica geral',
    text: 'Tratamento de cáries, sensibilidade e outras necessidades do dia a dia em um acompanhamento próximo e cuidadoso.',
  },
]

function BrandMark({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label="Dra. Luiza Mei — início">
      <span className="brand__mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand__text">
        <strong>Dra. Luiza Mei</strong>
        <small>Cirurgiã-dentista</small>
      </span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="header-inner">
          <BrandMark compact />
          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#procedimentos" onClick={closeMenu}>Procedimentos</a>
            <a href="#resultados" onClick={closeMenu}>Resultados</a>
            <a href="#localizacao" onClick={closeMenu}>Localização</a>
            <a className="nav__cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Agendar consulta
            </a>
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero__ghost" aria-hidden="true">luiza</div>
          <div className="hero__content">
            <p className="eyebrow reveal">Odontologia preventiva e estética</p>
            <h1 className="reveal reveal--delay-1">
              Cuidado que acolhe.<br />
              <em>Sorrisos que florescem.</em>
            </h1>
            <p className="hero__lead reveal reveal--delay-2">
              Um atendimento humano e individualizado para transformar o seu sorriso com naturalidade, ética e leveza.
            </p>
            <div className="hero__actions reveal reveal--delay-3">
              <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar avaliação <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#sobre">
                Conheça a Dra. Luiza <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero__portrait-wrap reveal reveal--delay-2">
            <div className="hero__circle" aria-hidden="true" />
            <img
              className="hero__portrait"
              src={assetUrl('dra-luiza-mei.png')}
              alt="Dra. Luiza Mei, cirurgiã-dentista"
            />
            <div className="hero__credential">
              <span>PUC Minas</span>
              <strong>CRO-MG 72314</strong>
            </div>
          </div>

          <div className="hero__side-note" aria-hidden="true">
            <span>Horto · Belo Horizonte</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="Diferenciais">
          <div><Sparkles size={18} /><span>Estética natural</span></div>
          <div><ShieldCheck size={18} /><span>Cuidado ético</span></div>
          <div><MessageCircle size={18} /><span>Escuta atenta</span></div>
        </section>

        <section className="about section" id="sobre">
          <div className="section-number" aria-hidden="true">01</div>
          <div className="about__image-wrap">
            <img src={assetUrl('dra-luiza-mei.png')} alt="Retrato profissional da Dra. Luiza Mei" loading="lazy" />
            <p>Um sorriso bonito começa com confiança.</p>
          </div>
          <div className="about__content">
            <p className="eyebrow">Prazer, Dra. Luiza</p>
            <h2>Odontologia feita com presença, escuta e delicadeza.</h2>
            <p className="large-copy">
              Formada pela PUC Minas, acredito que cada sorriso conta uma história — e que todo tratamento deve começar com uma conversa sem pressa.
            </p>
            <p>
              Como clínica geral, cuido da saúde e da estética do seu sorriso de forma integrada. Meu compromisso é entender suas necessidades, explicar cada etapa com clareza e buscar resultados naturais que façam sentido para você.
            </p>
            <ul className="check-list">
              <li><Check size={17} /> Atendimento humanizado e individualizado</li>
              <li><Check size={17} /> Planejamento transparente e responsável</li>
              <li><Check size={17} /> Resultados que respeitam a sua identidade</li>
            </ul>
            <a className="button button--outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com a Dra. Luiza <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="procedures section" id="procedimentos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Cuidado completo</p>
              <h2>Procedimentos pensados para o seu sorriso.</h2>
            </div>
            <p>
              Da prevenção à estética, cada escolha é feita em conjunto, com segurança e respeito ao seu tempo.
            </p>
          </div>

          <div className="procedures-grid">
            {procedures.map((procedure) => (
              <article className={`procedure-card ${procedure.featured ? 'procedure-card--featured' : ''}`} key={procedure.number}>
                <span className="procedure-card__number">{procedure.number}</span>
                {procedure.featured && <span className="procedure-card__tag">Destaque</span>}
                <h3>{procedure.title}</h3>
                <p>{procedure.text}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Quero saber mais sobre ${procedure.title}`}>
                  Saber mais <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="results section" id="resultados">
          <div className="results__intro">
            <p className="eyebrow eyebrow--light">Resultados reais</p>
            <h2>Transformações que preservam a sua essência.</h2>
            <p>
              Cada caso é único. Este espaço receberá registros autorizados de tratamentos realizados em consultório.
            </p>
          </div>
          <div className="cases-grid">
            {[1, 2].map((item) => (
              <article className="case-placeholder" key={item}>
                <div className="case-placeholder__visual">
                  <span>antes</span>
                  <span>depois</span>
                </div>
                <div>
                  <small>Caso clínico {String(item).padStart(2, '0')}</small>
                  <h3>Conteúdo em preparação</h3>
                  <p>As imagens serão publicadas após seleção e autorização do paciente.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section">
          <div className="experience__quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Você merece se sentir segura, ouvida e confortável em cada etapa do seu cuidado.
            </blockquote>
            <p>— Dra. Luiza Mei</p>
          </div>
          <div className="experience__content">
            <p className="eyebrow">Sua experiência importa</p>
            <h2>Um consultório preparado para receber você.</h2>
            <div className="experience__items">
              <article><ShieldCheck /><div><h3>Ambiente acolhedor</h3><p>Organização, limpeza e atenção aos detalhes para uma experiência tranquila.</p></div></article>
              <article><TrainFront /><div><h3>Localização prática</h3><p>No Horto, em uma região privilegiada e próxima ao metrô.</p></div></article>
              <article><Clock3 /><div><h3>Atendimento com calma</h3><p>Horários das 9h às 18h e consultas conduzidas sem pressa.</p></div></article>
            </div>
          </div>
        </section>

        <section className="testimonials section" aria-labelledby="depoimentos-title">
          <div className="section-number" aria-hidden="true">02</div>
          <p className="eyebrow">Depoimentos</p>
          <h2 id="depoimentos-title">Histórias de quem voltou a sorrir com confiança.</h2>
          <div className="testimonial-placeholder">
            <span className="testimonial-placeholder__mark" aria-hidden="true">“</span>
            <p>Em breve, você encontrará aqui relatos reais de pacientes atendidos pela Dra. Luiza.</p>
            <small>Depoimentos em preparação</small>
          </div>
        </section>

        <section className="location section" id="localizacao">
          <div className="location__content">
            <p className="eyebrow">Onde estamos</p>
            <h2>Seu cuidado, perto de você.</h2>
            <p className="large-copy">Consultório no Horto, em uma localização prática e próxima ao metrô.</p>
            <div className="location__details">
              <div><MapPin /><span><strong>Endereço</strong>Av. Silviano Brandão, 2235<br />Horto · Belo Horizonte</span></div>
              <div><Clock3 /><span><strong>Horário</strong>Atendimento das 9h às 18h</span></div>
            </div>
            <a
              className="button button--outline"
              href="https://www.google.com/maps/search/?api=1&query=Av.%20Silviano%20Brand%C3%A3o%2C%202235%2C%20Belo%20Horizonte"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no mapa <ArrowRight size={18} />
            </a>
          </div>
          <a
            className="location__map"
            href="https://www.google.com/maps/search/?api=1&query=Av.%20Silviano%20Brand%C3%A3o%2C%202235%2C%20Belo%20Horizonte"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir localização no Google Maps"
          >
            <div className="map-lines" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="map-pin"><MapPin size={26} /><span>Dra. Luiza Mei</span></div>
            <small>Horto · Belo Horizonte</small>
          </a>
        </section>

        <section className="final-cta">
          <div>
            <p className="eyebrow eyebrow--light">Vamos conversar?</p>
            <h2>Seu novo sorriso pode começar com uma conversa.</h2>
          </div>
          <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Agendar pelo WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <BrandMark />
          <p>CRO-MG 72314</p>
        </div>
        <div className="footer__links">
          <a href="#sobre">Sobre</a>
          <a href="#procedimentos">Procedimentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#localizacao">Localização</a>
        </div>
        <div className="footer__contact">
          <a href="https://www.instagram.com/draluizamei/" target="_blank" rel="noreferrer"><Camera size={18} /> @draluizamei</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> (31) 98910-6155</a>
        </div>
        <p className="footer__legal">© {new Date().getFullYear()} Dra. Luiza Mei. Todos os direitos reservados.</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar consulta pelo WhatsApp">
        <MessageCircle size={22} />
        <span>Agendar</span>
      </a>
    </>
  )
}

export default App
