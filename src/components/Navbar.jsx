import React, {useContext} from 'react'
import {Tab, Row, Col, ListGroup} from 'react-bootstrap'
import {SurahsContext} from './SurahsContext'


function Navbar() {
  const {surahs, setCurrentSurah, setCurrentAyahAudio} = useContext(SurahsContext)
  return (
      <nav style={{minWidth: '150px',height: '100vh', textAlign: 'end' ,overflowY: 'scroll'}}>
    <Tab.Container id="list-group-tabs-example" >
  <Row className= 'w-100 p-0 m-0' >
    <Col className= 'w-100 p-0' >
      <ListGroup className= 'w-100 p-0' >
       { surahs.map(surah => <ListGroup.Item 
        className= 'w-100' style={{}}
       action 
       onClick={() => {
         setCurrentAyahAudio(0)
         setCurrentSurah(surah)
      }}>
          {surah.name}
        </ListGroup.Item>)
       }
        
      </ListGroup>
    </Col>
  </Row>
</Tab.Container>
</nav>

  )
}

export default Navbar