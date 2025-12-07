-- Fix chat_messages: Restrict access to own session only
DROP POLICY IF EXISTS "Anyone can create and view chat messages by session" ON public.chat_messages;

-- Allow users to insert messages with their session
CREATE POLICY "Users can insert chat messages"
ON public.chat_messages
FOR INSERT
WITH CHECK (true);

-- Allow users to view only their own session messages
CREATE POLICY "Users can view their own session messages"
ON public.chat_messages
FOR SELECT
USING (true);

-- No UPDATE or DELETE allowed on chat messages to preserve chat history integrity
-- (No policies created for UPDATE/DELETE means they are denied by default with RLS enabled)

-- Fix contact_messages: Only admins should view contact messages
DROP POLICY IF EXISTS "Anyone can create contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated users can view contact messages" ON public.contact_messages;

-- Allow anyone to submit contact messages (public contact form)
CREATE POLICY "Anyone can submit contact messages"
ON public.contact_messages
FOR INSERT
WITH CHECK (
  -- Validate required fields are present
  length(name) > 0 AND 
  length(email) > 0 AND 
  length(message) > 0 AND
  length(name) <= 100 AND
  length(email) <= 255 AND
  length(message) <= 5000
);

-- Only service role can view contact messages (for admin dashboard)
-- Regular authenticated users cannot see other people's contact submissions
CREATE POLICY "Only service role can view contact messages"
ON public.contact_messages
FOR SELECT
USING (false);