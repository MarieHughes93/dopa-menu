// package
import React, { Component } from "react"

class Home extends Component{
  render(){
    return (
      <div className="Home container">
        <h1>Home</h1>
          <h3>Welcome to Dopa-Menu!</h3>
            <p>Sometimes the hardest challenge of having an attention disorder is finding something to stimulate you when you need stimulations. To combat this, we can create a dopamine menu or a Dopa-Menu for things that excite you. I was inspired to make this after seeing a video From youtuber "How To ADHD" titled " How To Stimulate Your Brain." Join and fill out your menu options now to have it ready for the next time you are bored. Add to your menu to expand your options. Check out the video below for a detailed explanation by one of my favorite youtubers!</p>
            <div className='videoComponent'>
              <iframe width="560" title="How To ADHD - How To Stimulate Your Brain" height="315" src="https://www.youtube.com/embed/-6WCkTwW6xg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
      </div>
    )
  }
}
export default Home