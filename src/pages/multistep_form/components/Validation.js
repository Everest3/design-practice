import * as Yup from "yup"

export const personalInfoSchema = Yup.object().shape({personalInfo:Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email().required('Email is Required'),
  phoneNumber: Yup.string().required('Phone is Required'),
})})


export const validateStep = async (schema, data) => {
  let errors = {};
  try {
      await schema.validate(data, { abortEarly: false });
  } catch (validationErrors) {
      validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
      });
  }
  return errors
}

export const validate = async ({currentStep,state}) => {
  if (currentStep === 1) {
      return validateStep(personalInfoSchema,state)
  }
  //  else if (currentStep === 2) {
  //     return validateStep(customerSchema, application)
  // }else if (currentStep === 3) {
  //     return validateStep(applicaitonDataSchema, application)
  // }else if(currentStep===4){
  //     return validateAttachments({ reqDocs, application })
  // }
  return {};
};