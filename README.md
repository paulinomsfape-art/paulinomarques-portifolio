# Portfólio — Paulino Marques

Projeto de portfólio profissional feito em React + TypeScript + Vite, preparado para publicar no GitHub e na Vercel.

## 1. Como testar no computador

Você precisa ter Node.js instalado.

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal.

## 2. Como publicar no GitHub

1. Crie um repositório no GitHub, por exemplo: `paulino-portfolio`.
2. Envie todos os arquivos desta pasta para o repositório.
3. Faça o primeiro commit.

Se preferir pela linha de comando:

```bash
git init
git add .
git commit -m "Portfólio inicial"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## 3. Como publicar na Vercel

1. Entre em https://vercel.com.
2. Faça login.
3. Clique em "Add New Project".
4. Importe o repositório do GitHub.
5. A Vercel deve reconhecer Vite automaticamente.
6. Build command: `npm run build`
7. Output directory: `dist`
8. Clique em Deploy.

O arquivo `vercel.json` já inclui o redirecionamento necessário para as páginas internas do portfólio.

## 4. Onde editar os projetos

Abra:

`src/data/projects.ts`

Cada projeto está centralizado nesse arquivo.

Você pode alterar:
- título;
- descrição;
- tecnologias;
- status;
- funcionalidades;
- URL do vídeo;
- URL da demonstração.

Exemplo:

```ts
videoUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO',
demoUrl: 'https://demo.seusistema.com.br'
```

## 5. Como adicionar seus vídeos

Recomendação:
- Grave uma demonstração curta de cada sistema.
- Publique no YouTube como "Não listado".
- Copie a URL.
- Coloque a URL no campo `videoUrl` do projeto.

## 6. Como adicionar screenshots reais

Atualmente a página de cada projeto mostra espaços de galeria.
Você pode substituir por imagens reais.

Sugestão:
- Crie `public/projetos/NOME-DO-PROJETO/`.
- Coloque arquivos como `01.webp`, `02.webp`, `03.webp`.
- Depois adapte `ProjectDetail.tsx` para exibir essas imagens.

## 7. Currículo

O botão "Baixar currículo" procura este arquivo:

`public/curriculo-paulino-marques.pdf`

Basta colocar seu PDF com esse nome dentro da pasta `public`.

## 8. E-mail e redes sociais

Abra:

`src/components/Footer.tsx`

Substitua:
- `SEU_EMAIL_AQUI`;
- link do LinkedIn;
- link do GitHub.

## 9. Domínio próprio

Na Vercel:
- abra o projeto;
- vá em Settings > Domains;
- adicione seu domínio;
- siga as instruções de DNS.

Exemplos:
- `paulinomarques.com.br`
- `paulinomarques.dev.br`

## 10. Antes de publicar

Confira:
- e-mail;
- LinkedIn;
- GitHub;
- currículo;
- descrições;
- vídeos;
- screenshots;
- dados que não podem ser públicos.

Nunca use dados reais de alunos, servidores ou instituições nos vídeos e imagens do portfólio sem autorização adequada.
