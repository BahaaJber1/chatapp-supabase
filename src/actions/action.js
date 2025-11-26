"use server";

import { supabase } from "@/lib/supabase";

export const getTasks = async () => {
  const { data, error } = await supabase.from("tasks").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
