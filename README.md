# Patas & Cia

Landing page de um petshop fictício, criada como projeto de estudo da AulaIA. É um site institucional de uma única página (`/`), feito com Next.js, para apresentar os serviços e levar o visitante a agendar pelo WhatsApp.

O projeto não tem backend, banco de dados nem autenticação. Todo o conteúdo fica no próprio código.

## O que tem na página

- **Cabeçalho:** fica fixo no topo, com navegação pelas seções e botão do WhatsApp.
- **Início:** chamada principal, com botões para agendar e para ver os serviços.
- **Serviços:** banho e tosa, veterinário, vacinação, e rações e acessórios.
- **Sobre:** apresentação do petshop e seus diferenciais.
- **Contato:** botão do WhatsApp, telefone, endereço e horário de funcionamento.

O layout é responsivo, e as cores acompanham o tema claro ou escuro do sistema.

> O nome, o WhatsApp, o telefone, o endereço e o horário são provisórios. Para trocá-los, edite as constantes no topo de `app/page.tsx`.

## Tecnologias

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.4.5 | Framework (App Router, Turbopack) |
| React | 19.3.0 | Interface |
| TypeScript | 5 | Tipagem (modo `strict`) |
| Tailwind CSS | 4 | Estilos, via `@tailwindcss/turbopack` |
| ESLint | 9 | Lint, com `eslint-config-next` |

## Como começar

Pré-requisito: Node.js 20.9 ou superior.

```bash
git clone https://github.com/Brenogfr/projeto1.git
cd projeto1
npm install
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000). Na primeira execução, o Next.js baixa as fontes do Google, então é preciso estar conectado à internet.

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 3000 |
| `npm run build` | Gera o build de produção |
| `npm run start` | Serve o build de produção (rode `npm run build` antes) |
| `npm run lint` | Roda o ESLint |
| `npm run type-check` | Verifica os tipos com o TypeScript |

## Estrutura

```text
projeto1/
├── .claude/            # Regras e skills do Claude Code
├── app/
│   ├── favicon.ico
│   ├── globals.css     # Tailwind, cores e tema claro/escuro
│   ├── layout.tsx      # Layout raiz: idioma, metadados e fontes
│   └── page.tsx        # Landing page do petshop (/)
├── public/             # SVGs do modelo do Next.js, não usados pela página
├── AGENTS.md           # Regras para agentes de IA (gerado pelo `next dev`)
├── CLAUDE.md           # Convenções do projeto para o Claude Code
├── eslint.config.mjs
├── next.config.ts
└── tsconfig.json
```

O alias `@/*` aponta para a raiz do projeto, por exemplo `import x from "@/app/page"`.

## Configuração

O arquivo `next.config.ts` define:

- **`cacheComponents`:** ativa o Cache Components.
- **`partialPrefetching`:** ativa o Partial Prefetching.
- **`turbopack.rules`:** processa os arquivos `.css` com o Tailwind pelo loader `@tailwindcss/turbopack`. Por isso, o projeto não tem configuração de PostCSS.

O tema fica em `app/globals.css`, com as cores do site e a troca automática para o modo escuro conforme a preferência do sistema.

O projeto ainda não usa variáveis de ambiente.

> Esta versão do Next.js pode ter diferenças em relação a versões anteriores. Em caso de dúvida, consulte a documentação instalada em `node_modules/next/dist/docs/`.

## Próximos passos

O [`CLAUDE.md`](./CLAUDE.md) define convenções para o crescimento do projeto, mas estes itens **ainda não foram implementados**:

- Componentes com shadcn/ui, em `components/ui/`, e componentes de feature em `components/`
- Formulários com React Hook Form e validação com Zod
- Mutações via Server Actions em `actions/`
- Helpers e clients em `lib/`, e tipos e schemas compartilhados em `types/`
- Modelo de variáveis de ambiente em `.env.example`
- Script `npm run test`
