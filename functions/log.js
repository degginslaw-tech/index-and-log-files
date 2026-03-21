export async function onRequestPost(context) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = context.env;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  // Handle preflight
  if (context.request.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  // ⭐ DEBUG TRY BLOCK (replace your existing try/catch with THIS)
  try {
    const body = await context.request.json();

    // Echo the body back so we can confirm the function is receiving data
    return new Response(JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });

  } catch (err) {
    return new Response("Error parsing JSON", {
      status: 500,
      headers: corsHeaders
    });
  }
}
