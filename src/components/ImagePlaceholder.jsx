import { useEffect, useState } from 'react'
import { Mountain } from 'lucide-react'

const PROMPTS = {
  'image-1':
    'Cinematic documentary photograph of a tired trekker in his 30s sitting on a rock on a high-altitude Himalayan trail at golden hour. Head in hands. Wearing a small black wearable band on his wrist. A guide is visible far in the background, out of focus, helping another trekker. Warm golden light, muted colours, serious mood. National Geographic style. 16:9 aspect ratio.',
  'image-2':
    'Wide cinematic shot of a trekking group on a Himalayan trail at dawn. A guide in the foreground looks back at the group of trekkers spread out over the trail, checking on them. Snow-capped peaks in the background. Warm dawn light, misty atmosphere, documentary photography style. 16:9 aspect ratio.',
  'image-3':
    'Portrait of a 38-year-old Nepali trek guide. Warm documentary photography, natural light, mountains blurred behind him. He wears a trekking jacket and looks directly at the camera with quiet confidence. 1:1 aspect ratio.',
}

export default function ImagePlaceholder({
  id,
  width = 1920,
  height = 1080,
  alt,
  caption,
  className = '',
  fillHeight,
}) {
  const [src, setSrc] = useState(null)
  const aspect = `${width} / ${height}`

  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.onload = () => {
      if (!cancelled) setSrc(`/images/${id}.jpg`)
    }
    img.onerror = () => {
      if (!cancelled) setSrc(null)
    }
    img.src = `/images/${id}.jpg`
    return () => {
      cancelled = true
    }
  }, [id])

  return (
    <figure
      className={`relative overflow-hidden bg-sand ${className}`}
      style={fillHeight ? { height: fillHeight } : { aspectRatio: aspect }}
    >
      {src ? (
        <img src={src} alt={alt || PROMPTS[id] || id} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sand via-stone to-sand text-muted">
          <Mountain className="h-12 w-12 text-sky/70" aria-hidden />
          <p className="font-mono text-xs uppercase tracking-widest text-graphite">{id}</p>
          <p className="sr-only">{PROMPTS[id]}</p>
        </div>
      )}
      {caption ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-6 py-8 md:px-12">
          <p className="max-w-xl font-display text-lg text-warm-white md:text-2xl">{caption}</p>
        </figcaption>
      ) : null}
    </figure>
  )
}
