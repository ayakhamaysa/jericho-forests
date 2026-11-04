import Palm from "./Palm";

// If the chalet has a photo, show it. If not, draw a simple scene with its colors.
export default function ChaletArt({ chalet }) {
  if (chalet.image) {
    return <img src={chalet.image} alt={chalet.name} className="w-full h-full object-cover" />;
  }

  const [top, bottom] = chalet.sky;
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: `linear-gradient(${top}, ${bottom})` }}>
      <div className="absolute left-[18%] top-[22%] w-20 h-20 rounded-full bg-white/70 blur-[1px]" />
      {/* house */}
      <div className="absolute bottom-[34%] right-[14%] w-[46%] h-[26%] bg-sand rounded-t-lg">
        <div className="absolute -top-3 -inset-x-2 h-4 bg-clay rounded" />
        <div className="absolute bottom-0 right-[18%] w-[22%] h-[60%] bg-night/80 rounded-t" />
        <div className="absolute top-[30%] left-[14%] w-[26%] h-[30%] bg-pool/40 rounded" />
      </div>
      {/* pool */}
      <div className="absolute bottom-0 inset-x-0 h-[34%]" style={{ background: chalet.water }}>
        <div className="absolute top-[30%] inset-x-[12%] h-0.5 bg-white/40 rounded" />
        <div className="absolute top-[55%] inset-x-[22%] h-0.5 bg-white/30 rounded" />
      </div>
      <Palm className="absolute bottom-[20%] left-[4%] w-[30%] text-palm" />
    </div>
  );
}
