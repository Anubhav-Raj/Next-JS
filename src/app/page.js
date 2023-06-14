"use client";
import Link from "next/link";
//  nextJS me do type ki rendring  hoti hai Client and Server
// jab bhi  ham onlick,onchange, useState, useRander, useEffect  jasie functionlty ko use krna chate hai to haime application ko batana  hoata hai 'useClient' rending that's why we have to right at top 'use client' at the top
//  Note: use client always at the top of file

import styles from "./page.module.css";
import { Component, useState } from "react";
import { useRouter } from "next/navigation";

//Toutrial 3
/*export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Home Page</h1>
      <User name="Anubhav" />
      <User name="Puneet" />
      <User name="Robin" />
      <User name="Uttam" />
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2> user name is {props.name}</h2>
    </div>
  );
}; */

//  differance  between TypeScript and javaScript?
//  Ans:  javaScript me typeConversion aapne  aap ho gata hai , typeScript me khud se krna padtha hai
//  broswer directly typeScript ke code ko nahi samjhta  hai phale  TS Js me convert hoga fir vo samjhe ga

//Q  differance b/W ServerSide Scripting and  client side Scripting?

//Toturial 4

/*export default function Home() {
  const [name, setName] = useState("Anubhav"); // it is a sate
  const apple = (item) => {
    // alert(item);
    setName(item); // setName me ham assign kerahe hai jo  item  me valuie hai it'like setName= item
  };

  // use  component under component
  const InnerComp = () => {
    return <h1> Inner Component</h1>;
  };

  return (
    <main className={styles.main}>
      <h1> Event ,Function,and State {name}</h1>
      {pass data as a argument in function }
      <button onClick={() => apple("Puneet")}> Click me</button>

      {InnerComp()}
      { or  both are same 
       <InnerComp /> }
    </main>
  );
} 
 */

// What is State? (ik's like a components Object use  to store data)
// State ek container hoto hai jisko  ham components ke under hi use kr sakte hai  bhar use nahi kr sakte  hai
//  ager ek state ke data ko Component se bhar lekr jana ho to  as a props le ja sake  hai naki as a State
// state like a local variable in funaction only use with in the function
// now question is b/w  variable and  State
//  jab app e4k variable  declare krte ho to vo is Component ko re render nahi krta jab  app  ek state declare kr te ho or usko update krte ho to Component ko re-render krta hai

// Toutrial 5 for folder Structure

//Toutrial 6
// server Component : jis component ki reandring(execution)  server side pe hoti hai use server compoment  khate  hai
//  jitne bhi component  bante hai NextJs me by defult sab  server Side Component  hote hai
//  Jo component  server side me use hoge use   serverside  me rander kare ge or jo  components client side me use  hoge use client side pe render kare ge
//   isse security maintain hoga or speed increase hogi or SEO me bhi help karega

//  Client Component : jo appke client side or broswer pe render hoge use ClientSide Components Bolte hai.
//  ager kisi bhi component ko Client Component banana hoga to  'use client' Command  use kare ge

//Toutrial 7
//  Nextjs me  file SYSTEM base routing use krte hai
// Note : the Folder name  Will Match  With  the Route name
// page.js should be present in every Folder
//  Ex:
//   localhost:3000/login
//   src/login/page.js

//   localhost:3000/about
//   src/about/page.js

// no need  to  install any packages  but in react  use Router Package

// For routing  we make About  and login foldr
// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1> Basic routing | Make New Page </h1>

//     </main>
//   );
// }

// Toutrial 8
//Linking:  jab ham  kisi a teg ki help se ek page se dusre page pe jate hai to use linking bolte hai
// Navigation : jab  ham kisi    button tag ki help se ek page se  dursre page pe jate hai to use Navigation  bolte hai
// Event kr upper  navigation krte hai use Like onclick, onChange, hove  usse navigation

export default function Home() {
  const router = useRouter();

  const navigation = (name) => {
    router.push(name);
  };

  return (
    <main className={styles.main}>
      <h1> Basic routing | Make New Page </h1>
      <h3> Routing By Linking </h3>
      <Link href="login"> Go to Login Page</Link>
      <br></br>
      <br></br>
      <Link href="about"> Go to About Page</Link>
      <br></br>
      <br></br>
      <h3> Routing By Navigation </h3>
      <br></br>
      <br></br>
      <button onClick={() => navigation("login")}> Go to Login Page</button>
      {/* or  both are same*/}
      {/* <button onClick={() => router.push("login")}> Go to Login Page</button> */}

      <br></br>
      <br></br>
      <button onClick={() => navigation("about")}> Go to About Page</button>
    </main>
  );
}

//Toturial 9
/*Nested Routing:  jab ek page ke under  ek ya user jada page hote hia usse nested routing  khate hai

Normal Routing      Nested Routing
1.Home                  1.Home

2. About US             2.About Us
                           1.About Student
                           2. About Collage 

3.Login                  3.Login  
                            1.Student Login
                            2. Teacher Login 

 Nested Routing 
 Ex: 
  localhost:3000/about/aboutteacher
  src/about/aboutteacher/page.js

  localhost:3000/about/aboutstudent
  src/about/aboutstudent/page.js
 
  folder: about ke under  abboutstudent and aboutteacher and login me loginstudent and loginteacher
 
 */

//Toturial 10

/*
Common Layout:    jo maximumn sab page ho like(Header, footer,NavBar, sidebar etc)
 
 ye jo layout.js(root or stating page) hai  isme vo code likhe ge jo hame sab page pe comman chiye
ye aapne  child ko common layout pardan krti hai

  folder: about ke under  aboutstudent and aboutteacher and login me loginstudent and loginteacher layout.js file

 */

/* 
Toturial 11
conditional Layout :  suppose  login or signup  page pe hame  nav bar nahi dikhna hoti hai  to vo kasie hoga.. user ke condition ke hishab se  layout dikhe use conditional layout kahate hai
  
  folder: login ke  under layout js

 */

/*
   Toturial 12
    Dynamic Route: 
   
  */
