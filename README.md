# Lang

Has the ability to programatically generate the longest book in the world - ever.

Part of an experiment in the theory of universal grammar and computational thinking. Inspired by [John Fish](https://www.github.com/johnafish); the idea was to try and recreate his program (written in Python) using TypeScript.

Written in TypeScript.

## Structure

Lang utilizes the following basic sentence structure to base its algorithm:

<br />

<kbd>
<img src="https://i.ibb.co/CtTSt4j/Untitled-Diagram.png" />
</kbd>

<br />

## Markov Chains

Lang also uses a basic markov chain implementation in order to generate the same sentence with a different respective scrambling. According to [brilliant.org](https://www.brilliant.org), A Markov chain is a mathematical system that experiences transitions from one state to another according to certain probabilistic rules. The defining characteristic of a Markov chain is that no matter how the process arrived at its present state, the possible future states are fixed. In other words, the probability of transitioning to any particular state is dependent solely on the current state and time elapsed. The state space, or set of all possible states, can be anything: letters, numbers, weather conditions, baseball scores, or stock performances.

<br></br>

<kbd>
<img src="https://i.ibb.co/k5ryqZ6/Screen-Shot-2020-12-04-at-08-42-58.png" />
</kbd>

<br></br>

<kbd>
<img src="https://i.ibb.co/3pkwGW0/Screen-Shot-2020-12-04-at-08-43-39.png" />
</kbd>

<br></br>

**Example:**

Say the main algorithm generates the following sentence:

```
The outrageous gazelles repeated a productive beret.
```

Then, the markov chain will take the previous sentence and randomly generate some kind of mathematical variation of it:

```
Productive outrageous gazelles repeated a productive beret. 
```

Obviously, the algorithm still needs refinement and training to be able to properly formulate sentences that make sense and are reasonable, but that will come very shortly.

## Algorithm Snippet

A small peek at the code that's inside (only a small part)!

```ts
for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i].toLowerCase().replace(/[\W_]/, "");
      if (!markovChain[word]) {
        markovChain[word] = [];
      }
      if (textArr[i + 1]) {
        markovChain[word].push(
          textArr[i + 1].toLowerCase().replace(/[\W_]/, "")
        );
      }
    }
    const words = Object.keys(markovChain);
    let word = words[Math.floor(Math.random() * words.length)];
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result += word + " ";
      let newWord =
        markovChain[word][Math.floor(Math.random() * markovChain[word].length)];
      word = newWord;
      if (!word || !markovChain.hasOwnProperty(word))
        word = words[Math.floor(Math.random() * words.length)];
    }
```

Feel free to take a look at the code and experiment with it! If you'd like to change something or see areas for improval, don't hesitate to submit an issue or pull request! Contributions are welcome.

<br />

Made with ❤️ by [**@FilippoFonseca**](https://www.twitter.com/filippofonseca).
