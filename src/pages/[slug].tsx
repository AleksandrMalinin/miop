import { GetStaticProps, GetStaticPaths } from "next"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Album.module.css"
import Link from "next/link"
import albums from "../../public/albums.json"

interface Album {
  title: string
  type: string
  duration: string
  year: string
  description: string
  credits: {
    designer: string
    mastering: string
  }
}

interface Props {
  album: Album
}

export default function Album({ album }: Props) {
  const router = useRouter()
  const { slug } = router.query
  const [isHovered, setIsHovered] = useState(false)
  const [showBackCover, setShowBackCover] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileUserAgent =
        /mobile|iphone|ipod|ipad|android|blackberry|webos|windows phone|iemobile|opera mini/i.test(
          userAgent
        )
      setIsMobile(isMobileUserAgent)
    }
  }, [])

  const handleImageClick = () => {
    setShowBackCover(!showBackCover)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <Head>
        <title>miop • {slug}</title>
        <meta
          name='description'
          content={`${album.title}(${album.type}, ${album.year}) by miop`}
        />
        <meta
          name='keywords'
          content={`miop, miop.artist, miop-artist, ${album.title}`}
        ></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' href='/favicon.png' sizes='32x32' />
      </Head>
      <main className={styles.main}>
        <div className={styles.screen}>
          <nav className={styles.header}>
            <Link href='/' dangerouslySetInnerHTML={{ __html: "&lt; miop" }} />
          </nav>

          <section className={styles.album}>
            {album ? (
              <>
                <Image
                  src={`/images/${slug}_2.png`}
                  alt=''
                  width={1}
                  height={1}
                  priority
                  aria-hidden='true'
                  style={{ display: "none" }}
                />

                <Image
                  src={
                    isHovered
                      ? `/images/${slug}_2.png`
                      : `/images/${slug}_1.png`
                  }
                  alt={`${album.title} cover`}
                  width={400}
                  height={400}
                  priority
                  onClick={isMobile ? handleImageClick : undefined}
                  onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                  onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                />

                <div className={styles["album-info"]}>
                  <p className={styles["album-title-wrap"]}>
                    <span className={styles["album-title"]}>
                      {album.title}&nbsp;
                      <i className={styles["album-duration"]}>
                        {album.duration}
                      </i>
                    </span>
                    <span>
                      {album.type}, {album.year}
                    </span>
                  </p>

                  <p className={styles["album-description"]}>
                    {album.description}
                  </p>

                  <div className={styles.credits}>
                    <p>
                      cover:&nbsp;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: album.credits.designer
                        }}
                      ></span>
                    </p>
                    <p>
                      mastering:&nbsp;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: album.credits.mastering
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <p>album not found.</p>
            )}
          </section>

          <div className={styles.socials}>
            <a
              href='https://linktr.ee/miop.artist/'
              target='_blank'
              className={styles.listen}
            >
              listen
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  // @ts-ignore
  const album = albums[slug]

  return {
    props: {
      album
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(albums).map((slug) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false
  }
}
