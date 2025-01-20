import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kdvoleyhtzszullpfgqj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkdm9sZXlodHpzenVsbHBmZ3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODI5MzQsImV4cCI6MjA1Mjg1ODkzNH0.eZuwPBo1zxP8_gBIAxTwurOcnP_rm6I4EaEhIQFH6kw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
