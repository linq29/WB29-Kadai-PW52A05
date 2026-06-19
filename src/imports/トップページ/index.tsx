import svgPaths from "./svg-tn0qo3i9nw";
import imgFooter from "./a02e9a541437cbe819efdec0363ef1263fc30906.png";
import imgRectangle3 from "./f09958a9c799fa230bf098aff47a78f392ced8d8.png";
import img from "./52b14a34b0ab9d96f9079de5e4460d14e4d850e4.png";
import img1 from "./b0f2c13c1645e1c033017c0c54d50deafd842049.png";
import img2 from "./2ba43325d83652177238e486988d30ff50a19279.png";
import img3 from "./971fdd26eab2c9f097ad5186e05384e1a5dfc597.png";
import img4 from "./4375689b2619a1d770653b824ffabf3353af15f9.png";
import imgCategory from "./9af3c9a2a6a5b4a50fa036e433f09eeb21c60c05.png";
import imgCategoryImg from "./f6e00d733bbe8346f1e1ee2cec75ab849deabc21.png";
import imgCategoryImg1 from "./9f67261aec002136a8aac10ab2a4bab26cd5c40d.png";
import imgCategoryImg2 from "./02cff69aeb27e141779a3a4b3ebe6d33c65dcdb4.png";
import imgHeaderLinks from "./3ed3171a69d22ee81f4ea5ed5c5020e351931cf6.png";
import imgHeaderLinks1 from "./2ec5f7f204d6d574cd0d5b2ea5291bb65507b326.png";
import imgHeaderLinks2 from "./552f8fb5e61353e42ca28a5c4c9971eb5b2b3521.png";

function Bg({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[2243px] left-[-1px] top-[-1px] w-[1440px]"} data-name="BG">
      <div className="absolute bg-gradient-to-b from-[#010914] inset-0 to-[#223556]" data-name="BG" />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Inter:Regular',sans-serif] font-normal inset-[33.04%_18.47%_59.03%_17.01%] leading-[0] not-italic text-[#fefefe] text-[14px] text-center whitespace-nowrap" data-name="Footer Links">
      <div className="absolute flex flex-col inset-[33.48%_77.22%_59.03%_17.01%] justify-center">
        <p className="leading-[normal]">Legal Notice</p>
      </div>
      <div className="absolute flex flex-col inset-[33.04%_61.81%_59.47%_31.81%] justify-center">
        <p className="leading-[normal]">Privacy Policy</p>
      </div>
      <div className="absolute flex flex-col inset-[33.48%_45.76%_59.03%_45.76%] justify-center">
        <p className="leading-[normal]">{`Refund & Shipping`}</p>
      </div>
      <div className="absolute flex flex-col inset-[33.48%_33.13%_59.03%_63.19%] justify-center">
        <p className="leading-[normal]">Contact</p>
      </div>
      <div className="absolute flex flex-col inset-[33.48%_18.47%_59.03%_78.75%] justify-center">
        <p className="leading-[normal]">About</p>
      </div>
    </div>
  );
}

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[227px] left-[-1px] top-[2015px] w-[1440px]"} data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgFooter} />
      <FooterLinks />
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[69.6%_42.71%_23.79%_42.64%] justify-center leading-[0] not-italic text-[#d9d9d9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Copyright © 2026, emOCEAM by LIN</p>
      </div>
    </div>
  );
}

function Em() {
  return (
    <div className="absolute h-[51.198px] left-[calc(33.33%+86px)] top-[373.93px] w-[113.82px]" data-name="em">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.82 51.1976">
        <g id="em">
          <path d={svgPaths.p17d5b600} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p7172a00} fill="var(--fill-0, #FEFEFE)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Ocean() {
  return (
    <div className="absolute h-[84.812px] left-[calc(41.67%+80.47px)] top-[344px] w-[411.53px]" data-name="OCEAN">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411.53 84.8123">
        <g id="OCEAN">
          <path d={svgPaths.p649fe80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p3bd04ef0} fill="var(--fill-0, #FEFEFE)" id="Vector_2" />
          <path d={svgPaths.p154e2400} fill="var(--fill-0, #FEFEFE)" id="Vector_3" />
          <path d={svgPaths.p31161a00} fill="var(--fill-0, #FEFEFE)" id="Vector_4" />
          <path d={svgPaths.pa6dd600} fill="var(--fill-0, #FEFEFE)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function SiteLogo() {
  return (
    <div className="absolute contents left-[calc(33.33%+86px)] top-[344px]" data-name="Site Logo">
      <Em />
      <Ocean />
    </div>
  );
}

function Mv() {
  return (
    <div className="absolute contents left-[calc(16.67%+56.33px)] top-[124px]" data-name="MV">
      <div className="absolute h-[571px] left-[calc(16.67%+57px)] top-[125px] w-[1063px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <SiteLogo />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(41.67%+229px)] not-italic text-[#fefefe] text-[14px] text-center top-[485px] tracking-[1.4px] whitespace-nowrap">
        <p className="leading-[24px]">他人の心の海から掬い上げられた雫を、あなたの心に。</p>
      </div>
    </div>
  );
}

function MenuSec() {
  return (
    <div className="absolute contents left-0 top-0" data-name="menu sec1">
      <div className="absolute bg-[#223556] h-[36px] left-0 top-0 w-[197px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[27px] not-italic text-[#fefefe] text-[16px] top-[18.5px] whitespace-nowrap">
        <p className="leading-[normal]">カテゴリー</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[57.5px] whitespace-nowrap">
        <p className="leading-[normal]">O / 開放性</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[88.5px] whitespace-nowrap">
        <p className="leading-[normal]">C / 誠実性</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[119.5px] whitespace-nowrap">
        <p className="leading-[normal]">E / 外向性</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[150.5px] whitespace-nowrap">
        <p className="leading-[normal]">A / 協調性</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[181.5px] whitespace-nowrap">
        <p className="leading-[normal]">N / 神経症傾向</p>
      </div>
    </div>
  );
}

function MenuSec1() {
  return (
    <div className="absolute contents left-0 top-[206px]" data-name="menu sec2">
      <div className="absolute bg-[#223556] h-[36px] left-0 top-[206px] w-[197px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[27px] not-italic text-[#fefefe] text-[16px] top-[224.5px] whitespace-nowrap">
        <p className="leading-[normal]">セット</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[263.5px] whitespace-nowrap">
        <p className="leading-[normal]">バランスセット</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[294.5px] whitespace-nowrap">
        <p className="leading-[normal]">特攻セット</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[325.5px] whitespace-nowrap">
        <p className="leading-[normal]">ラッキーセット</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] not-italic text-[#fefefe] text-[14px] top-[356.5px] whitespace-nowrap">
        <p className="leading-[normal]">体験セット</p>
      </div>
    </div>
  );
}

function MenuSec2() {
  return (
    <div className="absolute contents left-0 top-[382px]" data-name="menu sec3">
      <div className="absolute bg-[#223556] h-[36px] left-0 top-[382px] w-[197px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[27px] not-italic text-[#fefefe] text-[16px] top-[400.5px] whitespace-nowrap">
        <p className="leading-[normal]">特集</p>
      </div>
    </div>
  );
}

function Side({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[418px] left-[79px] overflow-clip top-[124px] w-[197px]"} data-name="メニュー-SIDE">
      <MenuSec />
      <MenuSec1 />
      <MenuSec2 />
    </div>
  );
}

function Top({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[252px] left-[calc(16.67%+57px)] top-[826px] w-[196px]"} data-name="アイテムカード-TOP">
      <div className="absolute inset-[0_0_22.22%_0]" data-name="アイテム図">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[81.35%_0_10.71%_0] leading-[20px] not-italic text-[#fefefe] text-[14px]">C / 夜更けの几帳面</p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[92.06%_18.37%_0_0] leading-[20px] not-italic text-[#16dbfd] text-[14px]">￥248,000</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents left-[calc(16.67%+56.33px)] top-[775px]" data-name="新入荷アイテム">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(16.67%+57px)] not-italic text-[#fefefe] text-[24px] text-shadow-[0px_0px_10px_#16dbfd] top-[790.5px] whitespace-nowrap">
        <p className="leading-[normal]">新入荷アイテム</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(25%+114px)] not-italic text-[#16dbfd] text-[14px] top-[793.5px] whitespace-nowrap">
        <p className="leading-[normal]">/ select from new items</p>
      </div>
      <Top />
      <div className="absolute h-[252px] left-[calc(33.33%+34px)] top-[826px] w-[196px]" data-name="アイテムカード-TOP">
        <div className="absolute inset-[0_0_22.22%_0]" data-name="アイテム図">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-[-12.24%] max-w-none size-[125%] top-[-12.24%]" src={img1} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[81.35%_0_10.71%_0] leading-[20px] not-italic text-[#fefefe] text-[14px]">O / 眠れる反骨心</p>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[92.06%_18.37%_0_0] leading-[20px] not-italic text-[#16dbfd] text-[14px]">￥208,000</p>
      </div>
      <div className="absolute h-[252px] left-[calc(50%+11px)] top-[826px] w-[196px]" data-name="アイテムカード-TOP">
        <div className="absolute inset-[0_0_22.22%_0]" data-name="アイテム図">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-[-12.24%] max-w-none size-[125%] top-[-12.24%]" src={img1} />
            </div>
            <img alt="" className="absolute max-w-none object-cover size-full" src={img2} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[81.35%_0_10.71%_0] leading-[20px] not-italic text-[#fefefe] text-[14px]">E / 透明な社交欲</p>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[92.06%_18.37%_0_0] leading-[20px] not-italic text-[#16dbfd] text-[14px]">￥388,000</p>
      </div>
      <div className="absolute h-[252px] left-[calc(66.67%-12px)] top-[826px] w-[196px]" data-name="アイテムカード-TOP">
        <div className="absolute inset-[0_0_22.22%_0]" data-name="アイテム図">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-[-12.24%] max-w-none size-[125%] top-[-12.24%]" src={img1} />
            </div>
            <img alt="" className="absolute max-w-none object-cover size-full" src={img2} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={img3} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[81.35%_0_10.71%_0] leading-[20px] not-italic text-[#fefefe] text-[14px]">C / 秒針まで揃える執念</p>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[92.06%_18.37%_0_0] leading-[20px] not-italic text-[#16dbfd] text-[14px]">対価要相談</p>
      </div>
      <div className="absolute h-[252px] left-[calc(83.33%-35px)] top-[826px] w-[196px]" data-name="アイテムカード-TOP">
        <div className="absolute inset-[0_0_22.22%_0]" data-name="アイテム図">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-[-12.24%] max-w-none size-[125%] top-[-12.24%]" src={img1} />
            </div>
            <img alt="" className="absolute max-w-none object-cover size-full" src={img2} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={img3} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-[-5.1%] max-w-none size-[110.2%] top-[-5.1%]" src={img4} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[81.35%_0_10.71%_0] leading-[20px] not-italic text-[#fefefe] text-[14px]">N / 逃げ足の冷静さ</p>
        <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[92.06%_18.37%_0_0] leading-[20px] not-italic text-[#16dbfd] text-[14px]">￥888,000</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents left-[calc(16.67%+56.33px)] top-[1152px]" data-name="ブランド説明">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(16.67%+57px)] not-italic text-[#fefefe] text-[24px] text-shadow-[0px_0px_10px_#16dbfd] top-[1167.5px] whitespace-nowrap">
        <p className="leading-[normal]">emOCEANへようこそ</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(33.33%+75px)] not-italic text-[#16dbfd] text-[14px] top-[1170.5px] whitespace-nowrap">
        <p className="leading-[normal]">/ know about “emOCEAN”</p>
      </div>
      <div className="absolute h-[300px] left-[calc(16.67%+57px)] top-[1205px] w-[738px]" data-name="category">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategory} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(75%-25px)] not-italic text-[#fefefe] text-[18px] top-[1216px] whitespace-nowrap">
        <p className="leading-[normal]">心の海の、ひとしずくを</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal h-[226px] leading-[0] left-[calc(75%-25px)] not-italic text-[#fefefe] text-[14px] top-[1248px] w-[305px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">自信、聡明さ、ユーモア──</p>
        <p className="leading-[24px] mb-0">誰かが当たり前のように持っているものが、</p>
        <p className="leading-[24px] mb-0">自分には欠けている。</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px] mb-0">そんなあなたのために、</p>
        <p className="leading-[24px] mb-0">emOCEANはあります。</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px] mb-0">ここは、「性格」を扱う不思議なサイト。</p>
        <p className="leading-[24px] mb-0">他人の心の海から掬い上げられた雫が、</p>
        <p className="leading-[24px] mb-0">あなたの心に、</p>
        <p className="leading-[24px]">静かな潤いをもたらしますように。</p>
      </div>
    </div>
  );
}

function Component4({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[309px] left-[calc(16.67%+57px)] top-[1637px] w-[325px]"} data-name="カテゴリーカード">
      <div className="absolute inset-[0_0_36.57%_0]" data-name="category__img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryImg} />
      </div>
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[67.31%_88.92%_25.57%_0] justify-center leading-[0] not-italic text-[#fefefe] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">単品</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal inset-[78.64%_0_0_0] leading-[24px] not-italic text-[#fefefe] text-[14px]">ひとつの特性だけを静かに足したい時の小瓶。今の自分を大きく変えず、足りない部分にだけそっとなじませるためのアイテムです。</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents left-[calc(16.67%+56.33px)] top-[1584px]" data-name="カテゴリー">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(16.67%+57px)] not-italic text-[#fefefe] text-[24px] text-shadow-[0px_0px_10px_#16dbfd] top-[1599.5px] whitespace-nowrap">
        <p className="leading-[normal]">カテゴリー</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(25%+74px)] not-italic text-[#16dbfd] text-[14px] top-[1602.5px] whitespace-nowrap">
        <p className="leading-[normal]">/ categories</p>
      </div>
      <Component4 />
      <div className="absolute inset-[72.98%_31.18%_13.24%_46.25%]" data-name="カテゴリーカード">
        <div className="absolute inset-[0_0_36.57%_0]" data-name="category__img">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgCategoryImg} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[248.72%] left-0 max-w-none top-[-110.26%] w-full" src={imgCategoryImg1} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[67.31%_88.92%_25.57%_0] justify-center leading-[0] not-italic text-[#fefefe] text-[18px] whitespace-nowrap">
          <p className="leading-[normal]">セット</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal inset-[78.64%_0_0_0] leading-[24px] not-italic text-[#fefefe] text-[14px]">複数の特性を組み合わせ、性格の輪郭を整える調合品。一気に気分や行動の方向性を変えたい時に選ぶ、少し強めのセットです。</p>
      </div>
      <div className="absolute inset-[72.98%_5.56%_13.24%_71.88%]" data-name="カテゴリーカード">
        <div className="absolute inset-[0_0_36.57%_0]" data-name="category__img">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgCategoryImg} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[248.72%] left-0 max-w-none top-[-110.26%] w-full" src={imgCategoryImg1} />
            </div>
            <img alt="" className="absolute max-w-none object-bottom size-full" src={imgCategoryImg2} />
          </div>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold inset-[67.31%_88.92%_25.57%_0] justify-center leading-[0] not-italic text-[#fefefe] text-[18px] whitespace-nowrap">
          <p className="leading-[normal]">体験セット</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal inset-[78.64%_0_0_0] leading-[24px] not-italic text-[#fefefe] text-[14px]">性格を手に入れた感覚を、一時に試せる一過性セット。一時の物語を体験しませんか？</p>
      </div>
    </div>
  );
}

function Em1() {
  return (
    <div className="absolute inset-[47.94%_90.81%_30%_6.19%]" data-name="em">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.1703 19.4185">
        <g id="em">
          <path d={svgPaths.p26325880} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p3f00c180} fill="var(--fill-0, #FEFEFE)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Ocean1() {
  return (
    <div className="absolute inset-[35.04%_79.96%_28.41%_9.2%]" data-name="OCEAN">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.087 32.168">
        <g id="OCEAN">
          <path d={svgPaths.p1f6af680} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p8761a00} fill="var(--fill-0, #FEFEFE)" id="Vector_2" />
          <path d={svgPaths.p347b27c0} fill="var(--fill-0, #FEFEFE)" id="Vector_3" />
          <path d={svgPaths.p1739ea00} fill="var(--fill-0, #FEFEFE)" id="Vector_4" />
          <path d={svgPaths.p1f72d880} fill="var(--fill-0, #FEFEFE)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function SiteLogo1() {
  return (
    <div className="absolute contents inset-[35.04%_79.96%_28.41%_6.19%]" data-name="Site Logo">
      <Em1 />
      <Ocean1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute contents inset-[35.04%_79.96%_28.41%_6.19%]" data-name="ヘッダー：左">
      <SiteLogo1 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute contents inset-[27.27%_5.49%_27.27%_80.63%]" data-name="ヘッダー：右">
      <div className="absolute aspect-[60/60] left-[91.74%] right-[5.49%] shadow-[0px_0px_10px_0px_#16dbfd] top-[24px]" data-name="header__links">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLinks} />
      </div>
      <div className="absolute inset-[27.27%_11.04%_27.27%_86.18%] shadow-[0px_0px_10px_0px_#16dbfd]" data-name="header__links">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLinks1} />
      </div>
      <div className="absolute inset-[27.27%_16.6%_27.27%_80.63%] shadow-[0px_0px_10px_0px_#16dbfd]" data-name="header__links">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLinks2} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f4fd7e] border border-black border-solid relative size-full" data-name="トップページ">
      <Bg />
      <div className="absolute left-[-80px] size-[846px] top-[-53px]">
        <div className="absolute inset-[-23.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1246 1246">
            <g filter="url(#filter0_f_1_157)" id="Ellipse 1" opacity="0.1">
              <circle cx="623" cy="623" fill="var(--fill-0, #1663FD)" r="423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1246" id="filter0_f_1_157" width="1246" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_157" stdDeviation="100" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(41.67%+84.83px)] size-[846px] top-[986px]">
        <div className="absolute inset-[-23.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1246 1246">
            <g filter="url(#filter0_f_1_157)" id="Ellipse 1" opacity="0.1">
              <circle cx="623" cy="623" fill="var(--fill-0, #1663FD)" r="423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1246" id="filter0_f_1_157" width="1246" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_157" stdDeviation="100" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Footer />
      <Mv />
      <Side />
      <Component1 />
      <Component2 />
      <Component3 />
      <div className="absolute h-[88px] left-[-1px] top-[-1px] w-[1440px]" data-name="Header">
        <div className="absolute bg-gradient-to-r from-[#010914] inset-0 to-[#010914] via-[#223556] via-[49.519%]" data-name="header__bg" />
        <Component5 />
        <Component6 />
      </div>
    </div>
  );
}