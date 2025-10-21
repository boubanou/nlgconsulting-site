-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('owner', 'agent');

-- Create enum for lead status
CREATE TYPE public.lead_status AS ENUM ('New', 'In-Review', 'Qualified', 'Lost', 'Won');

-- Create enum for priority
CREATE TYPE public.priority_level AS ENUM ('Normal', 'High');

-- Create enum for callback status
CREATE TYPE public.callback_status AS ENUM ('New', 'Attempted', 'Reached', 'Closed');

-- Create user_roles table for RBAC
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Owners can manage all roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'owner'));

-- Create leads table
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  locale TEXT NOT NULL DEFAULT 'en',
  message TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  source TEXT,
  status lead_status NOT NULL DEFAULT 'New',
  priority priority_level NOT NULL DEFAULT 'Normal',
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  notes TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- RLS policies for leads
CREATE POLICY "Owners and agents can view all leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

CREATE POLICY "Owners and agents can insert leads"
  ON public.leads FOR INSERT
  TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

CREATE POLICY "Owners and agents can update leads"
  ON public.leads FOR UPDATE
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

CREATE POLICY "Owners can delete leads"
  ON public.leads FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'owner'));

-- Create meetings table
CREATE TABLE public.meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  calendly_event_id TEXT UNIQUE,
  start_ts TIMESTAMPTZ NOT NULL,
  end_ts TIMESTAMPTZ NOT NULL,
  attendee_name TEXT NOT NULL,
  attendee_email TEXT NOT NULL,
  notes TEXT,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL
);

-- Enable RLS on meetings
ALTER TABLE public.meetings ENABLE ROW LEVEL SECURITY;

-- RLS policies for meetings
CREATE POLICY "Owners and agents can view all meetings"
  ON public.meetings FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

CREATE POLICY "Owners and agents can manage meetings"
  ON public.meetings FOR ALL
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

-- Create callbacks table
CREATE TABLE public.callbacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  phone TEXT NOT NULL,
  timezone TEXT,
  note TEXT,
  status callback_status NOT NULL DEFAULT 'New',
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on callbacks
ALTER TABLE public.callbacks ENABLE ROW LEVEL SECURITY;

-- RLS policies for callbacks
CREATE POLICY "Owners and agents can view all callbacks"
  ON public.callbacks FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

CREATE POLICY "Owners and agents can manage callbacks"
  ON public.callbacks FOR ALL
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'owner') OR
    public.has_role(auth.uid(), 'agent')
  );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_callbacks_updated_at
  BEFORE UPDATE ON public.callbacks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_priority ON public.leads(priority);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_meetings_start_ts ON public.meetings(start_ts DESC);
CREATE INDEX idx_meetings_attendee_email ON public.meetings(attendee_email);
CREATE INDEX idx_callbacks_status ON public.callbacks(status);
CREATE INDEX idx_callbacks_created_at ON public.callbacks(created_at DESC);