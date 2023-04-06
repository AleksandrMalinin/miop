import React, { useState, useEffect } from "react"
import Head from "next/head"
import { Link as ScrollLink, Element } from "react-scroll"
import Link from "next/link"
import styles from "@/styles/Home.module.css"
import albums from "../../public/albums.json"

export default function Home() {
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = () => setIsPressed(true)
  const handleMouseUp = () => setIsPressed(false)

  return (
    <>
      <Head>
        <title>miop</title>
        <meta
          name='description'
          content='miop is an electronic musician who works at the intersection of techno and ambient music.'
        />
        <meta name='keywords' content='miop, miop.artist, miop-artist'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' href='/favicon.png' sizes='32x32' />
      </Head>
      <main className={styles.main}>
        <div className={styles.screen}>
          <nav className={styles.header}>
            <ScrollLink to='releases' smooth={true} duration={500}>
              releases
            </ScrollLink>
            <ScrollLink to='about' smooth={true} duration={500}>
              about
            </ScrollLink>
          </nav>

          <div className={styles.title}>
            <h1
              className={styles[`${isPressed ? "animated-text" : ""}`]}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              miop
            </h1>
          </div>
        </div>

        {/* releases */}
        <Element className={styles.screen} name='releases'>
          <div className={styles.releases}>
            {Object.keys(albums).map((slug, index) => (
              <Link
                key={slug}
                href='/[slug]'
                as={`/${slug}`}
                className={styles[`${index === 0 ? "releases-active" : ""}`]}
              >
                {albums[slug as keyof typeof albums]?.title}{" "}
                <span>{albums[slug as keyof typeof albums]?.year}</span>
              </Link>
            ))}
          </div>
        </Element>

        <Element className={styles.screen} name='about'>
          <p className={styles.about}>
            hi stranger, i&rsquo;m mi☮p, a&nbsp;lisbon-based electronic musician
            originally from st. petersburg.
            <br />
            from time to&nbsp;time, in&nbsp;bursts, i create electronic music,
            finding myself at&nbsp;the intersection of techno, drone, and
            ambient. often, i&nbsp;do this intuitively, as&nbsp;if swimming
            underwater and occasionally surfacing to&nbsp;feel new waves.
            <br />i allow myself to&nbsp;mimic, mishear, and be&nbsp;mistaken
            because, in&nbsp;the end, i&rsquo;m searching for something. and
            you?
          </p>

          <div className={styles.socials}>
            <div>
              <a href='https://www.instagram.com/miop.artist/' target='_blank'>
                inst•
              </a>
              <a href='https://t.me/bogart_coder/' target='_blank'>
                tg•
              </a>
            </div>

            <a
              href='https://linktr.ee/miop.artist/'
              target='_blank'
              className={styles.listen}
            >
              listen
            </a>
          </div>
        </Element>
      </main>
    </>
  )
}
