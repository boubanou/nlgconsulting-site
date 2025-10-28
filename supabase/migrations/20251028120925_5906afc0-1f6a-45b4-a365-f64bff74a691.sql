-- Add explicit deny anonymous policies to prevent public data access
-- This fixes the critical security issue where all tables are publicly readable

-- Deny anonymous access to leads table
CREATE POLICY "Deny anonymous access to leads"
ON public.leads
FOR SELECT
TO anon
USING (false);

-- Deny anonymous access to callbacks table  
CREATE POLICY "Deny anonymous access to callbacks"
ON public.callbacks
FOR SELECT
TO anon
USING (false);

-- Deny anonymous access to meetings table
CREATE POLICY "Deny anonymous access to meetings"
ON public.meetings
FOR SELECT
TO anon
USING (false);

-- Deny anonymous access to user_roles table
CREATE POLICY "Deny anonymous access to user_roles"
ON public.user_roles
FOR SELECT
TO anon
USING (false);