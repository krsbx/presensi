import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email().required('Email dibutuhkan!'),
  password: Yup.string().required('Password dibutuhkan!'),
});

export const registerSchema = Yup.object({
  email: Yup.string().email().required('Email dibutuhkan!'),
  password: Yup.string().required('Password dibutuhkan!').min(6, 'Password minimal 6 karakter!'),
  confirmPassword: Yup.string()
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().required('Konfirmasi password dibutuhkan'),
    })
    .oneOf([Yup.ref('password'), null], 'Konfirmasi dan Password tidak sama'),
});
