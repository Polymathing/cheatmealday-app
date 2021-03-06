import React from "react";
import Lottie from "react-lottie";
import * as loading from "./loading.json";
import * as done from "./done.json";
import { Helmet } from "react-helmet";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: done.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Loading = ({ loading }) => {

  return (
    <div className="loading-img">
      <Helmet bodyAttributes={{ style: 'background-color : #1f1e1e' }} />
      {!loading ? (
        <Lottie options={defaultOptions} height={350} width={350} />
      ) : (
        <div><Lottie options={defaultOptions2} height={350} width={350} /></div>
      )}
    </div>
  )
}

export default Loading;