const nationalPhonePattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

document.querySelectorAll('input[type="tel"]').forEach((input) => {
  const validate = () => {
    input.setCustomValidity(
      input.value && !nationalPhonePattern.test(input.value)
        ? 'Enter a 10-digit U.S. phone number without +1.'
        : '',
    );
  };

  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
    validate();
  });
  input.addEventListener('blur', validate);
});
