---
title: "Sistema de Gestão para Clínicas de Fisioterapia"
description: "Sistema completo para gerenciamento de clínicas de fisioterapia com notificações via WhatsApp, controle financeiro e gestão de atendimentos"
tags: ["React", "Go", "PocketBase", "WhatsApp", "Tailwind CSS", "ShadCN"]
featured: true
publishDate: 2024-08-15
order: 1
---

## Visão Geral do Projeto

Sistema desenvolvido para modernizar a gestão de clínicas de fisioterapia, automatizando processos de agendamento, comunicação com pacientes e controle financeiro. Atualmente em produção, gerenciando mais de 100 pacientes ativos.

O projeto surgiu da necessidade de uma cliente de centralizar informações de pacientes, profissionais e atendimentos, além de automatizar a comunicação via WhatsApp para confirmações e lembretes de consultas.

## Funcionalidades Principais

- **Gestão Completa**: Cadastro e controle de profissionais, pacientes, procedimentos e atendimentos
- **Notificações Automatizadas**: Sistema integrado de notificações, confirmações e cancelamentos via WhatsApp utilizando a biblioteca Whatsmeow
- **Controle Financeiro**: Módulo de fechamento financeiro com controle detalhado de atendimentos e receitas
- **Dashboard Administrativo**: Interface intuitiva para visualização de métricas e gestão operacional
- **Lembretes Inteligentes**: Notificação de aniversários de pacientes para manter relacionamento próximo
- **Gestão de Agendamentos**: Sistema completo de agendamento com visualização em calendário

## Tecnologias Utilizadas

### Frontend

- **React** com React Router 7 para navegação
- **ShadCN UI** e **Tailwind CSS** para interface moderna e responsiva
- Hooks customizados para gerenciamento de estado complexo
- Context API para compartilhamento de dados entre componentes

### Backend

- **Go (Golang)** para performance e eficiência
- **PocketBase** como framework backend-as-a-service
- **Whatsmeow** para integração com WhatsApp Web
- API RESTful para comunicação frontend-backend

### Infraestrutura

- Sistema otimizado para deploy em ambientes Linux
- Configuração automatizada com NGINX

## Desafios Técnicos

Este foi meu primeiro projeto complexo com React, o que envolveu uma curva de aprendizado significativa:

- **Arquitetura Frontend**: Aprendizado profundo sobre hooks customizados, Context API e padrões de composição de componentes
- **Integração WhatsApp**: Implementação robusta da biblioteca Whatsmeow para garantir entrega confiável de mensagens
- **Gestão de Estado**: Desenvolvimento de soluções eficientes para sincronização de dados entre frontend e backend
- **UX/UI**: Criação de uma interface intuitiva que atende usuários com diferentes níveis de familiaridade tecnológica

## Impacto

- Sistema em **produção ativa** gerenciando 1 clínica
- Mais de **100 pacientes cadastrados**
- Automação de comunicações reduzindo faltas em consultas
- Centralização de informações melhorando eficiência operacional
- Interface moderna aumentando satisfação dos usuários

## Aprendizados

Este projeto foi fundamental para consolidar conhecimentos em:

- Desenvolvimento frontend moderno com React
- Padrões de arquitetura e organização de código
- Integração de sistemas externos (WhatsApp)
- Compreensão de necessidades reais de negócio
- Deploy e manutenção de sistemas em produção
