---
title: "LabFito - Sistema de Monitoramento e Alerta de Ferrugem Asiática"
description: "Plataforma integrada de IoT e web para monitoramento meteorológico e prevenção de ferrugem asiática da soja"
image: "/images/projects/labfito.jpg"
tags: ["Django", "IoT", "ESP32", "WhatsApp", "Leaflet", "Plotly", "Python"]
demo: "https://labfito.vacaria.ifrs.edu.br"
featured: true
publishDate: 2024-12-15
order: 2
---

## Visão Geral do Projeto

Sistema completo de monitoramento meteorológico desenvolvido pelo Laboratório de Fitossanidade do IFRS para prevenção e controle da ferrugem asiática da soja. O projeto integra estações meteorológicas de baixo custo com uma plataforma web que analisa dados ambientais e envia alertas automáticos via WhatsApp quando condições favorecem o desenvolvimento da doença.

Participei do projeto em duas fases distintas: inicialmente desenvolvendo a estação meteorológica e sistema de coleta (2021-2022), e posteriormente refatorando e expandindo a plataforma web (2024).

## Hardware - Estação Meteorológica

### Componentes

- **ESP32** como microcontrolador principal
- **DHT22** para temperatura e umidade do ar
- **Sensor de molhamento foliar** para detecção de orvalho
- **Sensor UV** para intensidade de radiação solar
- **Alimentação híbrida**: bateria com backup de energia direta

### Desafios de Campo

**Proteção contra pássaros**: Principal desafio enfrentado foi interferência de aves pousando na estação e danificando sensores. Solução implementada: instalação de palitos verticais no topo da estrutura, impedindo pouso sem afetar medições.

**Calibração e precisão**: Montagem e calibração criteriosa de cada sensor para garantir dados confiáveis em ambiente rural.

**Resistência climática**: Desenvolvimento de case resistente à chuva, vento e variações térmicas, facilitando replicação em outras localidades.

## Plataforma Web

### Funcionalidades Principais

**Mapa de Estações Interativo**

- Visualização geográfica de 3 estações ativas usando Leaflet
- Indicadores em tempo real do status de cada estação
- Dados meteorológicos atualizados por localização

**Visualização de Dados**

- Gráficos interativos com Plotly para análise temporal
- Séries históricas de temperatura, umidade, molhamento foliar e UV
- Comparação entre múltiplas estações
- Export de dados para análise externa

**Sistema de Alertas Inteligente**

- Integração com modelos matemáticos para análise de risco
- Avaliação contínua de condições ambientais favoráveis à ferrugem
- Notificações automáticas via WhatsApp
- Alertas personalizados por região/produtor

**Gestão de Dados**

- Armazenamento histórico completo em PostgreSQL
- Backups automatizados para garantir integridade
- Logs detalhados para monitoramento e debugging
- API REST para integração com outros sistemas

### Interface Refinada

- Refatoração da interface durante fase 2024
- Melhor usabilidade para produtores rurais
- Design responsivo para acesso mobile no campo

## Tecnologias Utilizadas

### Hardware/IoT

- **ESP32** (microcontrolador)
- **Arduino IDE** para programação
- Sensores: DHT22, molhamento foliar, UV
- Protocolos: HTTP

### Backend

- **Django**
- **Python** para modelos matemáticos
- **PostgreSQL** para armazenamento
- **Wuzapi** para integração WhatsApp

### Frontend

- Django Templates
- **Leaflet** para mapas interativos
- **Plotly** para gráficos científicos
- JavaScript para interatividade

## Evolução do Projeto

### Fase 1 (2021-2022)

- Pesquisa e seleção de sensores
- Montagem e calibração da estação meteorológica
- Desenvolvimento do sistema de coleta de dados

### Fase 2 (2024)

- Implementação de modelos matemáticos de previsão
- Sistema de alertas via WhatsApp
- Refatoração da interface web
- Melhorias em resistência e replicabilidade do hardware
- Testes em campo com produtores

## Desafios Técnicos

**Integração Hardware-Software**: Garantir comunicação confiável entre estações remotas e servidor, lidando com conectividade instável em áreas rurais.

**Precisão de Medições**: Calibração de sensores para dados meteorológicos confiáveis, essenciais para modelos matemáticos.

**Sistema de Alertas**: Implementação de lógica complexa baseada em múltiplas variáveis ambientais, evitando falsos positivos/negativos.

**Operação Contínua**: Garantir funcionamento 24/7 em condições adversas sem intervenção constante.

**UX para o Campo**: Interface simples e direta para produtores com diferentes níveis de familiaridade tecnológica.

## Impacto

- **3 estações** operacionais em diferentes regiões
- Coleta contínua de dados meteorológicos para pesquisa
- Alertas preventivos auxiliando tomada de decisão
- Solução de baixo custo comparada a estações comerciais
- Contribuição para pesquisa agrícola regional
- Base para expansão futura com mais estações

## Aprendizados

Este projeto foi único por combinar múltiplas áreas:

- **IoT e Hardware**: Trabalho prático com sensores, microcontroladores e desafios de campo
- **Integração de Sistemas**: Comunicação confiável entre hardware e software
- **Modelos Matemáticos**: Integração de algoritmos científicos em aplicações práticas
- **Impacto Real**: Desenvolvimento de solução para problema concreto do agronegócio
- **Iteração e Melhoria**: Experiência de retornar a um projeto e aprimorá-lo significativamente
