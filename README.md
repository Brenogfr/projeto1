# AulaIA

Projeto da AulaIA, feito com Next.js. A aplicação tem uma única página (`/`): a landing page do petshop fictício Patas & Cia, com contato pelo WhatsApp.

O nome, o WhatsApp, o telefone, o endereço e o horário são provisórios e ficam em constantes no topo de `app/page.tsx`.

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
npm install
```

```bash
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
| `npx tsc --noEmit` | Verifica os tipos |

## Estrutura

```text
projeto1/
├── app/
│   ├── favicon.ico
│   ├── globals.css     # Tailwind, cores e tema claro/escuro
│   ├── layout.tsx      # Layout raiz: idioma, metadados e fontes
│   └── page.tsx        # Landing page do petshop (/)
├── public/             # Arquivos estáticos
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
- Scripts `npm run type-check` e `npm run test`
