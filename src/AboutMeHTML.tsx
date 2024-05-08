import { useRef } from 'react';
import gsap from 'gsap';
import styles from './Designs/AboutMeDesign.module.css'
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

export function AboutMeHTML() {
    return (
        <>
        <div className={styles.desktop2}>
        <div className={styles.PaperCover}>
        <div className={styles.flexContainer }>
            <div className={styles.flexCover}>
              <img className={styles.photocardIcon} alt="" src={PhotoCard} />
            </div>

            <div className={styles.flexCover}>
              <p className={styles.introduction}>I've been primarily learning C language for two and a half years, and I've also studied C++, CSS, HTML, React, TypeScript, and JavaScript. I'm interested in front-end engineering and design.</p>
            </div>

            <div className={styles.flexCover}>
              <div className={styles.Myname}>ayumi Kimura</div>
              <div className={styles.socialIcons}>
                <img className={styles.githubimgIcon} alt="" src={GitHubIcon} />
                <img className={styles.instagramimgIcon} alt="" src={InstagramIcon} />
              </div>
            </div>
            
            <div className={styles.flexCover}>
              <p className={styles.skills}>Skills</p>
              <div className={styles.languageimg}>
                <img className={styles.icon} alt="" src={ReactImage} />
                <img className={styles.icon} alt="" src={C_plusImgae} />
                <img className={styles.icon} alt="" src={JavaScriptImage} />
                <img className={styles.icon} alt="" src={HTMLImage} />
                <img className={styles.icon} alt="" src={CssImage} />
                <img className={styles.icon} alt="" src={TypeScriptImage} />
                <img className={styles.icon} alt="" src={FigmaImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}