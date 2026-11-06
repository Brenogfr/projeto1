// Dados provisórios: substitua pelos dados reais do petshop.
const NOME = "Patas & Cia";
const WHATSAPP_URL = "https://wa.me/5500000000000";
const TELEFONE = "(00) 00000-0000";
const ENDERECO = "Rua Exemplo, 123, Sua Cidade";
const HORARIO = "Segunda a sábado, das 8h às 18h";
const ANO = 2026;

const SERVICOS = [
  {
    icone: "🛁",
    titulo: "Banho e tosa",
    descricao: "Higiene e cuidado para deixar seu pet limpo e confortável.",
  },
  {
    icone: "🩺",
    titulo: "Veterinário",
    descricao: "Consultas para acompanhar a saúde do seu pet.",
  },
  {
    icone: "💉",
    titulo: "Vacinação",
    descricao: "Orientação e aplicação de vacinas para manter tudo em dia.",
  },
  {
    icone: "🦴",
    titulo: "Rações e acessórios",
    descricao: "Alimentação, brinquedos e tudo o que seu pet precisa.",
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Atendimento com carinho",
    descricao: "Cada pet é tratado com calma e respeito.",
  },
  {
    titulo: "Agendamento fácil",
    descricao: "Marque seu horário direto pelo WhatsApp.",
  },
  {
    titulo: "Tudo em um só lugar",
    descricao: "Cuidados e produtos sem precisar ir a vários endereços.",
  },
];

const LINKS = [
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#contato", rotulo: "Contato" },
];

const BOTAO_PRIMARIO =
  "inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground transition-opacity hover:opacity-90";
const BOTAO_SECUNDARIO =
  "inline-flex items-center justify-center rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:bg-surface";
const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-background">
        <div className={`${CONTAINER} flex items-center justify-between gap-4 py-3`}>
          <a href="#inicio" className="text-lg font-bold text-brand">
            <span aria-hidden="true">🐾 </span>
            {NOME}
          </a>
          <nav aria-label="Principal" className="hidden gap-6 md:flex">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-muted hover:text-foreground">
                {link.rotulo}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section id="inicio" className="scroll-mt-20 bg-surface">
          <div className={`${CONTAINER} grid items-center gap-10 py-16 md:grid-cols-2 md:py-24`}>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Seu pet feliz, saudável e bem cuidado
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Banho e tosa, veterinário, vacinação e produtos em um só lugar. Agende um horário
                e venha conhecer o {NOME}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BOTAO_PRIMARIO}
                >
                  Agendar pelo WhatsApp
                </a>
                <a href="#servicos" className={BOTAO_SECUNDARIO}>
                  Ver serviços
                </a>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="grid grid-cols-2 gap-4 justify-self-center text-6xl sm:text-7xl"
            >
              {["🐶", "🐱", "🐰", "🐾"].map((emoji) => (
                <span
                  key={emoji}
                  className="flex size-28 items-center justify-center rounded-3xl border border-line bg-background sm:size-36"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20">
          <div className={`${CONTAINER} py-16`}>
            <h2 className="text-3xl font-bold tracking-tight">Nossos serviços</h2>
            <p className="mt-2 text-muted">O que o seu pet encontra por aqui.</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICOS.map((servico) => (
                <li key={servico.titulo} className="rounded-2xl border border-line p-6">
                  <span aria-hidden="true" className="text-4xl">
                    {servico.icone}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{servico.titulo}</h3>
                  <p className="mt-2 text-muted">{servico.descricao}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 bg-surface">
          <div className={`${CONTAINER} grid gap-10 py-16 md:grid-cols-2`}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Sobre o {NOME}</h2>
              <p className="mt-4 text-lg text-muted">
                Somos um petshop feito para quem trata o pet como parte da família. Nosso objetivo
                é oferecer um atendimento próximo e cuidar do seu companheiro em cada etapa da vida.
              </p>
            </div>
            <ul className="space-y-6">
              {DIFERENCIAIS.map((diferencial) => (
                <li key={diferencial.titulo}>
                  <h3 className="text-lg font-semibold">{diferencial.titulo}</h3>
                  <p className="mt-1 text-muted">{diferencial.descricao}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20">
          <div className={`${CONTAINER} py-16 text-center`}>
            <h2 className="text-3xl font-bold tracking-tight">Vamos cuidar do seu pet?</h2>
            <p className="mt-2 text-muted">Fale com a gente e agende um horário.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BOTAO_PRIMARIO} mt-8`}
            >
              Chamar no WhatsApp
            </a>
            <address className="mt-8 space-y-1 text-muted not-italic">
              <p>{TELEFONE}</p>
              <p>{ENDERECO}</p>
              <p>{HORARIO}</p>
            </address>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <p className={`${CONTAINER} py-6 text-center text-sm text-muted`}>
          © {ANO} {NOME}
        </p>
      </footer>
    </>
  );
}
