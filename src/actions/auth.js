import { supabase } from "@/lib/supabase";

export async function signup(formData) {
  const { email, password, username, fullName } = formData;
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
        full_name: fullName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login(formData) {
  const { email, password } = formData;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  localStorage.removeItem("sb-pdhxpsxqoljhosqkmrrk-auth-token");

  if (error) throw new Error(error.message);
}
