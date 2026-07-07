//enum

//set of fixed string leteral ek jaigay rakhe

enum UserRoles{
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer=' Viewer'
}


const canEdit = (role: UserRoles)=>{
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true
  }else return false
}

const isEditable = canEdit(UserRoles.Admin);

console.log(isEditable);