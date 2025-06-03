import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import background from "../assets/Images/white.jpg"
import Menu from "../assets/Images/menuCard.jpg"
import { Link } from "react-router-dom";


export default function IntroText() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const menuData = [
    {
      title: "Cut",
      items: [
        { label: "カット", price: "¥2,750" },
        { label: "カット（中学生・高校生）", price: "¥2,200" },
        { label: "カット（小学生）", price: "¥1,650" },
        { label: "前髪カット", price: "¥550" },
      ],
    },
    {
      title: "Color",
      items: [
        { label: "グレーリタッチ", price: "¥2,750" },
        { label: (<><span className="text-[14px]">グレーカラーフル（ショート）</span></>), price: "¥3,300" },
        { label: (<><span className="text-[14px]">グレーカラーフル（ミディアム）</span></>), price: "¥4,400" },
        { label: (<><span className="text-[14px]">グレーカラーフル（ロング）</span></>), price: "¥5,500" },
        { label: "カラーリタッチ", price: "¥3,300" },
        { label: "カラーフル（ショート）", price: "¥3,850" },
        { label: "カラーフル（ミディアム）", price: "¥4,950" },
        { label: "カラーフル（ロング）", price: "¥6,050" },
      ],
    },
    {
      title: "Kimono styling",
      items: [
        { label: "着付け（成人）", price: "¥8,800" },
        { label: "着付け（男性）", price: "¥5,500" },
        { label: "着付け（女性）", price: "¥6,600" },
        { label: "着付け（袴）", price: "¥5,500" },
        { label: "四身（7歳）", price: "¥8,800" },
        { label: <span className='text-sm -mt-4 block'>【ヘア・セット・着付け込み】</span> },
        { label: "被布（3歳）", price: "¥7,700" },
        { label: <span className='text-sm -mt-4 block'>【ヘア・セット・着付け込み】</span> },
        { label: "袴（男の子）", price: "¥5,500" },
        { label: <span className='text-sm -mt-4 block'>【セット・着付け込み】</span> },
      ],
    },
  ];

  return (
    <section
      className="py-12 text-center px-4 bg-repeat bg-center bg-blend-overlay"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-4xl font-semibold mb-8 text-gray-700 font-dancing">
        Concept
      </h2>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" >
        <p className="text-lg mb-8 text-gray-700">癒しを求めるなら LUANA・S・MIRUTO へ</p>
        <p className="text-base text-gray-700 mb-8">
          「LUANA」はハワイ語で <br />
          「くつろぐ」 「満足する」 などの意味を持ち、<br />
          「MIRUTO」は「柔和な・やさしい」といった<br />
          想いが込められた言葉です。
        </p>

        <p className="text-base text-gray-700 mb-8">
          私たちは、この店名に込めた意味の通り、<br />
          お客様が心からリラックスできるような<br />
          あたたかみのある空間づくりを大切にしています。<br />
          初めての方でも安心してご来店いただける、<br />
          アットホームな美容室を目指しています。
        </p>

        <p className="text-base text-gray-700 font-semibold text-lg">
          【ご予約はこちらのLINEから】
        </p>

        <div className="mt-2 text-center">
          <p className="text-base text-gray-700 mb-2 text-xl">↓　↓　↓</p>
          <a
            href="https://lin.ee/YTdqlsft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:text-blue-300 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            LINEで予約する
          </a>
        </div>
      </div>



      <div className="max-w-5xl mx-auto mt-8" id="menu">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide text-gray-700">
          Menu
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="my-5 border-t-2 border-blue-900 rounded-full" />
      </div>

      <div
        className="max-w-5xl mx-auto my-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="p-7 bg-cover bg-no-repeat bg-center rounded-xl shadow-2xl border border-blue-200 backdrop-blur-sm"
            style={{ backgroundImage: `url(${Menu})` }}
          >
            <div className="mb-10">
              <h4 className="text-xl font-bold  text-blue-600 border-b border-blue-300 inline-block mb-8 font-serifjp">
                {menu.title}
              </h4>
              <div className="space-y-3 max-w-sm mx-auto">
                {menu.items.map((item, idx) => (
                  item.price ? (
                    <div key={idx} className="flex justify-between font-serifjp text-gray-700">
                      <span>{item.label}</span>
                      <span>{item.price}</span>
                    </div>
                  ) : (
                    <div key={idx} className="text-left pr-4 -mt-2 text-sm text-gray-500">
                      {item.label}
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex justify-end items-end flex-col text-right">

          <div className="relative pl-4 py-2 px-14 font-serif text-2xl border-l-4 border-b border-gray-800">
            <Link
              to="/menu"
              className="text-gray-800 hover:text-blue-300 font-semibold tracking-wide transition font-serif"
            >
              Menu More...
            </Link>
          </div>
        </div>
      </div>



      <div className="max-w-5xl mx-auto" id="map">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide text-gray-700">
          Map
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="my-5 border-t-2 border-blue-900 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto rounded overflow-hidden shadow-lg mb-10">
        <iframe
          src="https://www.google.com/maps?q=31.7208788, 131.08945698&hl=ja&z=16&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>


    </section>
  );
}
