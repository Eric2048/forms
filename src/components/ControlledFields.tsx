
/*
  Controlled Fields

    - A series of independent entry fields
    - Parent component passes in initial field values
    - Controlled: state of each field is maintained by React (see useState() below)
    - Immediate action (without Submit)

  Note: only showing a simple <input> example here. See ControlledForm for the
  other fields types -- the useState() and rendering for each field is basically
  the same.
*/

import { useState } from 'react'

type ControlledFieldsProps = {
  singleLineTextInitial: string
};

const ControlledFields = (props: ControlledFieldsProps) => {
  const { singleLineTextInitial } = props;

  const [ singleLineText, setSingleLineText ] = useState<string>(singleLineTextInitial);

  return (
    <div style={{ marginTop: '1em', border: '4px solid blue', borderRadius: '8px', padding: '0px 8px 8px 8px' }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>ControlledFields</div>
      <table>
        <tbody>
          <tr>
            <td>
              <span>singleLineText:</span>
            </td>
            <td>
              <input
                value={ singleLineText }
                onChange={
                  (e) => setSingleLineText(e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td>value:</td>
            <td>
              <span>{ singleLineText }</span>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default ControlledFields;
