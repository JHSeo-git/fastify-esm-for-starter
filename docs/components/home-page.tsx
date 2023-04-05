import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HomeHero() {
  return (
    <>
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(146deg,#000,#757a7d)] dark:bg-[linear-gradient(146deg,#fff,#757a7d)]">
        Fasitfy Starter
      </h1>
      <p className="text-lg font-medium my-4 text-slate-700 dark:text-slate-300">
        Fastify는 Node.js를 위한 빠르고 오버헤드가 낮은 매력적인 웹 프레임워크입니다.{' '}
        <br className="sm:block hidden" />
        <strong>Fastify Starter</strong>와 함께 쉽고 빠르게 시작하세요.
      </p>
      <div className="mt-5">
        <Link
          href="/docs"
          className="inline-flex items-center py-3 px-4 rounded-full bg-slate-800 text-white font-medium text-xl shadow-md"
        >
          시작하기 <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
}
