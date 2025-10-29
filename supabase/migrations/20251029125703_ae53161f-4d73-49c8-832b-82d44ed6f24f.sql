-- Add ip_address column to leads table for proper rate limiting
ALTER TABLE public.leads ADD COLUMN ip_address text;

-- Add ip_address column to callbacks table for proper rate limiting
ALTER TABLE public.callbacks ADD COLUMN ip_address text;

-- Add indexes for better query performance on rate limiting
CREATE INDEX idx_leads_ip_created ON public.leads(ip_address, created_at);
CREATE INDEX idx_callbacks_ip_created ON public.callbacks(ip_address, created_at);