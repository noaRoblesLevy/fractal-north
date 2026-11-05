---
title: 'The Kelly fraction is a derivative, not a dial'
date: 2026-10-20
kind: 'study'
tags: ['kelly', 'position-sizing']
---

A quick study note to fix the intuition. For a simple bet with win probability
$p$, net odds $b$, and loss probability $q = 1 - p$, the growth-optimal fraction
of capital to stake is

$$
f^\star = \frac{bp - q}{b}.
$$

The thing worth internalising: $f^\star$ is where the derivative of expected
log-growth hits zero, not a risk preference you tune. Betting more than $f^\star$
does not just add variance, it lowers the long-run growth rate. Half-Kelly is a
common compromise because it gives up only a quarter of the growth while
roughly halving the volatility, which matters a lot when your estimate of $p$ is
itself uncertain.
