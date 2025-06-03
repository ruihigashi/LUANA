import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import backgroundImage from "./assets/Images/white.jpg";

export default function MenuSection() {
    const [openSection, setOpenSection] = useState(null);
    const [menuType, setMenuType] = useState('single');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const singleMenus = [
        {
            title: "Cut",
            items: [
                { name: "カット", price: "¥2,750", desc: "全体のヘアカット。スタイルチェンジや整えに。\n※シャンプー&ブロー込み" },
                { name: "カット（幼児・小学生）", price: "¥1,650", desc: "全体のヘアカット。スタイルチェンジや整えに。\n※シャンプー&ブロー込み" },
                { name: "カット（中学生・高校生）", price: "¥2,200", desc: "全体のヘアカット。スタイルチェンジや整えに。\n※シャンプー&ブロー込み" },
                { name: "前髪カット", price: "¥550", desc: "前髪のみのカット。お手軽メンテナンスにおすすめ。" },
            ],
        },
        {
            title: "Color",
            items: [
                { name: "グレイリタッチ", price: "¥2,750", desc: "白髪部分のみを自然にカラーリング。\n※シャンプー&ブロー込み" },
                { name: "カラーリタッチ", price: "¥3,300", desc: "根元のカラーを整え、色をキープ。\n※シャンプー&ブロー込み" },
                { name: "グレイカラーフル（ショート）", price: "¥3,300", desc: "顎までのショートヘアに対する白髪染め全体カラー。\n※シャンプー&ブロー込み" },
                { name: "カラーフル（ショート）", price: "¥3,850", desc: "顎までのショートヘア全体を均一にカラーリング。\n※シャンプー&ブロー込み" },
                { name: "グレイカラーフル（ミディアム）", price: "¥4,400", desc: "肩につく長さまでのミディアムヘアを対象とした白髪染め全体カラー。\n※シャンプー&ブロー込み" },
                { name: "カラーフル（ミディアム）", price: "¥4,950", desc: "肩につく長さまでのミディアムヘア全体にカラーリング。\n※シャンプー&ブロー込み" },
                { name: "グレイカラーフル（ロング）", price: "¥5,500", desc: "肩甲骨までのロングヘア全体に白髪染めを施します。\n※シャンプー&ブロー込み" },
                { name: "カラーフル（ロング）", price: "¥6,050", desc: "肩甲骨までのロングヘア全体に丁寧にカラーリング。\n※シャンプー&ブロー込み" }
            ],
        },
        {
            title: "Perm",
            items: [
                { name: "パーマ", price: "¥6,600", desc: "ナチュラルなパーマスタイルに。" },

            ],
        },
        {
            title: "Straight",
            items: [
                { name: "ストレートパーマ", price: "¥11,000", desc: "髪のうねりを整え、まっすぐな仕上がりに。" },
            ],
        },
        {
            title: "Hair Care",
            items: [
                { name: "シャンプー ＆ ブロー", price: "¥1,650", desc: "洗髪後、ブローで美しく仕上げます。" },
                { name: (<><span className="text-[13px]">シャンプー ＆ ブロー ＆ トリートメント</span></>), price: "¥2,200", desc: "補修ケア＋スタイリングで美髪に。" },
            ],
        },
        {
            title: "Head spa",
            items: [
                { name: "ヘッドスパ（20分）", price: "¥2,200", desc: "シャンプー台で受ける短時間の頭皮ケア。" },
            ],
        },
        {
            title: "Relaxation",
            items: [
                { name: "ドライヘッドスパ（60分）", price: "¥5,500", desc: "ベッドで行うリラクゼーション。\n頭・首・耳・デコルテを丁寧にマッサージし、\n血流や頭痛、むくみを改善します。\n★初回のみカウンセリング30分付き" },
            ],
        },
        {
            title: "Kimono styling",
            items: [
                { name: "着付け（成人）", price: "¥8,800", desc: "成人式などの特別な日に向けた着付け。\n・日本髪：+¥2,200\n※早朝対応（午前9時前からの方）： +¥2,200" },
                { name: "着付け（男性）", price: "¥5,500", desc: "男性用の和装に合わせた着付け。\n※早朝対応（午前9時前からの方）： +¥2,200" },
                { name: "着付け（女性）", price: "¥6,600", desc: "訪問着・留袖などに対応した女性の着付け。\n・日本髪：+¥2,200\n※早朝対応（午前9時前からの方）： +¥2,200" },
                { name: "着付け（袴）", price: "¥5,500", desc: "式典や行事に適した袴の着付け。\n・日本髪：+¥2,200\n※早朝対応（午前9時前からの方）： +¥2,200" },
                { name: "着付け（浴衣）", price: "¥3,300", desc: "季節のイベント向けの浴衣着付け。\n・日本髪：+¥2,200\n※早朝対応（午前9時前からの方）： +¥2,200" },
                { name: (<><span className="inline-block ml-2">被衣（3歳）</span><br />【ヘア・メイク・着付け込み】</>), price: (<><span className="inline-block mt-[24px]">¥7,700</span></>), desc: "七五三の3歳用の被布着付け。\n・日本髪：+¥2,200\n3才メイク：+¥1,650\n※早朝料金（午前9時前からの方）： +¥2,200" },
                { name: (<><span className="inline-block ml-2">四身（7歳）</span><br />【ヘア・メイク・着付け込み】</>), price: (<><span className="inline-block mt-[24px]">¥8,800</span></>), desc: "七五三の7歳用着付け。\n・日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
                { name: (<><span className="inline-block ml-2">袴（男の子）</span><br />【セット・着付け込み】</>), price: (<><span className="inline-block mt-[24px]">¥5,500</span></>), desc: "七五三や卒園式向けの男児袴着付け。\n※早朝料金（午前9時前からの方）: +¥2,200" },
            ],
        },
    ];


    const setMenus = [
        {
            title: "Set Menu",
            items: [
                {
                    name: "カット＋カラー",
                    price: "¥4,950～",
                    desc: "カットとカラーのセットメニュー。\n髪の長さによって料金が変動いたします。\n※シャンプー＆ブロー込み"
                },
                {
                    name: "カット＋グレーカラー",
                    price: "¥5,000～",
                    desc: "カットとグレイカラー（白髪染め）のセットメニュー。\n髪の長さによって料金が変動いたします。\n※シャンプー＆ブロー込み"
                },
                {
                    name: "カット＋パーマ",
                    price: "¥8,800",
                    desc: "カットとパーマのセットメニュー。\n※シャンプー＆ブロー込み"
                },
                {
                    name: "カット＋ストレートパーマ",
                    price: "¥13,200",
                    desc: "カットとストレートパーマのセットメニュー。\n※シャンプー＆ブロー込み"
                },
            ]
        }
    ];

    const displayedMenu = menuType === 'single' ? singleMenus : setMenus;

    return (
        <section
            className="min-h-screen bg-repeat bg-center bg-fixed bg-no-repeat bg-cover py-20 px-6 md:px-12"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="max-w-4xl mx-auto text-gray-800">
                <h2 className="text-4xl font-dancing font-semibold text-center mt-12 mb-16">Menu</h2>

                <div className="flex justify-center space-x-4 mb-4">
                    <button
                        onClick={() => setMenuType('single')}
                        className={`px-6 py-2 border rounded-full font-serifjp transition
              ${menuType === 'single' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border-gray-400'}`}
                    >
                        Single
                    </button>
                    <button
                        onClick={() => setMenuType('set')}
                        className={`px-6 py-2 border rounded-full font-serifjp transition
              ${menuType === 'set' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border-gray-400'}`}
                    >
                        Set
                    </button>
                </div>

                {displayedMenu.map((section, index) => (
                    <div key={index} className={`mb-4 ${openSection === index ? '' : 'border-b border-gray-400'}`}>
                        <div
                            className="flex justify-between items-center cursor-pointer py-6"
                            onClick={() => toggleSection(index)}
                        >
                            <h3 className="text-xl font-serif font-medium">{section.title}</h3>
                            {openSection === index ? (
                                <FaChevronUp className="text-gray-600" />
                            ) : (
                                <FaChevronDown className="text-gray-600" />
                            )}
                        </div>

                        <div
                            className={`transition-all duration-700 ease-in-out overflow-hidden 
                ${openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 pb-10 px-6">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="flex flex-col justify-between min-h-[110px] space-y-2 mt-2">
                                        <div>
                                            <div className="flex justify-between gap-6">
                                                <span className="font-medium whitespace-nowrap font-serifjp">{item.name}</span>
                                                <span className="text-gray-700 whitespace-nowrap font-serifjp">{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 whitespace-pre-line text-xs font-serifjp mt-4">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <hr className="border-gray-400" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}