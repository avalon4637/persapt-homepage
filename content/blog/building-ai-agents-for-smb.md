---
title: "Designing AI Agents for Small Business Owners"
titleKo: "소상공인을 위한 AI 에이전트 설계하기"
description: "Enterprise AI is well-funded. Consumer AI is viral. But the real underserved market is small business — and it requires a completely different design philosophy."
descriptionKo: "엔터프라이즈 AI는 투자를 잘 받고, 소비자 AI는 바이럴합니다. 하지만 진정한 미개척 시장은 소상공인이며, 완전히 다른 설계 철학이 필요합니다."
date: "2026-03-28"
author: "Persapt Team"
authorRole: "Product"
authorRoleKo: "프로덕트"
tags: ["sajang.ai", "Product Design", "SMB"]
featured: false
---

## The Forgotten Middle

The AI industry has a blind spot. Billions flow into enterprise solutions (Salesforce Einstein, Microsoft Copilot) and consumer apps (ChatGPT, Perplexity). But small business owners — the restaurant owner, the local shop manager, the freelance contractor — are left with tools designed for someone else.

The problem isn't that AI can't help them. It's that **AI products aren't designed for how they work.**

## Three Design Principles for SMB AI

### 1. No Dashboards. No Logins.

A restaurant owner works 14-hour days. They don't have time to log into a dashboard, interpret charts, and make data-driven decisions.

Our approach with sajang.ai: **deliver insights through the messenger they already use.** Every morning, a KakaoTalk message. One glance, one approval tap, done.

### 2. Agent, Not Tool

Traditional SaaS says: "Here's a powerful tool. Learn to use it."

Our approach: "Here's an AI employee. Tell it what you care about, and it handles the rest."

The difference is profound. A tool requires the user to have a mental model of how it works. An agent requires only that the user knows what they want.

### 3. The $1/day Price Point

Unit economics matter differently at the SMB level. A $99/month SaaS is a non-starter for a small restaurant. But $1/day — the price of a cup of coffee — is psychologically accessible.

At ₩29,700/month (~$22), sajang.ai is priced at roughly ₩990/day. Our COGS per user is ~₩4,000/month, giving us an 86% unit margin. This is only possible because LLM inference costs have fallen dramatically.

## The Agent Architecture

sajang.ai runs on a multi-agent system:

- **Revenue Agent (세리)**: Monitors sales data, detects anomalies, suggests marketing actions
- **Review Agent (담당이)**: Watches customer reviews, generates contextual responses, defends ratings
- **Marketing Agent (바이럴)**: Creates SNS content, proposes promotions, drives customer acquisition
- **Supervisor (점장)**: Orchestrates all agents, prioritizes actions, reports to the owner

The owner interacts only with the Supervisor — one conversation thread, one source of truth.

## What We've Learned

Building for SMB has taught us that **simplicity is not a feature — it's the entire product.** Every screen, every interaction, every notification must pass one test: "Would a busy restaurant owner at 11 PM understand this in 3 seconds?"

If the answer is no, we cut it.

This ruthless simplicity is what makes SMB AI hard to build — and why so few companies attempt it. But for the 6.5 million small businesses in Korea alone, it's exactly what's needed.
