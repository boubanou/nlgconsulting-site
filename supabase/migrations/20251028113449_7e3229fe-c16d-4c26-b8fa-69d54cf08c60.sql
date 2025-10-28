-- Add explicit deny policies for anonymous users to prevent any public access

-- Deny anonymous access to leads table
CREATE POLICY "Deny public access to leads"
ON public.leads
FOR ALL
TO anon
USING (false);

-- Deny anonymous access to callbacks table
CREATE POLICY "Deny public access to callbacks"
ON public.callbacks
FOR ALL
TO anon
USING (false);

-- Deny anonymous access to meetings table
CREATE POLICY "Deny public access to meetings"
ON public.meetings
FOR ALL
TO anon
USING (false);

-- Deny anonymous access to user_roles table
CREATE POLICY "Deny public access to user_roles"
ON public.user_roles
FOR ALL
TO anon
USING (false);