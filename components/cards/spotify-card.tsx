export const SpotifyCard = () => {
  return (
    <div className='flex w-full h-full items-center justify-center bg-[#1f1f1f] rounded-card'>
      <section className='w-full h-full flex justify-center items-center mx-5'>
        <iframe
          className='rounded-card'
          src='https://open.spotify.com/embed/playlist/36DUMWypeO6Pbimw91NOny?utm_source=generator&theme=0'
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" />
      </section>
    </div>
  )
}
