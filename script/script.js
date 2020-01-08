function getLog() {
  let login = "Alex";
  let password = "123456";
  function getLogin(value) {
    if (login === value) {
      console.log("Login Ok");
    } else {
      console.log("Login not ok");
    }
    return this;
  }
  function getPassword(value2) {
    if (password === value2) {
      console.log(" Pass ok ");
    } else {
      console.log("Pass not ok");
    }
    return this;
  }
  return {
    getLogin,
    getPassword
  };
}

getLog().getPassword('1234fhuehu6').getLogin('dfdsaasd');