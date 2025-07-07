import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dpcouxskfwwzpocdjwsx.supabase.co'
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY // Use EXPO_PUBLIC_ prefix if using Expo's env system

export const supabase = createClient(supabaseUrl, supabaseKey)

export default {};