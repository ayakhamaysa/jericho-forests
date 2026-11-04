// ======================================================
// Jericho Forests — غابات أريحا
// كل معلومات الموقع هون
// الأسعار تقريبية للعرض، عدّليها بالأسعار الحقيقية
// ======================================================

export const place = {
  name: "Jericho Forests",
  nameAr: "غابات أريحا",
  nameEn: "POOL & GARDEN CHALETS · JERICHO",
  tagline: "خصوصية كاملة، بركة وحديقة",
  intro: "فلل وشاليهات للإيجار بأريحا، لكل فيلا بركتها وحديقتها وجاكوزي، بخصوصية كاملة. للأزواج، للعيلة، ولكل الحفلات والمناسبات.",
  location: "أريحا",
  logo: "/images/logo.png",
  phone: "0509590580",
  whatsapp: "972509590580",
  instagram: "https://www.instagram.com/jericho.forests/",
  facebook: "https://www.facebook.com/Jerichoforests",
  currency: "₪",
};

// الفلل بالترتيب. features: كل شي بتوفره الفيلا
export const chalets = [
  {
    name: "Villa 01",
    rooms: 3,
    baths: 3,
    price: 1300,
    image: "/images/villa-1.jpg",
    features: ["صالون", "مطبخ داخلي", "جاكوزي", "مطبخ خارجي مع منطقة شواء", "حديقة خارجية", "بركة سباحة", "كوخ صغير يتسع لـ 8 أشخاص", "غرفة خارجية مفتوحة للاسترخاء"],
  },
  {
    name: "Villa 02",
    rooms: 3,
    baths: 3,
    price: 1000,
    image: "/images/villa-2.jpg",
    features: ["صالون", "مطبخ داخلي", "جاكوزي", "مطبخ خارجي مع منطقة شواء", "حديقة خارجية", "بركة سباحة"],
  },
  {
    name: "Villa 03",
    rooms: 2,
    baths: 2,
    price: 800,
    image: "/images/villa-3.jpg",
    features: ["صالون", "مطبخ داخلي", "جاكوزي", "مطبخ خارجي مع منطقة شواء", "حديقة خارجية", "بركة سباحة"],
  },
  {
    name: "Villa 04",
    rooms: 4,
    baths: 4,
    price: 1800,
    image: "/images/villa-4.jpg",
    features: ["3 صالونات", "مطبخين داخليين", "جاكوزي", "مطبخ خارجي مع منطقة شواء وزرب", "بركة سباحة", "دش خارجي", "حديقة خارجية كبيرة"],
  },
];

export const perks = [
  { title: "خصوصية كاملة", text: "الفيلا إلك وحدك، بدون أي مشاركة مع حدا." },
  { title: "بركة وحديقة", text: "لكل فيلا بركتها وجاكوزي وحديقة خضرا." },
  { title: "لكل مناسبة", text: "للأزواج، للعيلة، لعياد الميلاد والحفلات." },
];

// المناسبات: صور من حفلات صارت عندهم
export const events = {
  title: "مناسباتكم عنا",
  text: "أعياد ميلاد، حفلات للعروس، وتجمعات العيلة والصحاب. بتختار الفيلا، ومنجهزلك المكان على ذوقك.",
  types: ["عيد ميلاد", "Bride to Be", "Bridal Shower", "تخرّج", "تجمعات عيلة"],
  photos: [
    { image: "/images/event-1.jpg", label: "Bride to Be" },
    { image: "/images/event-2.jpg", label: "حفلة على البركة" },
    { image: "/images/event-3.jpg", label: "Bridal Shower" },
  ],
};
