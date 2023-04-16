import React from 'react';
import './LANDINGPAGE.css';
import ImgAsset from '../src/public';
import { Link } from 'react-router-dom';
export default function LANDINGPAGE() {
  return (
    <div className="LANDINGPAGE_LANDINGPAGE">
      <img className="Rectangle8" src={ImgAsset.LANDINGPAGE_Rectangle8} />
      <img className="logoIbeReality" src={ImgAsset.LANDINGPAGE_logoIbeReality} />
      <img className="SIOCA11" src={ImgAsset.CHECKPAGE_SIOCA11} />
      <span className="Takingcareofyourdentalhealthisourdedication">Taking care of your dental health is our dedication</span>
      <span className="DoroutinedentalcheckupsfromanywhereandanytimeeasilywithSIOCAHavehealthyteethandkeeponlaughingfreely">
        Do routine dental check-ups from anywhere and anytime easily with SIOCA. Have healthy teeth and keep on laughing freely.
      </span>
      <Link to="/checkpage">
        <div className="Frame1">
          <span className="CHECKNOW">CHECK NOW</span>
        </div>
      </Link>
      <div className="Rectangle11" />
      <div className="Rectangle9" />
      <div className="Rectangle10" />
      <div className="Maskgroup">
        <div className="Rectangle13" />
        <img className="Rectangle12" src={ImgAsset.LANDINGPAGE_Rectangle12} />
      </div>
      <span className="smilefreelybeconfidence">
        smile freely :)
        <br />
        be confidence
      </span>
      <div className="Group38">
        <img className="Vector3" src={ImgAsset.LANDINGPAGE_Vector3} />
        <img className="Vector10" src={ImgAsset.LANDINGPAGE_Vector10} />
        <img className="Vector8" src={ImgAsset.LANDINGPAGE_Vector8} />
        <img className="Vector7" src={ImgAsset.LANDINGPAGE_Vector7} />
        <img className="Vector4" src={ImgAsset.LANDINGPAGE_Vector4} />
        <img className="Vector5" src={ImgAsset.LANDINGPAGE_Vector5} />
        <img className="Vector6" src={ImgAsset.LANDINGPAGE_Vector6} />
        <img className="Vector9" src={ImgAsset.LANDINGPAGE_Vector9} />
      </div>
      <div className="Group39">
        <img className="Vector3_1" src={ImgAsset.LANDINGPAGE_Vector3_1} />
        <img className="Vector10_1" src={ImgAsset.LANDINGPAGE_Vector10_1} />
        <img className="Vector8_1" src={ImgAsset.LANDINGPAGE_Vector8_1} />
        <img className="Vector7_1" src={ImgAsset.LANDINGPAGE_Vector7_1} />
        <img className="Vector4_1" src={ImgAsset.LANDINGPAGE_Vector4_1} />
        <img className="Vector5_1" src={ImgAsset.LANDINGPAGE_Vector5_1} />
        <img className="Vector6_1" src={ImgAsset.LANDINGPAGE_Vector6_1} />
        <img className="Vector9_1" src={ImgAsset.LANDINGPAGE_Vector9_1} />
      </div>
    </div>
  );
}
