// package
import React, { Component } from "react"

class Home extends Component{
  render(){
    return (
      <div className="home">
        <h1>Home</h1>
          <h3>Welcome to Dopa-Menu!</h3>
            <p>Sometimes the hardest challenge of having an attention disorder is finding something to stimulate you when you need stimulations.</p>
            <p>To combat this, we can create a dopamine menu or a Dopa-Menu for things that excite you.</p>
            <p> I was inspirce to make this after seeing a video From youtuber "How To ADHD" titled " How To Stimulate Your Brain."</p>
            <p> Join and fill it out menu options now to have ready for the next time you are bored.</p>
            <p> Add to your menu to expand your options.</p> <p>Check out the video bellow for a detailed explination by one of my favorite youtuber!</p>
            <div className='video'>
              <iframe width="560" title="How To ADHD - How To Stimulate Your Brain"height="315" src="https://www.youtube.com/embed/-6WCkTwW6xg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </div>
    )
  }
}
export default Home