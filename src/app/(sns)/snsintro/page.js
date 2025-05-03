import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import '@/app/(sns)/snsintro/page.css';

const SNSIntro = () => {
  return (
    <>
      <div className="bg-sky" />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ul className="space-y-4 my-32 mx-4 md:mx-16 md:max-w-1/2">
          <li>
            <div className="avatar">
              <div className="w-24 rounded-full outline-1 outline-gray-400">
                <Image
                  className="rounded-full"
                  src="/static/sns/image/avt.jpeg"
                  alt="3_n's avatar"
                  fill
                />
              </div>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold text-center">
              3_n
            </h1>
          </li>
          <li>
            <h2 className="text-md text-center">
              Yet another ordinary person.
            </h2>
          </li>
          <li>
            <Link href="https://www.instagram.com/that_derivative_guy/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <div className="card bg-gray-500/80 shadow-xl backdrop-blur-lg">
              <div className="card-body">
                <h1 className="card-title">簡介</h1>
                <p className="text-left">
                  你好，我是3_n，可以叫我33。<br />
                  生理男，目前香港在住。<br />
                  比較喜歡聽歌，音遊苦手，也是FPS泡槍玩家。<br />
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-gray-500/80 shadow-xl backdrop-blur-lg">
              <div className="card-body">
                <h1 className="card-title">性格</h1>
                <p className="text-left">
                  內向，而且比較呆；<br />
                  不太會開話題，而且經常會飄到學業上去。<br />
                  喜歡比較少人的群組，人多或者有完全陌生的人不太習慣。<br />
                  <br />
                  沒有什麼特別雷的；<br />
                  可能雷到你的有：@@ @O@ 🥹 www 喔喔喔 🫠 😭 😋 這些。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-gray-500/80 shadow-xl backdrop-blur-lg">
              <div className="card-body">
                <h1 className="card-title">遊戲</h1>
                <ul className="pl-4 list-disc">
                  <li className="text-left">光遇</li>
                  <li className="text-left">Phigros</li>
                  <li className="text-left">ETS2</li>
                  <li className="text-left">世界計畫</li>
                  <li className="text-left">CHUNITHM</li>
                  <li className="text-left">Minecraft</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-gray-500/80 shadow-xl backdrop-blur-lg">
              <figure>
                <Image
                  src="/static/sns/image/game/sky.jpeg"
                  alt="Sky: Children of the Light"
                  width={3087}
                  height={2157}
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title">關於光遇</h1>
                <ul className="pl-4 list-disc">
                  <li className="text-left">深淵季開始玩，只有畢業表演季</li>
                  <li className="text-left">8-11翼浮動</li>
                  <li className="text-left">衣櫃沒衣服🫠</li>
                  <li className="text-left">有一個監護，僅此而已</li>
                  <li className="text-left">很少主動上線，等揪（</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-gray-500/80 shadow-xl backdrop-blur-lg">
              <figure>
                <Image
                  src="/static/sns/image/game/chu.jpg"
                  alt="CHUNITHM"
                  width={1440}
                  height={1067}
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title">關於CHUNITHM</h1>
                <ul className="pl-4 list-disc">
                  <li className="text-left">隨便摸摸，不太常玩</li>
                  <li className="text-left">目前16.1左右</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="divider">
              完結
            </div>
          </li>
          <li>
            <span className="text-sm">最後更新日：3 May 2025</span>
          </li>
          <li>
            <Link href="#" className="btn btn-sm btn-info">
              返回頂部
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SNSIntro;