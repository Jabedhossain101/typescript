

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

type UserRole = typeof userRoles[keyof typeof userRoles];

/**
 {
  readonly Admins :'Admin',
   readonly Editors : 'Editor',
   Viewers : ' Viewer',
}
 */
// userRoles.Admins='mon chaise'

const canEdits = (role: UserRole) => {
  if (role === userRoles.Admins || role === userRoles.Editors) {
    return true;
  } else return false;
};

const isEdit = canEdits(userRoles.Admins);

console.log(isEdit);
