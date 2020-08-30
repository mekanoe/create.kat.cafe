import { Value } from "..";
import { calculateTotals, GameState } from "../GameContext";

type Totals = ReturnType<typeof calculateTotals>;

enum Priority {
  Normal = 0,
  Eights,
  Multiple,
}

type EndingData = {
  matcher: (totals: Totals, selections: GameState["selections"]) => boolean;
  priority: Priority;
  title: string;
  description: string;
  image: string;
};

const data: EndingData[] = [
  {
    title: "Slut",
    matcher: (t) => isPrimaryMajority(Value.Eroticism, t),
    description:
      "I see you and your owner have a very healthy sex life. That's great. It also seems like you have a healthy sex life with your owner's friends and, uh, several strangers quite a few times a week. Quite the little sex kitten aren't you?! I'm glad you've adapted well to your new life. This will be marked as a brilliant pass on your transformation review. Wait a minute... what's that in your mouth?! Very well, kitten, let me give you a deeper review~ Let me grab my strap-on. 💖",
    image: "",
    priority: Priority.Normal,
  },
  {
    title: "Cutest Kitty",
    matcher: (t) => isPrimaryMajority(Value.Cuteness, t),
    description:
      "Adorable ✔ Beautiful ✔ Cuddly ✔ With your good looks and feminine behavior, you make the prettiest little kitten. Your owner must be so proud! You know... I think you'd be a master-class show kitten! That said... Have you considered modelling for us?!",
    image: "",
    priority: Priority.Normal,
  },
  {
    title: "Slave",
    matcher: (t) => isPrimaryMajority(Value.Submissiveness, t),
    description:
      "Oh, what wonderful and thoughtful obedience. You get a passing grade for that part, but I feel like you'll just say yes to anything I ask anyway. You might be too submissive to even be used as a model. Other kittens would take advantage of you. Unavoidable loss, anyway.",
    image: "",
    priority: Priority.Normal,
  },
  {
    title: "Cat in Control",
    matcher: (t) => isPrimaryMajority(Value.Dominance, t),
    description:
      "Owner is such a fun term, isn't it? To you, your owner is but a means to an end. I'm mildly terrified, so I'll just mark you down as a success and let you have your fun~",
    image: "",
    priority: Priority.Normal,
  },
  {
    title: "Pet",
    matcher: (t) => isPrimaryMajority(Value.Animalism, t),
    description:
      "Wow, it's hard to believe you were even human. You fit so perfectly as your owner's pet. You've adjusted so well to your new life, I'm marking this as a total success. Here's a treat, lil' kitten! 💖",
    image: "",
    priority: Priority.Normal,
  },
  {
    title: "Failure",
    matcher: (t) => isPrimaryMajority(Value.Humanity, t),
    description:
      "I'm remarkably disappointed in you. I thought you were such a fantastic candidate for this program. It's not often we have a failure, but at least you have some fluffy ears to show for it. If you'd like, we can run the transformation again to try it again... or you can try going back to your old life.",
    image: "",
    priority: Priority.Normal,
  },
  {
    title: "Bondage Slut",
    matcher: (t) => t[Value.Eroticism] >= 8 && t[Value.Submissiveness] >= 8,
    description:
      "You know *exactly* where you belong, don't you little girl? You've become a fucktoy who needs to be tied up and used constantly. You were never meant to have a life beyond getting fucked senseless anyway, that's obvious. Only question before I give you the passing grade... What do you like more, the orgasms or the feeling of being called a good girl after you've been so easily defiled?",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Beauty Model",
    matcher: (t) => t[Value.Cuteness] >= 8 && t[Value.Humanity] >= 8,
    description:
      "Well, aren't you the cutest little thing? I've never seen a catgirl so charming yet never fully let go of her humanity. You certainly are marked as a success, but maybe I have a bigger offer; would you like to show the world that not every catgirl is a sex-crazed cuddle ball? You'd probably change the world, pretty kitty. What do you say?",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Feral Goddess",
    matcher: (t) => t[Value.Animalism] >= 8 && t[Value.Dominance] >= 8,
    description:
      "I had to wade through your entire harem to find you, Miss Kitty... W-what? You want me to kneel? I only wanted to give you this passing grade and leave! ...Oh. Your eyes say it all. Yes Miss Kitty, I'll kneel. Please be gentle. 😣",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Ultimate Catgirl Maid",
    matcher: (_, selections) =>
      selections.some((s) => s.title === "Maid Outfit") &&
      selections.some((s) => s.title === "Cooking Training") &&
      selections.some((s) => s.title === "Maid's Code") &&
      selections.some((s) => s.title === "Maid Work"),
    description:
      "Look at you! You're the most special of the bunch! The Royal Family has asked us to fetch them a very special catgirl maid, and you might just be fit for the Queen's ask. It'll be a lot of hard work, long hours, and harsh punishments for mistakes, but I'm sure you're already used to it... Good. \"Yes ma'am\" was the right answer.",
    image: "",
    priority: Priority.Multiple,
  },
  {
    title: "Not a Cat?",
    matcher: (t) => t[Value.Humanity] >= 15,
    description:
      "Hey, I'm looking for a catgirl by the name of... Oh. It's you. I barely recognized you were even a catgirl. I'll mark this down as a transformation failure, but how would you like to be the owner of your very own catgirl? You're legally human, after all. Also, expect a check in the mail, we obviously made a mistake.",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Best Girl",
    matcher: (t) =>
      t[Value.Submissiveness] >= 6 &&
      t[Value.Animalism] >= 6 &&
      t[Value.Eroticism] >= 6 &&
      t[Value.Cuteness] >= 6 &&
      t[Value.Dominance] >= 6 &&
      t[Value.Humanity] === 0,
    description:
      "Amazing. In all of my years creating and perfecting catgirls, none has been as perfect as you. Sexy without sacrifice, dominant enough to take what you need, but submissive enough to give it when it's wanted. You have no humanity left in you, yet so perfect in every way. I'd be honored to take you and your owner back to the transformation center to shape the future generation of catgirls.",
    image: "",
    priority: Priority.Multiple,
  },
  {
    title: "Cute but Scary",
    matcher: (t) => t[Value.Cuteness] >= 8 && t[Value.Dominance] >= 8,
    description:
      "Hi there sweetie! You're so adorable, and even some adorably sharp teeth! I see your owner has a lot of bites, they reported a lot of aggression. I just don't see it, though. I'll mark this as a success. ... Why are you growling at me?! You want me to give you special treatment? W-well, I guess I can. It's so hard saying no to something this cute!",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "In Heat",
    matcher: (t) => t[Value.Animalism] >= 8 && t[Value.Eroticism] >= 8,
    description:
      "Finally glad to catch up with you. Your owner has been saying you've been sneaking out at night to find playmates... It's not very surprising, but your owner even caught you getting fucked by an entire pack of feral catgirls! If you don't start being more obedient, you might find yourself in permanent chastity, kitten.",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Abandoned",
    matcher: (t, s) => t[Value.Submissiveness] >= 8 && abandonedCheck(t, s),
    description:
      "Aww... You poor thing! I guess not every owner works out, but it's just so cruel to find you just put out on the street like this. Unfortunately, there's not a lot we can do to help you with this, we just don't have any owners available to take you in at the moment... 😭 Oh I just can't take it, your sad eyes destroy me. Come, little one. I'll take you in. If you're a good kitty, you can sleep in my bed tonight, too.",
    image: "",
    priority: Priority.Multiple,
  },
  {
    title: "Revolutionary",
    matcher: (t) => t[Value.Dominance] >= 8 && t[Value.Humanity] >= 8,
    description:
      "To be honest, I'm surprised you let me speak with you. I've been following your efforts to get equity for all catgirls. I really respect that. The test says you should be marked as a failure, but I don't think you care. You're definitely trying to live your best life and help others do it too, so please, carry on. You definitely didn't want this, and I get it. Just think of all the potential catgirls you might ruin the futures of when you make a decision.",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Catgirl Girlfriend",
    matcher: (t) => t[Value.Eroticism] >= 8 && t[Value.Humanity] >= 8,
    description:
      "Hey there, kitty. It's great to see you again! I see you and your owner have an extremely strong relationship, which always makes me happy to see. There's not just love but respect, you haven't even worn your collar in quite some time! It's certainly not traditional, but it's welcome nonetheless. You may have not fully taken hold of your catgirl instincts, but I'll mark it as a success anyway. I hope you two form an even stronger bond one day! 😀",
    image: "",
    priority: Priority.Eights,
  },
  {
    title: "Boom",
    matcher: (t) => Object.values(t).reduce((acc, v) => (acc += v), 0) >= 50,
    description:
      "This is an impossible scenario. How did you kill us all?! I cannot believe the amount of energy I saw on the graph when we transformed you. It was outright impossible. And now, we're all dead. Congratulations. I'm sure your actions won't affect anything and I guess there won't be anymore catgirls transformed anymore. I hope you're happy.",
    image: "",
    priority: Priority.Multiple,
  },
];

let cachedPrimaryMajority: null | Value = null;
const isPrimaryMajority = (value: Value, totals: Totals) => {
  if (cachedPrimaryMajority !== null) {
    let majority = Value.Animalism;

    for (let check of Object.keys(totals) as Value[]) {
      if (majority === check) {
        continue;
      }

      if (totals[check] === totals[majority]) {
        majority = randomlyPick(check as Value, majority);
      } else if (totals[check] > totals[majority]) {
        majority = check as Value;
      }
    }

    cachedPrimaryMajority = majority;
  }

  return cachedPrimaryMajority === value;
};

const abandonedCheck = (
  totals: Totals,
  selections: GameState["selections"]
) => {
  return false; // TODO: get highest category, check if not given by owner
};

export const getFinalResult = (
  totals: Totals,
  selections: GameState["selections"]
) => {
  const matches: typeof data = [];

  for (let ending of data) {
    if (ending.matcher(totals, selections)) {
      matches.push(ending);
    }
  }

  let finalEnding = matches[0];
  for (let ending of matches) {
    if (finalEnding.priority < ending.priority) {
      finalEnding = ending;
    } else if (finalEnding.priority === ending.priority) {
      finalEnding = randomlyPick(finalEnding, ending);
    }
  }
};

const randomlyPick = <A, B>(a: A, b: B) =>
  Math.round(Math.random()) === 0 ? a : b;
