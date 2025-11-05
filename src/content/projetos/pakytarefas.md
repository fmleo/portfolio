---
title: "Pakytarefas - Sistema de Distribuição Automática de Tarefas"
description: "Sistema automatizado para coleta e distribuição de tarefas de gincana via WhatsApp, auxiliando mais de 300 participantes"
image: "/images/projects/pakytarefas.jpg"
tags:
  [
    "Python",
    "PostgreSQL",
    "SQLAlchemy",
    "Web Scraping",
    "WhatsApp",
    "Design Patterns",
    "Systemd",
  ]
featured: true
publishDate: 2024-10-20
order: 2
---

## Visão Geral do Projeto

Pakytarefas coleta automaticamente tarefas de gincanas publicadas em sites oficiais e as distribui instantaneamente via WhatsApp. O sistema resolve problemas críticos de instabilidade de conexão durante competições, garantindo que a equipee receba as tarefas em tempo real.

Ao longo do ano, auxiliou mais de 300 membros de equipes, especialmente em momentos onde o site oficial estava inacessível ou sobrecarregado.

## Funcionalidades

- Web scraping automatizado de múltiplas organizadoras
- Envio instantâneo via WhatsApp com suporte para outros canais
- Monitoramento contínuo 24/7 via systemd timers
- Histórico completo de tarefas em PostgreSQL
- Sistema resiliente com rate limiting inteligente

## Design Patterns Implementados

- **Repository Pattern**: Abstração da camada de dados
- **Factory Pattern**: Criação dinâmica de scrapers
- **Strategy Pattern**: Interface para diferentes canais de envio
- Scrapers e senders com interfaces bem definidas para fácil extensão

## Tecnologias

- **Backend**: Python, PostgreSQL, SQLAlchemy, Alembic
- **Scraping**: BeautifulSoup
- **Integração**: Wuzapi (WhatsApp)
- **Infraestrutura**: Systemd Timers, Linux

## Desafios Técnicos

- **Refatoração completa** de Django/Celery para script Python otimizado, reduzindo complexidade e overhead
- **Resiliência**: retry logic, tratamento de diferentes formatos HTML, rate limiting para não sobrecarregar servidores
- **Systemd timers**: configuração precisa de execução periódica com logging estruturado
- **Arquitetura extensível**: adicionar novos scrapers ou canais de envio em minutos

## Impacto

- 300+ usuários ativos ao longo do ano
- Resolveu problemas críticos de conectividade em momentos de pico
- Sistema estável operando 24/7 sem intervenção manual
- Acesso equitativo a tarefas independente da localização

## Aprendizados

Aplicação prática de design patterns em Python, domínio de systemd, técnicas robustas de web scraping, e construção de sistemas resilientes com baixo consumo de recursos.
