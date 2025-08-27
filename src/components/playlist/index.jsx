import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PlayList = ({ className }) => {
  const openURL = (url) => {
    return (() => { window.open(url) });
  }

  return (
    <div className={className}>
      <ul className="list bg-base-100 rounded-box shadow-md md:w-80 overflow-y-scroll max-h-[400px]">
        <li className="p-4 pb-2 text-xl font-bold tracking-wide">3_n's playlist</li>
        <hr className="opacity-40" />
        <li className="list-row">
          <div>
            <div className="font-bold text-xl">Altale</div>
            <div className="opacity-80">Sakuzyo</div>
            <div className="font-light opacity-60">Fantasy</div>
          </div>
          <div className="flex h-full w-full flex-row-reverse place-items-center">
            <button className="btn btn-primary btn-circle" onClick={openURL("https://www.youtube.com/watch?v=ikr59Iplnlo")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="font-bold text-xl">光 無盡墜落的美麗</div>
            <div className="opacity-80">V.K</div>
            <div className="font-light opacity-60">Piano</div>
          </div>
          <div className="flex h-full w-full flex-row-reverse place-items-center">
            <button className="btn btn-primary btn-circle" onClick={openURL("https://www.youtube.com/watch?v=IxX78L9jihw")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="font-bold text-xl">Sea of Wisdom</div>
            <div className="opacity-80">Daisuke Shimizu</div>
            <div className="font-light opacity-60">Wind Symphony</div>
          </div>
          <div className="flex h-full w-full flex-row-reverse place-items-center">
            <button className="btn btn-primary btn-circle" onClick={openURL("https://www.youtube.com/watch?v=mADsHdH2a_Q")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="font-bold text-xl">Ultimate Force</div>
            <div className="opacity-80">Sakuzyo</div>
            <div className="font-light opacity-60">Speedcore</div>
          </div>
          <div className="flex h-full w-full flex-row-reverse place-items-center">
            <button className="btn btn-primary btn-circle" onClick={openURL("https://www.youtube.com/watch?v=4kYLJeouTfA")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="font-bold text-xl">To Be Vivid Stars</div>
            <div className="opacity-80">Satoshi Yagisawa</div>
            <div className="font-light opacity-60">Wind Symphony</div>
          </div>
          <div className="flex h-full w-full flex-row-reverse place-items-center">
            <button className="btn btn-primary btn-circle">
              <FontAwesomeIcon icon={faArrowRight} onClick={openURL("https://www.youtube.com/watch?v=u4BqNDor_ow")} />
            </button>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="font-bold text-xl">just carry on</div>
            <div className="opacity-80">Terence Lam</div>
            <div className="font-light opacity-60">CantoPop</div>
          </div>
          <div className="flex h-full w-full flex-row-reverse place-items-center">
            <button className="btn btn-primary btn-circle" onClick={openURL("https://www.youtube.com/watch?v=ievJesbs_fw")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PlayList;