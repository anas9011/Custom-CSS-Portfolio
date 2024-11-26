import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';
const data = [
 {
  id: 0,
  title: "Static Iteractive Resume",
  desc: "A TypeScript-based interactive resume built with Html & Css ",
  img: "/hackathon_01.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
 },
];

const projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default projects;
