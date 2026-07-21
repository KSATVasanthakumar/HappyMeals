interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
}

function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[320px] flex-col items-center justify-center gap-3 overflow-hidden px-4 py-14 text-center text-(--color-text-on-primary) sm:min-h-[420px] sm:px-6 sm:py-20 md:min-h-[520px]">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {image ? (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-(--color-primary) via-[color-mix(in_srgb,var(--color-primary)_55%,var(--color-secondary))] to-(--color-secondary)" />
      )}
      <h1 className="relative z-10 text-[52px] font-(--font-weight-bold) font-[family-name:'Akronim'] text-white sm:text-[64px] md:text-[80px]">
        {title}
      </h1>
      {subtitle && (
        <p className="relative z-10 text-(length:--font-size-md) font-(--font-weight-medium) text-(--color-accent) sm:text-(length:--font-size-lg)">
          {subtitle}
        </p>
      )}
    </section>
  )
}

export default PageHero
