// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  const posts = [
    {
      id: 1,
      title: 'topic 1',
      description: `Hey y’all,

I recently received an email from a retailer, asking if I would like to opt out of Mother’s Day emails and congratulations. (For our international readers: celebrating motherhood in mid-May is customary in the U.S.) I pondered that email, thinking about my two children, who are a joy, and my own mother, also a joy, who is deceased.

It was a good question, and a good reminder that everything is a matter of perspective. For writer 
Jacqueline Dooley
, Mother’s Day comprises both joy and sorrow after one of her two daughters died of cancer.

Dooley writes, beautifully, this: “There is no occasion that glorifies mothers more effusively than Mother’s Day. It is an in-your-face public display of affection celebrating one of the most aspirational idealizations of women in Western culture. It seems to me that the holiday has no room or patience for sadness.”

Essayist 
jen parker
 described taking her son to Sesame Place theme park in California; what it looked and felt like. And, about letting go.

“But now, in dimension, the place felt intimidating,” Parker writes. “The dry, little kid rides were mixed in with the wet, bigger kid rides — like maybe this place wasn’t just for preschoolers but had been designed by them.”

Humor can always be found at this time of year too. Award-winning writer 
Kerala Taylor
 masterfully titillates the senses — and the laughs — by suggesting that a man who takes initiative by signing a field trip permission form for his kids is super sexy stuff.

What these stories have in common is the ability to show you the other side of the coin in a very personal, authentic, non-contrarian way. They incite thoughtful responses.

Sometimes, folks call that kind of dialogue a conversation. I’m glad to be a part of it. (And I encourage you to absolutely read the comments — and make some!)

Also, let me know if reading something on Medium profoundly changed your life, your perspective, your career or how you view things. I’m all ears!

Thanks for reading and thanks for writing.
Adrienne Gibbs

Director, Creator Growth @ Medium`,
      author: 1,
      url: 'https://picsum.photos/seed/picsum/200/300',
      tags: ['passive', 'money', 'content'],
      created_at: '10-10-2023',
    },
    {
      id: 2,
      title: 'topic 2',
      description: `Hey y’all,

I recently received an email from a retailer, asking if I would like to opt out of Mother’s Day emails and congratulations. (For our international readers: celebrating motherhood in mid-May is customary in the U.S.) I pondered that email, thinking about my two children, who are a joy, and my own mother, also a joy, who is deceased.

It was a good question, and a good reminder that everything is a matter of perspective. For writer 
Jacqueline Dooley
, Mother’s Day comprises both joy and sorrow after one of her two daughters died of cancer.

Dooley writes, beautifully, this: “There is no occasion that glorifies mothers more effusively than Mother’s Day. It is an in-your-face public display of affection celebrating one of the most aspirational idealizations of women in Western culture. It seems to me that the holiday has no room or patience for sadness.”

Essayist 
jen parker
 described taking her son to Sesame Place theme park in California; what it looked and felt like. And, about letting go.

“But now, in dimension, the place felt intimidating,” Parker writes. “The dry, little kid rides were mixed in with the wet, bigger kid rides — like maybe this place wasn’t just for preschoolers but had been designed by them.”

Humor can always be found at this time of year too. Award-winning writer 
Kerala Taylor
 masterfully titillates the senses — and the laughs — by suggesting that a man who takes initiative by signing a field trip permission form for his kids is super sexy stuff.

What these stories have in common is the ability to show you the other side of the coin in a very personal, authentic, non-contrarian way. They incite thoughtful responses.

Sometimes, folks call that kind of dialogue a conversation. I’m glad to be a part of it. (And I encourage you to absolutely read the comments — and make some!)

Also, let me know if reading something on Medium profoundly changed your life, your perspective, your career or how you view things. I’m all ears!

Thanks for reading and thanks for writing.
Adrienne Gibbs

Director, Creator Growth @ Medium`,
      author: 1,
      url: 'https://picsum.photos/seed/picsum/200/300',
      created_at: '10-10-2023',
    },
  ];
  res.status(200).json({ posts: posts });
};
