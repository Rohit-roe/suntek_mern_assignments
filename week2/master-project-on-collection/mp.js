// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

// Data setup:
// -----------
// const users = [
//   { id: 1, name: "Ravi", role: "student", active: true },
//   { id: 2, name: "Anil", role: "admin", active: true },
//   { id: 3, name: "Suman", role: "student", active: false }
// ];

// const courses = [
//   { id: 101, title: "JavaScript", price: 999, published: true },
//   { id: 102, title: "React", price: 1499, published: false },
//   { id: 103, title: "Node", price: 1299, published: true }
// ];

// const cart = [
//   { courseId: 101, qty: 1 },
//   { courseId: 103, qty: 2 }
// ];

// const roles = {
//   admin: ["create", "update", "delete", "view"],
//   student: ["view"]
// };


// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably

// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably
//master-project-on-collection/mp.js


// data setup
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// MODULE-1 :USER PROCESSING ENGINE
export const getActiveUsers = () => users.filter(user => user.active);

export const getActiveUserNames = () => getActiveUsers().map(user => user.name);

export const isAdminExists = () => users.some(user => user.role === 'admin');

export const findUserById = (id) => users.find(user => user.id === id) || null;

export const deactivateUser = (id) => users.map(user => 
  user.id === id ? { ...user, active: false } : user
);

// MODULE 2: COURSE CATALOG ENGINE
export const getPublishedCourses = () => courses.filter(course => course.published);

export const getCoursesSortedByPriceDesc = () => 
  [...courses].sort((a, b) => b.price - a.price);

export const getCourseTitlesAndPrices = () => 
  courses.map(({ title, price }) => ({ title, price }));

export const getTotalValueOfPublishedCourses = () => 
  getPublishedCourses().reduce((total, course) => total + course.price, 0);

export const addNewCourse = (newCourse) => [...courses, newCourse];

// MODULE 3: SHOPPING CART ENGINE 
export const getCartWithCourseInfo = () => 
  cart.map(cartItem => {
    const course = courses.find(c => c.id === cartItem.courseId);
    return { ...cartItem, course };
  });

export const getTotalCartAmount = () => 
  getCartWithCourseInfo().reduce((total, item) => 
    total + (item.course ? item.course.price * item.qty : 0), 0);

export const increaseCourseQuantity = (courseId, increment) => 
  cart.map(item => 
    item.courseId === courseId ? { ...item, qty: item.qty + increment } : item
  );

export const removeCourseFromCart = (courseId) => 
  cart.filter(item => item.courseId !== courseId);

export const areAllCartItemsPaidCourses = () => 
  getCartWithCourseInfo().every(item => item.course && item.course.price > 0);

// MODULE 4: ROLE & PERMISSION ENGINE
export const getAllRoleNames = () => Object.keys(roles);

export const canStudentDelete = () => 
  roles.student.includes('delete');

export const getAllUniquePermissions = () => {
  const allPermissions = Object.values(roles).flat();
  return [...new Set(allPermissions)];
};

export const addNewRoleModerator = () => ({
  ...roles,
  moderator: ['update', 'view']
});