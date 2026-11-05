---
title: 'Market-making simulator (Avellaneda-Stoikov)'
description: >-
  An event-driven simulator for inventory-aware market making, implementing the
  Avellaneda-Stoikov quoting model against a configurable synthetic order flow.
stack: ['Python', 'NumPy', 'Avellaneda-Stoikov', 'Poisson flow']
status: 'in progress'
github: 'https://github.com/noaRoblesLevy'
date: 2026-10-05
featured: true
---

## What it is

A simulator for studying inventory-aware market making. It implements the
Avellaneda-Stoikov model: a reservation price that drifts with inventory, and
an optimal spread set by risk aversion, order-arrival intensity, and the time
remaining in the trading horizon.

## Model sketch

The quoted bid and ask are placed symmetrically around a reservation price
that leans against current inventory, so a long position pulls quotes down to
encourage selling. Order arrivals are modelled as a Poisson process whose
intensity falls as quotes move away from the mid.

## Current state

- Reservation price and optimal half-spread from the closed-form approximation.
- Synthetic order flow with tunable intensity and mid-price volatility.
- Inventory, PnL, and fill-rate diagnostics per run.

## In progress

- Parameter sweeps over risk aversion to map the inventory-risk frontier.
- A limit-order-book-backed flow model to replace the Poisson approximation.

> Status: in progress. The single-asset case runs; multi-asset and the richer
> flow model are next.
