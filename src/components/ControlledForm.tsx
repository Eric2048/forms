
/*
  Controlled Form

    - An HTML <form> with a series of independent entry fields
    - Parent component passes in initial form values
    - Controlled: form state is maintained by React (see useState() below)
    - Delayed action (with Submit)
*/

import { useState } from 'react'

type FormValues = {
  singleLineText: string,
  multiLineText:  string,
  animal:         string,
  color:          string, // TODO 'blue' | 'red'
  pizzaToppings:  { pepperoni: boolean, mushroom: boolean }
};

type ControlledFormProps = {
  formValuesInitial: FormValues
};

const ControlledForm = (props: ControlledFormProps) => {
  const { formValuesInitial } = props;

  const [ formValues, setFormValues ] = useState<FormValues>(formValuesInitial);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`ControlledForm.onSubmit(): formValues:`, formValues);
  };

  const onCancel = () => {
    console.log(`ControlledForm.onSubmit(): cancel: resetting to initial values:`, formValuesInitial);
    setFormValues(formValuesInitial);
  }

  return (
    <div style={{ marginTop: '1em', border: '4px solid blue', borderRadius: '8px', padding: '0px 8px 8px 8px' }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>ControlledForm</div>
      <form
        // This is called when press Enter (CR) in an <input> field or click the "Save" button
        onSubmit={ onSubmit }
      >

      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor='idSingleLineText'>Single-line Text:</label>
            </td>
            <td>
              <input
                // Element id, so can be referenced from the above <label>
                id='idSingleLineText'
                // Optional type, e.g. 'text', 'number
                type='text'
                // Optional name, will be passed as event.target.name to the onChange() handler.
                // name='singleLineText'
                // Current value
                value={ formValues.singleLineText }
                onChange={ (e) => setFormValues((formValues) => ({ ...formValues, singleLineText: e.target.value })) }
              />
            </td>
          </tr>

          <tr>
            <td style={{ verticalAlign: 'baseline' }}>
              <label htmlFor='idMultiLineText'>Multi-line Text:</label>
            </td>
            <td>
              <textarea
                id='idMultiLineText'
                // name='multiLineText'
                value={ formValues.multiLineText }
                onChange={ (e) => setFormValues((formValues) => ({ ...formValues, multiLineText: e.target.value })) }
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor='idAnimal'>Animal:</label>
            </td>
            <td>
              <span id='idAnimal'>
                <input
                  id='idAnimalDog'
                  type='radio'
                  name='animal'
                  value='dog'
                  checked={ formValues.animal === 'dog' }
                  // NO!  // Note: currentTarget, not target
                  onChange={ (e) => setFormValues((formValues) => ({ ...formValues, animal: e.target.value })) }
                />
                <label style={{ marginLeft: '4px' }} htmlFor='idAnimalDog'>Dog</label>

                <input
                  id='idAnimalCat'
                  style={{ marginLeft: '16px' }}
                  type='radio'
                  name='animal'
                  value='cat'
                  checked={ formValues.animal === 'cat' }
                  onChange={ (e) => setFormValues((formValues) => ({ ...formValues, animal: e.target.value })) }
                />
                <label style={{ marginLeft: '4px' }} htmlFor='idAnimalCat'>Cat</label>
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor='idPizzaToppings'>Pizza Toppings:</label>
            </td>
            <td>
              <span id='idPizzaToppings'>
                <input
                  id='idPizzaToppingsPepperoni'
                  type='checkbox'
                  // name='pizzaToppings'
                  value='pepperoni'
                  checked={ formValues.pizzaToppings.pepperoni }
                  onChange={ () => setFormValues((formValues) => ({ ...formValues, pizzaToppings: { ...formValues.pizzaToppings, pepperoni: !formValues.pizzaToppings.pepperoni }})) }
                />
                <label style={{ marginLeft: '4px' }} htmlFor='idPizzaToppingsPepperoni'>Pepperoni</label>

                <input
                  id='idPizzaToppingsMushroom'
                  style={{ marginLeft: '16px' }}
                  type='checkbox'
                  // name='pizzaToppings'
                  value='Mushroom'
                  checked={ formValues.pizzaToppings.mushroom }
                  onChange={ () => setFormValues((formValues) => ({ ...formValues, pizzaToppings: { ...formValues.pizzaToppings, mushroom: !formValues.pizzaToppings.mushroom }})) }
                />
                <label style={{ marginLeft: '4px' }} htmlFor='idPizzaToppingsMushroom'>Mushroom</label>
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor='idColor'>Color:</label>
            </td>
            <td>
              <select
                id='idColor'
                value={ formValues.color }
                onChange={ (e) => setFormValues((formValues) => ({ ...formValues, color: e.target.value })) }
              >
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="red">red</option>
              </select>
            </td>
          </tr>
          </tbody>
        </table>

        <div>
          <button type="button" onClick={ () => onCancel() }>Cancel</button>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default ControlledForm;

/* TODO show a ControlledFormReactBootstrap component
<div className='form-field-radio'>
  {/* Normally mouseclick events are only detected on the <Form.Check>'s
      <input> (the radio button). Must wrap it with this <div> to catch
      mouseclick events on the <input>, the <label>, AND in the space inbetween them.
      Even if expanded this to "custom rendering" with a nested <Form.Check.Input>
      and <Form.Check.Label>, with the label's htmlFor property pointing to the
      input's id, mouseclicks inbetween the <input> and the <label> would be missed.
  * /}                        
  <div onClick={ () => setValue(question.id, FieldValues.Yes) }>
    {/* react-bootstrap radio buttons: https://react-bootstrap.github.io/forms/checks-radios * /}
    <Form.Check
      // Normally this places the radio buttons in a row, but our wrapper <div> break that.
      // But this still provides margin-right: 1rem to separate them.
      inline
      // FOR react-hook-form
      // // { ...props } provides: { "name": "notesType", "value":"..." }
      // { ...props }
      type='radio'
      value={ FieldValues.Yes }
      label="Yes"
      // Must directly set this based on form state, for our setValue() to work.
      checked={ value === FieldValues.Yes }
      // And when specifying the 'checked' property, must also provide onChange().
      onChange={ onChange }
      disabled= { !!getValues()[`${ question.id }-declined`] }
    />
  </div>

  <div onClick={ () => setValue(question.id, FieldValues.No) }>
    <Form.Check
      inline
      // FOR react-hook-form
      // { ...props }
      type='radio'
      value={ FieldValues.No }
      label="No"
      checked={ value === FieldValues.No }
      onChange={ onChange }
      // disabled={ questionDeclinedById[question.id] }
      disabled= { !!getValues()[`${ question.id }-declined`] }
    />
  </div>
</div>
*/
