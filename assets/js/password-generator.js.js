// 随机密码生成器函数
function generateRandomPassword(length, includeUpperCase, includeSpecialChar, includeLastSpecialChar, excludeChars) {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  let availableChars = lowerCaseChars + numberChars;
  
  if (includeUpperCase) {
    availableChars += upperCaseChars;
  }
  
  if (includeSpecialChar) {
    availableChars += specialChars;
  }
  
  if (excludeChars) {
    excludeChars.split('').forEach(char => {
      availableChars = availableChars.replace(char, '');
    });
  }
  
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  
  if (includeLastSpecialChar) {
    const randomIndex = Math.floor(Math.random() * specialChars.length);
    password += specialChars[randomIndex];
  }
  
  if (includeUpperCase) {
    password = password.charAt(0).toUpperCase() + password.slice(1);
  }
  
  return password;
}

// 生成随机密码
function generateRandomPasswords(numPasswords, length, includeUpperCase, includeSpecialChar, includeLastSpecialChar, excludeChars) {
  const passwords = [];
  for (let i = 0; i < numPasswords; i++) {
    const password = generateRandomPassword(length, includeUpperCase, includeSpecialChar, includeLastSpecialChar, excludeChars);
    passwords.push(password);
  }
  return passwords;
}

// 获取HTML元素
const numPasswordsInput = document.getElementById('num-passwords-input');
const passwordLengthInput = document.getElementById('password-length-input');
const includeUpperCaseCheckbox = document.getElementById('include-uppercase-checkbox');
const includeSpecialCharCheckbox = document.getElementById('include-special-char-checkbox');
const includeLastSpecialCharCheckbox = document.getElementById('include-last-special-char-checkbox');
const excludeCharsCheckbox = document.getElementById('exclude-chars-checkbox');
const generatePasswordsButton = document.getElementById('generate-passwords-button');
const passwordsList = document.getElementById('passwords-list');

// 生成密码列表HTML
function generatePasswordsListHTML(passwords) {
  let html = '';
  passwords.forEach(password => {
    html += '<li>' + password + '</li>';
  });
  return html;
}

// 生成随机密码并显示在页面上
function generateRandomPasswordsAndDisplay() {
  const numPasswords = parseInt(numPasswordsInput.value);
  const length = parseInt(passwordLengthInput.value);
  const includeUpperCase = includeUpperCaseCheckbox.checked;
  const includeSpecialChar = includeSpecialCharCheckbox.checked;
  const includeLastSpecialChar = includeLastSpecialCharCheckbox.checked;
  const excludeChars = excludeCharsCheckbox.checked ? 'iIl1o0O' : '';
  
  const passwords = generateRandomPasswords(numPasswords, length, includeUpperCase, includeSpecialChar, includeLastSpecialChar, excludeChars);
  
  const passwordsListHTML = generatePasswordsListHTML(passwords);
  passwordsList.innerHTML = passwordsListHTML;
}

// 添加点击事件监听器
generatePasswordsButton.addEventListener('click', generateRandomPasswordsAndDisplay);