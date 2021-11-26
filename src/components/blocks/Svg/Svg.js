let path = "";

const Svg = (props) => {
    switch (props.shape){
        case "square":
            path = <rect x={"0"} y={"0"} width={"2000"} height={"200"} style={{fill: props.fillColor}} />;
            break;
        case "triangle":
            path = <polygon points="100,0 200,150 25,200" style={{fill: props.fillColor}} />;
            break;
        case "circle":
            path = <circle cx="100" cy="100" r="100" style={{fill: props.fillColor}}/>;
            break;
        case "parallelogram":
            path = <polygon points="75,0 200,0 125,200 0,200" style={{fill: props.fillColor}}/>;
            break;
    }
    return (
        <svg className={props.className} id={props.id} width={"200"} height={"200"} viewBox={"0 0 200 200"}>
            {path}
        </svg>
    )
}

export default Svg;


/*

<!--
            component svg props.className => class="" props.fill => fill = "" props.shape => d=""
            fill = props
            dimensions = ['triangle' => "Mx,y,x,y,x,yZ", 'square' => "Mx,y,x,y,x,y,x,yZ", 'paralellogram' => "Mx,y,x,y,x,y,x,yZ", 'circle' =>]
            -->

 */

