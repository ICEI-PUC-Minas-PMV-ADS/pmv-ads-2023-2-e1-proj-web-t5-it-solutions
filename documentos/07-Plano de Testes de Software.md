# Plano de Testes de Software

Pré-requisitos: Especificação do Projeto, Projeto de Interface

Os requisitos para realização dos testes de software são:

Site publicado na internet;
Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir. 

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar funcionamento da página de Login</td>
  <td>
   <ul>
    <li>RF-001:	O sistema deve permitir o usuário acessar seu site com o login.</li>
   </ul>
  </td>
  <td>Verificar se a página de Login está encaminhando para a página Home da aplicação.</td>
  <td>
   <ol>
     <li>Visualizar a página de login.</li>
    <li>Inserir as credenciais de login.</li>
    <li>Clicar no botão de sign in</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a homepage após o login.</td>
  <td>Henrique</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Criação de um card no board</td>
  <td>
   <ul>
    <li>RF-004:	Colaborador: Criar uma ocorrência de possíveis problemas, onde vai informar título, categoria (problema com TI, físico), descrição, nível de urgência (se é impeditivo ou não para o trabalho do mesmo) e possibilitar anexo de arquivos.</li>
   </ul>
  </td>
  <td>Acessar o kanban. </td>
  <td>
   <ol>
     <li> Incluir uma task. </li>
    <li>Inserir as credenciais de login.</li>
    <li>Incluir uma descrição.</li>
    <li>Adicionar uma tag (Melhoria, Bug, Suporte ou Urgente).</li>
   </ol>
   </td>
  <td>Ao clicar em "Create" deve aparecer um modal para cadastrar a ocorrência e escolher a tag.</td>
  <td>Daniela</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Movimentação de um card no board e troca de status</td>
  <td>
   <ul>
    <li>RF-004:	Objetivo do Teste | Colaborador: Mover uma ocorrência criada para outra coluna (To Do, In Progress, In Review e Done e alterar o status (Melhoria, Bug, Suporte ou Urgente)</li>
   </ul>
  </td>
  <td>Acessar o kanban. </td>
  <td>
   <ol>
     <li>Editar uma tag (Melhoria, Bug, Suporte ou Urgente).</li>
    <li>Mover o card.</li>
   </ol>
   </td>
  <td>Ao clicar no card deve aparecer as opções para mudar o status da ocorrência e a possibilidade para mover o mesmo para outra coluna.</td>
  <td>Daniela</td>
 </tr>
</table>

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
