export function GameCard({data: {imageUrl, tittle,url}}) {


    return <div style = {{padding:"20px" , display : "grid"}  }>
        <div style={{
            color : "white" ,
            fontSize : "300%" ,
            "font-family": "'Yanone Kaffeesatz', sans-serif",
            padding : "10px",
        }}> {tittle}</div>
        <img src={imageUrl} alt = {" -- "} style={{ transform : "translate(-50%)", position : "relative",maxWidth : "625px", left:"50%" ,maxHeight:"264px", borderRadius : "5px"}}/>
        <button style = {{
            color : "white",
            backgroundColor : "black",
            margin : "solid  white",
            padding : "3px",
            borderRadius : "30px"

        }} onClick={() => {window.open(url, '_blank');}}> Download </button>

    </div>
}