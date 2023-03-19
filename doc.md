setup : 
    + scss
    + font Roboto
    

+ App.tsx
    + useState : currentPlayer < string "x" >
    + const switchPlayer = ( ) => {...}
        + if ( currentPlayer === "x" ) {
            setCurrentPlayer("o")
        } else { 
            setCurrentPlayer("x")
        }
    + .app-container
        + scss : 
            + html , body 
            + .app-container {...}
    + <Header currentPlayer = {...}>
    + <Board currentPlayer = {...} switchPlayer = {swichPlayer}>
    
+ Header.tsx 
    + interface : currentPlayer : string
    + const {currentPlayer } = props
    + .score-container 
        + .score 
            +  span : Next Player : {currentPlayer}
        + button 
            + onClick = {() => { window.location.reload() }} 
            + RESTART   
    + scss :
        + .score-container { ... }

+ Square.tsx
    + const imageSrc = ` ... `
    + interface 
        + handleOnClick : React.MouseEventHandler
        + selected :string
    + .square
        + button 
            + onClick = {props.handleOnClick}
            + img src= { imageSrc }
    + scss
        + button 
        + img 

+ Board.tsx
    + interface 
        + currentPlayer : string
        + switchPlayer : () => void
    + const squareIds = [0,1,2,3,4,5,6,7,8]
    + useState squares <Array<string>>(squareIds.map((i) => ") )
    + useState winner <string>("")

    + const checkForWinner = (squares : Array<string> ) => {
        const line = [
            [0 , 1 , 2],
            [3 , 4 , 5],
            [6 , 7 , 8],
            [0 , 3 , 6],
            [1 , 4 , 7],
            [2 , 5 , 8],
            [0 , 4 , 8],
            [2 , 4 , 6],
        ]

        for( let i = 0 ; i < lines.length ; i++ ){
            const [a , b , c] = array[i] ; 
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
                return true;
            }
            return false 
        }
    }

    + const checkForTie = ( squares : Array<string>) => {
        for (let i = 0 ; i < squares.length ; i++) {
            const element = squares[i];
            if (element === ""){
                return false
            } 
            return true
        }
    }

    +  const handleOnClick = (i : number ) => {
        return ( ) => {
            if(squares[i] === "" && !winner){
                const squaresCopy = [...squares]
                squaresCopy[i] = props.currentPlayer
                setSquares(squaresCopy)
                if(checkForWinner(squareCopy) ){
                    setWinner(props.currentPlayer)
                }else if (checkForTie)

            } 
        }
    }

    + .board {...}
        + squareIds.map ((i) => {... })
            + <Square key= {i} handleOnClick={() => {}} selected={""} >
    
    

    + scss :
        + 