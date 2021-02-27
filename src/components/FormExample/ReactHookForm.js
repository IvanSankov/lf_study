import React from "react";
import {useForm} from "react-hook-form";

export default function ReactHookForm() {
  const {register, handleSubmit, watch, errors, formState} = useForm();

  const { isDirty, isSubmitting, touched, submitCount } = formState;

  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  console.log('isDirty', isDirty);

  console.log('errors', errors);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register}/>

      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({required: true})}/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit"/>
    </form>
  )
    ;
}