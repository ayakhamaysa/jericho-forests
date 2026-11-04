// A palm tree silhouette drawn with SVG
export default function Palm({ className = "" }) {
  return (
    <svg viewBox="0 0 120 220" className={className} fill="currentColor">
      <path d="M58 220c-2-50 0-100 6-140h6c-8 40-9 90-6 140z" />
      <path d="M64 80c-20-18-45-20-62-10 18-2 38 4 56 16z" />
      <path d="M64 80c-12-22-34-34-54-32 18 6 34 18 48 36z" />
      <path d="M66 80c4-24 22-42 44-46-16 10-28 26-36 48z" />
      <path d="M66 80c18-14 40-16 54-6-18 0-36 6-50 14z" />
      <path d="M65 80c-2-22 6-44 20-58-6 18-10 38-12 58z" />
    </svg>
  );
}
