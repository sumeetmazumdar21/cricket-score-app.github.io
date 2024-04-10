
    let wicket = 0;
    let score = 0;
    let scoreTimeline = [];
    let hit = 0;
    let commentRef = React.createRef();

    // function addOne(){
    //     score += 1;

    //     // Re-render the app after incrementing the score
    //     rootElement.render(<App />);

    //     // console.log(score);  --> Checking the console if score is getting incremented
    // }

    function addScore(num){
        // if(wicket < 10) {
        //     scoreTimeline.push(num);
        //     score += num;

        hit = num;

            // Re-render the app after incrementing the score
            rootElement.render(<App />);
            console.log(scoreTimeline);
        // }
    }


    function addWicket(){
            
            // if(wicket < 10){
            //     scoreTimeline.push("W");
            //     wicket += 1;

            hit = "W";

            // Re-render the app after incrementing wicket
            rootElement.render(<App />);
            console.log(scoreTimeline);
        // }

        // console.log(score);  --> Checking the console if score is getting incremented
    }


    const ScoreButtons = () => (
        <div>
            <button onClick = {() => addScore(0)}>0</button>
            <button onClick = {() => addScore(1)}>1</button>
            <button onClick = {() => addScore(2)}>2</button>
            <button onClick = {() => addScore(3)}>3</button>
            <button onClick = {() => addScore(4)}>4</button>
            <button onClick = {() => addScore(5)}>5</button>
            <button onClick = {() => addScore(6)}>6</button>
            <button onClick = {addWicket}>Wicket</button>
        </div>
    )

    const Timeline = () => (
        <div style={{marginTop: 20 + 'px'}}>
            {scoreTimeline.map((res, index) => (
                <>
                    {index % 6 === 0 ? <>|</> : null}&nbsp;&nbsp;&nbsp;
                    <button key = {index} style={{marginTop: 20 + 'px'}}>{res === 0  ? <strong>.</strong> : res}</button>
                    &nbsp;&nbsp;
                </>
            ))}
        </div>
    )


    function handleSubmit(event){
        event.preventDefault();

        // Manipulating the score card
        if(hit == "W"){
            wicket += 1;
        }
        else{
            score += hit;
        }

        // console.log(commentRef.current.value);
        // scoreTimeline.unshift(hit);

        scoreTimeline.unshift(
            // <span>{hit}{","}{commentRef.current.value}</span>
            <span>{`${hit}, ${commentRef.current.value}`}</span>
        );

        hit = "";
        commentRef.current.value = "";

        rootElement.render(<App />);
    }

    const Form = () => (
        <>
            <form style={{marginTop: 20 + 'px'}} onSubmit= {handleSubmit} > 
                <input style={{marginRight: 20 + 'px'}} placeholder="runs/wicket" value= {hit}/>
                <textarea ref= {commentRef} placeholder="Commentary"></textarea>
                <button style={{marginLeft: 20 + 'px'}}>Submit</button>
            </form>
        </>
    )

    const App = () => (

        
        <>
            <h1>Score-Keeper App</h1>
            <h2>Score: {score}/{wicket} </h2>
            <ScoreButtons />
            {/* <Timeline /> */}
            <br/>
            <br/>
            <hr/>
            <Form />

            <br/>
            <br/>
            <hr/>

            {scoreTimeline.map((res, index) => (
                <p key={index}>{res}</p>
            ))}
        </>
        
    )

    const rootElement = ReactDOM.createRoot(document.getElementById("root"));
    rootElement.render(<App />);