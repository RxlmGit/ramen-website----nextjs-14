export const NoodlesJapanese = [
  {
    title: "春",
    jp: "一 ichi",
    ramen: "トリ・パイタン",
    ramenDef:
      "鶏白湯ラーメンは、濃厚でクリーミーなスープが重すぎず心地よく、春にぴったりです。新鮮な旬の食材とよく合い、軽めのトッピングでアレンジできるので、温かさと春の鮮やかな風味のバランスが取れた満足のいく選択肢になります。",
    gradientColor: "linear-gradient(45deg, #F7B7A3, #A8D5BA, #87CEEB, #E6E6FA)",
    link: "",
    alt: "an image of tori paitan ramen",
  },
  {
    title: "夏",
    jp: "二 ni",
    ramen: "塩ラーメン",
    ramenDef:
      "塩ラーメンは、軽くてさっぱりとしたスープで、重くなくすっきりとした味わいなので、夏に最適です。新鮮でサクサクしたトッピングと季節の食材でカスタマイズできるオプションにより、この料理は涼しく楽しめます。水分補給とバランスのとれた性質により、暑い季節に最適です。",
    gradientColor: "linear-gradient(45deg, #00A3E0, #F7E04D, #FF6F61, #4CAF50)",
    link: "https://images.unsplash.com/photo-1721032741322-70fe608c7d7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "an image of shio ramen",
  },
  {
    title: "秋",
    jp: "三 san",
    ramen: "味噌ラーメン",
    ramenDef:
      "味噌ラーメンは、濃厚で素朴な味と、ボリュームたっぷりで温まるスープが特徴で、秋にぴったりです。旨味たっぷりの味噌が、キノコやロースト野菜などの旬の食材とよく合い、心安らぐ栄養たっぷりの料理に仕上がります。その魅力的な香りと心地よい魅力は、涼しくなる秋の気候にぴったりです。",
    gradientColor: "linear-gradient(45deg, #D95D39, #A63D40, #F4A261, #8C4C3D)",
    link: "https://images.unsplash.com/photo-1721032740303-faa3480ec606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "an image of miso ramen",
  },
  {
    title: "冬",
    jp: "四 shi",
    ramen: "豚骨 等面",
    ramenDef:
      "とんこつラーメンは、濃厚でクリーミーなスープが深い温かさと心地よさを与えてくれるので、冬にぴったりです。ボリュームたっぷりでお腹いっぱいになる、大胆で満足感のある味で、寒い季節に元気と栄養を与えてくれます。香り高く魅力的な体験は、究極の冬のコンフォートフードで、心地よく満足感を得るのに最適です。",
    gradientColor: "linear-gradient(45deg, #D1E0E0, #004D40, #BCC6CC, #F9F9F9)",
    link: "https://images.unsplash.com/photo-1721032743032-23c46474d563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "an image of tonkotsu ramen",
  },
].map((season, idx) => ({ ...season, id: idx + 1 }));

export const Noodles = [
  {
    title: "Spring",
    jp: "一 ichi",
    ramen: "Tori Paitan",
    ramenDef:
      "Tori Paitan Ramen is great for spring due to its rich, creamy broth that provides comfort without being too heavy. It pairs well with fresh, seasonal ingredients and can be adapted with lighter toppings, making it a satisfying choice that balances warmth with spring’s vibrant flavors.",
    gradientColor: "linear-gradient(45deg, #F7B7A3, #A8D5BA, #87CEEB, #E6E6FA)",
    link: "/imgs/Ramen/Tori-Paitan-Spring.png",
    alt: "an image of tori paitan ramen",
    size: "(min-width: 1640px) 621px, (min-width: 1040px) calc(36.38vw + 32px), calc(82.78vw - 25px)",
  },
  {
    title: "Summer",
    jp: "二 ni",
    ramen: "Shio Ramen",
    ramenDef:
      "Shio Ramen is great for summer due to its light, refreshing broth, which offers a clean flavor without being heavy. Fresh, crisp toppings and the option to customize with seasonal ingredients keep the dish cool and enjoyable. Its hydrating and balanced nature makes it a perfect choice for hot weather.",
    gradientColor: "linear-gradient(45deg, #00A3E0, #F7E04D, #FF6F61, #4CAF50)",
    link: "/imgs/ramen/Shio-Ramen-Summer.png",
    alt: "an image of shio ramen",
    size: "(min-width: 1640px) 621px, (min-width: 1040px) calc(36.38vw + 32px), calc(82.78vw - 25px)",
  },
  {
    title: "Fall",
    jp: "三 san",
    ramen: "Miso Ramen",
    ramenDef:
      "Miso Ramen is perfect for autumn with its rich, earthy flavors and hearty, warming broth. The umami-rich miso complements seasonal ingredients like mushrooms and roasted vegetables, making it a comforting and nourishing dish. Its inviting aroma and cozy appeal align perfectly with the cooler fall weather.",
    gradientColor: "linear-gradient(45deg, #D95D39, #A63D40, #F4A261, #8C4C3D)",
    link: "/imgs/ramen/Miso-Ramen-Autumn.png",
    alt: "an image of miso ramen",
    size: "(min-width: 1640px) 621px, (min-width: 1040px) calc(36.38vw + 32px), calc(82.78vw - 25px)",
  },
  {
    title: "Winter",
    jp: "四 shi",
    ramen: "Tonkotsu Ramen",
    ramenDef:
      "Tonkotsu Ramen is perfect for winter due to its rich, creamy broth that provides deep warmth and comfort. It's hearty and filling, with bold, satisfying flavors that energize and nourish you during cold weather. The aromatic, inviting experience makes it the ultimate winter comfort food, perfect for staying cozy and satisfied.",
    gradientColor: "linear-gradient(45deg, #D1E0E0, #004D40, #BCC6CC, #F9F9F9)",
    link: "/imgs/ramen/Tonkotsu-Ramen-Winter.png",
    alt: "an image of tonkotsu ramen",
    size: "(min-width: 1640px) 621px, (min-width: 1040px) calc(36.38vw + 32px), calc(82.78vw - 25px)",
  },
].map((season, idx) => ({ ...season, id: idx + 1 }));
