import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Names() {
  return (
    <>
      <Header />
      <article id="Intro" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div>
              <header>
                <h1>
                  <strong>Name Popularity and Age Guessing</strong>
                </h1>
              </header>

              <h1>Introduction</h1>
              <p>
                I've embedded an app that I've made for guessing someone's age
                based just off their name below. If the embedding doesn't work
                it should be available{" "}
                <a href="https://name-popularity.streamlit.app/">
                  <strong>Here</strong>
                </a>
                . Below the app I have some explanation of how it works.
              </p>
            </div>
          </div>
          <iframe
            src="https://name-popularity.streamlit.app/?embedded=true"
            width="100%"
            height="1080px"
          ></iframe>

          <h2>How It Works</h2>
          <p>
            In it's most basic form, we are just using the probability of a
            person being born in a certain year combined with the probability of
            a person in a given year being given that name. The default example
            is my name, Spencer. You can see that the name was most popular from
            1990 to 2001. This gives us a probability distribution of when I was
            born given my name.
          </p>

          <p>
            The other piece of information is the population pyramid of the
            United States. This tells us the current age of everyone currently
            living in the United States. For example, about 5% of the current
            population was born between 1961 and 1965 while only 2% of the
            current population was born between 1941 and 1945.
          </p>

          <p>
            To make an estimated age we combine these probability densities to
            get the chance of a person with a given name being born in a certain
            year. We then take the expected value of that distribution which
            gives us an estimate of their birth year.
          </p>

          <h2>Details</h2>
          <h3>Historically Popular Names Don't Work Well</h3>
          <p>
            This doesn't work as well with certain names. For example, Peter has
            been popular over a long period of time. And while the population
            pyramid helps limit our guesses to a more reasonale time period,
            there is such a long period that we could possibly be drawing from
            there is not much information.
          </p>

          <p>
            On the other hand, certain names have a much narrower window where
            they were popular. For girls, Bella has really only been popular
            since 2004. So we have a much more limited window that we have to
            guess from. So trendy names like this are more reflective of when a
            person was born.
          </p>
          <h3>Adding Friends Improves Accuracy</h3>
          <p>
            We can improve the accuracy of our guess by adding friends or family
            members born around the same time. This improves the accuracy of our
            estimation if they were born around the same time because we can
            incorporate the additional information of their friends names.
          </p>

          <p>
            For example, if we have someone named Will. We estimate they were
            born in 1975. This is because the name has been popular for a long
            time and was more popular in the past than it is in the present.
            However, if we know this Will has a friend named Braden, then we can
            improve our estimate. Adding Braden changes the estimation to 2001
            which may be more accurate in this case. However, this technique
            relies on us knowing about a given person's relationships.
          </p>

          <h3>Data is Limited to the US</h3>

          <p>
            The data was limited to births recorded in the United States of
            America and shared by the CDC. Additionally, only names with at
            least 5 people given that name on a given year were included to
            protect privacy.
          </p>

          <p>
            This means that the estimation will misrepresent foreign names and
            names that are especially uncommon.
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
