---
title: 'C++ limit order book (CME NQ, MBP-10)'
description: >-
  A low-latency limit order book reconstruction in modern C++, replaying
  CME NQ market-by-price data to ten levels and exposing a clean event API.
stack: ['C++20', 'CMake', 'CME MDP 3.0', 'MBP-10']
status: 'in progress'
github: 'https://github.com/noaRoblesLevy'
date: 2026-09-15
featured: true
---

## What it is

A from-scratch limit order book that ingests CME NQ futures data and
reconstructs the book to ten price levels (MBP-10). The goal is a correct,
allocation-free core that can replay a full session faster than real time and
hand downstream strategy code a tidy stream of book events.

## Current state

- Message decoding for the subset of MDP 3.0 templates needed for MBP-10.
- Price-level aggregation with an intrusive, cache-friendly level structure.
- Deterministic replay harness with snapshot and incremental refresh handling.

## In progress

- Nanosecond-accurate event timestamps threaded through to the strategy API.
- A microbenchmark suite comparing array-backed versus tree-backed level maps.
- Property tests that reconcile the reconstructed book against venue snapshots.

> Status: in progress. The core replays cleanly; the public API and benchmarks
> are still settling.
