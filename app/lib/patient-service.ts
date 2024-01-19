'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';

const FormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  contactNo: z
    .string()
    .length(11, { message: 'Contact Number must be 11 digits' }),
  address: z.string(),
  emailAddress: z.string().email({
    message:
      'Email Address must follow the correct format. Example: johndoe@mail.com',
  }),
  birthdate: z.string(),
  gender: z.enum(['male', 'female', 'prefer not to say'], {
    invalid_type_error: 'Gender is required.',
  }),
});

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    contactNo?: string[];
    address?: string[];
    emailAddress?: string[];
    birthdate?: string[];
    gender?: string[];
  };
  message?: string | null;
};

export async function createPatient(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    contactNo: formData.get('contactNo'),
    address: formData.get('address'),
    emailAddress: formData.get('emailAddress'),
    birthdate: formData.get('birthdate'),
    gender: formData.get('gender'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Patient',
    };
  }

  const {
    firstName,
    lastName,
    contactNo,
    address,
    emailAddress,
    birthdate,
    gender,
  } = validatedFields.data;

  try {
    await sql`
      INSERT INTO patients (first_name, last_name, address, contact_no, email_address, birthdate, gender)
      VALUES (${firstName}, ${lastName}, ${address}, ${contactNo}, ${emailAddress}, ${birthdate}, ${gender})
    `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Create Patient',
    };
  }

  return {
    message: 'Successfully added patient',
  };
}
