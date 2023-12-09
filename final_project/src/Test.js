import React from 'react';

const Test = () => {
  return (
    <div>
      <h1>Project Summary (not a page) </h1>
      <h3>1. Topic and Purpose</h3>

      <p>
        This is a recipe generator for anyone that just wants quick, visual
        ideas of what to cook for dinner that day. The great thing about this
        recipe generator is that you can type by ingredients, food name,
        cuisines, and so on. Here is the section breakdown. 1) I have a whole
        homepage of an API based recipe generator. 2) On the same recipe
        generator home page, you can click on the “Open Nutrition Info” button
        to toggle on and off for more food information. The cool part is that
        you can do this for all of the generated recipes. 3) There is a made-up
        food forum section, where users can see what other people are cooking.
        This makes the whole experience more social and fun, and people can just
        scroll through it while they are waiting for the pan to heat up or
        something.{' '}
      </p>

      <h3> 2. Instructions </h3>

      <p>
        To use the Homepage: recipe generator, type in the search bar any
        ingredient name, food name, cuisine, and so on. Press the search button
        and you will get a list of recipes to follow. Each recipe has some basic
        descriptions under it, and you can go to the external link provided to
        follow the original recipe. If you want to learn more about the
        nutritional facts, click the “Open Nutrition Info” button to see.
        Finally, click on the navigation bar’s “Forum” to go to the Forum page,
        where you can discover what other’s are cooking and their reviews of it.{' '}
      </p>

      <h3> 3. Extra Requirements </h3>

      <p>
        <ul>
          <li>
            Event-driven DOM Manipulation: You can toggle the “Open Nutrition
            Info” on and off, affecting the DOM.
          </li>
          <li>
            JSON API(counts as 2):
            https://developer.edamam.com/edamam-docs-recipe-api{' '}
          </li>
          <li>
            React library: using the react router to hop back and forth between
            “Home” and “Forum” pages on the nav bar.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Test;
