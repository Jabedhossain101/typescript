

// enum UserRoles {
//   Admins = 'Admin',
//   Editors = 'Editor',
//   Viewers = ' Viewer',
// }

const userRoles = {
  Admins :'Admin',
   Editors : 'Editor',
   Viewers : ' Viewer',
} as const;


/**
 {
  readonly Admins :'Admin',
   readonly Editors : 'Editor',
   Viewers : ' Viewer',
}
 */
// userRoles.Admins='mon chaise'

const canEdits = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEdit = canEdit(UserRoles.Admin);

console.log(isEditable);
