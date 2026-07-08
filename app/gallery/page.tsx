import { PageWrapper } from "../../components/layout/PageWrapper";
import { BackgroundBlobs } from "../../components/layout/BackgroundBlobs";
import { GalleryGrid } from "../../components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <PageWrapper>
      <section className="bg-dreamy-gradient px-5 py-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">Galeri</p>
        <h1 className="mt-2 font-display text-3xl italic text-ink md:text-4xl">Foto-Foto Kami</h1>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          Setiap gambar menyimpan sepenggal cerita kami.
        </p>
      </section>
      <section className="relative overflow-hidden px-5 py-12">
        <BackgroundBlobs variant="default" />
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>
    </PageWrapper>
  );
}
