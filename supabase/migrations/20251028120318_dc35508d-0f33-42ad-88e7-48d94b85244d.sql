-- Drop existing policies on user_roles
DROP POLICY IF EXISTS "Deny public access to user_roles" ON public.user_roles;
DROP POLICY IF EXISTS "Owners can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Recreate policies with explicit authentication checks
CREATE POLICY "Owners can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'owner'::app_role))
WITH CHECK (has_role(auth.uid(), 'owner'::app_role));

CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());