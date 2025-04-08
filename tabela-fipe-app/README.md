# Projeto | Tabela Fipe App

Aplicação feita para exibir preços de compra de carros baseado na Marca, Modelo e Ano selecionados. A consulta é feita via [REST API Fipe](https://deividfortuna.github.io/fipe/). Aplicação foi criada a partir do CLI [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Acesso online

A aplicação online está disponível no link [mobiauto-tabelafipe.vercel.app/](https://mobiauto-tabelafipe.vercel.app/)

## Metas alcançadas

### Gerais

- Importação/configuração da font Roboto via Next;
- Estilos customizados isolados em arquivos CSS `styles.ts`;
- Configuração do estado global para guardar Marca, Modelo e Ano selecionados;
- Componentização das páginas em partes menores;
- Isolamento dos componentes do servidor e do cliente;
- Isolamento das requisições para o servidor em `utils/api.ts`;
- Isolamento dos tipos do TypeScript em `utils/types.ts`

---

### Tela principal (rota `/`)

Local: `src/app/page.tsx`

- A funcionalidade dos demais _selects_ só é habilitada depois da seleção de dados;
- A seleção do _select_ de **Marca** habilita o _select_ de **Modelo**
- A seleção do _select_ de **Modelo** mostra e habilita o `<select>` de **Ano**;
- A seleção do _select_ de **Ano** habilita o botão de envio (Consultar Preço);
- A seleção de um campo reseta a seleção dos demais;
- Os _selects_ utilizam dados um do outro para a validação de exibição/habilitação de funcionalidade. Utilizando o estado global foi utilizar os dados globais quando necessário e ao mesmo tempo isolar cada _select_ em um componente separado;
- A página (`page.tsx`) é um componente de servidor e importa os componentes do cliente que estão isolados no componente `PriceSearchFields`, já exibindo algum conteúdo pro usuário o mais breve possível;
- A obtenção das marcas é feita via `fetch` do lado do servidor, isso evita o carregamento do lado do cliente e faz o primeiro _select_ (lista de Marcas) já vir carregado com os dados de primeira, melhorando a experiência do usuário;
- O botão do componente `GetPriceButton` transforma os dados globais (de Marca, Modelo e Ano) em parâmetros de URL (searchParams) e redireciona para a tela de resultado.

---

### Tela resultado (rota `/resultado?[searchParams]`)

Local: `src/app/resultado/page.tsx`

- Tela totalmente renderizada no servidor, já vem com os dados carregados e não precisa de requisições adicionais pra API do lado do cliente, melhorando a performance;
- Verificação dos parâmetros da URL (searchParams), se estiver faltando a Marca, o Modelo ou o Ano, redireciona para a tela principal;
- Com os parâmetros da URL corretos faz a requisição via fetch no servidor e exibe o Preço junto com os outros dados do veículo (Marca, Modelo, Ano).

---

## Convite para outros projetos

Deixo o convite para outros projetos:

- Meu site de Portfólio: [cafecomlucas.dev](https://cafecomlucas.dev)
- Instagram pra cachorros: [github.com/cafecomlucas/origamidDogsReactWeb](https://github.com/cafecomlucas/origamidDogsReactWeb)
- Mais repositórios: [github.com/cafecomlucas](https://github.com/cafecomlucas)
