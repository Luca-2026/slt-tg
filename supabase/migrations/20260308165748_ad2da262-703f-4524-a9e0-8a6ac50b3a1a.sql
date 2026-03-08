
-- Create storage bucket for CV uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('cv-uploads', 'cv-uploads', false);

-- Allow anonymous uploads to cv-uploads bucket
CREATE POLICY "Allow anonymous CV uploads" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'cv-uploads');

-- Allow reading uploaded CVs (for admin purposes)
CREATE POLICY "Allow reading CVs" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'cv-uploads');

-- Create applications table
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  position TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  cv_file_path TEXT,
  start_date TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form)
CREATE POLICY "Allow public job applications" ON public.job_applications
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
