import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';

export default function Page() {
  return (
    <>
      <PageHero title="About" />
      <Wrapper>
        <div className="py-8 text-xl tracking-wide">
          <p className="mb-4">
            I&apos;m a 34-year-old <strong>front-end developer</strong>, a
            family man, and a passionate guitar player living by the beautiful
            <strong>Lake Como</strong>.
          </p>
          <p className="mb-4">
            I love diving into the latest web development technologies and
            staying updated on all the coolest trends in coding.
          </p>
          <p className="mb-4">
            Whether it&apos;s building sleek, responsive interfaces or jamming
            out a few tunes, I’m always up for a creative challenge.
          </p>
          <p className="mb-4">
            Balancing work, family life, and my hobbies can get hectic
            sometimes, but that’s part of the fun.
          </p>
          <p className="mb-4">
            I’m all about <strong>continuous learning</strong>, trying new
            things, and making sure I find time for the people (and the music)
            that matter most!
          </p>
        </div>
      </Wrapper>
    </>
  );
}
