import React , {useEffect} from "react";
import { Card } from "react-bootstrap";
import * as actions from '../action/actions'
import { connect } from "react-redux";

function ShowDataCard( { categoryList, callApiForCategory } ) {

    useEffect( ()=>{
        console.log("WTFFFFFFFFFFFF")
        callApiForCategory();
    })
    console.log("又係checkcheck佢既時候啦"+categoryList.Category)
  return (
    <div>
      <Card border="danger" style={{ width: "18rem" }}>
        <Card.Header>{categoryList.Category}</Card.Header>
        <Card.Body>
          <Card.Title>Danger Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}


const mapStateToProps = state =>({
    categoryList : state.reducer.categoryList
})

const mapsStateToAction = dispatch=>({
    callApiForCategory: ()=> dispatch(actions.getCategory())
})

export default connect(mapStateToProps,mapsStateToAction)(ShowDataCard);
