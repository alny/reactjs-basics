import React from 'react';
import {render} from 'react-dom';

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    render() {
      var user = {
        name: "Noob",
        hobbies: ["Sports", "Lol", "huse","Okkay", "lord of the rings"]
      };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">

                        <Header name={"Missekat"}/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">

                        <Home name={"Alex"} age="{23}" user={user}>
  <p>Hello WorlD</p>
                        </Home>

                    </div>
                </div>
            </div>
        );
    }
}

render(
    <App/>, window.document.getElementById("app"));
