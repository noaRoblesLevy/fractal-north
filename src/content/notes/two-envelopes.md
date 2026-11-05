---
title: 'The two-envelopes puzzle, stated carefully'
date: 2026-10-12
kind: 'puzzle'
tags: ['probability', 'paradox']
---

One envelope holds twice the other. You pick one, see nothing, and are offered
a swap. The naive argument says the other envelope holds $\tfrac{1}{2}(2x) +
\tfrac{1}{2}(\tfrac{x}{2}) = 1.25x$ in expectation, so you should always swap,
which is absurd.

The error is treating $x$, the amount in your envelope, as fixed while letting
the "other" envelope be $2x$ or $x/2$ with equal probability. Those two branches
condition on different states of the world with different totals, so adding
their payoffs as if $x$ were a constant is the sleight of hand. Once you commit
to a prior over the smaller amount, the paradox dissolves: with a proper prior,
the expected gain from swapping is exactly zero.

The lesson I keep: a symbol reused across mutually exclusive branches is almost
always where a probability paradox is hiding.
