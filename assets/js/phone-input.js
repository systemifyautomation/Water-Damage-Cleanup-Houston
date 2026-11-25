const nationalPhonePattern = /^\d{10}$/;

const formatPhone = (digits) => {
  if (digits.length <= 3) return digits ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

document.querySelectorAll('input[data-us-phone]').forEach((input) => {
  const validate = () => {
    const digits = input.value.replace(/\D/g, '');
    input.setCustomValidity(
      digits && !nationalPhonePattern.test(digits)
        ? 'Enter a 10-digit U.S. phone number without +1.'
        : '',
    );
  };

  input.addEventListener('input', () => {
    input.value = formatPhone(input.value.replace(/\D/g, '').slice(0, 10));
    validate();
  });
  input.addEventListener('blur', validate);
});
