
import React from "react"
import ReactDOM from "react-dom"


function Page() {
    return (
  <>
    <header>
            <nav>
               <img src="./react-logo.png" width="40px" />
            </nav>
            </header>
       
        <h1>Why  want to learn React</h1>
        <ol>
            <li>Its a skill</li>
            <li>Further my understanding in programming</li>
            <li>take pride that this skill is "self taught"</li>
            <li>Hopefully lead to a promising career</li>
            <li>Have some use for it in the changing, uncertain future of this world</li>
            
        </ol>
        <footer>
        <small> © 2021 Parenteau development. All rights reserved.</small>
        </footer>
    </>
    
   )
}


ReactDOM.render(<Page />, document.getElementById("root"))
