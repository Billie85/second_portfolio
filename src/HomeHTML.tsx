import { useRef } from 'react';
import gsap from 'gsap';
import styles from './Designs/Home.module.css';
import AboutMe from './Designs/AboutMeDesign.module.css'
import FontDesign from './Designs/FontDesign.module.css';
import kirakiraImage from './imgs/kirakira.png';
import GreenImage from './imgs/green.png';
import eyeImage from './imgs/eye.png';
import BlackImage from './imgs/blackPaper.jpg';
import PhotoCard from './imgs/photoCard.png';
import ReactImage from './imgs/react.png';
import C_plusImgae from './imgs/c++_img.png';
import JavaScriptImage from './imgs/js.png';
import HTMLImage from './imgs/html_img.png'
import CssImage from './imgs/css_img.png'
import TypeScriptImage from './imgs/typescriptimg.png'
import FigmaImage from './imgs/figma.png'
import GitHubIcon from './imgs/githubicon.png'
import InstagramIcon from './imgs/instagram_icon.png'

export function HomeHTML() {
  return (
    <>
      <h1 className={styles.counter}>0</h1>
      <div className={styles.overlay}>
        {[...Array(14)].map((_, index) => (
          <div key={index} className={styles.bar}></div>
        ))}
      </div>
      
      <div className={styles.HomeWindow}>
        <nav className={styles.HeaderMain}>
          <a className={styles.HeaderFont} href="#">Home</a>
          <a className={styles.HeaderFont} href="#">About</a>
          <a className={styles.HeaderFont} href="#">Contact</a>
        </nav>
        <div className={FontDesign.desktop1}>
          <img className={styles.blackpaper1Icon} alt="" src={BlackImage} />
          <div className={FontDesign.portfoliofont}>
            <div className={FontDesign.p}>P</div>
            <div className={FontDesign.o}>o</div>
            <div className={FontDesign.r}>R</div>
            <div className={FontDesign.t}>T</div>
            <div className={FontDesign.f}>F</div>
            <img className={FontDesign.kirakira1Icon} alt="" src={kirakiraImage} />
            <img className={FontDesign.kirakira2Icon} alt="" src={kirakiraImage} />
            <div className={FontDesign.o1}>O</div>
            <div className={FontDesign.l}>L</div>
            <div className={FontDesign.i}>I</div>
            <div className={FontDesign.o2}>O</div>
            <img className={FontDesign.eye1Icon} alt="" src={eyeImage} />
            <img className={FontDesign.eye2Icon} alt="" src={eyeImage} />
          </div>
          <img className={FontDesign.greenimgRemovebgPreview1Icon} alt="" src={GreenImage} />
        </div>
      </div>
    </>
  );
}
