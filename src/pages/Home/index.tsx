import React from "react"

const Home = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="title">Home</h1>
      </div>
      <hr />
      <h1 className="title">Last Posts</h1>
      <div className="post-container">
        <h3 className="title bold">
          First place on a interscholar sports competition
        </h3>
        <code className="metadata">
          <span className="statement">Written by:</span> Raul (Station) Perez{" "}
          <span className="var">@</span> | <span className="func">9:28AM</span>{" "}
          | 29 | April | 2022 |
        </code>
        <p className="content">
          So today I was on a sports competition and got first place on my
          category, which was amazing, because I wasn&apos;t prepared bacause
          another student was going to participate but got his wrist hurt and
          couln't participate, so the teachers decided that it was fine to
          replace that student with me.{" "}
        </p>
        <p className="content">
          The competition was divided in two parts: Jumping Jacks and Pushups
        </p>
        <p className="content">
          I was a little bit behind the competition on the Jumping Jacks but
          absolutely <span className="bold">dominated</span> the competition on
          the pushups.
        </p>
        <p className="content">
          After that, the results came in and I got 1st place on the B1 category
          with a whopping <span className="bold">69</span> (nice number btw)
          repetitions! Most of those repetitions were from the pushups because I
          was doing them so fast that I stopped counting.
        </p>
        <p className="content">
          But the aftermath of the Jumping Jacks was worse that I imagined it.
          It was so bad in fact, that I almost fell on the stairs because I
          couldn't step correctly. (To be honest, I don't do any exercises and
          this was too sudden for my body)
        </p>
      </div>
    </>
  )
}

export default Home
