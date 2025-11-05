---
title: "Sistema de Gestão para Empresas de Engenharia"
description: "ERP completo para gerenciamento de obras, clientes, processos e finanças desenvolvido para pequenas empresas de engenharia civil"
image: "/images/projects/erp-engenharia.jpg"
tags:
  [
    "React",
    "Django",
    "Django REST Framework",
    "TanStack Router",
    "TanStack Query",
    "Tailwind CSS",
    "ShadCN",
    "PostgreSQL",
  ]
github: ""
demo: ""
featured: true
publishDate: 2025-01-15
order: 1
---

## Visão Geral do Projeto

Sistema ERP customizado para pequenas empresas de engenharia civil, integrando gestão de clientes, obras, processos e finanças em uma plataforma única. Desenvolvido especificamente para atender necessidades de empresas com menos de 10 funcionários, onde ERPs genéricos seriam financeiramente inviáveis ou excessivamente complexos.

O projeto surgiu da necessidade de digitalizar e centralizar operações que antes eram gerenciadas através de planilhas e documentos dispersos, trazendo profissionalização e controle para o negócio.

## Módulos Implementados

### 1. Gestão de Clientes e Obras

- Cadastro completo de clientes (CPF/CNPJ, contatos, endereço)
- Registro de obras vinculadas a clientes
- Upload e gestão de documentos (contratos, projetos, matrículas)
- Sistema de busca e filtros avançados

### 2. Pipeline de Processos (Kanban)

- Visualização estilo Kanban do fluxo de trabalho
- 8 etapas configuradas: Contrato → Reunião → Desenvolvimento → Aprovação Prefeitura → Orçamento Caixa → Execução → Vistoria → Registro Cartório
- Drag-and-drop para atualização de status
- Histórico completo com timestamps de cada etapa

### 3. Gestão Financeira

- **Contas a Receber**: controle de entradas, parcelas e saldo devedor por obra
- **Contas a Pagar**: lançamento de despesas gerais e específicas por obra
- **Pagamentos Recorrentes**: sistema automatizado para despesas fixas
- **Cálculo de Comissões**: automático com regras configuráveis
- **Relatórios**: fluxo de caixa, inadimplência, custos por obra

### 4. Colaboradores e Terceiros

- Cadastro de prestadores de serviço
- Gestão de contratos e pagamentos
- Vinculação de custos a obras específicas

### 5. Sistema de Permissões

- 3 níveis: Administrador, Financeiro, Projetos/Execução
- Controle granular de acesso por módulo
- Interface adaptativa baseada em permissões

### 6. Funcionalidades Extras

- Importação de dados históricos via CSV/XLSX
- Agenda compartilhada com eventos vinculados a obras
- Sistema de notificações para prazos e vencimentos

## Tecnologias Utilizadas

### Frontend

- **React** com **TanStack Router** para navegação type-safe e moderna
- **TanStack Query** para gerenciamento de estado assíncrono e cache inteligente
- **ShadCN UI** e **Tailwind CSS** para interface profissional e responsiva
- Type safety completo com TypeScript

### Backend

- **Django** com **Django REST Framework** para API robusta
- **PostgreSQL** como banco de dados
- Sistema de autenticação e autorização customizado
- Serializers complexos para relacionamentos aninhados

### Infraestrutura

- Deploy otimizado para ambientes Linux
- Gestão de arquivos com storage configurável
- Backup automatizado de dados críticos

## Desafios Técnicos

### Sistema de Permissões Complexo

Implementação de controle de acesso granular com três níveis de permissão, exigindo:

- Middleware customizado no Django para validação
- Guards no frontend baseados em roles
- Testes de integração extensivos para garantir segurança

### Pagamentos Recorrentes

Sistema automatizado para despesas fixas mensais com:

- Cron jobs para geração automática de lançamentos
- Lógica de prorrogação e cancelamento
- Histórico de pagamentos e previsões

### TanStack Query

Primeira experiência profunda com a biblioteca, resultando em:

- Cache inteligente reduzindo chamadas à API
- Otimistic updates para melhor UX
- Invalidação automática de queries relacionadas
- Background refetch para dados sempre atualizados

### Testes de Integração

- Suite completa de testes para endpoints críticos
- Testes de permissões garantindo segurança
- Validação de fluxos financeiros complexos

## Impacto

- **Centralização** de todos os processos em plataforma única
- **Eliminação** de planilhas dispersas e processos manuais
- **Visibilidade** em tempo real do status de todas as obras
- **Controle financeiro** preciso com relatórios automatizados
- **Redução de erros** em cálculos de comissões e pagamentos
- **Profissionalização** da gestão com ferramenta dedicada

## Aprendizados

Este projeto consolidou conhecimentos avançados em:

- **TanStack Ecosystem**: Router e Query em projeto real de grande escala
- **Django REST Framework**: APIs complexas com relacionamentos aninhados
- **Arquitetura de Permissões**: Design e implementação de sistemas seguros
- **Gestão de Estado**: Cache strategies e otimizações de performance
- **Testes**: Importância de testes de integração para features críticas
- **Domain Knowledge**: Compreensão profunda do fluxo de trabalho em engenharia civil
