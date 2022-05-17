import React from "react"
import PostsComponent from "../../components/posts"

const Home = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="title">Home</h1>
      </div>
      <hr />
      <h1 className="title">Last Posts</h1>
      <PostsComponent
        title="First Place on a insterscholar sports competition"
        content="So today I was on a sports competition and got first place on my
          category, which was amazing, because I wasn&apos;t prepared bacause
          another student was going to participate but got his wrist hurt and
          couln't participate, so the teachers decided that it was fine to
          replace that student with me.
          
          The competition was divided in two parts: Jumping Jacks and Pushups

          I was a little bit behind the competition on the Jumping Jacks but
          absolutely dominated the competition on
          the pushups.
          
          After that, the results came in and I got 1st place on the B1 category
          with a whopping 69 (nice number btw)
          repetitions! Most of those repetitions were from the pushups because I
          was doing them so fast that I stopped counting.

          But the aftermath of the Jumping Jacks was worse that I imagined it.
          It was so bad in fact, that I almost fell on the stairs because I
          couldn't step correctly. (To be honest, I don't do any exercises and
          this was too sudden for my body)
          "
          date="9:28AM @ 29 of April, 2022"
          author="StationaryStation"
        /> 
    </>
  )
}

export default Home
