# Especificação do Projeto

## Perfis de Usuários



<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Colaborador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Colaborador ativo do setor administrativo</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Acesso fácil e rápido com interface intuitiva para realização de abertura de chamados internos.

2. Conseguir se comunicar com o agente resolutivo direto na ferramenta.

3. Possibilidade de acompanhamento de sua solicitação fim a fim.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
  <tr aling=center>
    <th colspan="2">Perfil Atendente </th>
  </tr>
  <tr>
    <td width="150px"><b>Descrição</b></td>
    <td width="600px">Suporte técnico de TI</td>
  </tr>
  <tr>
  <td><b>Necessidades<b></td>
  <td>
1. Acesso fácil e rápido aos chamados com atribuições especificas
    
2. Conseguir se comunicar com o solicitante direto na ferramenta para entender o real problema

3. Possibilidade de realizar um gerenciamento dos chamados, identificando oportunidades de problemas resolvidos sem causa raiz
</td>
  </tr>
  </tr>
</tbody>  
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Colaborador de uma empresa | Como um usuário que não gosta de perder tempo quero uma ferramenta de abertura de chamados simples que forneça recursos de problemas recorrentes antes de abrir o chamado. | Aumentar a agilidade da abertura do chamado, consequentemente agilizando o atendimento. |
| Colaborador de uma empresa | Uma ferramenta de abertura de chamados simples e intuitiva que me permita descrever o problema de forma clara e anexar documentos e imagens para melhor compreensão do problema. | Aumentar minha eficiência no trabalho e garantir que a equipe de suporte técnico possa resolver problemas de maneira eficaz, melhorando a produtividade de toda a empresa. |
| Colaborador de uma empresa | Solicitar uma segunda tela para minha estação de trabalho | Para aumentar minha produtividade abrindo documentos em uma e preenchendo formulários com os dados em outra |
| Membro do suporte técnico | Poder visualizar e entender os problemas reais dos colaboradores | Obter atendimentos ágeis e eficientes |
| Colaborador de uma empresa | Solicitar permissões de acesso | Ter acesso à arquivos e informações dos clientes da empresa |
| Membro do suporte técnico | Gerenciar solicitações entre a equipe | Trabalhar em conjunto evitando que solicitações fiquem sem atendimento |
| Colaborador de uma empresa | Aumento da caixa de entrada do e-mail do setor e criação de regras na distribuição | Suportar demanda do setor e entregar e-mails para seus respectivos responsáveis |

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | O sistema deve permitir o registro de usuários com diferentes níveis de permissão (colaborador, suporte), assim como recuperação/alteração de senha e edição de permissionamento | Alta | 
| RF-02 | Colaborador: Criar/Ler/Alterar uma ocorrência de possíveis, onde vai informar título, categoria (problema com TI, físico), data e hora, descrição, nível de urgência (se é impeditivo ou não para o trabalho do mesmo) e possibilitar anexo de arquivos ou fotos. | Alta |
| RF-03 | Atendente: Alterar status do chamado (aberto, pendente, em análise, resolvido) | Alta |
| RF-04 | O sistema deve categorizar em colunas as ocorrências | Alta |
| RF-05 | Atendente: Acessar o histórico de ocorrências | Alta |
| RF-06 | Colaborador: Acessar o histórico pessoal de ocorrências | Baixa |
| RF-07 | O sistema deve enviar notificações de atualizações de status das suas ocorrências | Média |
| RF-08 | Deve ser possível filtrar ocorrências usando diferentes critérios (data, status, prioridade, categoria...) | Baixa |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | Os Dados Deverão ser armazenados no banco de dados (SQL) | Baixa | 
| RNF-02 | O sistema deve estar disponível em 99% do tempo, garantindo acesso constante | Alta | 
| RNF-03 | Interface deve ser intuitiva, enxuta e amigável para melhor acessibilidade e responsiva para se adaptar a diferentes dispositivos e navegadores | Alta |
| RNF-04 | O sistema deve ser capaz de suportar um grande volume de ocorrências simultâneas | Média |
| RNF-05 | O back-end será desenvolvido em C# | Alta |
| RNF-06 | O front-end será desenvolvido em HTML, CSS e Javascript | Alta |

**Prioridade: Alta / Média / Baixa. 

