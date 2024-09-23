'use client'
import '../globals.css'

export default function Loading() {
    return (
      <>
        <section className="bg-[#0D0D0E] w-screen h-dvh flex flex-col justify-center items-center">
          <video
            className="w-full bg-transparent max-w-[150px] lg:max-w-[350px]"
            src="/video/loading.mp4"
            poster="/img/logoVKU.png"
            autoPlay
            muted
            loop
            style={{ backgroundColor: "transparent" }} // Stil adăugat pentru siguranță
          ></video>
        </section>
      </>
    );
  }
  