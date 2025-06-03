import React, { useEffect, useState } from "react";
import { FaPhone, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";



export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // トップページへ遷移
      navigate("/");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">

        <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
          {/* ロゴ */}
          <div onClick={handleClick} className=" flex flex-col items-center text-center cursor-pointer">
            <p className="text-xs text-gray-500 tracking-widest font-great">Hair Salon</p>
            <h1 className="text-lg font-luana tracking-widest text-gray-700">
              LUANA • S • MIRUTO
            </h1>
          </div>

          {/* ナビゲーション + ハンバーガー */}
          <div className="flex items-center space-x-4 te">
            <nav className="hidden md:flex space-x-6 items-center">
              {location.pathname === "/" && (
                <ul className="flex space-x-4 items-center text-sm text-gray-700">
                  <li className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("introtext")}>サロンについて</li>
                  <li className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("menu")}>メニュー</li>
                  <li className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("map")}>マップ</li>
                  <li className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("guidance")}>インフォメーション</li>
                </ul>
              )}

              <a
                href="tel:0986668248"
                className="flex items-center text-sm text-gray-700 hover:text-blue-300"
              >
                <FaPhone className="mr-1" />
                0986-66-8248
              </a>
              {/* <a
                href="https://www.instagram.com/your_instagram_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-xl hover:text-blue-blue-300 transition"
              >
                <FaInstagram />
              </a> */}
            </nav>

            {/* ハンバーガー（モバイル右配置） */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-gray-800 text-2xl ml-auto"
              aria-label="メニューを開く"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* モバイル用ドロワーメニュー（右） */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black/70 backdrop-blur-sm text-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end px-6 py-4">
          <button onClick={() => setMenuOpen(false)} className="text-3xl text-white">
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col px-6 space-y-6 text-lg tracking-widest uppercase">
          {location.pathname === "/" && (
            <>
              <li className="border-b border-white/30 pb-2 cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("introtext")}>
                Concept
              </li>
              <li className="border-b border-white/30 pb-2 cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("menu")}>
                Menu
              </li>
              <li className="border-b border-white/30 pb-2 cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("map")}>
                Access
              </li>
            </>
          )}
          <li className="border-b border-white/30 pb-2 cursor-pointer hover:text-blue-300" onClick={() => scrollToSection("guidance")}>
            Information
          </li>
        </ul>

        <div className="flex justify-center items-center gap-14 mt-12">
          {/* 電話番号 + MIYAZAKI */}
          <div className="flex flex-col items-center text-center">
            <a href="tel:0986668248" className="inline-flex hover:text-blue-300 items-center text-white text-lg space-x-2">
              <FaPhone />
              <span>0986-66-8248</span>
            </a>
            <p className="text-sm text-gray-300 mt-1">MIYAZAKI</p>
          </div>

          {/* Instagramリンク */}
          <a
            href="https://www.instagram.com/your_instagram_id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 text-5xl"
          >
            <FaInstagram />
          </a>
        </div>


        {/* オンライン予約ボタン */}
        <div className="flex justify-center mt-10">

          <a
            href="https://lin.ee/YTdqlsft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl border border-white px-6 py-2 text-white hover:bg-white hover:text-blue-300 transition"
          >
             Reserve
          </a>
        </div>
      </div>

      {/* 背景オーバーレイ */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
