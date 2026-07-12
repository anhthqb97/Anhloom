# Spec — Anhloom Website Requirements (2026)

> **SDD Step 1: Specify** — What & why. No implementation detail.
> Guardrails: [constitution.md](./constitution.md) · Plan: [plan.md](./plan.md) · Tasks: [tasks/](../../tasks/)

---

## Company Identity

| Field | Value |
|-------|-------|
| **Company name** | **Anhloom** |
| **Tagline** | *Grow your product with us* |
| **Domain** | `anhloom.com` *(target)* |
| **Founder** | Anh |
| **Positioning** | Premium IT studio — AI Engineering, Custom Software, Cloud, MVP |
| **Tone** | Confident, technical, approachable, growth-oriented |

**Brand story:** *Anhloom* blends the founder's name with *bloom* — helping startups and teams grow ideas into scalable digital products.

---

## Project Overview

Build the official **Anhloom** website — a modern, premium, high-converting IT company site focused on AI Engineering, Custom Software Development, Cloud Solutions, and Startup MVP development.

The website should serve as:

- Company profile
- Sales landing platform
- Portfolio showcase
- Lead generation platform
- Recruitment portal
- Technical blog
- Brand identity

---

# Objectives

- Present company services professionally
- Build trust with potential clients
- Showcase completed projects and case studies
- Generate qualified leads
- Increase SEO visibility
- Provide an exceptional user experience
- Demonstrate technical expertise
- Promote AI-driven solutions

---

# Design Principles

## UI Style

- Modern
- Minimal
- Elegant
- Professional
- Premium
- Interactive
- Clean
- High readability

Inspired by:

- OpenAI
- Vercel
- Stripe
- Linear
- Raycast
- Notion

---

# UX Principles

- Mobile-first
- Fast navigation
- Clear information hierarchy
- Accessibility compliant
- SEO friendly
- Responsive on all devices
- Smooth animations
- Micro interactions
- Low cognitive load

---

# Color Palette

Primary

- Indigo

Secondary

- Cyan

Accent

- Purple

Background

- White

Dark Mode

- Near Black

Neutral

- Gray Scale

---

# Typography

Headings

- Large
- Bold
- Spacious

Body

- Easy to read
- Comfortable line height

Recommended Fonts

- Geist
- Inter
- IBM Plex Sans

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js (optional)

## Backend

- FastAPI
- Laravel API

## CMS

- Sanity
- Strapi

## Database

- PostgreSQL

## Infrastructure

- AWS
- Docker (Frontend + Backend + Compose)
- Terraform
- GitHub Actions

---

# Website Sitemap

```
/
├── Home
├── About
├── Services
│   ├── AI Engineering
│   ├── Custom Software
│   ├── Web Development
│   ├── Mobile Development
│   ├── Cloud & DevOps
│   └── Dedicated Team
│
├── Solutions
│   ├── AI Chatbot
│   ├── AI Agent
│   ├── CRM
│   ├── ERP
│   ├── SaaS
│   ├── Marketplace
│   └── E-commerce
│
├── Portfolio
├── Case Studies
├── Technologies
├── Pricing
├── Blog
├── Careers
├── Contact
└── Privacy Policy
```

---

# Homepage

## Hero Section

Content

- Powerful headline
- Short description
- Primary CTA
- Secondary CTA

Visual

- Animated gradient background
- Floating cards
- Product dashboard mockup
- AI visualization

Buttons

- Book a Meeting
- View Portfolio

---

## Company Statistics

Display animated metrics

- Projects Delivered
- Years of Experience
- Engineers
- Client Satisfaction
- Countries Served

---

## Trusted By

Logo carousel

Examples

- AWS
- Microsoft
- Google Cloud
- OpenAI
- GitHub
- Stripe

---

## Services

Cards with hover animations

Each card contains

- Icon
- Title
- Description
- Learn More

Services

- AI Engineering
- Web Development
- Mobile Development
- Cloud Solutions
- DevOps
- UI/UX Design

---

## Solutions

Business solutions

Examples

- AI Customer Support
- Internal AI Assistant
- CRM
- ERP
- HR Platform
- Marketplace
- SaaS Platform

---

## Development Process

Timeline

1. Discovery
2. Research
3. Planning
4. UI/UX Design
5. Development
6. QA Testing
7. Deployment
8. Maintenance

---

## Featured Projects

Project card includes

- Cover Image
- Category
- Technologies
- Summary
- Business Results
- View Details

Filtering

- AI
- SaaS
- FinTech
- Healthcare
- Education
- Logistics

---

## Technology Stack

Display categorized technologies

Frontend

- React
- Next.js
- Vue

Backend

- Python
- FastAPI
- Laravel
- Node.js

Cloud

- AWS
- Docker
- Kubernetes
- Terraform

Database

- PostgreSQL
- MySQL
- Redis
- MongoDB

AI

- OpenAI
- Claude
- Gemini
- LangChain
- LangGraph

---

## Testimonials

Features

- Client photo
- Company
- Rating
- Review
- Video testimonial (optional)

---

## Call To Action

Headline

Let's Build Your Next Digital Product

Buttons

- Schedule Consultation
- Contact Sales

---

# About Page

Sections

- Company Story
- Vision
- Mission
- Core Values
- Leadership
- Team
- Company Timeline
- Certifications
- Awards

---

# Services Page

Each service includes

- Overview
- Benefits
- Features
- Technologies
- Workflow
- Pricing
- FAQ
- CTA

---

# Solutions Page

Each solution includes

- Business Problems
- Proposed Solution
- Architecture
- Features
- Benefits
- Integrations
- Screenshots
- Demo Request

---

# Portfolio

Each project

- Hero Image
- Overview
- Client Industry
- Challenges
- Solution
- Architecture
- Technologies
- Results
- Gallery

Filtering

- AI
- Healthcare
- Finance
- Retail
- Manufacturing
- Government

---

# Case Studies

Structure

- Executive Summary
- Business Challenges
- Research
- Solution
- Architecture
- Development Process
- Results
- Lessons Learned

---

# Technologies

Categories

Frontend

Backend

Cloud

AI

Infrastructure

DevOps

Database

Security

For each technology

- Logo
- Description
- Experience Level
- Related Projects

---

# Blog

Features

- Categories
- Search
- Tags
- Author
- Reading Time
- Share Buttons
- Related Articles

Categories

- AI
- Engineering
- Cloud
- DevOps
- Startup
- Product
- Tutorials

---

# Careers

Sections

- Company Culture
- Benefits
- Open Positions
- Recruitment Process
- FAQs
- Online Application

---

# Contact

Components

- Contact Form
- Google Maps
- Email
- Phone
- Social Links
- Calendly Integration
- Live Chat

---

# Shared Components

- Navigation Bar
- Mega Menu
- Footer
- Hero
- Buttons
- Cards
- Pricing Cards
- FAQ Accordion
- Timeline
- Team Cards
- Blog Cards
- Project Cards
- Testimonial Cards
- Modal
- Drawer
- Toast Notifications
- Search Dialog
- Breadcrumb
- Pagination

---

# Animations

Use Framer Motion

Include

- Fade
- Slide
- Scale
- Scroll Reveal
- Stagger Animation
- Number Counter
- Hover Effects
- Floating Elements
- Gradient Animation
- Parallax
- Infinite Logo Carousel

---

# AI Features

- AI Customer Support Chatbot
- AI Project Cost Estimator
- AI Requirement Assistant
- AI Search
- AI Blog Recommendation
- AI FAQ Assistant

---

# SEO Requirements

- Semantic HTML
- Server Side Rendering
- Metadata
- Open Graph
- Twitter Cards
- XML Sitemap
- Robots.txt
- Structured Data
- Canonical URLs
- Dynamic Metadata

Performance Targets

- Lighthouse Score > 95
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s

---

# Accessibility

- WCAG 2.2 AA
- Keyboard Navigation
- Screen Reader Support
- Focus Indicators
- Proper Color Contrast
- Accessible Forms

---

# Security

- HTTPS
- CSP Headers
- Rate Limiting
- Form Validation
- reCAPTCHA
- Secure API
- Input Sanitization

---

# Analytics

- Google Analytics
- Google Search Console
- Microsoft Clarity
- Cookie Consent
- Event Tracking
- Conversion Tracking

---

# CMS Requirements

Admin should manage

- Pages
- Services
- Portfolio
- Team Members
- Blog
- Careers
- Testimonials
- FAQs
- Contact Messages
- SEO Metadata

---

# Responsive Breakpoints

- Mobile
- Tablet
- Laptop
- Desktop
- Ultra-wide

---

# Future Roadmap

Phase 1

- Company Website
- CMS
- Blog

Phase 2

- AI Chatbot
- Client Portal
- Online Consultation

Phase 3

- Customer Dashboard
- Project Tracking
- Payment Integration

Phase 4

- AI Requirement Generator
- AI Proposal Generator
- AI Project Estimator
- AI Knowledge Base

---

# Deliverables

- UI/UX Design (Figma)
- Design System
- Responsive Frontend
- Backend API
- CMS
- Infrastructure
- CI/CD Pipeline
- Documentation
- SEO Optimization
- Performance Optimization
- Analytics Integration
- Production Deployment

---

# Success Metrics

- Lighthouse Score ≥ 95
- Core Web Vitals Pass
- Fully Responsive
- SEO Optimized
- Accessibility Compliant
- Production Ready
- Modern UI/UX (2026 Standard)
- High Conversion Rate
- Fast Loading
- Easy Content Management