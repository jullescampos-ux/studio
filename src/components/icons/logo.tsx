import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 5c0-1.5 1.5-3 3-3s3 1.5 3 3v2" />
      <path d="M17 5c0-1.5-1.5-3-3-3s-3 1.5-3 3v2" />
      <path d="M7 7h10" />
      <path d="M7 11h10" />
      <path d="M10 11v5c0 1.5-1.5 3-3 3H6" />
      <path d="M14 11v5c0 1.5 1.5 3 3 3h1" />
      <path d="M7 19H6c-1.5 0-3-1.5-3-3v-3" />
      <path d="M17 19h1c1.5 0 3-1.5 3-3v-3" />
    </svg>
  );
}
