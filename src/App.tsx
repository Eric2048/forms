
// import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

// Services
// import { useAppSelector, useAppDispatch }                               from './services/redux/hooks'
// import { VIEW_STATE_SELECTED_PERSON_ID_URL_PARAM, setSelectedPersonId } from './services/redux/viewStateSlice'

// Components
import ControlledFields from './components/ControlledFields'
import ControlledForm   from './components/ControlledForm'

// CSS
import './App.scss'

function App() {
  return (
    <>
      <Container fluid className="vh-100 d-flex flex-column bg-light bg-gradient app-container">
        {/* ^^^ fluid: will fill available width */}
        {/*     vh-100: expand to full height */}
        {/*     d-flex: 'display: flex' to allow 'flex-grow: 1' on 2nd <Row> */}
        {/* See: https://getbootstrap.com/docs/5.0/utilities/flex */}

        <Row
          // className="app-row-top"
        >
          {/* Show today's month/day (in the current time zone) */}
          <Col><h1 className="app-title">Forms</h1></Col>
        </Row>

        {/* flex-grow-1: expand row to remaining vertical height */}
        <Row
          // className="flex-grow-1 app-row-bottom"
        >
          <Col
            // className="app-row-bottom-col"
          >
            <ControlledFields
              singleLineTextInitial='initial text'
            />

            <ControlledForm
              formValuesInitial={
                { 
                  singleLineText: 'initial text',
                  multiLineText:  'Multiple lines of initial text.\nLine 2',
                  animal:         'dog',
                  color:          'blue',
                  pizzaToppings:  { pepperoni: true, mushroom: false }
                }
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
