import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://dazxftyztpkhqljutlke.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhenhmdHl6dHBraHFsanV0bGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NDU1NzMsImV4cCI6MjA0NjEyMTU3M30.prd5oLHY7ZjpVUaarPRHCIrI8j2rMQDKDq2TNa_k4fk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
