import React from 'react';
import Forumdetails from './Forumdetails';

const Forum = () => {
  return (
    <div>
      <div className="forum-title">
        <h1>Forum</h1>
        <h3>See what others have been cooking!</h3>
      </div>
      <div className="forum-cards">
        <Forumdetails
          foodpicture="https://casuallypeckish.com/wp-content/uploads/2020/08/Soy-garlic-chicken-wings-6.jpg"
          foodname="Chinese Soysauce Chicken Wings"
          username="Mikachu"
          rating="Rating: 9/10"
          comment="It was so good omg."
        />

        <Forumdetails
          foodpicture="https://preppykitchen.com/wp-content/uploads/2023/10/Deviled-Eggs-Recipe-Card.jpg"
          foodname="Deviled Eggs"
          username="Javier29"
          rating="Rating: 8/10"
          comment="I think the salt ratio was a bit much but it was still good."
        />

        <Forumdetails
          foodpicture="https://www.thecoffeemom.net/wp-content/uploads/2018/04/Plated-Fried-Taco-Triangles-e1582381633456.jpg"
          foodname="Fried Tacos Triangles"
          username="Yunaa"
          rating="Rating: 6/10"
          comment="I think the sauce made the triangles a little bit soggy."
        />

        <Forumdetails
          foodpicture="https://www.yummytummyaarthi.com/wp-content/uploads/2012/05/mango-pudding-1-.jpg"
          foodname="Mango Pudding"
          username="EepyHappi"
          rating="Rating: 10/10"
          comment="Mango is my fav and this was so easy to make!"
        />
      </div>
    </div>
  );
};

export default Forum;
