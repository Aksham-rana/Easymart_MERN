
export const setUser =(data)=>{
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  existingUsers.push(data);
  localStorage.setItem('users', JSON.stringify(existingUsers));
}

export const getUser = ()=>{
  return JSON.parse(localStorage.getItem('users')) || []
}

export const currentSession =(data)=>{
  localStorage.setItem('CurrentUser',JSON.stringify(data))
}

export const getCurrentSession =()=>{
  return JSON.parse(localStorage.getItem('CurrentUser'))
}

export const removeCurrentSession =()=>{
  return localStorage.removeItem('CurrentUser')
}

