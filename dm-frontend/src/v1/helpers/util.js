// export const catgegoryExample=[
//     category: 'Appetizer', explanation: "Quick activities that will give you a quick burst without eating up your time. Satisfation may not fully be felt after but you do not crave more. These activites are preferably under 15 minutes or max 30 minutes long.", example: 'uick set of jumping jacks. 5 minutes social media check. Stretch outside.'},
//     {category: 'Entree', explanation: "Regular 'every-day' activities that make you feel alive/energized. These activaties usually require more than 30 minutes minimum for you to complete. They give you a full feeling whole also being something productive or healthy.", example: 'Walking the dog. Going to the Gym. Reading a book.'},
//     {category: 'Side', explanation: "Activities you can add to task you must complete to enhance your experience of completeing a task. These have no time limit. Think of these as the 'spoon full of sugar' to help get the task you must complete done.", example: 'Listen to music. Change location(Study at starbucks instead of home). Set a personal challenge(Time how quick you can do the task). Ask a friend to join you in the task.'},
//     {category: 'Dessert', explanation: "Activaties you tend to over do it on... maybe even binge? These are activaties that require more time than any regular activity to achieve a feeling of satisfaction. This activaties are also not productive.", example: "Scrolling through meme's. Play video games. Watch TV. Drawing. Recording tiktok video. "},
//     {category: 'Special', explanation: "Things you can do only so often. These have no time frame as they are not always availble to do or if they are they should be sparingly. These should bring the largest amount of satifatction. As well as these are activaties that should leave a lingering effect of feeling satisfied.", example: 'Go ice skating. Go to a concert. Buying something new. Get a hair cut. Go on vacation/or weekend/stay-cation.  Get a new tattoo.'}
// ]
export const catgegoryExample=[{
    category:"Appetizer", explanation: "Quick activities that will give you a quick burst without eating up your time. Satisfation may not fully be felt after but you do not crave more. These activites are preferably under 15 minutes or max 30 minutes long.", example:"Quick set of jumping jacks. 5 minutes social media check. Stretch outside."
    },{
    category:"Entree", explanation:"Regular every-day activities that make you feel alive/energized. These activaties usually require more than 30 minutes minimum for you to complete. They give you a full feeling whole also being something productive or healthy.", example:"Walking the dog. Going to the Gym. Reading a book."
    },{
    "category":"Side", "explanation":"Activities you can add to task you must complete to enhance your experience of completeing a task. These have no time limit. Think of these as the spoon full of sugar to help get the task you must complete done.", "example":"Listen to music. Change location(Study at starbucks instead of home). Set a personal challenge(Time how quick you can do the task). Ask a friend to join you in the task."
    },{
    category:"Dessert", explanation:"Activaties you tend to over do it on... maybe even binge? These are activaties that require more time than any regular activity to achieve a feeling of satisfaction. This activaties are also not productive.", "example":"Scrolling through memes. Play video games. Watch TV. Drawing. Recording tiktok video. "
    },{
    category:"Special", explanation:"Things you can do only so often. These have no time frame as they are not always availble to do or if they are they should be sparingly. These should bring the largest amount of satifatction. As well as these are activaties that should leave a lingering effect of feeling satisfied.", example:"Go ice skating. Go to a concert. Buying something new. Get a hair cut. Go on vacation/or weekend/stay-cation.  Get a new tattoo."}
    ]
export const categories = ['Appetizer', 'Dessert', 'Entree', 'Special', 'Side']
export const categoriesColums = [
    ['Appetizer', 1],
    ['Entree', 2],
    ['Side', 3],
    ['Dessert', 4],
    ['Special', 5]
]

export const util={
    catgegoryExample,
    categories,
    categoriesColums
}

// if the update target name is category and it is ''
// update example state to nothing
// else if 

// handleExample=(e)=>{
//     if(e.target.name === 'category' && e.target.value === ''){
//         this.setState(state=>({
//             ...state,
//             example: null
//           }))
//         }
//     }

// }