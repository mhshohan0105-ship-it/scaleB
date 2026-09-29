export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
};

export const blogCategories = ["Web development", "Cyber security", "Internet"];

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const blogPosts: BlogPost[] = [
  {
    slug: "common-website-security-risks",
    title: "The most common website security risks and how to fix them",
    category: "Cyber security",
    date: "Sep 24, 2026",
    readTime: "",
    excerpt: "Most website attacks are not clever. They use the same handful of weaknesses again and again. Here is what they are and how to close each one.",
    image: unsplash("1550751827-4bd374c3f58b"),
    sections: [
      {
        heading: "Why small websites get attacked too",
        paragraphs: [
          "Many business owners believe hackers only go after banks and big brands. In reality most attacks are automated. Bots scan millions of websites every day looking for known weaknesses and they do not care whether your site belongs to a global company or a local bakery.",
          "Once a weakness is found, a website can be used to steal customer data, send spam, host phishing pages or spread malware to visitors. Cleaning up afterwards costs far more than preventing the problem in the first place. The good news is that a small number of well known issues cause the majority of breaches, so fixing them gives you a huge amount of protection.",
        ],
      },
      {
        heading: "1. SQL injection",
        paragraphs: [
          "Almost every dynamic website stores information in a database. When a website takes text from a form or a URL and places it directly inside a database query, an attacker can type database commands instead of a normal value. With the right input they can read every customer record, change prices or even delete the entire database.",
          "The fix is simple and reliable. Always use parameterised queries or a trusted ORM so the database treats user input as data, never as instructions. Never build a query by joining strings together, even for values you think are safe.",
        ],
        points: [
          "Use prepared statements or an ORM for every database query.",
          "Give the database user only the permissions the website really needs.",
          "Validate input on the server, not only in the browser.",
        ],
      },
      {
        heading: "2. Cross site scripting (XSS)",
        paragraphs: [
          "Cross site scripting happens when a website shows content from users without cleaning it first. An attacker can hide a small piece of JavaScript inside a comment, a product review or a profile name. Every visitor who views that content then runs the script in their own browser.",
          "That script can steal login sessions, redirect people to fake pages or change what they see on the screen. Modern frameworks like React escape content by default, which blocks most XSS. Keep it that way by avoiding raw HTML insertion. Add a Content Security Policy header as a second layer so that even if something slips through, the browser refuses to run unknown scripts.",
        ],
      },
      {
        heading: "3. Broken login and access control",
        paragraphs: [
          "Weak passwords, unlimited login attempts and pages that check who you are but not what you are allowed to do are behind many real breaches. A common example is an admin page that is hidden from the menu but still opens for anyone who knows the URL.",
          "Another classic mistake is trusting an ID in the URL. If changing /invoice/1001 to /invoice/1002 shows another customer's invoice, the website has an access control problem.",
        ],
        points: [
          "Use a proven authentication library instead of building your own.",
          "Limit repeated login attempts and lock suspicious accounts.",
          "Support two factor authentication, especially for admin users.",
          "Check permissions on the server for every single request.",
        ],
      },
      {
        heading: "4. Outdated plugins and packages",
        paragraphs: [
          "Old plugins, themes and code packages are one of the easiest ways in. When a vulnerability becomes public, attackers start scanning the whole internet for websites running that version within hours. WordPress sites with abandoned plugins are a very common target.",
          "Turn on automatic dependency alerts through tools like GitHub Dependabot, apply updates regularly and remove anything you no longer use. Every plugin you install is extra code you are trusting with your business.",
        ],
      },
      {
        heading: "5. Security misconfiguration",
        paragraphs: [
          "Sometimes the code is fine but the server around it is not. Default admin passwords, detailed error messages shown to visitors, open cloud storage buckets and debug mode left on in production all give attackers useful information or direct access.",
          "Create a simple checklist for every launch. Turn off debug mode, hide stack traces, close unused ports, add security headers and make sure file uploads cannot be executed as code.",
        ],
      },
      {
        heading: "Build security into the process",
        paragraphs: [
          "Security is not a one time task that you finish before launch. The safest teams review code with security in mind, run automated scans on every release, keep regular backups and monitor their logs for unusual activity.",
          "If you are not sure where your website stands, a professional security review is a small investment compared with the cost of a breach. At ScaleB we include security checks in every project so your website is protected from day one.",
        ],
      },
    ],
  },
  {
    slug: "make-your-website-load-fast",
    title: "How to make your website load in under two seconds",
    category: "Web development",
    date: "Sep 20, 2026",
    readTime: "",
    excerpt: "Every extra second of loading costs visitors and sales. These practical steps make a real difference to website speed.",
    image: unsplash("1551288049-bebda4e38f71"),
    sections: [
      {
        heading: "Why speed matters so much",
        paragraphs: [
          "People are impatient online. Studies from Google show that as page load time goes from one second to three seconds, the chance of a visitor leaving increases by around a third. On mobile networks the effect is even stronger.",
          "Speed also affects how easily people find you. Google uses Core Web Vitals as a ranking signal, so a slow website can lose visitors from search results before anyone even sees it. A fast website wins twice: more people arrive and more of them stay.",
        ],
      },
      {
        heading: "Understand Core Web Vitals",
        paragraphs: [
          "Core Web Vitals are three simple measurements that describe how a page feels to real users. They are the best place to start because they focus on experience rather than technical trivia.",
        ],
        points: [
          "Largest Contentful Paint (LCP): how quickly the main content appears. Aim for under 2.5 seconds.",
          "Interaction to Next Paint (INP): how quickly the page responds when someone taps or clicks. Aim for under 200 milliseconds.",
          "Cumulative Layout Shift (CLS): how much the page jumps around while loading. Aim for a score under 0.1.",
        ],
      },
      {
        heading: "Optimise your images",
        paragraphs: [
          "Images are usually the heaviest part of a web page. A single photo straight from a camera can be larger than the rest of the website combined. Serve modern formats like WebP or AVIF, which are often half the size of JPEG at the same quality.",
          "Resize images to the size they are actually shown. There is no reason to send a 4000 pixel wide photo to a phone screen. Lazy load images that sit below the first screen so the browser only downloads them when they are needed. Frameworks like Next.js handle much of this automatically with their built in image component.",
        ],
      },
      {
        heading: "Send less JavaScript",
        paragraphs: [
          "JavaScript is expensive. The browser has to download it, read it and run it before the page becomes interactive. On an average phone this can take several seconds for a large bundle.",
          "Remove libraries you no longer use, split code so each page only loads what it needs and render as much as possible on the server. Be careful with third party scripts such as chat widgets, trackers and ad tools. Each one adds weight and can quietly slow down every page.",
        ],
      },
      {
        heading: "Use caching and a CDN",
        paragraphs: [
          "A content delivery network stores copies of your website on servers around the world. When someone in Dhaka visits a site hosted in the United States, the files come from a nearby location instead of crossing the ocean every time.",
          "Combine a CDN with good cache headers so browsers keep static files like images, fonts and stylesheets. Repeat visits can then feel almost instant because most of the page is already on the visitor's device.",
        ],
      },
      {
        heading: "Load fonts wisely",
        paragraphs: [
          "Custom fonts make a brand feel unique, but each font file adds download time. Use only the weights you need, host fonts on your own domain when possible and use font display swap so text appears immediately with a fallback font.",
        ],
      },
      {
        heading: "Measure, improve and measure again",
        paragraphs: [
          "Guessing about performance rarely works. Use PageSpeed Insights, Lighthouse and the Core Web Vitals report in Google Search Console to see what real users experience. Fix the biggest problem first, then measure again.",
          "Speed is not a one time project. New features, images and scripts can slowly make a site heavier. Set a performance budget and check it before every release so your website stays fast as it grows.",
        ],
      },
    ],
  },
  {
    slug: "how-the-internet-works",
    title: "How the internet actually works",
    category: "Internet",
    date: "Sep 16, 2026",
    readTime: "",
    excerpt: "We use it every minute, yet few people know what happens underneath. A simple guide to the network of networks.",
    image: unsplash("1451187580459-43490279c0fa"),
    sections: [
      {
        heading: "A network of networks",
        paragraphs: [
          "The internet is not one thing owned by one company. It is tens of thousands of independent networks run by internet providers, mobile operators, universities, businesses and cloud companies. Each of these networks agrees to pass traffic to the others and together they form one global system.",
          "These networks connect at large meeting points called internet exchange points, where providers plug their equipment into each other. Under the oceans, hundreds of fibre optic cables link continents together and carry almost all international internet traffic.",
        ],
      },
      {
        heading: "IP addresses: the internet's postal system",
        paragraphs: [
          "Every device connected to the internet has an IP address. It works like a postal address so data knows where to go. The older IPv4 format looks like 142.250.183.14 and the newer IPv6 format is much longer, because the world simply ran out of IPv4 addresses.",
          "Your home router usually has one public address that the whole internet sees. Inside your home, every phone, laptop and smart TV gets a private address and the router keeps track of which conversation belongs to which device.",
        ],
      },
      {
        heading: "Packets: breaking data into small pieces",
        paragraphs: [
          "Everything you send online is broken into small pieces called packets. A photo, a video call or a web page might be split into thousands of them. Each packet carries the address it came from and the address it is going to.",
          "Routers along the way read those addresses and forward each packet one step closer to its destination. Packets from the same message can even take different paths across the world and still be put back together correctly at the end. If one route becomes busy or breaks, traffic simply flows around it.",
        ],
      },
      {
        heading: "Protocols: a shared language",
        paragraphs: [
          "For all of this to work, every device must follow the same rules. These rules are called protocols and they are stacked on top of each other like layers.",
        ],
        points: [
          "IP moves packets from one address to another.",
          "TCP makes sure every packet arrives in the right order and resends anything that goes missing.",
          "DNS turns website names into IP addresses.",
          "TLS encrypts the conversation so nobody in the middle can read it.",
          "HTTP defines how browsers ask for web pages and how servers reply.",
        ],
      },
      {
        heading: "Who is in charge?",
        paragraphs: [
          "No single government or company runs the internet. Technical standards are developed openly by groups like the Internet Engineering Task Force. ICANN coordinates domain names and IP address allocation, while regional registries hand out addresses in different parts of the world.",
          "This open and shared structure is exactly why the internet grew so quickly. Anyone can build a new website, app or service on top of it without asking permission.",
        ],
      },
      {
        heading: "Why this matters for your business",
        paragraphs: [
          "Understanding the basics helps you make better decisions about hosting, speed and security. When you know that distance adds delay, a CDN makes sense. When you know data travels through many networks, encryption becomes essential.",
          "The next time a web page opens in a fraction of a second, remember the incredible journey behind it: packets crossing cables, routers and oceans, all following the same simple rules.",
        ],
      },
    ],
  },
  {
    slug: "passwords-are-not-enough",
    title: "Why passwords alone are not enough anymore",
    category: "Cyber security",
    date: "Sep 12, 2026",
    readTime: "",
    excerpt: "Billions of passwords have already leaked. Two factor authentication and passkeys are the simplest way to stay safe.",
    image: unsplash("1614064641938-3bbee52942c7"),
    sections: [
      {
        heading: "The scale of the problem",
        paragraphs: [
          "Billions of usernames and passwords from past data breaches are freely available on the internet. Security researchers regularly find collections containing more than ten billion leaked credentials. There is a real chance that at least one of your old passwords is already in one of these lists.",
          "You can check for yourself on the website Have I Been Pwned, which tells you whether your email address has appeared in a known breach.",
        ],
      },
      {
        heading: "How attackers use leaked passwords",
        paragraphs: [
          "Most people reuse passwords across several websites. When one site is breached, attackers take the leaked email and password pairs and try them automatically on email providers, banks, social networks and business tools. This is called credential stuffing and it works far too often.",
          "Attackers also use password spraying, where they try a few very common passwords like Password123 against thousands of accounts. And of course phishing pages trick people into typing their password straight into a fake login form.",
        ],
      },
      {
        heading: "What makes a strong password",
        paragraphs: [
          "Length matters more than complexity. A long passphrase made of four or five random words is both easier to remember and much harder to crack than a short password full of symbols.",
        ],
        points: [
          "Use at least 12 to 16 characters.",
          "Never reuse the same password on two websites.",
          "Avoid names, birthdays and common words on their own.",
          "Use a password manager so you only need to remember one strong master password.",
        ],
      },
      {
        heading: "Add a second factor",
        paragraphs: [
          "Two factor authentication, often called 2FA, asks for something you have as well as something you know. Even if a password leaks, the attacker still needs your phone or security key to log in. Microsoft has reported that enabling it blocks more than 99 percent of automated account attacks.",
          "Not all second factors are equal. Authenticator apps like Google Authenticator or Microsoft Authenticator are safer than SMS codes, because text messages can be stolen through SIM swapping. Physical security keys offer the strongest protection of all.",
        ],
      },
      {
        heading: "Passkeys are the future",
        paragraphs: [
          "Passkeys replace passwords completely. Instead of a secret you type, your device creates a unique cryptographic key for each website. Signing in only takes a fingerprint, a face scan or your device PIN.",
          "Passkeys cannot be phished because they only work on the real website they were created for. They cannot be reused because every site gets a different key. Apple, Google and Microsoft all support them and more websites add them every month.",
        ],
      },
      {
        heading: "What your business should do today",
        paragraphs: [
          "Start with the accounts that matter most: email, banking, domain registrar, hosting and your website admin panel. If an attacker gets into your email, they can reset the password for almost everything else.",
        ],
        points: [
          "Roll out a password manager for the whole team.",
          "Require two factor authentication on every business account.",
          "Offer passkeys or 2FA to your own customers.",
          "Remove access immediately when someone leaves the company.",
        ],
      },
    ],
  },
  {
    slug: "responsive-design-basics",
    title: "Responsive design: one website for every screen",
    category: "Web development",
    date: "Sep 8, 2026",
    readTime: "",
    excerpt: "More than half of web traffic comes from phones. Here is how to build a website that works beautifully on any screen size.",
    image: unsplash("1512941937669-90a1b58e7e9c"),
    sections: [
      {
        heading: "The world browses on phones",
        paragraphs: [
          "Today more than 60 percent of global web traffic comes from mobile devices and in many countries including Bangladesh the number is even higher. For many of your customers, their phone is the only way they will ever see your website.",
          "Google also uses mobile first indexing, which means it looks at the mobile version of your site to decide how to rank it. A website that only looks good on a desktop is quietly losing both customers and search traffic.",
        ],
      },
      {
        heading: "What responsive design means",
        paragraphs: [
          "A responsive website uses one set of code that adapts its layout to any screen size. The same page might show three columns on a large monitor, two on a tablet and a single column on a phone. Nothing needs to be built twice.",
          "This is far better than the old approach of running a separate mobile website. One site is cheaper to maintain, keeps content consistent and avoids confusing duplicate pages in search results.",
        ],
      },
      {
        heading: "Start with mobile first",
        paragraphs: [
          "Designing for the smallest screen first forces you to focus on what really matters. With limited space you have to decide which content and actions are most important. It is much easier to add space and detail for larger screens than to squeeze a busy desktop layout onto a phone.",
        ],
      },
      {
        heading: "Flexible layouts and images",
        paragraphs: [
          "CSS Grid and Flexbox make it easy to build layouts that adapt naturally. Use relative units like percentages and rem instead of fixed pixel widths. Let content wrap onto new lines when space runs out.",
          "Add breakpoints only where the design actually breaks, not for specific device models. There are thousands of different screen sizes, so a layout that flows smoothly between them is much more reliable than one designed for a few popular phones.",
        ],
        points: [
          "Include the viewport meta tag in every page.",
          "Make images scale with max width set to 100 percent.",
          "Use responsive image sizes so phones download smaller files.",
          "Avoid horizontal scrolling on every screen size.",
        ],
      },
      {
        heading: "Design for fingers, not a mouse",
        paragraphs: [
          "Buttons and links need to be big enough to tap comfortably. Apple recommends a minimum of 44 by 44 pixels. Leave enough space between tappable items so people do not hit the wrong one by accident.",
          "Hover effects should never hide important information, because phones do not have hover. Forms should use the right input types so phones show a number keypad for phone numbers and an email keyboard for email addresses.",
        ],
      },
      {
        heading: "Test on real devices",
        paragraphs: [
          "Browser developer tools are great for quick checks, but they cannot show everything. A real phone in your hand reveals slow loading on mobile data, text that is too small to read outdoors and buttons that are hard to reach with one thumb.",
          "Test on at least one iPhone and one Android phone, in both portrait and landscape. The small effort pays off in a website that feels natural for every visitor.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-when-you-type-a-url",
    title: "What happens when you type a website address",
    category: "Internet",
    date: "Sep 4, 2026",
    readTime: "",
    excerpt: "From pressing Enter to seeing a page takes less than a second. Behind that second is DNS, TCP, TLS and HTTP working together.",
    image: unsplash("1544197150-b99a580bb7a8"),
    sections: [
      {
        heading: "Less than a second, many steps",
        paragraphs: [
          "Typing a website address and pressing Enter feels like one simple action. Behind the scenes, your device performs a series of carefully coordinated steps with computers that may be on the other side of the planet. Understanding them helps explain why some websites feel instant and others feel slow.",
        ],
      },
      {
        heading: "Step 1: DNS finds the address",
        paragraphs: [
          "Computers do not understand names like scaleb.com. They need a numeric IP address. The Domain Name System works like the internet's phone book, translating human friendly names into these addresses.",
          "Your browser first checks its own memory, then your operating system, then your router. If none of them know the answer, a DNS resolver asks the root servers, then the servers for .com and finally the servers responsible for the domain itself. The answer is cached along the way so the next lookup is much faster.",
        ],
      },
      {
        heading: "Step 2: opening a connection",
        paragraphs: [
          "With the IP address in hand, your browser opens a connection to the web server. Using TCP, the two computers exchange a short handshake to agree that they are ready to talk. Newer websites often use HTTP/3, which runs over a faster protocol called QUIC and reduces this delay even further.",
        ],
      },
      {
        heading: "Step 3: the secure handshake",
        paragraphs: [
          "For any HTTPS website, the next step is a TLS handshake. The server sends its certificate to prove it really is the website you asked for. Your browser checks that the certificate was issued by a trusted authority and has not expired.",
          "Both sides then agree on encryption keys. From this point on, everything sent between you and the website is encrypted, so nobody on the network can read or change it.",
        ],
      },
      {
        heading: "Step 4: request and response",
        paragraphs: [
          "Now the browser finally sends an HTTP request asking for the page. The server might return a ready made file from a cache, or it might run code, query a database and build the page on the spot. It replies with a status code such as 200 for success or 404 for not found, along with the HTML.",
          "That HTML usually points to more files: stylesheets, JavaScript, images and fonts. The browser requests all of these as well, often many at the same time.",
        ],
      },
      {
        heading: "Step 5: rendering the page",
        paragraphs: [
          "The browser reads the HTML and CSS to build a model of the page, calculates where every element should go and paints the pixels on your screen. JavaScript then runs to make buttons, menus and forms interactive.",
        ],
        points: [
          "Fast DNS and a CDN shorten the first steps.",
          "HTTP/2 and HTTP/3 make connections more efficient.",
          "Smaller files and less JavaScript speed up rendering.",
        ],
      },
      {
        heading: "Every step is a chance to be faster",
        paragraphs: [
          "When a website feels slow, the delay can hide in any of these steps. A good development team measures each stage and improves the weakest link, whether that means better hosting, caching, smaller images or lighter code.",
        ],
      },
    ],
  },
  {
    slug: "spotting-phishing-emails",
    title: "How to spot a phishing email before it is too late",
    category: "Cyber security",
    date: "Aug 30, 2026",
    readTime: "",
    excerpt: "Phishing is still the number one way attackers get in. Learn the warning signs your whole team should know.",
    image: unsplash("1563986768609-322da13575f3"),
    sections: [
      {
        heading: "Why phishing still works",
        paragraphs: [
          "Phishing is an attack where criminals pretend to be someone you trust to trick you into clicking a link, opening a file or sharing information. It is still the most common starting point for data breaches and ransomware attacks around the world.",
          "It works because it targets people rather than technology. Even the best firewall cannot stop an employee from typing their password into a convincing fake page. With AI tools, attackers can now write perfect, personalised emails in any language, so the old advice to look for spelling mistakes is no longer enough.",
        ],
      },
      {
        heading: "Check the sender carefully",
        paragraphs: [
          "Attackers use addresses that look almost right, like support@paypa1.com or billing@micros0ftsupport.com. Email apps often show only the display name, which can say anything. Always look at the full email address behind the name.",
          "Be extra careful with messages that seem to come from your own boss or a colleague but arrive from a personal Gmail account or an unusual domain. This trick, called business email compromise, costs companies billions every year.",
        ],
      },
      {
        heading: "Be suspicious of urgency and pressure",
        paragraphs: [
          "Phishing emails are designed to make you act before you think. They often say your account will be closed today, a payment has failed, a parcel cannot be delivered or the CEO needs an urgent bank transfer.",
          "Whenever a message creates pressure, slow down. Verify the request through another channel, such as calling the person on a number you already know. A real colleague or company will never mind you double checking.",
        ],
      },
      {
        heading: "Look before you click",
        paragraphs: [
          "On a computer, hover over a link to see where it really goes before clicking. On a phone, press and hold the link to preview it. If the address does not match the company it claims to be from, do not open it.",
          "Never enter a password on a page you reached from an email link. Instead, open the website yourself by typing the address or using a bookmark.",
        ],
        points: [
          "Unexpected attachments, especially ZIP files or documents asking you to enable macros.",
          "Requests for passwords, one time codes or payment details.",
          "Generic greetings like Dear Customer from a company that knows your name.",
          "Offers that seem too good to be true, like prizes you never entered for.",
          "QR codes in emails that lead to login pages.",
        ],
      },
      {
        heading: "What to do if you clicked",
        paragraphs: [
          "Mistakes happen, even to careful people. What matters is acting fast. If you entered a password, change it immediately on the real website and on any other site where you used the same password. Turn on two factor authentication if it was not already active.",
          "Tell your IT team or manager straight away, even if you feel embarrassed. A fast report gives the team time to block the attacker before real damage is done.",
        ],
      },
      {
        heading: "Build a culture of reporting",
        paragraphs: [
          "Technology helps, but people are the strongest defence. Run short training sessions a few times a year, share real examples and give everyone a simple way to report suspicious emails with one click.",
          "Thank people when they report something, even if it turns out to be harmless. A team that feels safe asking questions will catch attacks that no filter can.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-tech-stack",
    title: "Choosing the right tech stack for your website",
    category: "Web development",
    date: "Aug 26, 2026",
    readTime: "",
    excerpt: "WordPress, Next.js, Laravel or something else? The right choice depends on your goals, not on what is trendy.",
    image: unsplash("1555949963-aa79dcee981c"),
    sections: [
      {
        heading: "What is a tech stack?",
        paragraphs: [
          "A tech stack is the combination of technologies used to build and run a website. It usually includes a frontend that visitors see, a backend that handles logic, a database that stores information and the hosting that keeps everything online.",
          "The stack you choose affects how fast your website is, how much it costs to build and maintain, how easily your team can update content and how well it can grow in the future. It is one of the most important early decisions in any project.",
        ],
      },
      {
        heading: "Start with what the website must do",
        paragraphs: [
          "Before looking at any technology, write down what the website needs to achieve. A marketing site, an online store and a custom web application have very different requirements.",
        ],
        points: [
          "Who will update the content and how technical are they?",
          "How much traffic do you expect now and in two years?",
          "Do you need user accounts, payments or integrations with other systems?",
          "What is the budget for building and for ongoing maintenance?",
          "How quickly does the first version need to launch?",
        ],
      },
      {
        heading: "WordPress",
        paragraphs: [
          "WordPress powers more than 40 percent of all websites. It is a great choice for content heavy sites like blogs, news portals and company websites that non technical teams need to update every day. Thousands of themes and plugins make it quick to launch.",
          "The downside is that too many plugins can make a site slow and increase security risk. WordPress works best with a lean setup, a quality theme and regular updates.",
        ],
      },
      {
        heading: "Next.js and React",
        paragraphs: [
          "Next.js is built on React and is ideal for fast, modern websites and web applications. It supports server rendering for excellent performance and SEO, while still offering rich interactivity.",
          "It pairs well with a headless CMS such as Sanity, Contentful or Strapi, so marketing teams can still edit content without touching code. This is the stack we often recommend for businesses that care about speed, design and long term flexibility.",
        ],
      },
      {
        heading: "Laravel and Django",
        paragraphs: [
          "When a project has complex business logic, such as booking systems, internal tools or custom dashboards, a strong backend framework is essential. Laravel for PHP and Django for Python are mature, secure and well documented. They include authentication, database tools and admin features out of the box.",
        ],
      },
      {
        heading: "Ecommerce platforms",
        paragraphs: [
          "For online stores, building everything from scratch is rarely worth it. Shopify handles payments, inventory and security for you and lets you launch quickly. WooCommerce works well for stores already on WordPress. Larger brands often choose headless commerce, combining Shopify or another engine with a custom Next.js frontend for maximum speed and design freedom.",
        ],
      },
      {
        heading: "Think long term",
        paragraphs: [
          "The newest framework is not always the best one. Choose tools with active communities, good documentation and developers you can actually hire in your region. The cheapest option today can become the most expensive one to maintain if nobody can support it later.",
          "If you are unsure, talk to an experienced team before you commit. A short technical consultation can save months of rework.",
        ],
      },
    ],
  },
  {
    slug: "https-and-ssl-explained",
    title: "HTTPS and SSL certificates explained simply",
    category: "Cyber security",
    date: "Aug 22, 2026",
    readTime: "",
    excerpt: "That small padlock in the browser means more than you think. Why every website needs HTTPS and how to set it up for free.",
    image: unsplash("1526374965328-7f61d4dc18c5"),
    sections: [
      {
        heading: "HTTP versus HTTPS",
        paragraphs: [
          "HTTP is the language browsers and websites use to talk to each other. The problem with plain HTTP is that everything travels as readable text. Anyone on the same network, such as a public WiFi hotspot, an internet provider or a compromised router, can read or even change the data.",
          "HTTPS is simply HTTP with a layer of encryption added on top. That extra S stands for secure and it turns your conversation with the website into scrambled data that only your browser and the real server can understand.",
        ],
      },
      {
        heading: "What an SSL certificate does",
        paragraphs: [
          "People still say SSL, but modern websites actually use its successor called TLS. Either way, the certificate does two important jobs.",
        ],
        points: [
          "Encryption: it allows the browser and server to agree on secret keys so data cannot be read in transit.",
          "Identity: it proves the website really belongs to the domain you typed, so visitors are protected from fake copies.",
          "Integrity: it makes sure nothing was changed between the server and the visitor.",
        ],
      },
      {
        heading: "Why every website needs it",
        paragraphs: [
          "Some owners think HTTPS is only for online shops. That is no longer true. Browsers like Chrome now label every HTTP page as Not secure, which scares visitors away, especially on pages with forms.",
          "Google has used HTTPS as a ranking signal for years. Many modern browser features, including location access, camera access and service workers, only work on secure websites. Put simply, a website without HTTPS looks outdated and untrustworthy.",
        ],
      },
      {
        heading: "Types of certificates",
        paragraphs: [
          "Domain Validated certificates confirm that you control the domain. They are issued in minutes and are perfect for most websites. Organisation Validated and Extended Validation certificates also check the company behind the website, which some banks and large enterprises prefer. Browsers show the same padlock for all of them.",
        ],
      },
      {
        heading: "Getting a certificate for free",
        paragraphs: [
          "Let's Encrypt is a non profit certificate authority that provides free certificates to anyone. They renew automatically every few months, so you never have to remember an expiry date.",
          "Most modern hosting platforms, including Vercel, Netlify, Cloudflare and many cPanel hosts, turn on HTTPS with a single click or even automatically. There is no longer any cost reason to run a website without it.",
        ],
      },
      {
        heading: "Setting it up correctly",
        paragraphs: [
          "Installing the certificate is only the first step. To get the full benefit you also need a few settings in place.",
        ],
        points: [
          "Redirect every HTTP address to its HTTPS version with a permanent 301 redirect.",
          "Fix mixed content by loading all images, scripts and fonts over HTTPS.",
          "Add the HSTS header so browsers always connect securely.",
          "Update links, sitemaps and Google Search Console to use the HTTPS address.",
          "Monitor certificate expiry in case automatic renewal ever fails.",
        ],
      },
    ],
  },
  {
    slug: "choosing-web-hosting",
    title: "Shared, VPS or cloud hosting: which one do you need?",
    category: "Internet",
    date: "Aug 18, 2026",
    readTime: "",
    excerpt: "Hosting decides how fast, reliable and secure your website is. A plain guide to the main options and when to use each.",
    image: unsplash("1558494949-ef010cbdcc31"),
    sections: [
      {
        heading: "What web hosting really is",
        paragraphs: [
          "Every website lives on a computer called a server that is connected to the internet all day and night. Web hosting is the service of renting space and power on those servers. When someone visits your website, their browser downloads the files from your host.",
          "Your hosting choice affects speed, uptime, security and how easily your website can handle more visitors. Choosing well at the start saves painful migrations later.",
        ],
      },
      {
        heading: "Shared hosting",
        paragraphs: [
          "With shared hosting your website sits on a server together with hundreds or even thousands of other websites. Everyone shares the same processor, memory and bandwidth. It is very cheap and easy to start with, usually including a control panel, email accounts and one click WordPress installs.",
          "The downside is that you have little control and your performance depends on your neighbours. If another site on the server suddenly gets a traffic spike or is hacked, your website can slow down or be affected too.",
        ],
        points: [
          "Best for: personal websites, small blogs and simple brochure sites.",
          "Typical cost: a few dollars per month.",
        ],
      },
      {
        heading: "VPS hosting",
        paragraphs: [
          "A virtual private server divides one physical machine into several isolated virtual machines. You get your own guaranteed share of resources and full control over the software installed.",
          "This is a good middle step for growing business websites and small web applications. The trade off is responsibility: someone needs to set up, update and secure the server. Managed VPS plans take care of this for an extra fee.",
        ],
        points: [
          "Best for: growing business sites, custom applications and online stores with steady traffic.",
          "Typical cost: from around ten to a hundred dollars per month.",
        ],
      },
      {
        heading: "Cloud hosting",
        paragraphs: [
          "Cloud platforms like AWS, Google Cloud and Microsoft Azure run your website on a huge pool of servers. You can add more capacity in minutes when traffic grows and pay only for what you use. If one machine fails, another takes over automatically.",
          "Cloud hosting offers the most power and flexibility, but it can become complex to manage and costs need to be monitored carefully.",
        ],
      },
      {
        heading: "Modern managed and edge platforms",
        paragraphs: [
          "Platforms like Vercel, Netlify and Cloudflare have made cloud hosting much simpler. You connect your code repository and every update is built and deployed automatically. Your website is served from locations all around the world, so visitors everywhere get fast load times.",
          "These platforms include free HTTPS, automatic scaling and preview links for every change, which makes them ideal for modern websites built with frameworks like Next.js.",
        ],
      },
      {
        heading: "How to choose",
        paragraphs: [
          "Think about your traffic, your technical skills and how important uptime is to your business. A small personal blog does not need an enterprise cloud setup, but an online store that loses money every minute it is offline should not rely on the cheapest shared plan.",
          "For most businesses today, a managed cloud or edge platform gives the best balance of performance, security and cost. Whatever you choose, look for daily backups, good support and a clear uptime guarantee.",
        ],
      },
    ],
  },
  {
    slug: "seo-basics-for-websites",
    title: "SEO basics every website owner should know",
    category: "Web development",
    date: "Aug 14, 2026",
    readTime: "",
    excerpt: "A beautiful website nobody can find does not help your business. These technical foundations help search engines understand your site.",
    image: unsplash("1460925895917-afdab827c52f"),
    sections: [
      {
        heading: "What SEO really means",
        paragraphs: [
          "Search engine optimisation is the work of helping search engines like Google understand your website so they can show it to the right people. When someone searches for a service you offer, good SEO helps your page appear near the top of the results.",
          "Organic search is often the largest source of website visitors and unlike ads, you do not pay for every click. A solid SEO foundation keeps bringing in customers month after month.",
        ],
      },
      {
        heading: "How search engines work",
        paragraphs: [
          "Search engines work in three stages. First they crawl the web, following links to discover pages. Then they index those pages, reading and storing information about what each one is about. Finally they rank the indexed pages for every search, based on relevance, quality and user experience.",
          "Your job is to make each of these stages easy: make pages easy to find, easy to understand and genuinely useful.",
        ],
      },
      {
        heading: "Start with keyword research",
        paragraphs: [
          "Think about the words your customers actually type. They might search for website development company in Dhaka rather than digital product studio. Tools like Google Keyword Planner, Ahrefs and even Google's own search suggestions show what people are looking for.",
          "Give each important page one clear main topic and write for people first. Stuffing keywords into every sentence does more harm than good.",
        ],
      },
      {
        heading: "On page essentials",
        paragraphs: [
          "Every page should clearly tell both visitors and search engines what it is about.",
        ],
        points: [
          "A unique title tag of around 50 to 60 characters that includes the main keyword.",
          "A meta description that explains the page and encourages clicks.",
          "One main H1 heading and logical subheadings below it.",
          "Short, readable URLs such as /services/seo.",
          "Descriptive alt text for every meaningful image.",
          "Internal links that connect related pages together.",
        ],
      },
      {
        heading: "Technical health",
        paragraphs: [
          "Even great content can struggle if the technical foundation is weak. Submit an XML sitemap in Google Search Console so Google knows about all your pages. Use a robots.txt file to guide crawlers and fix broken links and redirect chains.",
          "Make sure the website is fast, works perfectly on mobile and uses HTTPS. Structured data, also called schema markup, can help your pages appear with rich results like star ratings, FAQs and event dates.",
        ],
      },
      {
        heading: "Content and authority",
        paragraphs: [
          "Google rewards content that shows real experience and expertise. Helpful blog articles, clear service pages and honest case studies all build trust. When other reputable websites link to yours, it signals that your content is valuable.",
          "For local businesses, a complete Google Business Profile with accurate contact details, photos and genuine reviews can bring in a steady flow of nearby customers.",
        ],
      },
      {
        heading: "Be patient and measure",
        paragraphs: [
          "SEO is a long game. It often takes three to six months to see meaningful results. Track your progress with Google Search Console and Google Analytics, watch which pages bring visitors and keep improving them.",
          "Avoid anyone promising number one rankings overnight. Useful content and a technically healthy website beat shortcuts every time.",
        ],
      },
    ],
  },
  {
    slug: "is-public-wifi-safe",
    title: "Is public WiFi safe to use?",
    category: "Internet",
    date: "Aug 10, 2026",
    readTime: "",
    excerpt: "Cafe and airport WiFi is convenient but not always safe. Simple habits that protect your data on shared networks.",
    image: unsplash("1554118811-1e0d58224f24"),
    sections: [
      {
        heading: "Convenient but shared",
        paragraphs: [
          "Free WiFi is everywhere: cafes, hotels, airports, shopping malls and co working spaces. It is incredibly useful, especially when mobile data is slow or expensive. But when you join a public network, you are sharing it with strangers and you have no idea how well it is managed.",
          "Public WiFi is much safer than it was ten years ago, mainly because most websites now use HTTPS. Still, a few real risks remain and simple habits can protect you from almost all of them.",
        ],
      },
      {
        heading: "The main risks",
        paragraphs: [
          "Understanding what can go wrong makes it easier to stay safe.",
        ],
        points: [
          "Evil twin hotspots: attackers create a fake network with a believable name like Free Airport WiFi. Everything you do passes through their device.",
          "Snooping: on open networks without a password, other users may be able to see unencrypted traffic.",
          "Fake login pages: a hotspot's sign in page can be used to collect email addresses, passwords or card details.",
          "Device exposure: if file sharing is turned on, other people on the network may be able to see your shared folders.",
        ],
      },
      {
        heading: "Check the network name",
        paragraphs: [
          "Before connecting, ask a staff member for the exact network name. Attackers rely on people choosing whichever network looks right. If you see two similar names, be cautious.",
          "Turn off automatic connection to open networks on your phone and laptop. Otherwise your device may join a fake hotspot with a familiar name without asking you.",
        ],
      },
      {
        heading: "Only use HTTPS websites",
        paragraphs: [
          "Look for the padlock in the address bar before entering any information. HTTPS encrypts the data between your browser and the website, so even someone watching the network cannot read it. If a website shows a certificate warning while you are on public WiFi, do not continue. That can be a sign someone is intercepting your connection.",
        ],
      },
      {
        heading: "Use a VPN for extra protection",
        paragraphs: [
          "A virtual private network creates an encrypted tunnel from your device to a trusted server. Everything you do online travels through that tunnel, hiding it from anyone else on the local network.",
          "Choose a reputable paid VPN or one provided by your company. Be careful with free VPN apps, as some make money by collecting and selling your data, which defeats the purpose.",
        ],
      },
      {
        heading: "Simple habits for staying safe",
        paragraphs: [
          "A few small settings make a big difference whenever you are away from home or the office.",
        ],
        points: [
          "Use your phone's personal hotspot for banking and other sensitive tasks.",
          "Turn off file sharing and set the network as public on your laptop.",
          "Keep your operating system and browser updated.",
          "Enable two factor authentication on important accounts.",
          "Forget the network on your device when you leave.",
        ],
      },
    ],
  },
  {
    slug: "website-backups",
    title: "Backups: your website's last line of defence",
    category: "Cyber security",
    date: "Aug 6, 2026",
    readTime: "",
    excerpt: "Ransomware, bad updates and simple mistakes can take a website down. A good backup plan turns a disaster into a small delay.",
    image: unsplash("1597852074816-d933c7d2b988"),
    sections: [
      {
        heading: "Things go wrong more often than you think",
        paragraphs: [
          "Every website will eventually face a bad day. A plugin update breaks the layout. A team member deletes the wrong page. A hosting server fails. Ransomware encrypts every file. Without a good backup, any of these can mean days of downtime or losing years of content and customer data.",
          "With the right backup plan, the same problems become a short inconvenience. You restore yesterday's version and carry on.",
        ],
      },
      {
        heading: "What you need to back up",
        paragraphs: [
          "A website is more than the files you see. To restore it fully you need every part.",
        ],
        points: [
          "The website files: code, themes, plugins and configuration.",
          "The database: pages, products, orders, users and settings.",
          "Uploaded media such as images, videos and documents.",
          "Server settings, environment variables and DNS records.",
          "Email accounts, if your email is hosted with your website.",
        ],
      },
      {
        heading: "Follow the 3 2 1 rule",
        paragraphs: [
          "The 3 2 1 rule is a simple and proven backup strategy. Keep three copies of your data, on two different types of storage, with one copy stored offsite in a different location.",
          "For a website this might mean the live site, a daily backup stored by your host and another copy in a separate cloud storage service like Amazon S3 or Google Cloud Storage. If your host has a major problem or your account is compromised, the offsite copy is still safe.",
        ],
      },
      {
        heading: "Protect backups from ransomware",
        paragraphs: [
          "Modern ransomware actively searches for backups and tries to encrypt or delete them too. If your backups are stored with the same login as your website, one stolen password can destroy everything.",
          "Use separate credentials for backup storage and turn on immutable or versioned backups, which cannot be changed or deleted for a set period. Encrypt backups so the data stays private even if the storage is accessed.",
        ],
      },
      {
        heading: "Automate and schedule",
        paragraphs: [
          "Manual backups get forgotten, usually right before they are needed. Schedule automatic backups instead. Most business websites should back up the database at least daily and the full site at least weekly. Busy online stores may need backups every hour.",
          "Keep several older versions rather than only the latest one. Some problems, like a hidden malware infection, may go unnoticed for weeks and you will need a clean copy from before it started.",
        ],
      },
      {
        heading: "Test your restore",
        paragraphs: [
          "A backup you have never restored is only a hope. Every few months, restore a full copy of your website to a test environment. Check that pages load, images appear, forms work and the data is complete.",
          "Write down the steps and note how long the restore takes. When a real emergency happens, you will know exactly what to do and how quickly you can be back online.",
        ],
      },
      {
        heading: "Make it part of your routine",
        paragraphs: [
          "Backups are not exciting, but they are one of the most valuable investments you can make in your website. At ScaleB, every website we manage includes automatic offsite backups and regular restore tests, so our clients never have to worry about losing their work.",
        ],
      },
    ],
  },
];

// Read time is calculated from the article text so it always stays accurate.
for (const post of blogPosts) {
  const text = [post.excerpt, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.points ?? [])])].join(" ");
  const minutes = Math.max(1, Math.round(text.split(/\s+/).length / 200));
  post.readTime = `${minutes} min read`;
}
