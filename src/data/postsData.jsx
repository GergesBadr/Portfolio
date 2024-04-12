import Note from "../components/blog/Note";

// Highlighting code syntax
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import oldHopeTheme from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("css", css);

const codeCustomStyle = {
  borderRadius: "0.5rem",
  padding: "1rem",
  marginBottom: "1rem",
  marginTop: "1rem",
};

// Codes used in tailwind article
const tailwindCode = `.post-content p {
  @apply mb-4 text-lg;
}`;
const tailwindCode2 = `<div className="[&_p]:mb-4 [&_p]:text-lg">
  {postContent}
</div>`;
const tailwindCode3 = `// Give every odd child red text
<div className="[&_:nth-child(odd)]:text-red-600"> </div>

// If button is not disabled, and user hovered it, make it's background gray
<button className="[&:not(:disabled)]:hover:bg-gray-200"> </button>

// 1. In a table, Apply border radius to top left corner for first direct child th tag
// 2. And top right corner for last direct child th tag
<tr className="[&>th:first-child]:rounded-tl-lg [&>th:last-child]:rounded-tr-lg"> </tr>

// 1. After medium breakpoint in responsive, give each label in this form a dark gray color,
// 2. After medium breakpoint in responsive, AND in dark mode, give each label in this form a light gray color
<form className="md:[&_label]:text-gray-900 md:[&_label]:dark:text-gray-50"> </form>
`;
const tailwindCode4 = `[&_p]:mb-4 [&_p]:text-lg [&_p]:font-medium [&_p]:leading-relaxed`;

/* eslint-disable react/no-unescaped-entities */
const postsData = [
  {
    id: 1,
    title: "We need to talk about accessibility",
    urlTitle: "accessibility-introduction",
    ogImage: "https://unsplash.com/photos/black-and-white-brick-wall-ju1yFZkrxVg",
    date: new Date("2024-03-16"),
    category: "Accessibility",
    introduction:
      "What is accessibility, why it matters, how to implement it and what guidelines you should follow?",
    content: (
      <>
        <p>Consider the following cases:</p>
        <ul className="list-disc">
          <li>
            If you are wearing medical glasses, like me, take them off and try
            to read this post. Can you see the text?
          </li>
          <li>
            Your hand is temporary broken and you want to navigate a website
            using only your other hand.
          </li>
          <li>
            Close your eyes and try to know what is displayed in the screen,
            don't worry, it's not magic!
          </li>
        </ul>
        <p>
          That's why we need to talk about accessibility (A11y for short). a
          simple definition for a11y would be:{" "}
          <span className="font-medium">
            People with disabilities can use the web equally.
          </span>{" "}
          I would like to define it as:{" "}
          <span className="font-medium">
            Everyone should be able to understand our content, under any
            circumstances.
          </span>
        </p>
        <p>
          People are different, that's a fact! one form of this difference, is
          disabilities. According to{" "}
          <a
            target="_blank"
            href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health#:~:text=Key%20facts,1%20in%206%20of%20us."
          >
            {" "}
            World Health Organization
          </a>
          , there are about 1.3 billion people around the world have disability.
          This represents 16% of the world's population, or 1 in 6 of us.
        </p>
        <h2 className="heading-2"> Types of disabilities</h2>
        <p>
          There are different types of disabilities, each with it's unique
          requirements and handling methods, theses types include:{" "}
        </p>
        <ul className="list-decimal">
          <li>
            <span className="font-medium">Visual disability:</span> Blindness,
            low vision, or color blindness.
          </li>
          <li>
            <span className="font-medium">Physical disability:</span> for
            example, someone navigating you'r website using only one hand.
          </li>
          <li>
            <span className="font-medium">Hearing disability:</span>hard of
            hearing or completely deafness.
          </li>
          <li>
            <span className="font-medium">cognitive disability:</span>
            That's includes a lot of medical conditions that affecting cognitive
            (logical) ability.
          </li>
        </ul>
        <p>
          All of those people might and most likely use your website, and
          fortunately, there is a way to help them understand your content
          easily.
        </p>
        <p>
          Those people mostly use Assistive technologies, which are devices
          designed to help them with their disabilities. most popular in the
          context of web is{" "}
          <a href="https://axesslab.com/what-is-a-screen-reader/">
            screen reader
          </a>
        </p>
        <p>
          But wait, before we discuses how we - as developers - can practice
          a11y and implement it, I have to mention an important note:
        </p>
        <Note>
          <p>
            Accessibility isn't just for people with disabilities. Or in other
            words, everyone can have a disability at every time...
          </p>
          <p className="text-xl font-semibold tracking-wide">
            Other types of disabilities:
          </p>
          <ul className="list-disc space-y-2">
            <li>
              <span className="font-medium">Temporary disabled:</span> Maybe
              someone has a broken arm but just for short time.
            </li>
            <li>
              <span className="font-medium">Situational disabled:</span> for
              example, someone can't play an audio content in public place
              (Here, captions on this content is an a11y best practice.)
            </li>
            <li>
              <span className="font-medium">Mildly disabled:</span> Remember
              what I said about medical glasses?
            </li>
          </ul>
        </Note>
        <h2 className="heading-2"> How it's measured? </h2>
        <p>
          Implementing a11y in your website may not be that easy or a
          straight-forward approach, but don't worry, there is always a starting
          point for everything. Our starting point here will be{" "}
          <a href="https://www.w3.org/TR/WCAG21/">
            Web Content Accessibility Guidelines (WCAG)
          </a>{" "}
        </p>
        <p>
          How do we say that this website is accessible and that one is not?
          WCAG provided us some principles to follow,{" "}
          <span className="font-medium">POUR</span> principles, by following
          theses principles you can focus on how your products are used by real
          humans, including people with disabilities.
        </p>
        <h3 className="heading-3">1. Perceivable</h3>
        <p>
          It means that users must be able to perceive all essential information
          on the screen. Is there any content or functionality in your digital
          product that a person with a specific disability would not be able to
          perceive?
        </p>
        <p>
          Examples of perceivable principle could be: Adding alternative text to
          non-decorative images, ensuring that colors are not the only way to
          show something, or adding captions to videos.
        </p>
        <h3 className="heading-3">2. Operable</h3>
        <p>
          Users should be able to effectively operate/use what they see. Meaning
          that interactive elements like links and buttons are easily used, with
          clear focus order and no navigation issues.
        </p>
        <h3 className="heading-3">3. Understandable</h3>
        <p>
          Here we should make sure that everything is clear, the content is
          clearly written, the order of the page make sense to sighted users,
          keyboard-only users or screen reader users.
        </p>
        <p>
          Commonly mistakes with this principle are with error messages, making
          them NOT easy to resolve. For example with screen reader users,
          showing an error message after trying to submit a form would not be
          helpful because they has no idea that an error message has been shown
          unless you used <span className="code">aria-live</span> or{" "}
          <span className="code">role</span> attribute with{" "}
          <span className="code">alert</span> value.
        </p>
        <h3 className="heading-3">4. Robust</h3>
        <p>
          It focuses on assistive technologies supporting and making sure that
          the website remains accessible across any device and system.
        </p>
        <h2 className="heading-2"> How to implement it?</h2>
        <p>
          Finally, after we had a brief introduction to what accessibility is
          and why it matters, now it's time to implement it. So, what methods
          should we follow and what should we consider?
        </p>
        <p>
          Here are the most commonly problems or ignored best practices in
          accessibility, it's not the full list, and no, after you fix it, your
          website would't be fully accessible, but it's good to start with.
        </p>
        <ul className="list-decimal">
          <li>Provide alt text to non-decorative images</li>
          <li>Handle color contrast</li>
          <li>Use Semantic HTML elements</li>
          <li>Use ARIA attributes</li>
          <li>Handle form validations and errors</li>
          <li>Use reasonable heading structure</li>
          <li>Don't rely only on colors to show what you want to show</li>
          <li>
            Have a modal or a popup? make it accessible with screen readers and
            keyboard focus
          </li>
          <li>
            Handle buttons or any other content that don't include text and have
            only images to describe it's functionality
          </li>
        </ul>
        <h2 className="heading-2"> Conclusion & Resources </h2>
        <p>
          Every topic I have mentioned needs a separated article to discuses it.
          I might do that in the future! but, meanwhile, if you want to read and
          learn more about a11y and how to use it, here are some resources to
          refer to, I hope this helps, thanks for reading and see you next time!
        </p>
        <ul className="list-disc">
          <li>
            <a href="https://web.dev/learn/accessibility/">
              Articles about accessibility from Web.dev website
            </a>
          </li>
          <li>
            <a href="https://learn.udacity.com/courses/ud891/lessons/06723ea4-bc46-4211-b95e-be8f70709eee/concepts/063c9254-1b05-4764-9c0b-e111e5ed1593">
              Udacity accessibility free course
            </a>
          </li>
          <li>
            <a href="https://axesslab.com/alt-texts/">How to write alt text?</a>
          </li>
          <li>
            <a href="https://a11y-101.com/design/button-vs-link">
              Buttons vs Links
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/WAI/ARIA/apg/patterns/">
              Common patterns should be accessible - WAI
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g">
              YouTube playlist by google chrome
            </a>
          </li>
          <li>
            <a href="https://youtu.be/ffxwEyBcdf0?si=W2goWBgpazKsWalt">
              Accessible web forms
            </a>{" "}
            (YouTube video)
          </li>
          <li>
            <a href="https://youtu.be/9aSEd7R4GjY?si=fYpWAoKaG-hx4ZAl">
              Accessible form hints and errors
            </a>{" "}
            (YouTube video)
          </li>
          <li>
            <a href="https://www.a11yproject.com/posts/how-to-accessible-heading-structure/">
              Accessible heading structure
            </a>
          </li>
          <li>
            <a href="https://www.a11yproject.com/posts/what-is-semantic-html/">
              What is semantic HTML?
            </a>
          </li>
        </ul>
      </>
    ),
  },

  {
    id: 2,
    title: "Custom CSS selectors with Tailwind",
    urlTitle: "tailwind-arbitrary-variants",
    ogImage: "https://images.app.goo.gl/iu2wSvwwh65t4jVQ8",
    date: new Date("2024-03-23"),
    category: "Tailwind",
    introduction:
      "How to write custom css selectors directly in your html with tailwind, what is arbitrary variants and arbitrary values in tailwind and how to use them effectively to power your tailwind skills",
    content: (
      <>
        <p>
          If you are using TailwindCSS, then you may be familiar with what's
          called{" "}
          <a href="https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values">
            arbitrary-values
          </a>{" "}
          which allow you to "Escape" from Tailwind design system.
        </p>
        <p>
          For example, Tailwind provide us a huge color palette to use, but what
          if your website design need a specific color that not provided by
          Tailwind by default? That's why you should consider using
          arbitrary-values.
        </p>
        <p>
          It's syntax is simple, here is an example:{" "}
          <span className="code">bg-[#161b27]</span> here we used the color
          #161b27 as a background color, write what you want to style, for
          example <span className="code">text-</span> or{" "}
          <span className="code">bg-</span> then wrap the value you want to use
          with brackets: [put your value here]
        </p>
        <h2 className="heading-2">Arbitrary variants</h2>
        <p>
          Following the same concept, arbitrary variants help us to "Escape"
          from Tailwind and write our selector directly in html, let's have an
          example, then we will explain it. in this post page, I have a{" "}
          <span className="code">div</span> that contains post content, in this
          content there is many paragraphs (<span className="code">p</span>{" "}
          tags), I want to give each paragraph a{" "}
          <span className="code">mb-4</span> and{" "}
          <span className="code">text-lg</span> classes, so, we have two ways to
          achieve this:
        </p>
        <h3 className="heading-3">1. Without arbitrary variants:</h3>
        <p>
          We would normally give the container <span className="code">div</span>{" "}
          a class-name, for example <span className="code">post-content</span>{" "}
          and go to our <span className="code">index.css</span> file to do this:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter
              language="css"
              style={oldHopeTheme}
              customStyle={codeCustomStyle}
              showLineNumbers
            >
              {tailwindCode}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>But now we lost lots of Tailwind benefits, like: </p>
        <ul className="list-disc">
          <li>
            <strong>Class names:</strong> We had to figure out a class name,
            like traditional CSS, which is something that Tailwind tries to
            avoid.
          </li>
          <li>
            <strong>Two files:</strong> Now we have to navigate to multiple
            files to add, edit or delete our styles.
          </li>
          <li>
            <strong>States: </strong>
            This approach does not support handling states like hover or focus,
            unlike Tailwind. (Read second approach)
          </li>
          <li>
            <strong>Responsive: </strong>
            It also does not support responsive design. (Read second approach)
          </li>
          <li>
            <strong>Dark mode: </strong> What if I want to give each{" "}
            <span className="code">p</span> tag a color on light mode, but a
            different color with dark mode?
          </li>
          <li>
            <strong>Complicated selectors: </strong>
            That's very basic example, if we want to write more complicated
            selector, like targeting each <span className="code">
              {" "}
              p
            </span> and <span className="code">ul</span> tags to apply the same
            styles to them, this approach would not be very helpful.
          </li>
        </ul>
        <h3 className="heading-3">2. With arbitrary variants:</h3>
        <p>
          Instead of this, let's see how arbitrary variants would be useful and
          allow us to achieve all of the previous benefits easily. Now all we
          have to do is to use it in our element directly, like so:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter
              style={oldHopeTheme}
              customStyle={codeCustomStyle}
              showLineNumbers
            >
              {tailwindCode2}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Here is how it works:</p>
        <ul className="list-disc">
          <li>
            <span className="code">[ ]</span> We have to wrap the selector
            itself in brackets.
          </li>
          <li>
            <span className="code">&</span> Means that element we are in now,{" "}
            <span className="code">div</span> Here.
          </li>
          <li>
            <span className="code">_</span> We should <strong>NOT</strong>{" "}
            include a spaces in the selector, instead we must always use
            underscores.
          </li>
          <li>
            <span className="code">p</span> The selector itself we want to apply
            styles to.
          </li>
          <li>
            <span className="code">:*</span> After colons, we write any Tailwind
            styles we want.
          </li>
        </ul>
        <h2 className="heading-2">Advanced examples</h2>
        <p>
          We can achieve whatever we want to using this approach, just to name a
          few:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter
              language="javascript"
              style={oldHopeTheme}
              customStyle={codeCustomStyle}
              showLineNumbers
            >
              {tailwindCode3}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h2 className="heading-2">Be careful</h2>
        <p>
          Try <strong>NOT</strong> to overuse arbitrary variants, because like
          anything else, it can be really helpful in some scenarios, yet really
          painful in others, here is why:
        </p>
        <ul className="list-decimal">
          <li>
            If the same element should have many styles, maybe it is not the
            best solution. You will end up writing classes like this:
            <pre>
              <code>
                <SyntaxHighlighter
                  style={oldHopeTheme}
                  customStyle={codeCustomStyle}
                  showLineNumbers
                >
                  {tailwindCode4}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
          <li>
            With complicated selectors, it becomes not readable, for you to
            edit, or for others who read your code.
          </li>
          <li>
            <p>
              Specificity: It's important to know that this styles could{" "}
              <strong>NOT</strong> be override with other normal Tailwind
              classes because of specificity. for example, when you write{" "}
              <span className="code">[&_p]:mb-4</span> class to a parent, this
              has a specificity value of (0, 1, 1) now because it's an element
              and a class-name, now you go to a <span className="code">p</span>{" "}
              tag inside this parent element and you want to override it's
              margin styles, you write <span className="code">mb-8</span>, but
              this will not be applied because it's specificity is (0, 1, 0)
              because it's just a class-name.
            </p>
            <p>
              For more information about specificity read this article from
              css-tricks website:{" "}
              <a href="https://css-tricks.com/specifics-on-css-specificity/">
                css-tricks: specificity
              </a>
            </p>
          </li>
        </ul>
        <h2 className="heading-2">Conclusion</h2>
        <p>
          Did I make it clear for you to know how, why and when to use arbitrary
          variants with Tailwind? I hope so, now you just have to think
          carefully before using it.
        </p>
        <p>
          Ask yourself: Is there a better way to achieve the same requirements?
          Will this make conflict with other styling I have? Is this readable
          enough? Will this really save me time and effort?
        </p>
        <p>
          And I am pretty sure you will find the right answers. See you soon!
        </p>
      </>
    ),
  },
];

export default postsData;
