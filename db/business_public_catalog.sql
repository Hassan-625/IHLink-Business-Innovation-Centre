-- Publish approved service descriptions and configured retail prices to visitors.
-- Customer requests, files, invoices and payments keep their existing private policies.
grant select on public.business_catalog to anon;
create policy business_public_active_catalog on public.business_catalog
for select to anon
using (is_active and unit_code in ('academy','compute','fabrication','digital_business','print'));
