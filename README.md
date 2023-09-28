# Next.js CatCommunity Page with AOS

**Description:**

This project demonstrates how to use the AOS library to create an animated testimonial slider and a list of Rick and Morty characters in a Next.js application with Tailwind CSS.

**Requirements:**

* Node.js
* Next.js
* AOS library
* Tailwind CSS

**Instructions:**

1. Clone the repository.
2. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open the browser and navigate to `http://localhost:3000`.

**Usage:**

To use the AOS library in Next.js, you need to import it into your `_app.js` file and initialize it in the `useEffect()` hook. You can then add the `aos-animate` class to the elements you want to animate and configure the animation settings using the `aos-data` attribute.

For example, the following code will animate the `#my-element` element to fade in from the top:

```javascript
// _app.js
import AOS from 'aos';

useEffect(() => {
  AOS.init();
}, []);

// ...
```

```html
// Any page
<div id="my-element" aos="fade-in"></div>
```

**Example:**

The following code shows a simple example of how to use the AOS library in Next.js to create an animated testimonial slider and a list of Rick and Morty characters:

```javascript
// pages/index.js
import { useState } from 'react';
import AOS from 'aos';

const IndexPage = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: 'This is the best CatCommunity page I\'ve ever seen!',
      author: 'Rick Sanchez',
    },
    {
      text: 'I love the animated testimonial slider!',
      author: 'Morty Smith',
    },
    {
      text: 'The list of Rick and Morty characters is amazing!',
      author: 'Summer Smith',
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <!-- Animated testimonial slider -->
      <div className="testimonial-slider" data-aos="fade-in" data-aos-duration="1000">
        <ul>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <p>{testimonial.text}</p>
              <span>{testimonial.author}</span>
            </li>
          ))}
        </ul>
      </div>

      <!-- List of Rick and Morty characters -->
      <ul className="character-list" data-aos="fade-up" data-aos-duration="1000">
        <li>Rick Sanchez</li>
        <li>Morty Smith</li>
        <li>Summer Smith</li>
        <li>Beth Smith</li>
        <li>Jerry Smith</li>
      </ul>
    </div>
  );
};

export default IndexPage;
```

**Deployment:**

To deploy the project, you can use a service like Vercel or Netlify.

**Conclusion:**

This project demonstrates how to use the AOS library to create an animated testimonial slider and a list of Rick and Morty characters in a Next.js application with Tailwind CSS. You can use this code as a starting point to create your own AOS projects.
