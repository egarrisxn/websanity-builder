export default function sitemap() {
  return [
    {
      url: 'https://websanitybuilder.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://websanitybuilder.vercel.app/overview',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
