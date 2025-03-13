const createAccountForm = document.querySelector("#create-account-form");

function handleFormSubmit(event) {
  event.preventDefault();

  if (createAccountForm.checkValidity()) {
    const account = {
      name: createAccountForm.elements.name.value.trim(),
      email: createAccountForm.elements.email.value.trim(),
      phone: createAccountForm.elements.phone.value.trim(),
      nif: createAccountForm.elements.nif.value.trim(),
      obs: createAccountForm.elements.obs.value.trim(),
    };

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log(account);
    createAccountForm.reset();
  } else {
    alert("Please fill in all the fields accordingly");
  }
}

createAccountForm.addEventListener("submit", handleFormSubmit);
