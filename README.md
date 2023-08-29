# Nome do Projeto: Gerenciador de Tarefas

## Descrição: 

Um aplicativo web que permite aos usuários criar, editar, organizar e visualizar suas tarefas diárias. Os usuários podem se cadastrar, fazer login e ter acesso a uma lista personalizada de tarefas. Além disso, as tarefas podem ser marcadas como concluídas e também é possível definir datas de prazo para cada tarefa.

## Funcionalidades:

### Página de Cadastro e Login:

Os usuários podem se cadastrar usando um nome de usuário e senha.
Os usuários podem fazer login usando suas credenciais.

### Página de Lista de Tarefas:

Os usuários autenticados podem visualizar uma lista de suas tarefas.
As tarefas são exibidas em uma tabela, mostrando o título, descrição, data de criação e status (concluída ou não).

### Adicionar e Editar Tarefas:

Os usuários podem adicionar novas tarefas, fornecendo um título e uma descrição.
Os usuários podem definir uma data de prazo para a tarefa.
Os usuários podem editar as tarefas existentes, incluindo título, descrição e data de prazo.

### Marcar Tarefas como Concluídas:

Os usuários podem marcar tarefas como concluídas, alterando o status da tarefa na lista.

### Excluir Tarefas:

Os usuários podem excluir tarefas da lista.

### Conexão com Banco de Dados MySQL:

Use PHP para criar APIs para interagir com o Banco de Dados MySQL.
Armazene as informações de usuário (nome de usuário e senha criptografada) em uma tabela de usuários.
Armazene as informações das tarefas (título, descrição, data de criação, data de prazo e status) em uma tabela de tarefas.
As APIs devem permitir o cadastro, login, consulta, criação, edição e exclusão de tarefas.

## Tecnologias Utilizadas:

HTML5, CSS3 e JavaScript para a parte frontend.
PHP para criar APIs e conectar-se ao Banco de Dados MySQL.
Banco de Dados MySQL para armazenar as informações de usuários e tarefas.

## Benefícios do Projeto:

Permite aos usuários manterem um registro organizado de suas tarefas diárias.
Ajuda os usuários a manterem o controle das tarefas pendentes e concluídas.
Oferece uma experiência de usuário amigável e responsiva.
Introduz o conceito de interação com Banco de Dados em um projeto real.

## Desafios Potenciais:

Implementar a autenticação de usuário de forma segura.
Criar APIs PHP seguras e eficientes para interagir com o Banco de Dados.
Garantir a validação adequada dos dados de entrada do usuário.
Lidar com as datas de prazo das tarefas de maneira eficaz.
