import { PageWrapper } from "../../components/layout/PageWrapper";
import { BackgroundBlobs } from "../../components/layout/BackgroundBlobs";
import { VideoGrid } from "../../components/videos/VideoGrid";

export default function VideosPage() {
  return (
    <PageWrapper>
      <section className="bg-dreamy-gradient px-5 py-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">Video</p>
        <h1 className="mt-2 font-display text-3xl italic text-ink md:text-4xl">Video-Video Kami</h1>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          Klip-klip kecil dari momen yang tidak ingin kami lupakan.
        </p>
      </section>
      <section className="relative overflow-hidden px-5 py-12">
        <BackgroundBlobs variant="reverse" />
        <div className="mx-auto max-w-6xl">
          <VideoGrid />
        </div>
      </section>
    </PageWrapper>
  );
}
