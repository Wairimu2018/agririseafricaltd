-- Add policies for admin operations (using service role or simple password auth approach)
-- Allow insert/update/delete for all authenticated users (protected by frontend password)
CREATE POLICY "Allow insert posts"
ON public.posts FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow update posts"
ON public.posts FOR UPDATE
USING (true);

CREATE POLICY "Allow delete posts"
ON public.posts FOR DELETE
USING (true);

-- Allow all operations on post_images
CREATE POLICY "Allow insert post_images"
ON public.post_images FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow update post_images"
ON public.post_images FOR UPDATE
USING (true);

CREATE POLICY "Allow delete post_images"
ON public.post_images FOR DELETE
USING (true);

-- Storage policies for uploading images
CREATE POLICY "Anyone can upload post images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'post-images');

CREATE POLICY "Anyone can update post images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'post-images');

CREATE POLICY "Anyone can delete post images"
ON storage.objects FOR DELETE
USING (bucket_id = 'post-images');