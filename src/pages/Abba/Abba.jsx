import Footer from "../Common/Footer";
import Header from "../Common/Header";
import PlotlyChart from "../Common/PlotlyChart";
// import LoadHtml from "../Common/LoadHtml";
import React, { useState, useEffect } from "react";
import scoreBreakdownJson from "./AbbaFigures/score_breakdown.json";
import scoreByYear from "./AbbaFigures/average_score_by_year.json";
import scoreVsPopularity from "./AbbaFigures/score_vs_popularity.json";
import logPopularity from "./AbbaFigures/log_popularity.json";
import ratedness from "./AbbaFigures/ratedness.json";

export default function Abba() {
  return (
    <>
      <Header />
      <article id="Intro" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div>
              <header>
                <h1>
                  <strong>Gimme, Gimme, Gimme</strong> (An Analysis of ABBA)
                </h1>
              </header>

              <h1>Introduction</h1>
              <p>
                A lot of people have asked me, "how would you rate all 112 ABBA
                songs?" I eventually got tired of the question, so I decided to
                answer everyone all at once. Over the course of a few weeks, I
                listened to all 112 ABBA songs, as defined by the wikipedia page
                "List of songs Recorded by ABBA" and rated each of them on a
                scale of 0-5. Additionally, I recorded the number of Spotify
                plays of each song at the time I listened to them. I then did
                some digging into the data I created. So without further ado,
                let's get started!
              </p>
            </div>
          </div>

          <h2>Rating Breakdown</h2>
          <PlotlyChart chartData={scoreBreakdownJson} />

          <p>
            As you can see I generally think ABBA is pretty good. The average
            score was 2.93, which corresponds to just below a solid score of
            three. I only gave a single song a 0, but I think it deserves it.
          </p>

          <h2>Average Score and Total Plays by Year</h2>

          <PlotlyChart chartData={scoreByYear} />

          <p>
            This isn't incredibly surprising, but it looks like ABBA was at
            their best in the late seventies and early eighties. Additionally,
            their return album in 2021 was pretty good score wise, but not
            nearly as popular as their early songs.
          </p>

          <p>
            Their best year according to score was 1978. However, that was only
            a single song that I happened to like, so it's not the best
            conclusion to draw.
          </p>

          <h2>Popularity</h2>

          <p>
            I was curious to see how my tastes aligned with the broader
            public's. To do this I plotted my scores vs spotify plays.
          </p>
          <PlotlyChart chartData={scoreVsPopularity} />

          <p>
            This didn't reveal any relationship to me, so I decided to plot my
            scores vs the log10 popularity of each song. Basically, we're going
            to be looking at how many zeros are in the number rather than the
            actual number itself.
          </p>

          <PlotlyChart chartData={logPopularity} />

          <p>
            Now things are a little clearer. It seems like there is a
            relationship between the number of zeros in the spotify plays and
            how high I rated the song. This make sense, the better the song is,
            the more people will want to listen to it.
          </p>

          <p>
            My next question was, where did I and the public, as defined by
            spotify plays, most disagree. To do this I performed a linear
            regression, a technique that tries to find a simple line that
            describes the data as best as possible. I then found how far each of
            the songs was away from this line. If a song was above this line, I
            called it underrated, because I thought it was better than the
            number of listens it had indicated. If it was below the line, I
            called it overrated, because it was played more times than it should
            be. The result of this is the following plot.
          </p>

          <PlotlyChart chartData={ratedness} />

          <p>
            The purple line is what was recovered. Interesting the line's slope
            is almost one to one between the score and the number of 0's in the
            spotify plays. A song with 10,000 listens would theoretically be 0.
            And a score with 1,000,000,000 listens would be a 5. The exact
            formula for the line is:
          </p>

          <h5>Score = 1.01 * log(popularity) - 4.15</h5>

          <p>
            The most overrated song was "When I Kissed the Teacher," which I did
            not like at all.
          </p>

          <p>
            The most underrated song was "The Day Before You Came," which I had
            never heard of before. I did think is was one of the best of the
            "sad ABBA" songs that start becoming more prevalent near the end of
            their original run.
          </p>

          <h2>Data</h2>

          <p>
            You can download all of the data, including the over- and
            under-ratedness scores by clicking here:
            <a href="ABBA Data.csv">Data</a>
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
