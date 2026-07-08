import { PageWrapper } from "../../components/layout/PageWrapper";
import { BackgroundBlobs } from "../../components/layout/BackgroundBlobs";
import { Timeline } from "../../components/about/Timeline";
import { Sunflower } from "../../components/animations/Sunflower";
import { Butterfly } from "../../components/animations/Butterfly";

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-dreamy-gradient px-5 py-14 text-center">
        <Sunflower className="absolute left-[8%] bottom-4" size={60} />
        <Butterfly className="absolute right-[10%] top-10" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">
          Tentang kami
        </p>
        <h1 className="mt-2 font-display text-3xl italic text-ink md:text-4xl">
          Sedikit cerita tentang kami berdua
        </h1>
        <p className="mx-auto mt-3 max-w-xl italic text-ink-soft">
          "Jatuh cinta padamu adalah hal termudah yang pernah aku lakukan."
        </p>
      </section>

      <section className="relative overflow-hidden px-5 py-14 text-center">
        <BackgroundBlobs variant="default" />
        <h2 className="font-display text-2xl italic text-ink">Cerita Kami</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-soft">
          Semua berawal dari hari yang biasa saja — sampai akhirnya tidak lagi
          biasa. Dari obrolan pertama yang canggung sampai lelucon receh yang
          cuma kami berdua yang paham, setiap babnya jadi lebih berarti karena
          kita jalani bersama. Halaman ini (dan seluruh situs ini) adalah cara
          kami menyimpan semuanya supaya tidak lupa.
        </p>
      </section>

      <section className="relative overflow-hidden px-5 pb-20">
        <BackgroundBlobs variant="reverse" />
        <h2 className="mb-10 text-center font-display text-2xl italic text-ink">
          Linimasa Kami
        </h2>
        <Timeline />
      </section>
    </PageWrapper>
  );
}
