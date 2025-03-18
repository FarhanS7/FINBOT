import { inngest } from "@/lib/inngest/client";
import { helloWorld } from "@/lib/inngest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld, // <-- This is where you'll always add all your functions
  ],
});
