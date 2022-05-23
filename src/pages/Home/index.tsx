import React from "react"
import PostsComponent from "../../components/posts"

const Home = () => {
  return (
    <>
      <div className="content-container">
        <div className="title-container">
          <h1 className="title">Home</h1>
        </div>
        <hr />
        <h1 className="title">Last Posts</h1>
        <PostsComponent
          title="Privacy conserns with social media"
          author="StationaryStation"
          date="09:13 @ May 23, 2022"
          content="I&apos;ve made the switch from Discord and Twitter to FOSS alternatives
        recently, and so far it has been going smoothly. On this post I am going to speak
        about my experience using those applications and how you can make the switch easily.\n
        I&apos;ve discovered Revolt.chat last week and decided to try it out since It looked prommising.
        So I made an account and joined 'Revolt Lounge', the revolt testing server. I talked a bunch,
        made friends and even got a game for free (Thanks Veiled). Then while I was surfing through
        some bios I found a intresting social media called miruku.chat.\n
        It's based on mastodon, which already is a fully free and open source software what is like twitter,
        but good. Everyone is nice to you there and there isn&apos;t any drama sorounding mastodon or miruku."
        />
        <PostsComponent
          title="Talents and Quaver"
          author="StationaryStation"
          date="1:08PM @ May 5, 2022"
          content="Hello Again, in this post I will discuss what I am going to do
        for my school&apos;s talent show and my current status as a quaver player.
        \n
        So on 26 of May 2022, my school is going to do a really neat event, a talent show.
        \n
        On this talent show you can do anything you want, as long as it is a talent that you
        have. I have a bunch of talents up of my sleeve but I think that the best talent that
        I can pull consistently is playing rhythm games like quaver and OSU!Mania. I decided to
        go with Quaver since it&apos;s a pretty underrated rhythm game that is fully open-source
        and self-hostable but still a neat little game to play nowdays.
        \n
        I once reached 20th place in my country after not playing for over a year, and now I am doing
        it again but instead of stopping at 20th place, I am going to go for 5th place, which is pretty
        hard and unlikely to happen. But atleast I can have bragging rights for reaching such an achivement.
        (I mean, I reached somehow 1st place on a map I don&apos;t even recall playing anyway, but I have an 
        achivement for doing so.)"
        />
        <PostsComponent
          title="First Place on a insterscholar sports competition"
          content="So today I was on a sports competition and got first place on my
          category, which was amazing, because I wasn&apos;t prepared bacause
          another student was going to participate but got his wrist hurt and
          couln't participate, so the teachers decided that it was fine to
          replace that student with me.
          \n
          The competition was divided in two parts: Jumping Jacks and Pushups
          \n
          I was a little bit behind the competition on the Jumping Jacks but
          absolutely dominated the competition on
          the pushups.
          \n
          After that, the results came in and I got 1st place on the B1 category
          with a whopping 69 (nice number btw)
          repetitions! Most of those repetitions were from the pushups because I
          was doing them so fast that I stopped counting.
          \n
          But the aftermath of the Jumping Jacks was worse that I imagined it.
          It was so bad in fact, that I almost fell on the stairs because I
          couldn't step correctly. (To be honest, I don't do any exercises and
          this was too sudden for my body)"
          date="9:28AM @ April 29, 2022"
          author="StationaryStation"
        />
      </div>
    </>
  )
}

export default Home
