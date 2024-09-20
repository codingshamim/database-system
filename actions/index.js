"use server";

export async function registerAction(state) {
  try {
    const trimmedName = state?.name.trim();
    const trimmedEmail = state?.email.trim();
    const password = state?.password.trim();
    const cPassword = state?.cPassword.trim();
    if (
      trimmedName.length === 0 ||
      trimmedEmail.length === 0 ||
      password.length == 0 ||
      cPassword.length === 0
    ) {
      return {
        ok: false,
        message: "All Field required!",
      };
    } else if (password !== cPassword) {
      return {
        ok: false,
        message: "Password and confirm password is not matched !",
      };
    } else {
      const userObject = {
        name: trimmedName,
        email: trimmedEmail,
        password,
      };
      const fetchResult = await fetch(`${process.env.API_KEY}/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userObject),
      });
      const json = await fetchResult.json();

      return json;
    }
  } catch (err) {
    throw err;
  }
}
