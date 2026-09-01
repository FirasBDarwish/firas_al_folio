---
title: "PPO Primer"
description: "This is a concise explanation of PPO."
date: 2026-08-21
tags: ["model-free rl", "online rl", "on-policy rl"]
type: "technical-note"
draft: true
featured: true
---

We want to be able to train an agent that collects data actively by interacting with the environment. The agent must learn a policy, which we will call $\pi(a | s)$, that defines a probability distribution over the actions available to the agent, given the agent is in a certain state, $s$. We want this policy to be optimal under the reward the agent is trained to maximize. As the agent learns, it will continue to interact with the environment and collect data (in the form of states, actions, and rewards); each policy update will impact the data collected. This can lead to instability and high variance in the performance of the learned policy (that is why we don't use REINFORCE). Proximal Policy Optimisation (PPO) is an essential algorithm for enabling agents to learn stably while interacting with the enviornment.

Classification:
On-policy because ...
Online because ...
Model-free because ...

The reason we go from REINFORCE to actor-critic models in the first place is because of high-variance monte carlo gradients. We can fix this by using a critic to estimate advantage and reduce variance in the learned policy.
The reason we go from actor-critic to PPO in particular is because policy updates can still be too large and destabilise trainign with regular actor-critic (PPO clips the update of the new policy from its old policy).

# Objective
The agent interacts with an environment according to a policy $\pi_{\theta}(a_t | s_t)$ where $s_t$ is the state, $a_t$ is the action, and $\theta$ are the policy parameters.
The environment produces a reward and next state, $ s_t \xrightarrow{a_t} r_t, s_{t+1} $.
The goal is to maximize the expected discounted return $J(\theta) = \mathbb{E}_{\tau \sim \pi_{\theta}} \left[ \sum_{t=0}^{T-1} \gamma^t r_t \right]$, where $\gamma \in [0,1]$ is the discount factor.

# 

# Actor-Critic Architectures
PPO is an actor-critic model. The agent is split into two models: the **actor**, which learns the policy $\pi(a | s)$ and the **critic** which evaluates actions by estimating the state value $V(s)$. Typically, both these components are expressed as neural networks that share the same backbone.

# Advantage Function
To evaluate whether 


citations:
https://medium.com/@siamak.yousefi.1984_58741/overview-of-reinforcement-learning-methods-for-enhancing-vla-robot-training-e33ef1f3d34e
