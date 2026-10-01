# IHLink Business & Innovation Centre

Standalone web platform for the **IHLink Business & Innovation Centre**, part of the IHLink Co. Ltd. ecosystem.

## Purpose

The platform provides a dedicated public and customer-facing environment for business support, entrepreneurship, innovation programmes and tracked service delivery. It is separate from IHLink Digital Business while remaining connected to the shared IHLink backend and central Command Center.

## Core capabilities

- Public Business & Innovation Centre website
- IHLink account authentication and protected customer workspace
- Business and innovation service requests
- Quotations and invoice tracking
- BillStack-backed payment workflow through the shared IHLink payment layer
- Private files and service records
- Notifications and support tickets
- Customer profile and account-security controls
- Central IHLink administration/oversight

## Architecture

This repository is a standalone Vite + React + TypeScript application. It uses the shared IHLink Supabase project for authentication, application data, row-level security and server-side workflows. The central IHLink Admin/Command Center remains responsible for administrative oversight.

**Platform code:** `business_centre`

Digital Business is maintained as a separate platform and uses `digital_business`.

## Technology

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase
- Lucide React
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Type checking:

```bash
npm run typecheck
```

## Environment variables

Configure environment variables through local `.env` files or the deployment platform. Never commit secrets.

Typical public client configuration includes:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Additional IHLink platform-origin variables may be used for cross-platform handoff. Production secrets and service-role credentials must remain server-side.

## Main routes

- `/` — public Business & Innovation Centre homepage
- `/services` — service overview
- `/request` — start a service request
- `/dashboard` — authenticated customer workspace
- `/get-in-touch` — contact and support
- `/signin`, `/register`, `/reset-password` — authentication

## IHLink ecosystem integration

The platform is designed as a standalone IHLink service surface with:

- shared Supabase authentication and backend
- platform-specific access controls
- central Command Center oversight
- cross-platform account handoff
- consistent IHLink identity and customer experience

## Security

The application relies on Supabase Row Level Security and verified server-side workflows for protected data and payment finalization. Do not expose Supabase service-role keys, provider secrets, webhook secrets or private credentials in client code or repository files.

## Deployment

Production deployment is intended for Vercel as its own IHLink project. Environment variables must be configured in Vercel before production acceptance testing.

## Ownership

**IHLink Co. Ltd.**  
Business & Innovation Centre

Copyright © 2026 IHLink Co. Ltd. All rights reserved.
