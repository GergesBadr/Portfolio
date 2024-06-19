import Note from "../components/blog/Note";

// Images
import personUsingLaptopSmall from "../assets/posts/images-post/person-using-laptop-small.webp";
import personUsingLaptopLarge from "../assets/posts/images-post/person-using-laptop-large.webp";
import mountainsSmall from "../assets/posts/images-post/mountains-small.jpg";
import mountainsLarge from "../assets/posts/images-post/mountains-large.jpg";

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

// Codes used in tailwind post
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

// Codes used in images post
const decorativeImage = `<div className="h-[300px] w-full rounded-lg bg-[url(image-path-here)] bg-cover bg-center bg-no-repeat">
  <div className="flex h-full w-full items-end justify-end bg-gradient-to-t from-black/40 p-10 text-2xl text-white">
    Lorem Ipsum!
  </div>
</div>`;
const contextualImage = `<div className="relative">
  <img
    sizes="(max-width: 375px) 375px, 1440px"
    srcSet={small-image-path 375w, large-image-path 1440w}
    src={small-image-path}
    alt="Example alt text for the demonstration."
    loading="lazy"
    className="h-[200px] rounded-lg object-cover"
  />
  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 p-10 text-2xl text-white">
    Lorem Ipsum!
  </div>
</div>`;
const cssImages = `<!-- image will be downloaded because the element is rendered. -->
<div style="background: url(img-1.png)"></div>

<!-- image will be downloaded because the element's style is calculated -->
<div style="background: url(img-4.png); visibility: hidden"></div>

<!-- image will NOT be downloaded because the parent element has its display set to none. -->
<div style="display:none">
  <div style="background: url(img-2.png)"></div>
</div>
`;

/* eslint-disable react/no-unescaped-entities */
const postsData = [
  {
    id: 1,
    title: "We need to talk about accessibility",
    urlTitle: "accessibility-introduction",
    date: new Date("2024-03-16"),
    category: "Accessibility",
    ogImage: "https://i.ibb.co/5T8XLWf/Accessibility.jpg",
    introduction:
      "What is accessibility, why it matters, how to implement it and what guidelines you should follow?",
    content: (
      <>
        <p>Consider the following cases:</p>
        <ul className="list-disc ">
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
          requirements and handling methods, these types include:{" "}
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
          <ul className="list-disc space-y-2 ">
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
          these principles you can focus on how your products are used by real
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
        <ul className="list-disc ">
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
    date: new Date("2024-03-23"),
    category: "CSS",
    ogImage: "https://i.ibb.co/B63Bgyd/tailwind.jpg",
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
        <SyntaxHighlighter
          language="css"
          style={oldHopeTheme}
          customStyle={codeCustomStyle}
          showLineNumbers
        >
          {tailwindCode}
        </SyntaxHighlighter>
        <p>But now we lost lots of Tailwind benefits, like: </p>
        <ul className="list-disc ">
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
        <SyntaxHighlighter
          style={oldHopeTheme}
          customStyle={codeCustomStyle}
          showLineNumbers
        >
          {tailwindCode2}
        </SyntaxHighlighter>
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
        <SyntaxHighlighter
          language="javascript"
          style={oldHopeTheme}
          customStyle={codeCustomStyle}
          showLineNumbers
        >
          {tailwindCode3}
        </SyntaxHighlighter>
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
            <SyntaxHighlighter
              style={oldHopeTheme}
              customStyle={codeCustomStyle}
              showLineNumbers
            >
              {tailwindCode4}
            </SyntaxHighlighter>
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

  {
    id: 3,
    title: "How the web works?",
    urlTitle: "how-the-web-works",
    date: new Date("2024-05-5"),
    category: "General",
    ogImage: "https://i.ibb.co/F4ghNG3/internet.jpg",
    introduction:
      "What happens when you type google.com in your browser and hit enter?",
    content: (
      <>
        <img
          src="https://i.ibb.co/F4ghNG3/internet.jpg"
          alt="laptop at a desk, with google chrome browser opened in google search page."
          className="mb-4 rounded-lg"
        ></img>
        <p>
          In this article, we are going to discuses how the web works, it's
          components, and how each one of them communicate to one another. But
          before we do so, first we have to talk about the internet itself, are
          they the same thing? and if not, what is the difference between the
          internet and the web?
        </p>
        <p>
          Okay, the internet and the web are two different things. the internet
          is the physical infrastructure itself, it's literally some cables and
          wires. The main idea beyond the internet was that: if two computers
          are connect together (by cables) then they can communicate to each
          other, and that's whats happening right now.
        </p>
        <p>
          There is a myth about the internet that non-technical people seem to
          believe, which says that the internet is in the "cloud" using
          satellites, it's in the air! like the Wi-Fi connection, which is: A
          wireless networking technology. But, that's simply wrong, why? because
          if we did so, the nearest satellite in the space to us, would be VERY,
          VERY far from us. So, the data would have to travel a long distance go
          and back to reach you, causing a significant delay to the response.
        </p>
        <p>
          Now let's talk about the web, which you can think about it as it's a{" "}
          <strong>service</strong> or an <strong>application</strong> build on
          top of the internet, so it's a part of it, a way for us to use the
          internet.
        </p>
        <Note>
          <p>
            Remember, the ultimate goal of all of this, the internet or the web,
            is to allow users to find any needed information, as simple as that.
          </p>
        </Note>
        <h2 className="heading-2">Web components</h2>
        <p>
          Now, for the web to work effectively, it has a few parts that works
          and communicates together to achieve this goal. Which are:
        </p>
        <ul>
          <li>
            <h3 className="heading-3">Client</h3>
            <p>
              A client is what the user use to get their information, it's any
              device that has an internet connection and a web-accessing
              software on it (Read below). Your phone, laptop, or your PC can be
              called a client.
            </p>
          </li>
          <li>
            <h3 className="heading-3">Server</h3>
            <p>
              Now we have a <span className="code">user</span> who use a{" "}
              <span className="code">client</span> to get an{" "}
              <span className="code">information</span>, so, where is this
              information exactly? here we introduce the server, it's also a
              computer, just like your computer, but with much more power and
              abilities that allow it to work 24/7. It's the place where we
              store our webpages, files, or any kind of data, so that when a
              client wants to see this information, a copy is downloaded and be
              displayed to them.
            </p>
          </li>
          <li>
            <h3 className="heading-3">Internet connection</h3>
            <p>
              It only goal is to allow us to send and receive data in the
              internet by any means, like on the web!
            </p>
            <p>
              That's what your ISP (Internet service provider) provide you with,
              that's what you pay for basically.
            </p>
          </li>
          <li>
            <h3 className="heading-3">TCP & IP</h3>
            <p>
              Imagine the traffic rules, not anyone can go and move anywhere at
              anytime, and that's for a reason, to prevent anything illegal to
              happen, we have to follow these rules.
            </p>
            <p>
              Just like traffic rules in an city, the internet has it's own
              rules we call the protocols, also to prevent anything
              illegal/wrong to happen.{" "}
              <strong>Transmission Control Protocol</strong> and{" "}
              <strong>Internet Protocol</strong> are some protocols among
              others. They define how data should travel across the internet.
            </p>
          </li>
          <li>
            <h3 className="heading-3">DNS</h3>
            <p>
              We live in homes, any home has it's own unique address. Also, the{" "}
              <strong>Domain Name System</strong> is the address of the websites
              we want to see. Computers does not understand anything but
              numbers, and we, humans, has a very effective way to communicate,
              which is...?
            </p>
            <p>
              Exactly, words and languages! so, for us to communicate well with
              our computer to tell it what we want to search for in the
              internet, we created the domain name system, to be like a bridge
              between us.
            </p>
            <p>
              Any computer device (PC, Phone, Laptop, even your electronic
              microwave or fridge) has it's own unique IP (Internet protocol),
              like us humans has our own unique fingerprint. Also, any website
              in the internet has an IP address, this IP usually in the form
              like <span className="code">192.65.87.12</span>, But imagine each
              time you go to search for a webpage or any data in the internet
              and you have to remember and type these numbers again and again!
            </p>
            <p>
              What we actually do is type for example{" "}
              <span className="code">google.com</span>, this called a{" "}
              <strong>domain name</strong>, which is the language we understand,
              so, the main goal for a DNS system is to resolve names to numbers,
              or in other words, resolve <strong>domains</strong> to{" "}
              <strong>IP addresses</strong>.
            </p>
            <p>
              But how it does so? what happens when we type{" "}
              <span className="code">gergesbadr.com</span> in our search bar and
              hit enter? Here is the journey that the DNS takes to give you back
              your results:
            </p>
            <ol className="list-decimal marker:font-bold ">
              <li>
                First, your browser or your OS (operating system) will try to
                find the IP address for{" "}
                <span className="code">gergesbadr.com</span> in it's cache. If
                it was found, meaning that you have typed this domain or visited
                this resource before, it will resolve it's IP address and show
                you the result.
              </li>
              <li>
                If not, the query (the domain the entered) will be sent to the
                next lever, the resolver server. It's your ISP, and again, it
                will try to find the IP in it's cache
              </li>
              <li>
                If there was no data in you ISP cache, then let's go to the next
                level, the root server. Notice that the root server itself does
                not have any information about any IP address for any site, but
                it's still helpful, because it will forward you to the right
                next level, the TLD (Top Level Domain) server.
              </li>
              <li>
                The TLD server maintains information for all Top-Level-Domain
                names such as <span className="code">.com, .net, .org</span> and
                now it knows that it need to search for an IP address
                specifically in a <span className="code">.com</span> TLD, why?
                because the root server in the previous step give it this
                information. Unfortunately, it also does't know the IP, buy it
                will redirect you to the final level, Authoritative servers.
              </li>
              <li>
                The Authoritative servers responsibility is to know everything
                about any domain including it's IP address. good, that's what we
                want to get! Now it will send you back the IP address for{" "}
                <span className="code">gergesbadr.com</span> and it's content
                (the html page, images, text, etc...) will be displayed for you.
              </li>
            </ol>
            <p>
              Notice that you don't have to go allover these steps every time
              you search for anything, that's why I mentioned in the first step
              that your browser or OS will search it's cache first, this cache
              is a a strong place for what you have visited before, so that it
              can be displayed to you fast.
            </p>
            <p>
              Also, what if after all of these steps, there is really no IP
              address with the specific domain name you typed, like{" "}
              <span className="code">wrong-domain.com</span>? Well, at the end
              of the previous steps, the authoritative servers will return some
              error which you will see at your browser, simply saying “This site
              can't be reached”.
            </p>
            <p>
              <img
                src="https://www.cloudns.net/blog/wp-content/uploads/2023/04/Authoritative-DNS-server-2048x1154.png"
                alt="how DNS works, illustration."
              />
              <small>
                An illustration image for these steps, image from{" "}
                <a href="https://www.cloudns.net/">cloudns</a>
              </small>
            </p>
          </li>
          <li>
            <h3 className="heading-3">HTTP</h3>
            <p>
              As I said before, what happens is that you ask for information,
              your client tries to get it from the server, but how it does so?
              The <strong>Hypertext Transfer Protocol</strong> is the language
              that the server and client speak to each other. The HTTP is
              evolving, the first version of it with the simplest protocol,
              allowing only the GET method and that was in 1991. Then it started
              gets more and more updates until it become what we know now.
            </p>
            <p>
              It follows a request-response structure where the browser requests
              data, and the server responds with the requested information. Each
              http request has a specific structure we commonly name it{" "}
              <strong>"HTTP request anatomy"</strong> which contain the
              following:
            </p>
            <ul className="list-disc">
              <li>
                <strong>The top layer:</strong> Consists of the HTTP method,
                URL, and the protocol version.
              </li>
              <li>
                <strong>Headers:</strong> It provides extra info about the
                request to the server. There are many different headers, like{" "}
                <span className="code">Content-Type</span>,{" "}
                <span className="code">Content-Length</span>, and{" "}
                <span className="code">User-Agent</span>.
              </li>
              <li>
                <strong>Body (optional):</strong> Contains the data that the
                client sent to the server in case of{" "}
                <span className="code">PUT</span>,{" "}
                <span className="code">POST</span>, or{" "}
                <span className="code">PATCH</span> methods.
              </li>
            </ul>
            <p>
              The HTTP response can be a lot of status, so, we give each status
              it's code, and that's hundreds of them so you of course you don't
              have to remember them all, you already know common ones like 404
              or 200. Here is the category of the HTTP status codes:
            </p>
            <div>
              <img
                src="https://static.semrush.com/blog/uploads/media/3a/79/3a7950050980a0e2de37bc1a632cc321/wmkPPztB7KlAC7fPzO0-85NG8t0B9IEh4JEbt_ELP1pvJMhof9vt2pDSwrBZeXodoqaoV_Es1Rur-AWoeoOdV-RIde2vjqyMQuxrqch62uXZ1bsI0yaaMWx-f4cg4BlmOQrI2kFJ6CPXECCd69KeopE.webp"
                alt="http status codes"
              />
              <small>
                Image from{" "}
                <a href="https://www.semrush.com/blog/http-status-codes/">
                  semrush
                </a>{" "}
                article about http status codes
              </small>
            </div>
          </li>
          <li>
            <h3 className="heading-3">Hosting</h3>
            <p>
              Hosting is the service that's responsible to make your website
              public, meaning that anyone can see and interact with it's
              content. Think about the IP address like your home address and
              hosting like your physical space that you have and built your
              house on it, you website also should have a place to be "stored"
              at.
            </p>
            <p>
              When you start a hosting plan in any web hosting service provider,
              you actually renting a space on a physical server that stores and
              manage your website files and data.
            </p>
            <p>
              There are many types of hosting, like{" "}
              <strong>shared hosting</strong>,{" "}
              <strong>dedicated web hosting</strong>,{" "}
              <strong>VPS (Virtual Private Server)</strong> and{" "}
              <strong>cloud hosting.</strong> each has it's own use and
              advantages.
            </p>
          </li>
          <li>
            <h3 className="heading-3">Browsers</h3>
            <p>
              browsers are the software we use to access the web, some people
              call them clients also. They are responsible to get the files from
              a web server and displays it to the user's screen. Each browser
              has multiple components that works to achieve this goal, like it's{" "}
              <strong>interface</strong>, <strong>the browser engine</strong>,
              and <strong>the rendering engine</strong>.
            </p>
            <Note>
              <p>
                Here is an interesting fact, browsers only understand HTML, CSS
                and Javascript. Nothing else!
              </p>
              <p>
                So, they process HTML for structure, CSS for presentation, and
                JavaScript for interactivity.
              </p>
              <p>
                What is React, Jquery, Angular and all of these libraries and
                frameworks then? how do the browser understand it if it's not
                HTML, CSS, and JS? Well, it doesn't. because all of these tools
                are just HTML, CSS, and JS. They just has a different way to
                write the same thing.
              </p>
            </Note>
          </li>
          <li>
            <h3 className="heading-3">URL</h3>
            <p>
              The URL is what you type in your browser search bar to get
              something from the internet. We have something that's called a URL
              anatomy, which represent the URL parts (See image below).
            </p>
            <p>
              Notice that the <span className="code">www.example.com</span> is
              actually consists of three parts. The{" "}
              <span className="code">www</span> is called the subdomain. The{" "}
              <span className="code">example</span> is the domain itself. The{" "}
              <span className="code">.com</span> is the TLD
            </p>
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*cih496PZ5DyEubgfYUq3Zw.png"
              alt="URL structure"
            />
          </li>
        </ul>
        <h2 className="heading-2">Conclusion </h2>
        <p>
          Now that we know all of these components, what they do, how they work
          together, it's the time to wrap up and discuses the process from the
          beginning to the end, after typing{" "}
          <span className="code">www.gergesbadr.com</span> into the browser,
          here is what's happening:
        </p>
        <ol className="list-decimal marker:font-bold ">
          <li>
            The <span className="code">browser</span> will try to find the real{" "}
            <span className="code">IP address</span> for the website you write{" "}
            with the help of the <span className="code">DNS server</span>
          </li>
          <li>
            The browser will send a <span className="code">HTTP request</span>{" "}
            from your <span className="code">client</span> to the{" "}
            <span className="code">server</span> asking it to show you the
            content of the website you searched for. (This message and any other
            data sent between any client and server is by your{" "}
            <span className="code"> internet connection </span> and following
            the <span className="code">TCP/IP</span> rules.)
          </li>
          <li>
            The server will get the request and send back a response to the
            client with the data that should be displayed. (As a data
            packets/units)
          </li>
          <li>
            The browser will collect the small packets and make a complete
            webpage of it to be displayed to you.
          </li>
        </ol>
        <p>
          Did you imagined how many different softwares/hardwares worked
          together in order of you to read this article for example? The
          internet has a very complicated structure with many layers, imagine
          that anything I have mentioned here could go wrong or had a bug that
          prevents you from searching what you wanted to search for!
        </p>
        <h2 className="heading-2">Recourses & References</h2>
        <ul className="list-disc">
          <li>
            <a href="https://internetfundamentals.com">
              Internet fundamentals course
            </a>{" "}
            from frontend masters
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=AXVZYzw8geg&t=1s&ab_channel=CraylorMade">
              Different types of web hosting
            </a>{" "}
            (Youtube video)
          </li>
          <li>
            <a href="https://youtu.be/A31bxOyj5mk?si=q8GRBvoM0wUiuhr3">
              How the internet works - OSI layers
            </a>{" "}
            (Youtube video)
          </li>
          <li>
            <a href="https://github.com/alex/what-happens-when?tab=readme-ov-file#behind-the-scenes-of-the-browser">
              What happens when...
            </a>{" "}
            (Github repo)
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers">
              HTTP headers
            </a>{" "}
            (article from mozilla developer)
          </li>
        </ul>
      </>
    ),
  },

  {
    id: 4,
    title: "Images and the web: different aspects",
    urlTitle: "images-optimization-for-web",
    date: new Date("2024-06-18"),
    category: "General",
    ogImage: "https://i.ibb.co/d0dym7W/images-post.webp",
    introduction:
      "Optimize Images for better performance, accessibility, user experience and more",
    content: (
      <>
        <img
          sizes="(max-width: 600px) 600px, 1200px"
          srcSet={`${personUsingLaptopSmall} 600w, ${personUsingLaptopLarge} 1200w`}
          src={personUsingLaptopSmall}
          alt="person using laptop displaying a gallery in the web."
          className="mb-4 rounded-lg"
        />
        <p>
          According to the following{" "}
          <a href="https://httparchive.org/reports/page-weight" target="_blank">
            report
          </a>
          , until May 2024, the average total kilobytes of all resources
          requested by a median page on desktop is 2.6MB, this number has about
          1.1MB only for images! meaning that images takes almost half of the
          page resources, that's should make us think about how to deal with it.
        </p>
        <p>
          As a web developer, you are very likely going to use an image for your
          next project. Images can add much more benefits to your site, it
          capture attention, display complex information quickly and create
          engaging experience.
        </p>
        <p>
          Yet, it can be a nightmare if not used properly, when adding an image
          to a website, we should not simply add it and run! there are several
          factors that we have to pay attention for and be careful with, like
          accessibility, performance, best practices and overall
          user-experience. That's exactly what we are going to discus today, so,
          let's dive into it.
        </p>

        <h2 className="heading-2" id="different-types">
          Fundamentals of images
        </h2>
        <p>
          Images are not one thing, you should use the most optimal format and
          size for your goal, for example, it's always recommended (for many
          reasons) to use <span className="code">SVG</span> format for logos,
          illustrations, charts or icons. <span className="code">WebP</span>{" "}
          format can be useful to minify the image size.{" "}
          <span className="code">PNG</span> is better than{" "}
          <span className="code">JPEG</span> in terms of supporting transparency
          and using lossless compression but it usually has a large file sizes.
        </p>
        <p>
          So, choosing the right format can be a little bit complicated, check
          out the <a href="#resources">resources</a> to know more about the
          topic.
        </p>
        <p>
          Apart from choosing the right format, you should also choose "the
          right way" to use your image, for example, should you add it as a html{" "}
          <span className="code">&lt;img &#47;&gt;</span> tag or by using the{" "}
          <span className="code">background-image</span> property from CSS? and
          why? for images with text, should the text be in the image itself or
          should you add it as a textual content and style it as you like? and
          so on…
        </p>
        <h3 className="heading-3">Contextual & decorative images </h3>
        <p>
          When choosing the right way to write your image, ask yourself, is the
          image only for decoration or it has a contextual value? let's have an
          example, the following two images implemented with two different ways:
        </p>
        <div className="h-[200px] w-full rounded-lg bg-[url(./assets/posts/images-post/mountains-large.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full w-full items-end justify-end bg-gradient-to-t from-black/40 p-10 text-2xl text-white">
            Lorem Ipsum!
          </div>
        </div>
        <SyntaxHighlighter
          style={oldHopeTheme}
          customStyle={codeCustomStyle}
          showLineNumbers
        >
          {decorativeImage}
        </SyntaxHighlighter>

        <p>
          The above example is for a decorative image, using CSS background
          image, you can't write an <a href="#alt-text">alt-text</a> to it.
          Search engines does not know what image you have. You can't use{" "}
          <a href="#performance-optimization">srcset and sizes attributes</a>{" "}
          for better performance specially in mobile devices. You also can't{" "}
          <a href="#lazy-loading">lazy loading</a> it
        </p>

        <p>
          Now let's achieve the same result with the same image and suppose it
          has a contextual value that we should provide (Like a product photo, a
          team member, a service photo, etc...):
        </p>
        <div className="relative">
          <img
            sizes="(max-width: 375px) 375px, 1440px"
            srcSet={`${mountainsSmall} 375w, ${mountainsLarge} 1440w`}
            src={mountainsSmall}
            alt="Example alt text for the demonstration."
            loading="lazy"
            className="h-[200px] rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 p-10 text-2xl text-white">
            Lorem Ipsum!
          </div>
        </div>
        <SyntaxHighlighter
          style={oldHopeTheme}
          customStyle={codeCustomStyle}
          showLineNumbers
        >
          {contextualImage}
        </SyntaxHighlighter>

        <p>
          For the second example, the photo is a real DOM element, it has an
          alt-text, a loading lazy attribute, a srcset attribute and much more
          details, meaning that not only users with eyes that can understand it,
          unlike the first example.
        </p>

        <h3 className="heading-3">HTML and CSS images</h3>

        <p>
          Despite all of the previous difference between HTML and CSS images,
          browser also treat them differently in terms of downloading it.
        </p>
        <p>
          Images referenced in <span className="code">&lt;img &#47;&gt;</span>{" "}
          tag assigned a higher loading priority than{" "}
          <span className="code"> background-image </span> defined in css. There
          are also not downloaded until the elements get their style calculated
          and rendered, like so:
        </p>
        <SyntaxHighlighter
          style={oldHopeTheme}
          customStyle={codeCustomStyle}
          showLineNumbers
        >
          {cssImages}
        </SyntaxHighlighter>

        <h2 className="heading-2" id="lazy-loading">
          Lazy loading
        </h2>
        <p>
          Lazy loading images is the most easiest way to make images performance
          better, after adding the attribute to the img tag like this:{" "}
          <span className="code"> &lt;img loading="lazy" &#47;&gt;</span> the
          browser will trigger an http request to fetch the image data and
          display it to the user only after the image become visible into the
          user viewport.
        </p>
        <p>
          To see it in practice, open any project, add some text content that
          fills the page at the top and add an{" "}
          <span className="code">
            &lt;img loading="lazy" src="my-image.png" &#47;&gt;
          </span>{" "}
          to the bottom of the page, meaning that you have to scroll to see it.
        </p>
        <p>
          Open the devtools then open the <span className="code">Network</span>{" "}
          panel, for better experience, in filters select{" "}
          <span className="code">img</span> only, now you should not see the
          request for the image that has the{" "}
          <span className="code">loading="lazy"</span> attribute, scroll down
          until the image is visible in your viewport and check the network
          panel again, you will see that it has been fetched the image and you
          can see all the request details.
        </p>
        <p>
          The logic behind this behavior is that if the user is not going to see
          that image at the bottom of my page, why should I load it and make my
          bandwidth or my transferred resources bigger? which result in bad
          performance and user-experience.
        </p>
        <Note>
          <p>
            <strong>Never</strong> use the loading lazy attribute with images
            that are likely to be in-viewport when the page initially loads.
          </p>
          <p>
            Check out the image in top of this post, you will not see a loading
            lazy attribute
          </p>
          <p>
            This can even lead to a worse performance. First, the browser will
            not load the image because it has the loading lazy attribute, then,
            it will calculate and figure out that the image is already in the
            viewport and has to be loaded, then it will load it, which will
            result in a big delay to the end user.
          </p>
        </Note>

        <h2 className="heading-2" id="alt-text">
          Alt attribute for accessibility
        </h2>
        <p>
          If you are not familiar with accessibility, check out my post for{" "}
          <a
            href="https://www.gergesbadr.com/blog/accessibility-introduction"
            target="_blank"
          >
            Accessibility introduction
          </a>{" "}
          but, long story short, not every user has the ability to "see" the
          image you added, for example users using a screen-reader rely on
          something else (you should provide to them) to understand what's in
          the image, which is the <span className="code">alt=""</span>{" "}
          attribute. When you are writing an alt-text, you should simply
          describe the image.
        </p>
        <h3 className="heading-3">Effectively write an alt-text</h3>
        <ul className="list-decimal ">
          <li>
            <strong>Always consider the context:</strong> The same image can be
            described differently in two different situations. Again, if you
            checked out the image at the beginning of this post, the alt-text
            is: "person using laptop displaying a gallery in the web." because
            it's added in a post explaining the images in the web. If that's a
            post explaining flowers benefits for example, the alt-text would be
            something like: "person using laptop with pink flowers in-front of
            them."
          </li>
          <li>
            <strong>Keep it short and concise:</strong> No one wants to hear too
            much explanation for an image, be simple.
          </li>
          <li>
            <strong>Add a period at the end (.):</strong> This will make the
            screen reader pause taking for a second after the last word,
            achieving better user-experience.
          </li>
          <li>
            <strong>Never remove the alt-attribute:</strong> In some scenarios
            (read below) you will have not to write an alt-text, even thought,
            keep it blank but don't remove it. Removing it can lead to bad and
            un-expected behaviors for some screen-readers like reading the image
            file name instead of nothing. Imagine you encounter an image and the
            screen reader says: "fdd76ad79bac5c47bbf6257e2fa1887c5.jpg"!!
          </li>
          <li>
            <strong>Don't start with the word image or photo, etc..</strong> The
            screen reader already say that's an image, so we don't have to
            repeat it.
          </li>
        </ul>
        <h3 className="heading-3">When not to use an alt-text</h3>
        <ul className="list-decimal ">
          <li>
            <strong>With decorative images:</strong> Read the{" "}
            <a href="#different-types">different-types</a> section
          </li>
          <li>
            {" "}
            <strong>With icons that has a label:</strong> in the footer of this
            website, I have added my social media and how to contact me, each
            link has an image with the platform icon and a label near to it.
            This image should not have an alt-text, in this case the
            screen-reader is going to say: "LinkedIn, LinkedIn, link." for
            example, instead of just: "LinkedIn, link." which is better!
          </li>
        </ul>

        <h2 className="heading-2" id="performance-optimization">
          Performance optimization
        </h2>
        <p>
          Before using an image, it's important to compress it first, by doing
          so, you can reduce up to 50% of the image size and maybe even more
          without losing so much of it's quality, use tolls like{" "}
          <a href="https://squoosh.app/" target="_blank">
            Squoosh
          </a>{" "}
          to do it for you.
        </p>
        <p>
          It's also recommended to use the <span className="code">srcset</span>{" "}
          along with <span className="code">sizes</span> attributes for better
          performance, in the resources you will find more about the topic.
        </p>
        <p>
          But, let's imaging we have a photo of 1200px width, displaying it in a
          big monitor is okay, but in mobile devices, do we really need this
          amount of information? the user will not even see more than 300px or
          400px!
        </p>
        <p>
          So, by using the srcset attribute (like we have done at the second
          example above) we can show users of mobile devices an image with small
          dimensions (subsequently, small size) and users of laptops or PCs a
          bigger image.
        </p>

        <h2 className="heading-2" id="resources">
          See also
        </h2>
        <ul className="list-disc">
          <li>
            <a
              href="https://www.youtube.com/watch?v=PYEkeTDckQw"
              target="_blank"
            >
              The Fundamentals of Images
            </a>{" "}
            (Youtube video)
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=8nlmiGwa6xM"
              target="_blank"
            >
              srcset and sizes attributes
            </a>{" "}
            (Youtube video)
          </li>
          <li>
            <a href="https://web.dev/learn/images" target="_blank">
              Learn images
            </a>{" "}
            (from web.dev)
          </li>
          <li>
            <a
              href="https://web.dev/learn/accessibility/images"
              target="_blank"
            >
              Images and Accessibility
            </a>{" "}
            (from web.dev)
          </li>
          <li>
            <a href="https://cloudconvert.com/jpg-to-ico" target="_blank">
              Cloud converter
            </a>{" "}
            (A tool to convert images and more files types)
          </li>
        </ul>
      </>
    ),
  },
];

export default postsData;
