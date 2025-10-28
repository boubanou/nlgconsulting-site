-- Fix callbacks table policies
DROP POLICY IF EXISTS "Deny public access to callbacks" ON public.callbacks;
DROP POLICY IF EXISTS "Owners and agents can manage callbacks" ON public.callbacks;
DROP POLICY IF EXISTS "Owners and agents can view all callbacks" ON public.callbacks;

CREATE POLICY "Owners and agents can manage callbacks"
ON public.callbacks
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role))
WITH CHECK (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role));

-- Fix leads table policies
DROP POLICY IF EXISTS "Deny public access to leads" ON public.leads;
DROP POLICY IF EXISTS "Owners and agents can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Owners and agents can update leads" ON public.leads;
DROP POLICY IF EXISTS "Owners and agents can view all leads" ON public.leads;
DROP POLICY IF EXISTS "Owners can delete leads" ON public.leads;

CREATE POLICY "Owners and agents can view all leads"
ON public.leads
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role));

CREATE POLICY "Owners and agents can insert leads"
ON public.leads
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role));

CREATE POLICY "Owners and agents can update leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role))
WITH CHECK (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role));

CREATE POLICY "Owners can delete leads"
ON public.leads
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'owner'::app_role));

-- Fix meetings table policies
DROP POLICY IF EXISTS "Deny public access to meetings" ON public.meetings;
DROP POLICY IF EXISTS "Owners and agents can manage meetings" ON public.meetings;
DROP POLICY IF EXISTS "Owners and agents can view all meetings" ON public.meetings;

CREATE POLICY "Owners and agents can manage meetings"
ON public.meetings
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role))
WITH CHECK (has_role(auth.uid(), 'owner'::app_role) OR has_role(auth.uid(), 'agent'::app_role));