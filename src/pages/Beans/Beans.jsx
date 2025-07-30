import Footer from "../Common/Footer";
import Header from "../Common/Header";
import PlotlyChart from "../Common/PlotlyChart";

import beanAreaCompactness from "./BeansFigures/bean_area_compactness.json";
import pca2d from "./BeansFigures/pca2d.json";
import pca3d from "./BeansFigures/pca3d.json";
import pca2dWithCenters from "./BeansFigures/pca2d_with_centers.json";
import pca3dWithCenters from "./BeansFigures/pca3d_with_centers.json";

import pca2dWhiten from "./BeansFigures/pca2d_whiten.json";
import pca3dWhiten from "./BeansFigures/pca3d_whiten.json";

import beansImg from "./BeansFigures/beans.png";

export default function Beans() {
  return (
    <>
      <Header />
      <article id="Intro" class="wrapper style1">
        <div class="container">
          <div class="row">
            <div>
              <header>
                <h1>Using Clustering and a Neural Network to Classify Beans</h1>
              </header>

              <h2>Introduction</h2>
              <p>Let's talk about beans.</p>

              <img src={beansImg} style={{ margin: "2em" }}></img>

              <p>
                That's right Gob, beans. They're the little hard things that
                people boil until they're soft and then eat. They're full of
                protein and they taste pretty good. You can boil them, mash and
                refry them, and even stick them in a soup. They're pretty
                versatile. But how do you tell what type of bean is what? Some
                researchers, Murat Koklu and Ilker Ali Ozkan, wanted to teach
                computers how to tell apart different kind of beans. They made a
                computer vision system which can tell us 16 things about beans.
                This information includes things like area, the length of the
                bean, the roundness, and an additional four quantified
                descriptors called shape factors. There are seven different
                types of beans that we are trying to distinguish. But this task
                isn't necessarily simple. Let's look at some plots to see why.
              </p>

              <PlotlyChart chartData={beanAreaCompactness} />

              <p>
                Looking at this graph, we have a lot of overlap in our beans.
                The bombay beans are further out, but the rest tend to cluster
                together pretty closely. This means that any technique we apply
                will have difficulty separating these beans from each other. But
                thankfully, we have 14 more dimensions we can look at.
                Unfortunately, our monitors have difficulty showing even four
                dimensional images. We can mitigate this problem using something
                called Principal Component Analysis (PCA).
              </p>

              <h3>Principal Component Analysis</h3>

              <p>
                Principal component analysis is a technique that we can use to
                reduce the number of important dimensions in our data. The
                technique works by finding a combination of dimensions that vary
                the most. For example, if the area and the length of the bean
                varied much more than the other variables, we might get a
                principal component that is nearly a one-to-one combination of
                those two variables. This means that instead of having two big
                variables, we can explain that change with only one variable
                which is a combination of those two. This a very simplistic
                explanation of PCA. For a more thorough explanation check out
                this YouTube video
                <a href="https://www.youtube.com/watch?v=FgakZw6K1QQ">here</a>
              </p>

              <p>
                The upside of all that is that we can perform PCA on our bean
                data to get two variables which explains the most about the
                variance in our data and is easy to plot. So here's what we get:
              </p>

              <PlotlyChart chartData={pca2d} />

              <p>
                We can see the beans are still pretty clustered. The Bombay
                beans are off doing their own thing but the rest are pretty
                tightly clumped. This means that two principal components are
                not enough to separate our data. So what if we try three?
              </p>

              <PlotlyChart chartData={pca3d} />

              <p>
                If you look around, you can see that they're still clustered,
                but that they seem to have sort of their own regions in 3D
                space. This is good news, because it will mean that we can
                separate our data and we should be able to classify them. So
                let's try some classification.
              </p>

              <h2>k-means Clustering</h2>

              <p>
                <i>k</i>-means clustering is a process where we try to breakup
                our data into k clusters. This is an unsupervised learning
                algorithm, which means we don't tell it the labels we're trying
                to predict, we just see what it can uncover on its own. So,
                after finding the clusters we will project back into PCA space
                so that we can see the results. So without further ado, here are
                our clusters in two and three dimensions:
              </p>

              <PlotlyChart chartData={pca2dWithCenters} />
              <PlotlyChart chartData={pca3dWithCenters} />

              <p>
                It looks like this algorithm is having some difficulty with this
                data. It thinks that the Bombay cluster is actually two separate
                clusters. It makes sense since that cluster is so much larger
                than the others, but it isn't very help for classification. In
                three dimensions it looks a little bit better if you click on
                the legend to only look at certain types of beans at once. So it
                might work, but in three dimensions we don't have enough
                information to accurately classify these beans. So let's trying
                something more advanced.
              </p>

              <h2>Neural Networks</h2>

              <p>
                That's right, we're going to use a neural network to classify
                beans. It's not much but it's honest work. Just a quick word,
                neural networks, work by having lots of little nodes, these
                nodes receive an input, which is weighted, and then transformed
                into an output. The simplest version of this might just be to
                add together all of the input and pass that on. We use lots of
                these nodes to to form a network with multiple layers. And if we
                have enough of these nodes we can learn most functions. How do
                we learn you ask? We train the network. We make lots of
                predictions and then see how wrong we are. We then change the
                weights in the node so that we're a little bit more right. If we
                do this for long enough, the network learns what it's
                representing and can make accurate predictions.
              </p>

              <p>
                If you're wondering about the technical details, here they are.
                I used tensorflow and keras to create a neural network with 16
                inputs. I used three dense hidden layers with 128 nodes each.
                The first layer used relu for its activation function and the
                last two used a sigmoid activation function. Finally, the output
                layer was another layer with seven outputs which was transformed
                into a probability of each bean using softmax. I used
                categorical crossentropy for the loss function, and the adam
                optimizer for training. I trained each model for 20 epochs and
                had withheld 1/4 of the data for testing.
              </p>

              <h2>Training Results</h2>

              <p>
                The first model I trained, after normalizing the data, only had
                an accuracy of 63% which is fairly low. Looking at the
                classification report, the model was able to classify some beans
                with 100% accuracy, while for one it was as low as 24%. So
                there's a lot of room to improve since the the original
                researchers were able to get accuracy as 93%.
              </p>

              <p>
                So what did I do next? Well, all that talk about principal
                component analysis is going to come back now. PCA can be used to
                reduce the dimensionality of your dataset, but it can also be
                used to preprocess it so that your machine learning algorithms
                can work a little better. So instead of training my next network
                on the raw data I performed PCA and whitening. What is
                whitening? If you remember how I said that PCA finds
                combinations of variables that explain the most variance in the
                data. We can create the same number of these combinations as
                original variables. So we're going to make 16 of these principal
                components. We can take these combinations and normalize them so
                they're all the same size. This means that they all have the
                same variance. Intuitively, this means that smaller difference
                are now just as important as large differences. And since we're
                trying to classify these beans which are very closely related,
                these small difference may be very important.
              </p>

              <p>
                So how well did whitening work? The network was able to achieve
                96% accuracy. This is three points higher than they were able to
                in their original paper. We can check out the whitened versions
                of the PCA beans in the figures below to see why this works a
                little.
              </p>
              <PlotlyChart chartData={pca2dWhiten} />
              <PlotlyChart chartData={pca3dWhiten} />

              <p>
                They look very similar to what we have above. But if you look at
                the axes, you can see that they are much smaller. Instead of
                going to several thousand, they only go from -1 to 7. This makes
                it much easier for the neural network to train on this data and
                also helps separate the clouds in higher dimensions.
              </p>

              <h2>Conclusion</h2>

              <p>
                My neural network was able to achieve an accuracy of 96%. This
                is slightly higher than what was previously reported in the
                paper. I was able to achieve this result using PCA and whitening
                to preprocess the data. K-mean clustering was not able to very
                reliably cluster these beans by type.
              </p>

              <h2>Sources</h2>

              <p>
                The data and original bean paper was written by Murat Koklu and
                Ilker Ali Ozkan. The paper was titled{" "}
                <i>
                  Multiclass classification of dry beans using computer vision
                  and machine learning techniques
                </i>{" "}
                and can be found{" "}
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168169919311573?via%3Dihub">
                  here
                </a>
              </p>

              <p>
                The data can be found at the UCI machine learning repository{" "}
                <a href="https://archive.ics.uci.edu/ml/datasets/Dry+Bean+Dataset">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
