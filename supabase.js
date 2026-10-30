// ---- Fill these in after creating your Supabase project ----
const SUPABASE_URL = "https://kelosevkkbgjzsijcfaw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_2nlADIkQnXylCkdXBRXgRg_Hh0DT5Ie";

// Create client (SDK loaded globally from CDN in index.html)
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Fetch the latest letter from the `letters` table
async function fetchLetter() {
  const { data, error } = await supabaseClient
    .from("letters")
    .select("content")
    .order("updated_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Supabase fetch error:", error);
    return null;
  }
  return data.content;
}
