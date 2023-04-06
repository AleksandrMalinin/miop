import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import styles from "@/styles/Album.module.css"
import Link from "next/link"
import albums from "../../public/albums.json"

export default function Album() {
  const router = useRouter()
  const { slug } = router.query
  const album = albums[slug as keyof typeof albums]
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
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
                layout='fixed'
                width={1}
                height={1}
                priority
                aria-hidden='true'
                style={{ display: "none" }}
              />

              <Image
                src={
                  isHovered ? `/images/${slug}_2.png` : `/images/${slug}_1.png`
                }
                alt={`${album.title} cover`}
                width={400}
                height={400}
                priority
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />

              <div className={styles["album-info"]}>
                <p className={styles["album-title-wrap"]}>
                  <span className={styles["album-title"]}>
                    {album.title}&nbsp;
                    <i className={styles["album-duration"]}>{album.duration}</i>
                  </span>
                  <span>EP, {album.year}</span>
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
  )
}
