import { PageWrapper } from "../../components/layout/PageWrapper";
import { BackgroundBlobs } from "../../components/layout/BackgroundBlobs";
import { NotesGrid } from "../../components/notes/NotesGrid";

export default function NotesPage() {
  return (
    <PageWrapper>
      <section className="bg-dreamy-gradient px-5 py-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">Catatan</p>
        <h1 className="mt-2 font-display text-3xl italic text-ink md:text-4xl">Catatan Cinta</h1>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          Kata-kata manis kecil, tersimpan khusus untuk kami.
        </p>
      </section>
      <section className="relative overflow-hidden px-5 py-12">
        <BackgroundBlobs variant="center" />
        <div className="mx-auto max-w-6xl">
          <NotesGrid />
        </div>
      </section>
    </PageWrapper>
  );
}
