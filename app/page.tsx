"use client";

import { useEffect, useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { BackgroundBlobs } from "../components/layout/BackgroundBlobs";
import { LoadingScreen } from "../components/animations/LoadingScreen";
import { Hero } from "../components/home/Hero";
import { RelationshipCounter } from "../components/home/RelationshipCounter";
import { MemoryOfTheDay } from "../components/home/MemoryOfTheDay";
import { LoveLetter } from "../components/shared/LoveLetter";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen show={showLoading} />
      <PageWrapper>
        <Hero />
        <RelationshipCounter />
        <div className="relative overflow-hidden">
          <BackgroundBlobs variant="default" />
          <MemoryOfTheDay />
          <LoveLetter />
        </div>
      </PageWrapper>
    </>
  );
}
