import React from "react";
import Events from "./Events";
// import CounterApp from './CounterApp'
// import Form from './FORMS/Form'
// import Ust from './HooksConcepts/Ust'
// import Useff from './HooksConcepts/Useff'
import Main from "./MealProject/Main";
import Useff2 from "./HooksConcepts/Useff2";
import Prop from "./PropDrilling/Prop";
import UseRed from "./HooksConcepts/UseRed";
import Usref from "./HooksConcepts/Usref";
import Counter from "./Projects/Counter";
import Todo from "./Projects/Todo"

const User = ({ Name, age, sex, hobbies, children }) => {
  return (
    <section>
      <h1>Name:{Name}</h1>
      <h2>Age:{age}</h2>
      <h2>Sex:{sex}</h2>
      <h2>hobbies:{hobbies}</h2>
      {children}
    </section>
  );
};
const App = () => {
  return (
    <>
      {/* <Counter/> */}
      {/* <Todo /> */}
   <Main/>
      {/* <Prop/>
    <Usref/>
    <Custom/>
    <Useff2/>
    <UseRed/>
    <Useff/>
    <Form/>
    <Ust/>
    <CounterApp/> */}
      {/* <User 
    Name="Lokesh Vemana"
    age='25'
    sex='Male'
    hobbies={["reading,coading,dancing,singing,chitchat"]}
    >
    <p>Hi Loki will going to marry Mani very soon!</p>
    </User>
   <Events/> */}
    </>
  );
};

export default App;
