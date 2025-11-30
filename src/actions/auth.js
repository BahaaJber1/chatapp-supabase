"use server";

import { createClient } from "@/utils/supabase/server";

export async function signup(formData) {
  const { email, password, username, fullName } = formData;
  const supabase = await createClient();
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
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const supabase = await createClient();
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw new Error(sessionError.message);

  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
