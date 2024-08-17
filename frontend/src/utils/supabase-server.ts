// Supabase Client
import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from "./database.types";


export const createClient = () => {
    return createServerComponentSupabaseClient<Database>({
        headers,
        cookies,
    })
}