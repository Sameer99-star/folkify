import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ngwegipnvqrwnvymgzei.supabase.co";
const supabaseKey = "sb_publishable_BApvKwKwsuEDsYV3c6LfjQ_sHtyqEkO";

export const supabase = createClient(supabaseUrl, supabaseKey);
