# Plano de Testes de Software

Pré-requisitos: Especificação do Projeto, Projeto de Interface

Os requisitos para realização dos testes de software são:

Site publicado na internet;
Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir. 



|Caso de Teste    | CT-01 - Criação de um card no board|
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Colaborador: Criar uma ocorrência de possíveis problemas, onde vai informar título, categoria (problema com TI, físico), descrição, nível de urgência (se é impeditivo ou não para o trabalho do mesmo) e possibilitar anexo de arquivos. |
| Passos | Acessar o kanban. Incluir uma task. Incluir uma descrição. Adicionar uma tag (Melhoria, Bug, Suporte ou Urgente). |
| Critérios de êxito | Ao clicar em "Create" deve aparecer um modal para cadastrar a ocorrência e escolher a tag. |
| Responsável pela elaborar do caso de Teste | Daniela Fernandez da Cruz |

|Caso de Teste    | CT-02 - Movimentação de um card no board e troca de status|
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Colaborador: Mover uma ocorrência criada para outra coluna (To Do, In Progress, In Review e Done e alterar o status (Melhoria, Bug, Suporte ou Urgente)
| Passos | Acessar o kanban. Editar uma tag (Melhoria, Bug, Suporte ou Urgente). Mover o card. |
| Critérios de êxito | Ao clicar no card deve aparecer as opções para mudar o status da ocorrência e a possibilidade para mover o mesmo para outra coluna. |
| Responsável pela elaborar do caso de Teste | Daniela Fernandez da Cruz |

|Caso de Teste    | CT-03 - Cadastrar novo usuário|
|:---|:---|
| Requisitos Associados | RF-02: O sistema deve permitir o usuário criar o seu cadastro na página |
| Objetivo do Teste | Verificar se o sistema cadastra usuários |
| Passos | Preencher os campos de informação |
| Critérios de êxito | Login e senha permitindo acesso à plataforma  |
| Responsável pela elaborar do caso de Teste | Henrique Pozza |

|Caso de Teste    | CT-04 - Verificar funcionamento da página de Login|
|:---|:---|
| Requisitos Associados | RF-001:	O sistema deve permitir o usuário acessar seu site com o login. |
| Objetivo do Teste | Visualizar a página de login. Inserir as credenciais de login. Clicar no botão de sign in e redirecionar para a página HOME. |
| Passos | Preencher os campos de informação |
| Critérios de êxito | O usuário deve ser redirecionado para a homepage após o login.  |
| Responsável pela elaborar do caso de Teste | Henrique Pozza |

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
